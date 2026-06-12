# Сайт — Бедарёва Надежда Анатольевна

Современный сайт преподавателя музыки из Бийска.

**Стек:** React 19 · TypeScript · Vite · Tailwind CSS 4 · React Router 7

## Структура

```
src/
├── components/     # UI, layout, секции
├── pages/          # Страницы (роуты)
├── data/           # Контент сайта
└── utils/          # Утилиты (телефон, WhatsApp)
public/
└── images/         # Фото и статика
```

## Команды

```bash
npm install      # установка зависимостей
npm run dev      # локальный сервер → http://localhost:5173
npm run build    # сборка в dist/
npm run preview  # предпросмотр сборки
```

## Страницы

| Путь | Раздел |
|------|--------|
| `/` | Главная (Hero, преимущества, как начать) |
| `/services` | Услуги |
| `/about` | О себе |
| `/prices` | Цены |
| `/reviews` | Отзывы |
| `/contacts` | Запись на урок |

## Что настроить

Отредактируйте `src/data/content.ts`:
- телефон и WhatsApp-номер
- отзывы, тексты (при необходимости)

Фото: `public/images/photo.png`

## GitHub Pages

После `npm run build` загрузите содержимое папки `dist/` на GitHub Pages.  
Для React Router на GitHub Pages может понадобиться файл `404.html` (копия `index.html`) — сообщите, если нужна помощь с деплоем.
