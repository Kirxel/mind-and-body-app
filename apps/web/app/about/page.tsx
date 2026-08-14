import type { Metadata } from "next";
import { SectionShell } from "@/components/section-shell";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "О центре",
  description: "О центре «Разум и Тело»."
};

export default function AboutPage() {
  return (
    <SectionShell
      eyebrow="О центре"
      title="Пространство, в котором можно замедлиться и почувствовать опору"
      description="«Разум и Тело» объединяет телесные практики, внимание к самочувствию и деликатный человеческий контакт."
    >
      <div className={styles.layout}>
        <div className={styles.hero}>
          <article className={`card ${styles.heroCard}`}>
            <h2>Здесь важны не спешка и громкость, а ощущение контакта</h2>
            <p className={styles.heroLead}>
              Пространство собрано вокруг спокойствия, понятного человеческого общения и внимательной
              работы с тем, что сейчас действительно важно для человека.
            </p>
            <p>
              Основные направления центра — массаж, работа с опорно-двигательным аппаратом, физио и
              психотерапия. Их объединяет деликатный подход и уважение к индивидуальному темпу.
            </p>
          </article>

          <article className={`card ${styles.heroAside}`}>
            <div>
              <p className={styles.asideLabel}>Основа подхода</p>
              <p>
                Через пространство, ритм и контакт здесь создаётся ощущение собранности, в котором
                проще услышать себя и выбрать подходящий формат взаимодействия.
              </p>
            </div>
            <p>
              Сайт продолжает ту же идею: мягко знакомит с направлением, атмосферой и людьми, не
              перегружая человека лишним.
            </p>
          </article>
        </div>

        <div className={styles.facts}>
          <article className={`card ${styles.fact}`}>
            <span className={styles.factSymbol}>◇</span>
            <h3>Тело</h3>
            <p>Телесные форматы помогают вернуть больше свободы движения, опоры и внимания к самочувствию.</p>
          </article>
          <article className={`card ${styles.fact}`}>
            <span className={styles.factSymbol}>✦</span>
            <h3>Здоровье</h3>
            <p>Подход строится без жёстких шаблонов, с аккуратной ориентацией на состояние человека.</p>
          </article>
          <article className={`card ${styles.fact}`}>
            <span className={styles.factSymbol}>◈</span>
            <h3>Разум</h3>
            <p>Психотерапевтический формат поддерживает ясность, внутреннюю опору и более спокойный контакт с собой.</p>
          </article>
        </div>

        <div className={styles.spaceGrid}>
          <article className={`card ${styles.spaceCard}`}>
            <h2>Что чувствуется в пространстве</h2>
            <ul className={styles.spaceList}>
              <li>Тёплые натуральные оттенки, мягкий свет и свободная композиция без ощущения стерильности.</li>
              <li>Понятная, спокойная среда, в которой можно выдохнуть ещё до начала самой встречи.</li>
              <li>Внимание к телесности, деликатности и ощущению внутреннего баланса, а не к внешней громкости.</li>
            </ul>
          </article>

          <article className={`card ${styles.noteCard}`}>
            <h2>Что будет усиливаться дальше</h2>
            <p>
              По мере наполнения сайта здесь появятся утверждённые фотографии пространства, материалы о
              специалистах и более точные живые акценты бренда.
            </p>
          </article>
        </div>
      </div>
    </SectionShell>
  );
}
