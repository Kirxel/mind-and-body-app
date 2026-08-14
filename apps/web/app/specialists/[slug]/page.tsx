import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contactDetails, getSpecialist, services } from "@/lib/site-content";
import styles from "./specialist-page.module.css";

type SpecialistPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: SpecialistPageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialist = getSpecialist(slug);

  if (!specialist) {
    return {};
  }

  return {
    title: specialist.name,
    description: specialist.summary
  };
}

export default async function SpecialistPage({ params }: SpecialistPageProps) {
  const { slug } = await params;
  const specialist = getSpecialist(slug);

  if (!specialist) {
    notFound();
  }

  const specialistServices = services.filter((service) => specialist.serviceSlugs.includes(service.slug));

  return (
    <section className={`shell ${styles.page}`}>
      <div className={styles.header}>
        <div className={styles.placeholder} aria-hidden="true">
          Фото специалиста
        </div>
        <div className={styles.copy}>
          <p className="eyebrow">Специалист</p>
          <h1 className="section-title">{specialist.name}</h1>
          <p className={styles.role}>{specialist.role}</p>
          <p className="lead">{specialist.summary}</p>
          <div className={styles.actions}>
            <a href={contactDetails.bookingUrl} target="_blank" rel="noreferrer" className="booking-cta booking-cta--primary">
              Записаться
            </a>
            <a href={contactDetails.telegram} target="_blank" rel="noreferrer" className="booking-cta booking-cta--ghost">
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
      <div className={styles.columns}>
        <article className={`card ${styles.card}`}>
          <h2>Методы и формат</h2>
          <ul>
            {specialist.methods.map((method) => (
              <li key={method}>{method}</li>
            ))}
          </ul>
        </article>
        <article className={`card ${styles.card}`}>
          <h2>Связанные направления</h2>
          <ul className={styles.serviceList}>
            {specialistServices.map((service) => (
              <li key={service.slug}>{service.title}</li>
            ))}
          </ul>
          <h2>Контакт</h2>
          <p className={styles.note}>
            Если откликается подход, можно перейти к записи или сначала задать короткий вопрос в Telegram.
          </p>
        </article>
      </div>
    </section>
  );
}
