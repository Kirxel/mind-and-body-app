#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${1:-apps/api}"

if [[ ! -f "${APP_DIR}/pyproject.toml" && ! -f "${APP_DIR}/requirements.txt" ]]; then
  echo "::notice::Skipping api CI because ${APP_DIR}/pyproject.toml or ${APP_DIR}/requirements.txt is not present yet."
  exit 0
fi

cd "${APP_DIR}"

has_tool() {
  local module="$1"
  python - <<PY >/dev/null 2>&1
import importlib.util
import sys
sys.exit(0 if importlib.util.find_spec("${module}") else 1)
PY
}

run_required_tool() {
  local label="$1"
  local module="$2"
  shift 2
  if ! has_tool "${module}"; then
    echo "${label} is configured but not installed in ${APP_DIR}. Add it to the project dependencies."
    exit 1
  fi
  python -m "${module}" "$@"
}

if [[ -f pyproject.toml ]] && grep -q "^\\[tool\\.poetry\\]" pyproject.toml; then
  python -m pip install --upgrade pip
  python -m pip install poetry
  poetry install --no-interaction --no-root
  RUN=(poetry run)
elif [[ -f pyproject.toml ]]; then
  python -m pip install --upgrade pip
  python -m pip install ".[dev]"
  RUN=()
elif [[ -f requirements.txt ]]; then
  python -m pip install --upgrade pip
  python -m pip install -r requirements.txt
  if [[ -f requirements-dev.txt ]]; then
    python -m pip install -r requirements-dev.txt
  fi
  RUN=()
else
  echo "Unsupported api dependency layout in ${APP_DIR}."
  exit 1
fi

if [[ -f pyproject.toml ]] && grep -q "\\[tool\\.ruff" pyproject.toml; then
  if (( ${#RUN[@]} > 0 )); then
    "${RUN[@]}" ruff check .
  else
    run_required_tool "ruff" "ruff" check .
  fi
fi

if [[ -f pyproject.toml ]] && grep -q "\\[tool\\.black" pyproject.toml; then
  if (( ${#RUN[@]} > 0 )); then
    "${RUN[@]}" black --check .
  else
    run_required_tool "black" "black" --check .
  fi
fi

if [[ -f pyproject.toml ]] && grep -q "\\[tool\\.mypy" pyproject.toml; then
  if (( ${#RUN[@]} > 0 )); then
    "${RUN[@]}" mypy .
  else
    run_required_tool "mypy" "mypy" .
  fi
fi

if [[ -f alembic.ini || -d alembic ]]; then
  echo "Migration config detected."
fi

if (( ${#RUN[@]} > 0 )); then
  "${RUN[@]}" pytest -q
else
  run_required_tool "pytest" "pytest" -q
fi
