import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS, SITE } from '../../data/content';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';

const MENU_ID = 'main-navigation';

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

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-stone-200/70 bg-surface/95 backdrop-blur-md transition-shadow supports-[padding:max(0px)]:pt-[env(safe-area-inset-top)] ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <Container>
        <div className="flex h-14 items-center justify-between gap-3 sm:h-[72px] sm:gap-6">
          <Link
            to="/"
            className="flex min-w-0 shrink flex-col"
            onClick={closeMenu}
            aria-label={`${SITE.name} — на главную`}
          >
            <span className="truncate font-display text-sm font-bold leading-tight text-brand-blue-dark sm:text-[0.95rem]">
              {SITE.name}
            </span>
            <span className="truncate text-[10px] text-slate-500 sm:text-xs">{SITE.subtitle}</span>
          </Link>

          <button
            type="button"
            className="relative z-50 flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
            aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menuOpen}
            aria-controls={MENU_ID}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span className={`block h-0.5 w-6 rounded bg-brand-blue-dark transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 rounded bg-brand-blue-dark transition ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 rounded bg-brand-blue-dark transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>

          {menuOpen && (
            <button
              type="button"
              className="fixed inset-0 top-14 z-40 bg-black/30 md:hidden"
              aria-label="Закрыть меню"
              onClick={closeMenu}
            />
          )}

          <nav
            id={MENU_ID}
            aria-label="Основная навигация"
            className={`fixed inset-x-0 top-14 z-40 flex max-h-[calc(100dvh-3.5rem)] flex-col gap-1 overflow-y-auto border-b border-stone-200/70 bg-surface p-4 shadow-lg transition duration-200 sm:top-[72px] sm:max-h-[calc(100dvh-4.5rem)] md:static md:max-h-none md:flex-row md:items-center md:overflow-visible md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
              menuOpen ? 'visible opacity-100' : 'invisible opacity-0 md:visible md:opacity-100'
            }`}
          >
            {NAV_LINKS.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `min-h-11 rounded-lg px-4 py-3 text-base font-medium transition md:min-h-0 md:px-3 md:py-2 md:text-sm ${
                    isActive
                      ? 'bg-surface-muted text-brand-blue'
                      : 'text-stone-600 hover:bg-surface-muted hover:text-brand-blue'
                  }`
                }
              >
                {label}
              </NavLink>
            ))}
            <Button to="/contacts" size="sm" className="mt-2 w-full md:ml-2 md:mt-0 md:w-auto" onClick={closeMenu}>
              Записаться →
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}
