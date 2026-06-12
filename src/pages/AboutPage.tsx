import { ABOUT_POINTS, SITE } from '../data/content';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

export function AboutPage() {
  return (
    <section className="bg-surface py-12 sm:py-16 md:py-20">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[360px_1fr]">
          <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[20px] shadow-2xl shadow-brand-blue-dark/15">
            <img
              src={SITE.photoPortrait}
              alt="Надежда Анатольевна Бедарёва — преподаватель музыки, студия Алые паруса"
              width={360}
              height={450}
              loading="lazy"
              decoding="async"
              className="block h-auto w-full"
            />
          </div>

          <div className="text-center lg:text-left">
            <h1 className="font-display text-2xl font-bold text-brand-blue-dark sm:text-3xl md:text-4xl">
              Надежда Анатольевна Бедарёва
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Преподаватель музыки с многолетним опытом работы. Веду занятия в студии «{SITE.studioName}» по адресу: {SITE.address}.
            </p>
            <ul className="mt-6 space-y-2 text-slate-600">
              {ABOUT_POINTS.map((point) => (
                <li key={point}>✅ {point}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button to="/contacts">Подробнее обо мне →</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
