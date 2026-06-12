import { BookingForm } from '../components/sections/BookingForm';
import { Container } from '../components/ui/Container';
import { SITE } from '../data/content';

export function ContactsPage() {
  return (
    <section className="bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-purple py-20">
      <Container>
        <div className="mx-auto grid max-w-4xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="text-white">
            <h1 className="font-display text-3xl font-bold">Контакты</h1>
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
