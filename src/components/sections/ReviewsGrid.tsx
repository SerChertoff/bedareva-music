import { REVIEWS } from '../../data/content';

export function ReviewsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {REVIEWS.map(({ text, author }) => (
        <article
          key={author}
          className="rounded-xl border border-slate-200 bg-slate-50 p-7 transition hover:shadow-lg hover:shadow-brand-blue/10"
        >
          <div className="mb-4 tracking-wider">⭐⭐⭐⭐⭐</div>
          <p className="text-sm italic leading-relaxed text-slate-600">{text}</p>
          <p className="mt-4 text-sm font-semibold text-brand-blue-dark">— {author}</p>
        </article>
      ))}
    </div>
  );
}
