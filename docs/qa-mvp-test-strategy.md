# QA MVP Test Strategy

## Goals

- Prove that the public site works end to end as an informational experience.
- Catch forbidden medical claims in user-facing copy.
- Verify that the MVP remains accessible, responsive, and safe enough for launch.

## P0

- Frontend homepage, services, specialists, contacts, booking, privacy, and 404 routes render successfully.
- Backend health endpoints respond successfully.
- The `Как записаться` route clearly explains that booking is currently handled outside the site.
- Error responses do not expose stack traces or sensitive data.

## P1

- Mobile and tablet layouts remain usable.
- Basic keyboard navigation and visible focus states work on primary flows.
- User-facing copy does not contain forbidden medical promises.
- Sitemap and robots routes are present.

## Automation

- `apps/web`: component smoke tests and build verification.
- `apps/api/tests/test_app.py`: health endpoint coverage.
- `apps/api/tests/test_web_content_medical_claims.py`: regression guard for forbidden claims in web content.

## Remaining Manual Checks

- Replace placeholders with approved brand assets and re-run visual QA.
- Verify final contact details, privacy copy, and consent wording.
- Perform responsive review with real content and production imagery.
- When Yclients is added later, introduce a dedicated QA layer for that external booking flow.
