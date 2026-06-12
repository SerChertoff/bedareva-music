import { Outlet } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';

export function Layout() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main className="pt-[72px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
