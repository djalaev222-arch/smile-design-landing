// TODO: заменить на реальные данные клиники перед публикацией.
export const CLINIC = {
  name: "Smile Design",
  city: "Каспийск",
  cityPrepositional: "Каспийске", // предложный падеж: "в Каспийске"
  phoneDisplay: "+7 (8246) XX-XX-XX",
  phoneHref: "tel:+78246000000",
  whatsappHref: "https://wa.me/79280000000",
  trust: {
    yearsInBusiness: "10+", // TODO: реальный стаж клиники
    doctorsCount: "6", // TODO: реальное число врачей
    rating: "4.9", // TODO: реальный рейтинг (Яндекс.Карты / 2ГИС)
    reviewsCount: "230+", // TODO: реальное число отзывов
  },
} as const;

// TODO: разделы #services, #doctors, #reviews, #contacts ещё не созданы —
// проставить якоря, когда появятся соответствующие секции лендинга.
export const NAV_LINKS = [
  { href: "#services", label: "Услуги" },
  { href: "#doctors", label: "Врачи" },
  { href: "#reviews", label: "Отзывы" },
  { href: "#contacts", label: "Контакты" },
] as const;
