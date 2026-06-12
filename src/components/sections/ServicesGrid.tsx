import { Link } from 'react-router-dom';
import { SERVICES } from '../../data/content';

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {SERVICES.map(({ icon, title, text, accent }) => (
        <article
          key={title}
          className={`rounded-xl border p-8 transition hover:-translate-y-1 hover:shadow-lg ${
            accent
              ? 'border-transparent bg-gradient-to-br from-brand-blue-dark to-brand-purple text-white hover:shadow-brand-blue/20'
              : 'border-slate-200 bg-slate-50 hover:border-brand-blue hover:shadow-brand-blue/10'
          }`}
        >
          <div className="mb-4 text-4xl">{icon}</div>
          <h3 className="font-display text-xl font-bold">{title}</h3>
          <p className={`mt-2.5 text-sm leading-relaxed ${accent ? 'text-white/80' : 'text-slate-500'}`}>
            {text}
          </p>
          <Link
            to="/contacts"
            className={`mt-5 inline-block text-sm font-semibold transition ${
              accent ? 'text-white hover:underline' : 'text-brand-blue hover:text-brand-purple'
            }`}
          >
            {accent ? 'Записаться →' : 'Подробнее →'}
          </Link>
        </article>
      ))}
    </div>
  );
}
