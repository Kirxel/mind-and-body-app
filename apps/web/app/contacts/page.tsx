import type { Metadata } from "next";
import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { contactDetails } from "@/lib/site-content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Контакты",
  description: "Контакты и актуальная информация о пространстве «Разум и Тело»."
};

export default function ContactsPage() {
  return (
    <SectionShell
      eyebrow="Контакты"
      title="Связаться и сориентироваться можно без лишних шагов"
      description="Здесь собраны понятные способы связи, точное расположение и всё, что помогает спокойно спланировать визит."
    >
      <div className={styles.layout}>
        <article className={`card ${styles.introCard}`}>
          <div className={styles.introCopy}>
            <p className={styles.introLabel}>Быстрый ориентир</p>
            <h2>Если откликается атмосфера, дальше всё просто</h2>
            <p>
              Можно сразу перейти к записи, а можно сначала написать в Telegram или позвонить, если
              хочется уточнить детали, формат визита или удобное время.
            </p>
          </div>
          <div className={styles.quickActions}>
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
              Написать в Telegram
            </Link>
          </div>
        </article>

        <div className={styles.topRow}>
          <div className={styles.infoGrid}>
            <article className={`card ${styles.card}`}>
              <h2>Телефон</h2>
              <p className="lead">
                <Link href={`tel:${contactDetails.phone.replace(/\s/g, "")}`}>{contactDetails.phone}</Link>
              </p>
              <p>Подходит, если хочется быстро уточнить детали визита и задать организационные вопросы.</p>
            </article>
            <article className={`card ${styles.card}`}>
              <h2>Telegram</h2>
              <p className="lead">
                <Link href={contactDetails.telegram} target="_blank" rel="noreferrer">
                  Написать в Telegram
                </Link>
              </p>
              <p>Подходит, если удобнее сначала задать вопрос, уточнить детали или почувствовать контакт.</p>
            </article>
            <article className={`card ${styles.card}`}>
              <h2>Адрес</h2>
              <p className="lead">{contactDetails.address}</p>
              <p>{contactDetails.locationNote}</p>
            </article>
            <article className={`card ${styles.card}`}>
              <h2>Время работы</h2>
              <p className="lead">{contactDetails.hours}</p>
              <p>Перед визитом удобно свериться с картой и заранее выбрать комфортный способ связи.</p>
            </article>
          </div>

          <article className={`card ${styles.mapCard}`}>
            <iframe
              className={styles.mapFrame}
              src={contactDetails.mapYandexEmbed}
              title="Разум и Тело на Яндекс Картах"
              loading="lazy"
              allowFullScreen
            />
            <div className={styles.mapMeta}>
              <p className={styles.mapNote}>
                Карта показывает точное расположение пространства на улице Владимира Заровного, 26.
              </p>
              <Link href={contactDetails.mapYandex} target="_blank" rel="noreferrer" className={styles.mapLink}>
                Открыть в Яндекс Картах
              </Link>
            </div>
          </article>
        </div>

        <article className={`card ${styles.sourcesCard}`}>
          <h2>Дополнительные карты</h2>
          <p>Если привычнее пользоваться внешними сервисами, можно открыть пространство в удобной карте.</p>
          <p>
            <Link href={contactDetails.map2gis} target="_blank" rel="noreferrer">
              Открыть в 2ГИС
            </Link>
          </p>
          <p>
            <Link href={contactDetails.mapYandex} target="_blank" rel="noreferrer">
              Открыть карточку в Яндекс Картах
            </Link>
          </p>
        </article>
      </div>
    </SectionShell>
  );
}
