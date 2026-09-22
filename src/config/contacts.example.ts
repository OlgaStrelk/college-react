/**
 * Контакты организации.
 *
 * Реальные значения лежат в contacts.ts — он не попадает в репозиторий.
 * Скопируйте этот файл: cp src/config/contacts.example.ts src/config/contacts.ts
 */
export const CONTACTS = {
  telegram: "https://t.me/example",
  email: "info@example.com",
  address: "г. Москва, ул. Примерная, 1",
  addressFull: "000000, г. Москва, ул. Примерная, д. 1, стр. 1",
  phone: "+7 000 000 00 00",
  phoneHref: "tel:+70000000000",
  portfolioForm: "https://example.com/form",
} as const;
