// src/app/sitemap.xml/route.js

export async function GET() {
  const baseUrl = 'https://bostonexpresscab.com';

  const staticRoutes = [
    '',
    '/logan-airport',
    '/child-seat',
    '/minivan-suv',
    '/contact',
    '/about',
    '/blog',
  ];

  let blogPosts = [];
  let services = [];

  try {
    const blogResponse = await fetch('https://admin.bostonprestigecar.com/api/all-blog', {
      headers: {
        Accept: 'application/json',
      },
      next: { revalidate: 60 },
    });

    const blogData = await blogResponse.json();
    blogPosts = blogData.data || [];

    const servicesResponse = await fetch('https://admin.bostonprestigecar.com/api/service-posts', {
      headers: {
        Accept: 'application/json',
      },
      next: { revalidate: 60 },
    });

    const servicesData = await servicesResponse.json();
    services = (servicesData || []).map(service => ({
      id: service.id,
      slug: service.slug,
    }));

  } catch (error) {
    console.error('Error fetching blog/service data:', error);
  }

  const urls = [
    ...staticRoutes.map(path => ({
      loc: `${baseUrl}${path}`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    })),
    ...blogPosts.map(post => ({
      loc: `${baseUrl}/blog/${post.slug}`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    })),
    ...services.map(service => ({
      loc: `https://bostonprestigecar.com/${service.slug}`,
      lastmod: new Date().toISOString(),
      priority: 0.8,
    })),
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls.map(({ loc, lastmod, priority }) => `
      <url>
        <loc>${loc}</loc>
        <lastmod>${lastmod}</lastmod>
        <priority>${priority}</priority>
      </url>`).join('')}
  </urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
