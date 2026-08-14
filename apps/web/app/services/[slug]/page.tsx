import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getService } from "@/lib/site-content";
import styles from "./service-page.module.css";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  return (
    <section className={`shell ${styles.page}`}>
      <p className="eyebrow">Услуга</p>
      <h1 className="section-title">{service.title}</h1>
      <p className="lead">{service.summary}</p>
      <div className={styles.content}>
        <article className={`card ${styles.article}`}>
          <h2>Как описан формат работы</h2>
          <ul>
            {service.details.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <aside className={`card ${styles.aside}`}>
          <h2>Работаем с</h2>
          <ul>
            {service.supportAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2>Стоимость</h2>
          <p className={styles.priceHint}>
            <strong>{service.priceFrom}</strong>
          </p>
        </aside>
      </div>
    </section>
  );
}
