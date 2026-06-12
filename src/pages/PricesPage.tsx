import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export function PricesPage() {
  return (
    <section className="bg-surface-muted py-12 sm:py-16 md:py-20">
      <Container>
        <SectionHeader as="h1" title="Стоимость занятий" subtitle="Прозрачные цены без скрытых платежей" />

        <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
          <article className="rounded-[20px] border-2 border-stone-200/80 bg-surface-card p-6 text-center transition hover:shadow-lg sm:p-8">
            <h3 className="font-display text-xl font-bold text-brand-blue-dark">Разовое занятие</h3>
            <p className="mt-1 text-sm text-slate-500">60 минут</p>
            <div className="mt-5 font-display text-4xl font-extrabold text-brand-blue sm:text-5xl">
              600 <span className="text-lg font-semibold">₽</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">Один урок без обязательств</p>
            <Button to="/contacts" variant="outline" className="mt-6 w-full">
              Записаться
            </Button>
          </article>

          <article className="relative rounded-[20px] border-2 border-brand-blue/50 bg-surface-card p-6 text-center shadow-lg shadow-brand-blue/10 sm:p-8">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-purple px-4 py-1.5 text-xs font-bold tracking-wider text-white">
              ВЫГОДНО
            </span>
            <h3 className="font-display text-xl font-bold text-brand-blue-dark">Абонемент</h3>
            <p className="mt-1 text-sm text-slate-500">на месяц</p>
            <div className="mt-5 font-display text-4xl font-extrabold text-brand-blue sm:text-5xl">
              500 <span className="text-lg font-semibold">₽/час</span>
            </div>
            <p className="mt-2 text-sm font-semibold text-brand-purple">Выгода — 100 ₽ с урока!</p>
            <Button to="/contacts" className="mt-6 w-full">
              Купить абонемент
            </Button>
          </article>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-500">
          * Пробный урок — уточняйте условия. Способы оплаты: наличные, перевод на карту.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <Button to="/contacts" className="w-full sm:w-auto">Купить абонемент</Button>
          <Button to="/contacts" variant="outline" className="w-full sm:w-auto">
            Записаться на пробный
          </Button>
        </div>
      </Container>
    </section>
  );
}
