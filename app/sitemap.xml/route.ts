import { NextResponse } from "next/server";

const SITE_URL = "https://yourdomain.com"; // ← अपना domain डालो

// --- STATIC ROUTES LIST ---
// चाहो तो future में blog, tools, dynamic pages जोड़ सकते हो
const staticRoutes = [
  "/",
  "/typing-test",
  "/practice",
  "/blog",
  "/about",
  "/contact",
];

export async function GET() {
  const urls = staticRoutes.map((path) => ({
    loc: `${SITE_URL}${path}`,
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: path === "/" ? "1.0" : "0.7",
  }));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (url) => `
        <url>
          <loc>${url.loc}</loc>
          <lastmod>${url.lastmod}</lastmod>
          <changefreq>${url.changefreq}</changefreq>
          <priority>${url.priority}</priority>
        </url>`
      )
      .join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
