import Link from "next/link";

export default function NotFound() {
  return (
    <section className="shell" style={{ paddingTop: "2rem" }}>
      <p className="eyebrow">404</p>
      <h1 className="section-title">Страница не найдена</h1>
      <p className="lead">Возможно, раздел был перемещён или адрес введён неточно.</p>
      <Link href="/" className="focus-ring">
        Вернуться на главную
      </Link>
    </section>
  );
}

