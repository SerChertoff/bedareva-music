import { BookingForm } from '../components/sections/BookingForm';
import { Container } from '../components/ui/Container';
import { SITE } from '../data/content';

export function ContactsPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-[#3d2830] to-[#6e3a47] py-12 sm:py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(201,168,108,0.12),transparent_50%)]" />
      <Container className="relative">
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="text-white">
            <h1 className="font-display text-2xl font-bold sm:text-3xl">Контакты</h1>
            <p className="mt-4 leading-relaxed text-white/80">
              Свяжитесь со мной удобным способом — отвечу и подберём время для занятия.
            </p>
            <ul className="mt-8 space-y-5">
              <li>
                <span className="block text-sm text-white/60">📞 Телефон</span>
                <a href={`tel:+${SITE.phoneRaw}`} className="text-lg font-medium hover:underline">
                  {SITE.phone}
                </a>
              </li>
              <li>
                <span className="block text-sm text-white/60">🏠 Студия</span>
                <span className="text-lg font-medium">«{SITE.studioName}»</span>
              </li>
              <li>
                <span className="block text-sm text-white/60">📍 Адрес</span>
                <span className="text-lg font-medium">{SITE.address}</span>
              </li>
            </ul>
          </div>
          <BookingForm />
        </div>
      </Container>
    </section>
  );
}
