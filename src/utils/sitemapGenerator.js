// src/utils/sitemapGenerator.js
export const generateSitemap = (projects) => {
  const baseUrl = 'https://matchesluxury.com';
  const pages = [
    { url: '/', priority: 1.0, changefreq: 'daily' },
    { url: '/portfolio', priority: 0.9, changefreq: 'weekly' },
    { url: '/services', priority: 0.8 },
    { url: '/about', priority: 0.7 },
    { url: '/contact', priority: 0.8 },
  ];

  const projectPages = projects.map(project => ({
    url: `/portfolio/${project.slug}`,
    priority: 0.85,
    lastmod: new Date().toISOString(),
  }));

  const allPages = [...pages, ...projectPages];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages.map(page => `
    <url>
      <loc>${baseUrl}${page.url}</loc>
      ${page.lastmod ? `<lastmod>${page.lastmod}</lastmod>` : ''}
      <changefreq>${page.changefreq || 'monthly'}</changefreq>
      <priority>${page.priority || 0.5}</priority>
    </url>
  `).join('')}
</urlset>`;
};