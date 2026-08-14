import type { Specialist } from "./types";

export const specialists: Specialist[] = [
  {
    slug: "anna-orlova",
    name: "Анна Орлова",
    role: "Телесный специалист",
    summary:
      "Мягкая телесная работа, внимательное отношение к ощущениям и спокойный ритм взаимодействия.",
    methods: ["массаж", "мягкие телесные практики", "подбор комфортного формата"],
    serviceSlugs: ["massage", "musculoskeletal"]
  },
  {
    slug: "nikita-sokolov",
    name: "Никита Соколов",
    role: "Специалист по восстановительным практикам",
    summary:
      "Фокус на восстановлении подвижности, устойчивости и более комфортном ощущении тела в повседневности.",
    methods: ["поддержка подвижности", "форматы физио"],
    serviceSlugs: ["musculoskeletal", "physiotherapy"]
  },
  {
    slug: "elena-morozova",
    name: "Елена Морозова",
    role: "Психотерапевт",
    summary:
      "Деликатный формат психотерапевтической работы, когда особенно важны ясность, доверие и уважение к внутреннему темпу человека.",
    methods: ["консультации", "поддерживающая терапевтическая работа"],
    serviceSlugs: ["psychotherapy"]
  }
];

export function getSpecialist(slug: string) {
  return specialists.find((specialist) => specialist.slug === slug);
}
