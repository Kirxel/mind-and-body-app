import Link from "next/link";
import { SectionShell } from "@/components/section-shell";
import { ServiceCard } from "@/components/service-card";
import { contactDetails, services } from "@/lib/site-content";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      <section className={`shell ${styles.hero}`}>
        <div className={styles.heroBackground} aria-hidden="true" />
        <div className={styles.heroCopy}>
          <h1 className={styles.heroTitle}>Разум и Тело</h1>
          <p className="lead">
            Пространство, где телесная работа, внимание к самочувствию и деликатный разговор собираются
            в один спокойный и профессиональный опыт.
          </p>
          <div className={styles.actions}>
            <Link href="/services" className={styles.primaryAction}>
              Посмотреть направления
            </Link>
            <a href={contactDetails.bookingUrl} target="_blank" rel="noreferrer" className={styles.secondaryAction}>
              Записаться
            </a>
          </div>
          <div className={styles.heroFacts}>
            <div className={`card ${styles.heroFact}`}>
              <strong>4 направления</strong>
              <span>массаж, работа с ОДА, физио и психотерапия</span>
            </div>
            <div className={`card ${styles.heroFact}`}>
              <strong>Ежедневно</strong>
              <span>{contactDetails.hours}</span>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        eyebrow="Направления"
        title="Основные форматы сопровождения"
        description="Можно выбрать то, что ближе по ощущению, темпу и текущему запросу."
      >
        <div className={`${styles.cardGrid} grid`}>
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Философия"
        title="Баланс между телесностью, вниманием и ясностью"
        description="Здесь важны не громкие обещания, а качество контакта, ритм и ощущение внутренней опоры."
      >
        <div className={styles.philosophy}>
          <article className={`card ${styles.philosophyCard}`}>
            <h3>Гармония внутри — опора снаружи</h3>
            <p>
              Работа начинается с уважения к состоянию человека: к его телу, вниманию, напряжению,
              усталости и тому ритму, в котором сейчас можно двигаться дальше.
            </p>
          </article>
          <article className={`card ${styles.philosophyCard}`}>
            <h3>Минимализм без стерильности</h3>
            <p>
              Тёплые поверхности, мягкая геометрия и воздух в композиции создают ощущение доверия,
              деликатности и спокойного присутствия.
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Михаил"
        title="Человек, через которого можно почувствовать подход пространства"
        description="Иногда первое доверие рождается не из описания услуги, а из ощущения, что вас действительно услышат."
      >
        <div className={styles.ownerSection}>
          <article className={`card ${styles.ownerIntro}`}>
            <div className={styles.ownerPortrait} aria-hidden="true">
              Фото Михаила
            </div>
            <div className={styles.ownerCopy}>
              <p className={styles.ownerEyebrow}>Владелец пространства</p>
              <h3>Михаил</h3>
              <p>
                Через Михаила удобно впервые почувствовать сам ритм «Разум и Тело»: спокойный контакт,
                внимательное отношение к состоянию человека и собранный профессиональный подход без
                лишнего давления.
              </p>
              <p>
                Если важно не просто выбрать направление, а сначала понять, с чего лучше начать,
                знакомство с Михаилом может стать самым естественным первым шагом.
              </p>
              <div className={styles.ownerActions}>
                <a href={contactDetails.bookingUrl} target="_blank" rel="noreferrer" className="booking-cta booking-cta--primary">
                  Записаться
                </a>
                <a href={contactDetails.telegram} target="_blank" rel="noreferrer" className="booking-cta booking-cta--ghost">
                  Написать в Telegram
                </a>
              </div>
            </div>
          </article>

          <div className={styles.ownerHighlights}>
            <article className={`card ${styles.ownerHighlight}`}>
              <h3>Спокойный вход</h3>
              <p>Без спешки, без лишней терминологии и с вниманием к тому, что сейчас действительно важно.</p>
            </article>
            <article className={`card ${styles.ownerHighlight}`}>
              <h3>Личное внимание</h3>
              <p>Контакт строится не вокруг шаблона, а вокруг запроса, состояния и комфортного темпа человека.</p>
            </article>
            <article className={`card ${styles.ownerHighlight}`}>
              <h3>Единый ритм пространства</h3>
              <p>Через знакомство с Михаилом легче почувствовать общий характер места, его деликатность и опору.</p>
            </article>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Пространство"
        title="Пространство тоже помогает почувствовать ритм визита"
        description="Тёплый свет, натуральные материалы и спокойная композиция задают то самое первое ощущение доверия."
      >
        <div className={styles.spaceLayout}>
          <article className={`card ${styles.spaceNarrative}`}>
            <h3>Тёплый свет, воздух и приватность</h3>
            <p>
              Здесь хочется не спешить, глубже выдохнуть и чуть мягче прислушаться к себе. Именно это
              ощущение и важно сохранить дальше в каждом блоке и каждом переходе.
            </p>
          </article>
          <div className={styles.spaceGrid}>
            <div className={`card ${styles.spaceCard}`}>Фото пространства 1</div>
            <div className={`card ${styles.spaceCard}`}>Фото пространства 2</div>
            <div className={`card ${styles.spaceCard}`}>Деталь материалов / света</div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Связь"
        title="Первый шаг может быть простым и спокойным"
        description="Иногда достаточно короткого контакта, чтобы стало понятнее, какой формат сейчас ближе."
      >
        <div className={styles.contactGuidance}>
          <article className={`card ${styles.contactCard}`}>
            <h3>Сначала можно почувствовать отклик</h3>
            <p>
              Направления, специалисты и атмосфера помогают сориентироваться, а дальше уже можно перейти
              к записи в удобный момент.
            </p>
          </article>
          <article className={`card ${styles.contactCard}`}>
            <h3>Когда хочется перейти к следующему шагу</h3>
            <p>{contactDetails.bookingNote}</p>
            <a href={contactDetails.bookingUrl} target="_blank" rel="noreferrer" className={styles.inlineAction}>
              Записаться
            </a>
          </article>
          <article className={`card ${styles.contactCard}`}>
            <h3>Формат записи будет становиться проще</h3>
            <p>{contactDetails.futureBookingNote}</p>
          </article>
          <article className={`card ${styles.contactCard}`}>
            <h3>Пространство легко найти</h3>
            <p>
              Адрес, часы работы и карта уже под рукой, чтобы путь до визита оставался понятным и без лишней суеты.
            </p>
          </article>
        </div>
      </SectionShell>

      <SectionShell
        eyebrow="Расположение"
        title="Где находится пространство"
        description="Европейский Берег, улица Владимира Заровного, 26. Удобно посмотреть маршрут заранее и приехать без спешки."
      >
        <div className={styles.mapSection}>
          <article className={`card ${styles.mapInfoCard}`}>
            <h3>{contactDetails.address}</h3>
            <p>{contactDetails.locationNote}</p>
            <p>{contactDetails.hours}</p>
            <div className={styles.mapActions}>
              <a href={contactDetails.bookingUrl} target="_blank" rel="noreferrer" className={styles.mapSecondary}>
                Записаться
              </a>
              <a href={contactDetails.mapYandex} target="_blank" rel="noreferrer" className={styles.mapPrimary}>
                Открыть Яндекс Карту
              </a>
              <a href={contactDetails.map2gis} target="_blank" rel="noreferrer" className={styles.mapSecondary}>
                Открыть в 2ГИС
              </a>
            </div>
          </article>
          <article className={`card ${styles.mapCard}`}>
            <iframe
              className={styles.mapFrame}
              src={contactDetails.mapYandexEmbed}
              title="Карта расположения пространства «Разум и Тело»"
              loading="lazy"
              allowFullScreen
            />
          </article>
        </div>
      </SectionShell>
    </>
  );
}
