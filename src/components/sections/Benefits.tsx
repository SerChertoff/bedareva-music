import { BENEFITS } from '../../data/content';
import { Container } from '../ui/Container';

export function Benefits() {
  return (
    <section className="bg-slate-50 py-16">
      <Container>
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {BENEFITS.map(({ icon, title, text }) => (
            <article
              key={title}
              className="rounded-xl border border-slate-200 bg-white p-7 text-center shadow-sm transition hover:-translate-y-1 hover:border-brand-blue hover:shadow-lg hover:shadow-brand-blue/10"
            >
              <div className="mb-4 text-3xl">{icon}</div>
              <h3 className="font-display text-base font-bold text-brand-blue-dark">{title}</h3>
              <p className="mt-2 text-sm text-slate-500">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
