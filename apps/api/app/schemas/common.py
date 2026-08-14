from pydantic import BaseModel


class ErrorDetails(BaseModel):
    code: str
    message: str
    fields: dict[str, list[str]] | None = None


class ErrorResponse(BaseModel):
    error: ErrorDetails


class HealthResponse(BaseModel):
    status: str

