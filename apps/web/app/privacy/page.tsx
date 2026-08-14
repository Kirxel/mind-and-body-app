import type { Metadata } from "next";
import { SectionShell } from "@/components/section-shell";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Политика конфиденциальности для пространства «Разум и Тело»."
};

export default function PrivacyPage() {
  return (
    <SectionShell
      eyebrow="Документы"
      title="Политика конфиденциальности"
      description="Здесь будет размещена финальная юридически согласованная редакция политики конфиденциальности."
    >
      <article className="card" style={{ padding: "1.5rem" }}>
        <p className="lead">
          Сейчас обращения не оформляются через внутренние формы, поэтому отдельный порядок обработки
          данных для онлайн-заявок ещё не используется.
        </p>
        <p className="lead">
          До финальной публикации здесь появятся контакты оператора, правила обработки обращений через
          внешние сервисы записи и полная редакция пользовательской политики.
        </p>
      </article>
    </SectionShell>
  );
}
