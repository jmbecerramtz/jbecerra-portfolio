import { useEffect } from 'react';

const SITE_NAME = 'Jose Manuel Becerra Portfolio';
const PROD_BASE_URL = 'https://jmbecerramtz.github.io/jbecerra-portfolio';
const OG_IMAGE_PATH = '/jbecerra-og.png';

const upsertMeta = (selector, attributes) => {
  let element = document.head.querySelector(selector);

  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
};

function Seo({ title, description, path = '/', structuredData = [] }) {
  useEffect(() => {
    const baseUrl = import.meta.env.PROD ? PROD_BASE_URL : window.location.origin;
    const normalizedPath = path === '/' ? '/' : path;
    const pageUrl = import.meta.env.PROD
      ? normalizedPath === '/'
        ? `${baseUrl}/`
        : `${baseUrl}/#${normalizedPath}`
      : `${baseUrl}${normalizedPath}`;
    const imageUrl = `${baseUrl}${OG_IMAGE_PATH}`;

    document.title = title;

    upsertMeta('meta[name="description"]', { name: 'description', content: description });
    upsertMeta('meta[property="og:title"]', { property: 'og:title', content: title });
    upsertMeta('meta[property="og:description"]', { property: 'og:description', content: description });
    upsertMeta('meta[property="og:url"]', { property: 'og:url', content: pageUrl });
    upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
    upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    upsertMeta('meta[property="og:image"]', { property: 'og:image', content: imageUrl });
    upsertMeta('meta[property="og:image:alt"]', { property: 'og:image:alt', content: 'Jose Manuel Becerra portrait' });
    upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: title });
    upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: imageUrl });

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', pageUrl);

    const existingScripts = document.head.querySelectorAll('script[data-seo-structured="true"]');
    existingScripts.forEach((script) => script.remove());

    structuredData.forEach((entry) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoStructured = 'true';
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
    });
  }, [description, path, structuredData, title]);

  return null;
}

export default Seo;
