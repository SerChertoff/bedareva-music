import { Link } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../../data/content';
import { Container } from '../ui/Container';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-blue-dark to-[#3d2830] py-10 text-stone-300">
      <Container>
        <div className="flex flex-col items-center gap-5 text-center">
          <div>
            <span className="block font-display text-base font-bold text-white">{SITE.name}</span>
            <span className="text-sm">{SITE.subtitle}</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {NAV_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="text-sm transition hover:text-white">
                {label}
              </Link>
            ))}
          </nav>
          <p className="text-sm">© {SITE.year} Бедарёва Н.А. Все права защищены.</p>
        </div>
      </Container>
    </footer>
  );
}
