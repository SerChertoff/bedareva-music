import { SITE } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-brand-blue to-brand-purple pb-24 pt-28 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(124,58,237,0.3),transparent_50%)]" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <span className="mb-5 inline-block text-xs font-semibold uppercase tracking-widest text-white/75">
              Бийск · Студия «{SITE.studioName}»
            </span>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Научитесь петь и
              <br />
              играть на инструментах
              <br />
              <span className="bg-gradient-to-r from-white to-white/85 bg-clip-text text-transparent">
                с удовольствием
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/80 lg:mx-0">
              Уроки вокала, фортепиано, гитары, баяна, гуслей и не только.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <Button to="/contacts" size="lg">
                Записаться на урок
              </Button>
              <Button to="/services" variant="outline-light" size="lg">
                Узнать подробнее
              </Button>
            </div>
          </div>

          <div className="order-first flex justify-center lg:order-none">
            <div className="h-[280px] w-[240px] overflow-hidden rounded-[20px] border-4 border-white/25 shadow-2xl shadow-brand-blue-dark/30 md:h-[380px] md:w-[320px]">
              <img
                src={SITE.photo}
                alt="Бедарёва Надежда Анатольевна — преподаватель музыки"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 leading-none">
        <svg viewBox="0 0 1440 80" fill="none" className="h-[60px] w-full" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
