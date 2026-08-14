"use client";

import Link from "next/link";
import { useState } from "react";
import { navigation } from "@/lib/site-content";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`shell ${styles.inner}`}>
        <Link href="/" className={`${styles.brand} focus-ring`} onClick={() => setIsOpen(false)}>
          <span className={styles.wordmark}>РАЗУМ ◇ ТЕЛО</span>
          <span className={styles.descriptor}>массаж ✦ физио ✦ психотерапия</span>
        </Link>
        <nav aria-label="Основная навигация" className={styles.desktopNav}>
          <ul className={styles.nav}>
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="focus-ring">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.mobileMenu}>
          <button
            type="button"
            className={`${styles.mobileTrigger} ${isOpen ? styles.mobileTriggerOpen : ""}`}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            onClick={() => setIsOpen((value) => !value)}
          >
            <span className={styles.burger} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
          <div
            className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : ""}`}
            aria-hidden={!isOpen}
            onClick={() => setIsOpen(false)}
          />
          <nav
            id="mobile-navigation"
            aria-label="Мобильная навигация"
            className={`${styles.mobileNav} ${isOpen ? styles.mobileNavOpen : ""}`}
          >
            <div className={styles.mobilePanel}>
              <div className={styles.mobilePanelHeader}>
                <p className={styles.mobilePanelEyebrow}>Навигация</p>
                <p className={styles.mobilePanelTitle}>Разум и Тело</p>
              </div>
              <ul className={styles.mobileNavList}>
                {navigation.map((item, index) => (
                  <li
                    key={item.href}
                    className={styles.mobileNavItem}
                    style={{ transitionDelay: isOpen ? `${index * 40}ms` : "0ms" }}
                  >
                    <Link
                      href={item.href}
                      className={`${styles.mobileLink} focus-ring`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span>{item.label}</span>
                      <span className={styles.mobileArrow} aria-hidden="true">
                        ↗
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.mobilePanelFooter}>
                <a
                  href="https://mst.link/razum_i_telo"
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.mobileBooking} focus-ring`}
                  onClick={() => setIsOpen(false)}
                >
                  Записаться
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
