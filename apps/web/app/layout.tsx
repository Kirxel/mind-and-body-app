import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const bodyFont = Manrope({
  subsets: ["latin", "cyrillic"],
  variable: "--font-body",
  display: "swap"
});

const headingFont = Cormorant_Garamond({
  subsets: ["latin", "cyrillic"],
  variable: "--font-heading",
  weight: ["400", "500", "600"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://example.com"),
  title: {
    default: "Разум и Тело",
    template: "%s | Разум и Тело"
  },
  description:
    "Разум и Тело — пространство массажа, физио, работы с опорно-двигательным аппаратом и психотерапии в Новосибирске.",
  openGraph: {
    title: "Разум и Тело",
    description:
      "Пространство спокойствия, телесного внимания и деликатного сопровождения в Новосибирске.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        <a href="#main-content" className="skip-link">
          Перейти к содержимому
        </a>
        <SiteHeader />
        <main id="main-content" className="page">
          {children}
        </main>
        <SiteFooter />
        <a
          href="https://mst.link/razum_i_telo"
          target="_blank"
          rel="noreferrer"
          className="floating-booking-button"
        >
          Записаться
        </a>
      </body>
    </html>
  );
}
