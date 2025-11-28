import { NextResponse } from "next/server";

const SITE_URL = "https://yourdomain.com"; // ← अपना domain डालो

export async function GET() {
  const content = `
User-agent: *
Allow: /

# Block admin and private API
Disallow: /admin
Disallow: /api/private

# Sitemap Location
Sitemap: ${SITE_URL}/sitemap.xml
  `.trim();

  return new NextResponse(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
