import { type FormEvent, useState } from 'react';
import { INSTRUMENTS, SITE } from '../../data/content';
import { buildWhatsAppUrl, formatPhone } from '../../utils/phone';
import { Button } from '../ui/Button';

export function BookingForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [instrument, setInstrument] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const instrumentLabel = INSTRUMENTS.find((i) => i.value === instrument)?.label;
    const text = [
      'Здравствуйте! Хочу записаться на пробный урок.',
      `Имя: ${name}`,
      `Телефон: ${phone}`,
      instrumentLabel ? `Инструмент: ${instrumentLabel}` : '',
      time ? `Удобное время: ${time}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    window.open(buildWhatsAppUrl(SITE.phoneRaw, text), '_blank');
    setName('');
    setPhone('');
    setInstrument('');
    setTime('');
  };

  return (
    <div className="mx-auto max-w-lg rounded-[20px] bg-surface-card p-5 shadow-2xl sm:p-8 md:p-10">
      <h2 className="mb-8 text-center font-display text-xl font-bold uppercase tracking-wide text-brand-blue-dark md:text-2xl">
        Запишитесь на урок прямо сейчас
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-slate-600">
            Ваше имя
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Как к вам обращаться?"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-slate-600">
            Телефон
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={phone}
            onChange={(e) => setPhone(formatPhone(e.target.value))}
            placeholder="+7 (___) ___-__-__"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="instrument" className="mb-1.5 block text-sm font-semibold text-slate-600">
            Инструмент
          </label>
          <select
            id="instrument"
            required
            value={instrument}
            onChange={(e) => setInstrument(e.target.value)}
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 sm:text-sm"
          >
            <option value="">Выберите инструмент</option>
            {INSTRUMENTS.map(({ value, label }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="time" className="mb-1.5 block text-sm font-semibold text-slate-600">
            Удобное время
          </label>
          <input
            id="time"
            type="text"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Например: будни после 17:00"
            className="w-full rounded-lg border border-slate-200 px-4 py-3 text-base outline-none transition focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/15 sm:text-sm"
          />
        </div>

        <Button type="submit" size="lg" className="w-full">
          Записаться на пробный урок
        </Button>
      </form>

      <div className="mt-6 space-y-1 text-center text-sm text-slate-500">
        <p>
          Или позвоните:{' '}
          <a href={`tel:+${SITE.phoneRaw}`} className="font-semibold text-brand-blue hover:text-brand-purple">
            {SITE.phone}
          </a>
        </p>
        <p>
          Студия «{SITE.studioName}» · {SITE.address}
        </p>
      </div>
    </div>
  );
}
