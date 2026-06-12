import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { usePageSeo } from '../../hooks/usePageSeo';

export function ScrollToTop() {
  const { pathname } = useLocation();
  usePageSeo(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
