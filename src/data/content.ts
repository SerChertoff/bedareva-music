export const SITE = {
  name: 'Бедарёва Надежда Анатольевна',
  subtitle: 'Преподаватель музыки · Бийск',
  studioName: 'Алые паруса',
  address: 'г. Бийск, ул. Мерлина, 44/2',
  phone: '+7 (923) 168-03-98',
  phoneRaw: '79231680398',
  photo: '/images/photo.png',
  photoPortrait: '/images/photo-portrait.png',
  year: 2025,
} as const;

export const NAV_LINKS = [
  { to: '/', label: 'Главная' },
  { to: '/services', label: 'Услуги' },
  { to: '/about', label: 'О себе' },
  { to: '/prices', label: 'Цены' },
  { to: '/reviews', label: 'Отзывы' },
  { to: '/contacts', label: 'Контакты' },
] as const;

export const BENEFITS = [
  { icon: '🎵', title: '7+ инструментов', text: 'Вокал, фортепиано, гитара, баян, гусли и другие' },
  { icon: '🏠', title: 'Студия «Алые паруса»', text: 'г. Бийск, ул. Мерлина, 44/2 — уютное пространство для занятий' },
  { icon: '👨‍👩‍👧‍👦', title: 'Любой возраст', text: 'Занятия для детей, подростков и взрослых' },
  { icon: '🏆', title: 'Индивидуальный подход', text: 'Программа под каждого ученика' },
] as const;

export const SERVICES = [
  { icon: '🎤', title: 'Вокал', text: 'Постановка голоса, эстрада, академический вокал', accent: false },
  { icon: '🎹', title: 'Фортепиано', text: 'Классика и современные произведения', accent: false },
  { icon: '🎸', title: 'Гитара', text: 'Акустическая и современные стили', accent: false },
  { icon: '🪗', title: 'Баян', text: 'Народная и классическая музыка', accent: false },
  { icon: '🎼', title: 'Гусли', text: 'Русская народная музыка, фольклор', accent: false },
  { icon: '➕', title: 'Другие инструменты', text: 'Уточняйте по телефону', accent: true },
] as const;

export const ABOUT_POINTS = [
  'Профессиональное музыкальное образование',
  'Работаю с детьми и взрослыми',
  'Индивидуальная программа',
  'Студия «Алые паруса» — уютная атмосфера',
] as const;

export const STEPS = [
  { emoji: '1️⃣', title: 'Записывайтесь на пробный урок' },
  { emoji: '2️⃣', title: 'Приходите на первый урок в студию' },
  { emoji: '3️⃣', title: 'Занимайтесь и достигаете цели!' },
] as const;

export const REVIEWS = [
  {
    text: '«Надежда Анатольевна — прекрасный педагог! Начал играть на гитаре с нуля»',
    author: 'Алексей К.',
  },
  {
    text: '«Мой ребёнок начал заниматься в 6 лет. Прогресс заметен уже через месяц!»',
    author: 'Мария Д.',
  },
  {
    text: '«Записалась на вокал, очень довольна! Студия уютная, атмосфера тёплая»',
    author: 'Светлана Т.',
  },
] as const;

export const INSTRUMENTS = [
  { value: 'vocal', label: 'Вокал' },
  { value: 'guitar', label: 'Гитара' },
  { value: 'piano', label: 'Фортепиано' },
  { value: 'bayan', label: 'Баян' },
  { value: 'gusli', label: 'Гусли' },
  { value: 'other', label: 'Другое' },
] as const;
