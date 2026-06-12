export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`;
}

export function absoluteAssetUrl(path: string): string {
  const site = (import.meta.env.VITE_SITE_URL ?? 'https://serchertoff.github.io/bedareva-music').replace(
    /\/$/,
    '',
  );
  return `${site}/${path.replace(/^\//, '')}`;
}
