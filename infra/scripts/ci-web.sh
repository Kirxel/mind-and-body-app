#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${1:-apps/web}"

if [[ ! -f "${APP_DIR}/package.json" ]]; then
  echo "::notice::Skipping web CI because ${APP_DIR}/package.json is not present yet."
  exit 0
fi

cd "${APP_DIR}"

if [[ -f package-lock.json ]]; then
  PM="npm"
  INSTALL=(npm ci)
  RUN=(npm run)
elif [[ -f pnpm-lock.yaml ]]; then
  corepack enable
  PM="pnpm"
  INSTALL=(pnpm install --frozen-lockfile)
  RUN=(pnpm)
elif [[ -f yarn.lock ]]; then
  corepack enable
  PM="yarn"
  INSTALL=(yarn install --frozen-lockfile)
  RUN=(yarn)
else
  echo "A supported lockfile is required in ${APP_DIR}."
  exit 1
fi

"${INSTALL[@]}"

node -e "const pkg=require('./package.json'); const required=['lint','typecheck','test','build']; const missing=required.filter((name)=>!(pkg.scripts&&pkg.scripts[name])); if(missing.length){console.error('Missing required web scripts:', missing.join(', ')); process.exit(1);}"

case "${PM}" in
  npm)
    npm run lint
    npm run typecheck
    npm run test -- --runInBand
    npm run build
    ;;
  pnpm)
    pnpm lint
    pnpm typecheck
    pnpm test -- --runInBand
    pnpm build
    ;;
  yarn)
    yarn lint
    yarn typecheck
    yarn test --runInBand
    yarn build
    ;;
esac
