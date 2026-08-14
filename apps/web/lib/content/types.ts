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

export type ContactDetails = {
  phone: string;
  telegram: string;
  bookingUrl: string;
  website: string;
  map2gis: string;
  mapYandex: string;
  mapYandexEmbed: string;
  address: string;
  locationNote: string;
  hours: string;
  bookingNote: string;
  futureBookingNote: string;
};

export type NavigationItem = {
  href: string;
  label: string;
};

export type ImageAsset = {
  src: string;
  alt: string;
  purpose: "hero" | "space" | "team" | "detail";
};
