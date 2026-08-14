import Link from "next/link";
import { contactDetails, navigation } from "@/lib/site-content";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={`shell ${styles.inner}`}>
        <div className={styles.column}>
          <p className={styles.brand}>РАЗУМ ◇ ТЕЛО</p>
          <p className={styles.copy}>
            Пространство физического восстановления, внутренней ясности и спокойствия в Новосибирске.
          </p>
          <p className={styles.note}>
            Wellness-пространство без медицинской лицензии. Услуги не заменяют диагностику, лечение или
            консультацию врача.
          </p>
        </div>
        <div className={styles.column}>
          <p className={styles.heading}>Разделы</p>
          <ul className={styles.list}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.heading}>Связаться</p>
          <ul className={styles.list}>
            <li>
              <a href={`tel:${contactDetails.phone.replace(/\s+/g, "")}`} className={styles.actionLink}>
                {contactDetails.phone}
              </a>
            </li>
            <li>
              <a href={contactDetails.telegram} target="_blank" rel="noreferrer" className={styles.actionLink}>
                Написать в Telegram
              </a>
            </li>
            <li>
              <a href={contactDetails.mapYandex} target="_blank" rel="noreferrer" className={styles.actionLink}>
                Открыть в Яндекс Картах
              </a>
            </li>
            <li>{contactDetails.bookingNote}</li>
          </ul>
        </div>
        <div className={styles.column}>
          <p className={styles.heading}>Как найти</p>
          <ul className={styles.list}>
            <li>
              <strong>{contactDetails.address}</strong>
            </li>
            <li>{contactDetails.locationNote}</li>
            <li>{contactDetails.hours}</li>
            <li>
              <a href={contactDetails.map2gis} target="_blank" rel="noreferrer" className={styles.actionLink}>
                Открыть в 2GIS
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`shell ${styles.bottom}`}>
        <div className={styles.bottomMeta}>{contactDetails.futureBookingNote}</div>
        <div className={styles.bottomLinks}>
          <Link href="/privacy" className="focus-ring">
            Политика конфиденциальности
          </Link>
          <Link href="/contacts" className="focus-ring">
            Контакты
          </Link>
          <a href={contactDetails.bookingUrl} target="_blank" rel="noreferrer" className="focus-ring">
            Записаться
          </a>
        </div>
      </div>
    </footer>
  );
}
