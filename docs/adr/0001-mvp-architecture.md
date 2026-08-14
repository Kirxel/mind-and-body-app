# ADR 0001: MVP Architecture

## Status

Accepted

## Date

2026-08-14

## Context

The repository is being initialized for the first production MVP of the "Razum i Telo" public website.

Key constraints:

- The product is a public-facing site for massage, musculoskeletal support, physiotherapy, and psychotherapy services.
- User-facing content must avoid promises of treatment or guaranteed medical outcomes.
- The repository did not contain an existing application scaffold at project start.
- The full brandbook PDF and original vector brand assets are not yet available in the working environment.
- We still need a production-ready architecture that supports future growth without overbuilding.

## Decision

We will build a monorepo with:

- `apps/web`: Next.js App Router frontend with TypeScript strict mode.
- `apps/api`: FastAPI backend with async-first request handling.
- `infra`: local container and deployment-related artifacts.
- `docs`: architecture, API, and content/asset requirements.

For the MVP:

- Public site content is rendered from typed seed data and placeholders.
- The site is primarily an interface for calm, convenient introduction to the organization.
- Online booking is intentionally not handled by the website at this stage.
- The backend currently exposes only the endpoints needed by the app lifecycle and operations:
  - `GET /api/v1/health/live`
  - `GET /api/v1/health/ready`
- A future booking phase may integrate Yclients instead of a custom form flow.
- The UI uses design tokens derived from the provided palette description instead of ad-hoc hex values.
- Brand logos and symbol graphics are represented as explicit placeholders until source assets are provided.

## Rationale

- This keeps the initial release focused on launch-critical user flows.
- It preserves a clean separation between presentation, API, and operations concerns.
- It allows frontend and backend teams to work in parallel against a small, explicit contract.
- It avoids inventing inaccurate brand assets or factual content that has not been provided.

## Consequences

Positive:

- Fastest path to a realistic production MVP.
- Clear room to replace placeholder content with CMS or database-backed content later.
- Easier QA because the scope is narrow and explicit.

Trade-offs:

- Some UI and content decisions will likely be revised after the actual brandbook and brand assets arrive.
- Seed data must later be migrated to a proper content source if dynamic editing becomes necessary.
- A future PostgreSQL-backed repository may replace the initial repository implementation behind the same service contract.
