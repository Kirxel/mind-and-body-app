#!/usr/bin/env bash
set -euo pipefail

ENVIRONMENT="${1:-production}"

required_vars=(
  DEPLOY_HOST
  DEPLOY_USER
  DEPLOY_PATH
  DEPLOY_SSH_KEY
  APP_ENV_FILE
)

missing=()
for name in "${required_vars[@]}"; do
  if [[ -z "${!name:-}" ]]; then
    missing+=("${name}")
  fi
done

if (( ${#missing[@]} > 0 )); then
  echo "Missing required deployment variables: ${missing[*]}"
  exit 1
fi

cat <<EOF
Deployment skeleton for ${ENVIRONMENT} is intentionally provider-agnostic.

Expected rollout sequence:
1. Build and push immutable web/api images.
2. Run database migrations against the target environment.
3. Update the remote compose stack with the new image tags.
4. Wait for api and web health checks to become healthy before considering rollout complete.
5. Roll back image tags if the new containers do not pass health checks.

Provider-specific remote execution is not implemented in this repository yet.
Fill in the SSH/hosting commands in infra/scripts/deploy.sh once the target platform is chosen.
EOF
