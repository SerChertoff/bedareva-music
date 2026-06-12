import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import { ScrollToTop } from './ScrollToTop';

export function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-surface text-stone-800">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-white"
      >
        Перейти к содержимому
      </a>
      <ScrollToTop />
      <Header />
      <main id="main-content" className="flex-1 pt-14 sm:pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
