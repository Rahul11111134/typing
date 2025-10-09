import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // यहाँ अपनी वेबसाइट का सही URL डालें
  const baseUrl = 'test-typing-ai.vercel.app';

  // यहाँ आपकी वेबसाइट के सभी पेजों की लिस्ट है
  const pages = [
    '/',
    '/about',
    '/blog',
    '/help',
    // भविष्य में आप और पेज यहाँ जोड़ सकते हैं
  ];

  const sitemapEntries = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  return sitemapEntries;
}
