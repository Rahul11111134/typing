export default function sitemap() {
  // यहाँ अपनी वेबसाइट का सही URL डालें
  const baseUrl = 'https://test-typing-ai.vercel.app';

  // यहाँ आपकी वेबसाइट के सभी पेजों की लिस्ट है
  const pages = [
    '/',
    '/about',
    '/blog',
    '/help',
  ];

  const sitemapEntries = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  return sitemapEntries;
}
