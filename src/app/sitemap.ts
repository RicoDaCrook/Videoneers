import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://videoneers.de'
  
  const staticPages = ['', '/impressum', '/datenschutz', '/agb']

  const staticSitemap = staticPages.map(route => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Here you would fetch dynamic pages from your CMS
  // const blogPosts = await getBlogPosts()
  // const portfolioItems = await getPortfolioItems()

  return [
    ...staticSitemap,
    // ...blogPosts.map(post => ({
    //   url: `${baseUrl}/blog/${post.slug}`,
    //   lastModified: post.updatedAt,
    //   changeFrequency: 'monthly' as const,
    //   priority: 0.6,
    // })),
  ]
}
