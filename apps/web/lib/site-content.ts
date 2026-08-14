export type ServiceSlug =
  | "massage"
  | "musculoskeletal"
  | "physiotherapy"
  | "psychotherapy";

export type SpecialistSlug = "anna-orlova" | "nikita-sokolov" | "elena-morozova";

export type Service = {
  slug: ServiceSlug;
  title: string;
  short: string;
  summary: string;
  details: string[];
  supportAreas: string[];
  priceFrom: string;
  pricingGroup: "body" | "mind";
};

export type PriceItem = {
  name: string;
  price: string;
  duration: string;
  note?: string;
};

export type PriceGroup = {
  slug: "body" | "mind";
  title: string;
  summary: string;
  items: PriceItem[];
};

export type Specialist = {
  slug: SpecialistSlug;
  name: string;
  role: string;
  summary: string;
  methods: string[];
  serviceSlugs: ServiceSlug[];
};

export const services: Service[] = [
  {
    slug: "massage",
    title: "Массаж",
    short: "Через расслабление — к свободе движения.",
    summary:
      "Бережная телесная работа для тех, кому важно снять напряжение, выдохнуть и вернуть ощущение большей свободы в движении.",
    details: [
      "Спокойный ритм работы и внимательное отношение к ощущениям человека.",
      "Подход может способствовать восстановлению чувства опоры и телесного комфорта.",
      "Подходит как для регулярной поддержки самочувствия, так и для мягкого знакомства с практикой."
    ],
    supportAreas: ["напряжение", "усталость", "ограничение подвижности"],
    priceFrom: "от 2 000 ₽",
    pricingGroup: "body"
  },
  {
    slug: "musculoskeletal",
    title: "Работа с опорно-двигательным аппаратом",
    short: "Через внимание к телу — к более свободной функциональности.",
    summary:
      "Деликатный формат работы, когда хочется вернуть больше устойчивости, подвижности и уверенности в повседневных движениях.",
    details: [
      "Фокус на движении, осанке и ощущении устойчивости в повседневности.",
      "Формат первой встречи может включать уточнение жалоб и подбор щадящего плана сопровождения.",
      "Подход строится без громких обещаний и без универсальных схем."
    ],
    supportAreas: ["подвижность", "осанка", "повседневный дискомфорт"],
    priceFrom: "от 2 000 ₽",
    pricingGroup: "body"
  },
  {
    slug: "physiotherapy",
    title: "Физио",
    short: "Через воздействие — к поддержке восстановления.",
    summary:
      "Форматы физио дополняют телесную работу там, где важны восстановление, аккуратное сопровождение и внимание к самочувствию.",
    details: [
      "Решения подбираются по показаниям и с вниманием к индивидуальным особенностям.",
      "Формулировки и рекомендации сохраняют нейтральный, профессиональный тон.",
      "Для production нужно заменить этот блок на фактически утверждённый перечень процедур."
    ],
    supportAreas: ["восстановление", "самочувствие", "поддержка активности"],
    priceFrom: "от 2 000 ₽",
    pricingGroup: "body"
  },
  {
    slug: "psychotherapy",
    title: "Психотерапия",
    short: "Через беседу — к пониманию и внутренней опоре.",
    summary:
      "Пространство для разговора, в котором можно яснее услышать себя, разобраться в состоянии и найти более устойчивую внутреннюю опору.",
    details: [
      "Пространство разговора строится на деликатности, ясности и уважении к темпу человека.",
      "Подход может помочь лучше замечать эмоциональные и телесные реакции.",
      "Формат и частота встреч определяются после первой консультации."
    ],
    supportAreas: ["эмоциональное напряжение", "саморегуляция", "внутренняя опора"],
    priceFrom: "от 2 000 ₽",
    pricingGroup: "mind"
  }
];

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

export const navigation = [
  { href: "/services", label: "Услуги" },
  { href: "/specialists", label: "Специалисты" },
  { href: "/about", label: "О центре" },
  { href: "/contacts", label: "Контакты" }
] as const;

export const contactDetails = {
  phone: "+7 906 996-07-37",
  telegram: "https://t.me/razym_Telo",
  bookingUrl: "https://mst.link/razum_i_telo",
  website: "https://razumtelo.ru",
  map2gis: "https://2gis.ru/novosibirsk/firm/70000001110995923",
  mapYandex: "https://yandex.ru/maps/org/razum_i_telo/110630723452/?ll=82.969873%2C54.990716&z=17",
  mapYandexEmbed:
    "https://yandex.ru/map-widget/v1/?ll=82.969873%2C54.990716&z=17&mode=search&oid=110630723452",
  address: "ул. Владимира Заровного, 26",
  locationNote: "Европейский Берег, 1 этаж, Октябрьский район, Новосибирск",
  hours: "Ежедневно с 10:00 до 21:00",
  bookingNote:
    "Если откликается подход и атмосфера, удобнее всего перейти к записи или задать вопрос в Telegram.",
  futureBookingNote:
    "Позже запись планируется перевести в более привычный цифровой формат, сохранив ту же простоту и деликатность."
};

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

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getPriceGroup(slug: "body" | "mind") {
  return priceGroups.find((group) => group.slug === slug);
}

export function getSpecialist(slug: string) {
  return specialists.find((specialist) => specialist.slug === slug);
}
