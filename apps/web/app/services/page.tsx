import type { Metadata } from "next";
import { SectionShell } from "@/components/section-shell";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/lib/site-content";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Направления работы центра «Разум и Тело»."
};

export default function ServicesPage() {
  return (
    <SectionShell
      eyebrow="Услуги"
      title="Выберите точку входа"
      description="Не обязательно заранее знать точное название подхода. Часто важнее понять, что сейчас ближе по ощущению и запросу."
    >
      <div className={styles.intro}>
        <article className={`card ${styles.leadCard}`}>
          <h2>Можно начать с направления, а не с готового ответа</h2>
          <p>
            Человеку не обязательно заранее понимать точное название подхода. Важнее спокойно описать
            свой запрос, самочувствие и желаемый формат взаимодействия.
          </p>
        </article>

        <div className={styles.guides}>
          <article className={`card ${styles.guide}`}>
            <p className={styles.guideSymbol}>◇</p>
            <h3>Когда хочется выдохнуть телом</h3>
            <p>Массаж и телесные форматы подойдут, если важны расслабление, контакт с телом и мягкое снижение напряжения.</p>
          </article>
          <article className={`card ${styles.guide}`}>
            <p className={styles.guideSymbol}>✦</p>
            <h3>Когда важны движение и восстановление</h3>
            <p>Работа с опорно-двигательным аппаратом и физио помогают выбрать более функциональный и собранный формат поддержки.</p>
          </article>
          <article className={`card ${styles.guide}`}>
            <p className={styles.guideSymbol}>◈</p>
            <h3>Когда нужен разговор и внутренняя опора</h3>
            <p>Психотерапия уместна, если сейчас важнее всего услышать себя, прояснить состояние и двигаться спокойнее.</p>
          </article>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>

        <article className={`card ${styles.leadCard}`}>
          <h2>Как подбирается формат</h2>
          <p>
            Сначала важно услышать состояние, ритм и ожидание человека. Уже потом становится понятнее,
            какой формат окажется уместным именно сейчас.
          </p>
        </article>

        <div className={styles.process}>
          <article className={`card ${styles.step}`}>
            <p className={styles.stepNumber}>01 Запрос</p>
            <h3>Сначала говорим о важном</h3>
            <p>Уточняем, что сейчас беспокоит, какой формат кажется комфортным и на что стоит обратить внимание.</p>
          </article>
          <article className={`card ${styles.step}`}>
            <p className={styles.stepNumber}>02 Подход</p>
            <h3>Подбираем спокойный сценарий</h3>
            <p>Продолжительность, интенсивность и способ взаимодействия выбираются индивидуально, без жёстких схем.</p>
          </article>
          <article className={`card ${styles.step}`}>
            <p className={styles.stepNumber}>03 Встреча</p>
            <h3>Работаем в деликатном ритме</h3>
            <p>Важно, чтобы визит ощущался понятным, бережным и собранным вокруг реального запроса человека.</p>
          </article>
          <article className={`card ${styles.step}`}>
            <p className={styles.stepNumber}>04 Обратная связь</p>
            <h3>Ориентируемся на ощущения</h3>
            <p>По ходу взаимодействия можно уточнять самочувствие, комфорт и дальнейший удобный формат связи с центром.</p>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
