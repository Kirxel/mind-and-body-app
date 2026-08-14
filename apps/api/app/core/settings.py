from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "Mind and Body API"
    app_env: str = "development"
    cors_allowed_origins: list[str] = ["http://localhost:3000"]
    inquiry_cooldown_seconds: int = 60

    model_config = SettingsConfigDict(
        env_file=".env",
        env_prefix="API_",
        extra="ignore",
    )


settings = Settings()

