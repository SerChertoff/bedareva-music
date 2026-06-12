import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-shadow ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <Container>
        <div className="flex h-[72px] items-center justify-between gap-6">
          <Link to="/" className="flex shrink-0 flex-col" onClick={() => setMenuOpen(false)}>
            <span className="font-display text-[0.95rem] font-bold leading-tight text-brand-blue-dark">
              {SITE.name}
            </span>
            <span className="text-xs text-slate-500">{SITE.subtitle}</span>
          </Link>

          <button
            type="button"
            className="flex flex-col gap-1.5 p-2 md:hidden"
            aria-label="Открыть меню"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 rounded bg-brand-blue-dark transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 rounded bg-brand-blue-dark transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 rounded bg-brand-blue-dark transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>

          <nav
            className={`absolute left-0 right-0 top-[72px] flex flex-col gap-1 border-b border-slate-200 bg-white p-4 shadow-lg transition md:static md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
              menuOpen ? 'opacity-100' : 'pointer-events-none opacity-0 md:pointer-events-auto md:opacity-100'
            }`}
          >
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-lg px-3 py-2 text-sm font-medium transition md:px-3 md:py-2 ${
                    isActive ? 'bg-slate-100 text-brand-blue' : 'text-slate-600 hover:bg-slate-100 hover:text-brand-blue'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Button to="/contacts" size="sm" className="mt-2 md:ml-2 md:mt-0">
              Записаться →
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
