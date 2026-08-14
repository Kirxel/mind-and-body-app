# MVP API Contract

## Versioning

All public endpoints are exposed under `/api/v1`.

## Endpoints

### `GET /api/v1/health/live`

Liveness probe for container/runtime health.

Response:

```json
{
  "status": "ok"
}
```

### `GET /api/v1/health/ready`

Readiness probe for service availability.

Response:

```json
{
  "status": "ready"
}
```

## Current Scope

The website does not currently accept online booking or inquiry submissions.

The public role of the site in the current MVP is:

- present the organization and its atmosphere;
- explain services and specialists;
- show how contact and booking currently work outside the website.

## Future Integration Note

A future iteration may integrate booking through Yclients instead of a custom site form.

## Frontend Integration Notes

- Frontend currently uses only public content pages and health-safe infrastructure assumptions.
- Any future booking integration should be introduced as an explicit external-service contract, not by silently restoring a custom in-memory form backend.
