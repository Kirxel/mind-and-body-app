import type { PriceGroup } from "./types";

export const priceGroups: PriceGroup[] = [
  {
    slug: "body",
    title: "Тело",
    summary:
      "Эта группа цен сейчас используется для телесных форматов на странице записи: массаж, физио и смежные форматы сопровождения.",
    items: [
      {
        name: "Консультация",
        price: "от 0 ₽",
        duration: "15 мин.",
        note: "Разбор МРТ, заключения врача, протокола физио и массажа."
      },
      { name: "Сеанс", price: "от 2 000 ₽", duration: "30 мин." },
      { name: "Сеанс", price: "от 3 000 ₽", duration: "40 мин." },
      { name: "Сеанс", price: "от 3 500 ₽", duration: "50 мин." },
      { name: "Сеанс", price: "от 4 000 ₽", duration: "1 час." },
      { name: "Сеанс", price: "от 6 000 ₽", duration: "1 час. 30 мин." },
      { name: "Сеанс", price: "от 8 000 ₽", duration: "2 час." }
    ]
  },
  {
    slug: "mind",
    title: "Разум",
    summary:
      "Эта группа цен сейчас используется для психотерапевтических форматов и первой консультации-знакомства.",
    items: [
      {
        name: "Консультация",
        price: "от 0 ₽",
        duration: "15 мин.",
        note: "Диагностика-знакомство для понимания необходимости в терапии."
      },
      { name: "Психотерапевтическая консультация", price: "от 2 000 ₽", duration: "30 мин." },
      { name: "Психотерапевтическая консультация", price: "от 4 000 ₽", duration: "1 час." },
      { name: "Психотерапевтическая консультация", price: "от 5 000 ₽", duration: "1 час. 30 мин." },
      { name: "Семейная психотерапия", price: "от 7 000 ₽", duration: "2 час." }
    ]
  }
];

export function getPriceGroup(slug: "body" | "mind") {
  return priceGroups.find((group) => group.slug === slug);
}
