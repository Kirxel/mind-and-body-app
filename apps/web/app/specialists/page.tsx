import type { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { SpecialistCard } from "@/components/specialist-card";
import { contactDetails, specialists } from "@/lib/site-content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Специалисты",
  description: "Структура профилей специалистов центра «Разум и Тело»."
};

export default function SpecialistsPage() {
  return (
    <SectionShell
      eyebrow="Специалисты"
      title="Команда, с которой можно познакомиться спокойно"
      description="Здесь важны не громкие формулировки, а ощущение контакта, ясная роль специалиста и близость подхода."
    >
      <div className={styles.layout}>
        <div className={styles.top}>
          <article className={`card ${styles.intro}`}>
            <h2>Важно почувствовать не только направление, но и человека</h2>
            <p>
              Иногда именно это становится решающим: не просто выбрать услугу, а почувствовать, с кем
              хочется двигаться дальше бережно и в своём темпе.
            </p>
          </article>

          <article className={`card ${styles.sidebar}`}>
            <p className={styles.sidebarLabel}>Дальнейший шаг</p>
            <h2>Если кто-то отзывается, можно перейти к записи сразу</h2>
            <p>А если хочется сначала уточнить детали, удобнее всего написать короткое сообщение в Telegram.</p>
            <div className={styles.sidebarActions}>
              <Link
                href={contactDetails.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="booking-cta booking-cta--primary"
              >
                Записаться
              </Link>
              <Link
                href={contactDetails.telegram}
                target="_blank"
                rel="noreferrer"
                className="booking-cta booking-cta--secondary"
              >
                Задать вопрос
              </Link>
            </div>
          </article>
        </div>

        <div className={styles.grid}>
          {specialists.map((specialist) => (
            <SpecialistCard key={specialist.slug} specialist={specialist} />
          ))}
        </div>

        <article className={`card ${styles.note}`}>
          <h2>Дальше здесь появится ещё больше живого присутствия</h2>
          <p>
            Реальные фотографии, биографии и профессиональные акценты сделают знакомство с командой ещё
            теплее и точнее.
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
