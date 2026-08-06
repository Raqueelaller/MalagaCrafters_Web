import { writeFile } from 'node:fs/promises';

const deploymentUrl = process.env.URL;

if (deploymentUrl) {
  const origin = deploymentUrl.replace(/\/$/, '');
  const paths = ['/', '/aviso-legal', '/politica-privacidad', '/politica-cookies'];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((path) => `  <url><loc>${origin}${path}</loc></url>`).join('\n')}
</urlset>
`;
  const robots = `User-agent: *
Allow: /
Sitemap: ${origin}/sitemap.xml
`;

  await Promise.all([
    writeFile(new URL('../public/sitemap.xml', import.meta.url), sitemap, 'utf8'),
    writeFile(new URL('../public/robots.txt', import.meta.url), robots, 'utf8'),
  ]);
}
