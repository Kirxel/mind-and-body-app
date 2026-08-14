function BodyMark() {
  return (
    <svg viewBox="0 0 35.45 35.46" aria-hidden="true">
      <path d="M0 17.73C6.28 25.65 9.84 29.15 17.73 35.46C25.79 29.25 29.14 25.58 35.46 17.73C29.14 9.88 25.79 6.21 17.73 0C9.85 6.3 6.29 9.8 0 17.73Z" />
    </svg>
  );
}

function MindMark() {
  return (
    <svg viewBox="0 0 27.08 26.52" aria-hidden="true">
      <path d="M13.73 26.52C15.83 20.08 16.96 15.57 27.08 12.65C23.54 11.52 15.75 10.39 13.74 0C10.81 8.38 9.1 10.01 0 12.68C7.16 14.24 11.89 19.65 13.73 26.52Z" />
    </svg>
  );
}

function HealthMark() {
  return (
    <svg viewBox="0 0 35.45 35.46" aria-hidden="true">
      <path d="M28.81 17.23C20.53 19.62 19.6 23.31 17.89 28.58C16.39 22.95 12.51 18.53 6.65 17.25C14.1 15.06 15.49 13.73 17.89 6.87C19.54 15.38 25.91 16.3 28.81 17.23ZM0 17.73C6.28 25.65 9.84 29.15 17.73 35.45C25.79 29.25 29.14 25.57 35.46 17.72C29.14 9.87 25.79 6.2 17.73 0C9.85 6.3 6.29 9.81 0 17.73Z" />
    </svg>
  );
}

export function SiteLoaderVisual() {
  return (
    <div className="site-loader" role="status" aria-live="polite" aria-label="Загрузка сайта">
      <div className="site-loader__grain" aria-hidden="true" />
      <div className="site-loader__layout">
        <div className="site-loader__composition" aria-hidden="true">
          <div className="site-loader__orbit" />
          <div className="site-loader__halo site-loader__halo--one" />
          <div className="site-loader__halo site-loader__halo--two" />
          <div className="site-loader__halo site-loader__halo--three" />

          <div className="site-loader__logo-frame site-loader__logo-frame--body">
            <div className="site-loader__logo site-loader__logo--body">
              <BodyMark />
            </div>
          </div>

          <div className="site-loader__logo-frame site-loader__logo-frame--health">
            <div className="site-loader__logo site-loader__logo--health">
              <HealthMark />
            </div>
          </div>

          <div className="site-loader__logo-frame site-loader__logo-frame--mind">
            <div className="site-loader__logo site-loader__logo--mind">
              <MindMark />
            </div>
          </div>
        </div>

        <div className="site-loader__content">
          <p className="site-loader__brand">Разум и Тело</p>
          <div className="site-loader__progress" aria-hidden="true">
            <span className="site-loader__progress-bar" />
          </div>
        </div>
      </div>
    </div>
  );
}
