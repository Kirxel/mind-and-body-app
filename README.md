# Mind and Body App

Monorepo for the public website of "Разум и Тело".

The current MVP is an informational site. It does not accept online booking through the website.
Future booking is expected to be integrated via Yclients.

## Structure

- `apps/web` - Next.js frontend.
- `apps/api` - FastAPI backend for health endpoints and future integrations.
- `infra` - Docker and workflow support.
- `docs` - architecture, API, QA, and content requirements.

## Local setup

1. Create `.env` from `.env.example`.
2. Install web dependencies:

```bash
npm install
```

3. Install API dependencies:

```bash
cd apps/api
python3 -m venv .venv
. .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install -e ".[dev]"
```

4. Run backend:

```bash
uvicorn app.main:app --reload
```

5. In another shell run frontend from repository root:

```bash
npm run dev:web
```

## Tests

Frontend:

```bash
npm run lint:web
npm run typecheck:web
npm run test:web
```

Backend:

```bash
cd apps/api
. .venv/bin/activate
python -m ruff check app tests
python -m pytest
```

## Docker

```bash
docker compose --env-file .env -f infra/compose/docker-compose.local.yml up --build
```
