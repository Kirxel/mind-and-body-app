import Link from "next/link";
import { services, type Specialist } from "@/lib/site-content";
import styles from "./specialist-card.module.css";

export function SpecialistCard({ specialist }: { specialist: Specialist }) {
  const relatedServices = services.filter((service) => specialist.serviceSlugs.includes(service.slug));

  return (
    <article className={`card ${styles.card}`}>
      <div className={styles.portrait} aria-hidden="true">
        Фото специалиста
      </div>
      <div className={styles.heading}>
        <h3 className={styles.name}>{specialist.name}</h3>
        <p className={styles.role}>{specialist.role}</p>
      </div>
      <p className={styles.summary}>{specialist.summary}</p>
      <ul className={styles.tags}>
        {relatedServices.map((service) => (
          <li key={service.slug}>{service.title}</li>
        ))}
      </ul>
      <Link href={`/specialists/${specialist.slug}`} className={`focus-ring ${styles.link}`}>
        О специалисте
      </Link>
    </article>
  );
}
