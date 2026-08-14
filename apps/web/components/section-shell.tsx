import type { ReactNode } from "react";
import styles from "./section-shell.module.css";

type SectionShellProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function SectionShell({ eyebrow, title, description, children }: SectionShellProps) {
  return (
    <section className={`shell ${styles.section}`}>
      <div className={styles.header}>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className="section-title">{title}</h2>
        {description ? <p className="lead">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

