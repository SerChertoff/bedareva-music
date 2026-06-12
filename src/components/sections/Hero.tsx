import { SITE } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { StudioBadge } from '../ui/StudioBadge';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-[#4a2c35] to-[#8b3d4f] pb-24 pt-28 md:pb-28 md:pt-36">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(201,168,108,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(181,73,94,0.15),transparent_45%)]" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <StudioBadge />
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
            <div className="h-[280px] w-[240px] overflow-hidden rounded-[20px] border-4 border-white/20 shadow-2xl shadow-black/25 md:h-[380px] md:w-[320px]">
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
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#faf7f4" />
        </svg>
      </div>
    </section>
  );
}
