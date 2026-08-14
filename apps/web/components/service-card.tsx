import React from "react";
import Link from "next/link";
import type { Service } from "@/lib/site-content";
import styles from "./service-card.module.css";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className={`card ${styles.card}`}>
      <p className={styles.symbol} aria-hidden="true">
        ◇
      </p>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.short}>{service.short}</p>
      <p className={styles.summary}>{service.summary}</p>
      <ul className={styles.tags}>
        {service.supportAreas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Link href={`/services/${service.slug}`} className={`focus-ring ${styles.link}`}>
        Подробнее
      </Link>
    </article>
  );
}
