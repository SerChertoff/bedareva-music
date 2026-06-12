import { SITE_URL } from '../../data/seo';
import { SITE } from '../../data/content';

export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'MusicSchool',
    name: `Студия «${SITE.studioName}»`,
    description:
      'Индивидуальные уроки музыки в Бийске: вокал, фортепиано, гитара, баян, гусли. Преподаватель — Бедарёва Надежда Анатольевна.',
    url: SITE_URL,
    image: `${SITE_URL}${SITE.photo}`,
    telephone: `+${SITE.phoneRaw}`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'ул. Мерлина, 44/2',
      addressLocality: 'Бийск',
      addressRegion: 'Алтайский край',
      addressCountry: 'RU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 52.539386,
      longitude: 85.213845,
    },
    priceRange: '₽₽',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
    founder: {
      '@type': 'Person',
      name: SITE.name,
      jobTitle: 'Преподаватель музыки',
    },
    areaServed: {
      '@type': 'City',
      name: 'Бийск',
    },
    sameAs: [],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
