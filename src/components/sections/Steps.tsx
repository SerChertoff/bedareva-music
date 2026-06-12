import { STEPS } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { SectionHeader } from '../ui/SectionHeader';

export function Steps() {
  return (
    <section className="bg-surface-muted py-20">
      <Container>
        <SectionHeader title="Как начать заниматься" />
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-4 md:flex-row md:items-stretch">
          {STEPS.map((step, index) => (
            <div key={step.title} className="contents">
              <article className="w-full max-w-sm flex-1 rounded-xl border border-stone-200/80 bg-surface-card p-8 text-center transition hover:-translate-y-1 hover:border-brand-blue/40 hover:shadow-lg md:max-w-none">
                <div className="mb-4 text-3xl">{step.emoji}</div>
                <h3 className="font-display text-base font-bold leading-snug text-brand-blue-dark">
                  {step.title}
                </h3>
              </article>
              {index < STEPS.length - 1 && (
                <div className="flex items-center text-2xl font-bold text-brand-blue md:rotate-0 rotate-90" aria-hidden>
                  →
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button to="/contacts" size="lg">
            Записаться сейчас
          </Button>
        </div>
      </Container>
    </section>
  );
}
