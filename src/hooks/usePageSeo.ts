import { useEffect } from 'react';
import { getCanonicalUrl, getPageSeo, SITE_URL } from '../data/seo';
import { SITE } from '../data/content';

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function usePageSeo(pathname: string) {
  useEffect(() => {
    const seo = getPageSeo(pathname);
    const canonical = getCanonicalUrl(pathname);
    const image = `${SITE_URL}${SITE.photo}`;

    document.title = seo.title;

    setMeta('description', seo.description);
    setMeta('keywords', seo.keywords);
    setMeta('robots', 'index, follow');

    setMeta('og:title', seo.title, true);
    setMeta('og:description', seo.description, true);
    setMeta('og:type', 'website', true);
    setMeta('og:url', canonical, true);
    setMeta('og:image', image, true);
    setMeta('og:locale', 'ru_RU', true);
    setMeta('og:site_name', `Студия «${SITE.studioName}»`, true);

    setMeta('twitter:card', 'summary_large_image');
    setMeta('twitter:title', seo.title);
    setMeta('twitter:description', seo.description);
    setMeta('twitter:image', image);

    setCanonical(canonical);
  }, [pathname]);
}
