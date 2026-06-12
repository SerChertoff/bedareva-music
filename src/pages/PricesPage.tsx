import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { SectionHeader } from '../components/ui/SectionHeader';

export function PricesPage() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionHeader title="Стоимость занятий" subtitle="Прозрачные цены без скрытых платежей" />

        <div className="mx-auto grid max-w-2xl gap-8 md:grid-cols-2">
          <article className="rounded-[20px] border-2 border-slate-200 bg-white p-8 text-center transition hover:shadow-lg">
            <h3 className="font-display text-xl font-bold text-brand-blue-dark">Разовое занятие</h3>
            <p className="mt-1 text-sm text-slate-500">60 минут</p>
            <div className="mt-5 font-display text-5xl font-extrabold text-brand-blue">
              600 <span className="text-lg font-semibold">₽</span>
            </div>
            <p className="mt-2 text-sm text-slate-500">Один урок без обязательств</p>
            <Button to="/contacts" variant="outline" className="mt-6 w-full">
              Записаться
            </Button>
          </article>

          <article className="relative rounded-[20px] border-2 border-brand-blue bg-white p-8 text-center shadow-lg shadow-brand-blue/10">
            <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-purple px-4 py-1.5 text-xs font-bold tracking-wider text-white">
              ВЫГОДНО
            </span>
            <h3 className="font-display text-xl font-bold text-brand-blue-dark">Абонемент</h3>
            <p className="mt-1 text-sm text-slate-500">на месяц</p>
            <div className="mt-5 font-display text-5xl font-extrabold text-brand-blue">
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

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/contacts">Купить абонемент</Button>
          <Button to="/contacts" variant="outline">
            Записаться на пробный
          </Button>
        </div>
      </Container>
    </section>
  );
}
