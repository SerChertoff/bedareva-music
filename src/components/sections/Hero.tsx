import { SITE } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { StudioBadge } from '../ui/StudioBadge';

export function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-blue-dark via-[#4a2c35] to-[#8b3d4f] pb-16 pt-20 sm:pb-24 sm:pt-28 md:pb-28 md:pt-36"
      aria-label="Главный экран"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(201,168,108,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(181,73,94,0.15),transparent_45%)]" />
      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-14">
          <div className="flex flex-col text-center lg:max-w-xl lg:text-left">
            <StudioBadge />
            <h1 className="font-display text-[1.65rem] font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
              Научитесь петь и
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              играть на инструментах
              <br />
              <span className="bg-gradient-to-r from-white to-white/85 bg-clip-text text-transparent">
                с удовольствием
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-md text-base text-white/80 sm:mt-5 sm:text-lg lg:mx-0">
              Уроки вокала, фортепиано, гитары, баяна, гуслей и не только.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:justify-start">
              <Button to="/contacts" size="lg" className="w-full sm:w-auto">
                Записаться на урок
              </Button>
              <Button to="/services" variant="outline-light" size="lg" className="w-full sm:w-auto">
                Узнать подробнее
              </Button>
            </div>
          </div>

          <figure className="m-0 flex items-center justify-center lg:justify-end">
            <div className="overflow-hidden rounded-[20px] border-4 border-white/20 bg-white/5 p-1 shadow-2xl shadow-black/30 ring-1 ring-white/10">
              <img
                src={SITE.photo}
                alt="Бедарёва Надежда Анатольевна — преподаватель музыки в студии Алые паруса, Бийск"
                width={824}
                height={1024}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="block h-auto w-auto max-h-[min(440px,54vh)] max-w-[min(100%,300px)] rounded-[14px] sm:max-h-[min(480px,58vh)] sm:max-w-[330px] lg:max-h-[min(540px,70vh)] lg:max-w-[380px] xl:max-w-[400px]"
              />
            </div>
          </figure>
        </div>
      </Container>

      <div className="absolute bottom-0 left-0 right-0 leading-none" aria-hidden="true">
        <svg viewBox="0 0 1440 80" fill="none" className="h-10 w-full sm:h-[60px]" preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" fill="#faf7f4" />
        </svg>
      </div>
    </section>
  );
}
