import { SITE } from './content';

export const SITE_URL =
  import.meta.env.VITE_SITE_URL ?? 'https://serchertoff.github.io/bedareva-music';

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
  path: string;
}

const baseKeywords =
  'уроки музыки Бийск, преподаватель музыки Бийск, студия Алые паруса, вокал Бийск, фортепиано Бийск, гитара Бийск, баян Бийск, гусли Бийск, музыкальная школа Бийск';

export const DEFAULT_SEO: PageSeo = {
  title: `${SITE.name} — ${SITE.subtitle}`,
  description:
    'Индивидуальные уроки музыки в Бийске: вокал, фортепиано, гитара, баян, гусли. Студия «Алые паруса», ул. Мерлина 44/2. Запись на пробный урок.',
  keywords: baseKeywords,
  path: '/',
};

export const PAGE_SEO: Record<string, PageSeo> = {
  '/': {
    title: `Уроки музыки в Бийске — студия «${SITE.studioName}» | ${SITE.name}`,
    description:
      'Научитесь петь и играть на инструментах с удовольствием. Уроки вокала, фортепиано, гитары, баяна и гуслей в студии «Алые паруса», Бийск. Для детей и взрослых.',
    keywords: baseKeywords,
    path: '/',
  },
  '/services': {
    title: `Услуги — вокал, фортепиано, гитара | Студия «${SITE.studioName}»`,
    description:
      'Что преподаёт Надежда Анатольевна: вокал, фортепиано, гитара, баян, гусли и другие инструменты. Индивидуальные занятия в Бийске.',
    keywords: 'уроки вокала Бийск, уроки фортепиано Бийск, уроки гитары Бийск, уроки баяна Бийск, уроки гуслей Бийск',
    path: '/services',
  },
  '/about': {
    title: `О преподавателе — ${SITE.name} | Студия «${SITE.studioName}»`,
    description:
      'Надежда Анатольевна Бедарёва — преподаватель музыки с опытом. Индивидуальный подход, работа с детьми и взрослыми, студия в Бийске.',
    keywords: 'преподаватель музыки Бедарёва, музыкальная студия Бийск, уроки музыки для детей Бийск',
    path: '/about',
  },
  '/prices': {
    title: `Цены на уроки музыки в Бийске | Студия «${SITE.studioName}»`,
    description:
      'Стоимость занятий: разовый урок 600 ₽, абонемент 500 ₽/час. Прозрачные цены, пробный урок, оплата наличными или переводом.',
    keywords: 'цены уроки музыки Бийск, стоимость уроков вокала Бийск, абонемент музыкальная студия',
    path: '/prices',
  },
  '/reviews': {
    title: `Отзывы учеников | Студия «${SITE.studioName}», Бийск`,
    description:
      'Отзывы учеников о занятиях музыкой у Надежды Анатольевны: вокал, гитара, фортепиано. Студия «Алые паруса», Бийск.',
    keywords: 'отзывы музыкальная студия Бийск, отзывы преподаватель музыки Бийск',
    path: '/reviews',
  },
  '/contacts': {
    title: `Запись на урок — ${SITE.phone} | Студия «${SITE.studioName}»`,
    description:
      `Запишитесь на пробный урок музыки в Бийске. Телефон: ${SITE.phone}. Адрес: ${SITE.address}. Студия «${SITE.studioName}».`,
    keywords: 'записаться на урок музыки Бийск, музыкальная студия Мерлина Бийск',
    path: '/contacts',
  },
};

export function getPageSeo(pathname: string): PageSeo {
  return PAGE_SEO[pathname] ?? DEFAULT_SEO;
}

export function getCanonicalUrl(pathname: string): string {
  const path = pathname === '/' ? '' : pathname;
  return `${SITE_URL}${path}`;
}
