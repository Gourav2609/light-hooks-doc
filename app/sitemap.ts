import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.lighthooks.com'
  
  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]
  
  // Documentation routes
  const docRoutes = [
    'getting-started/introduction',
    'getting-started/installation',
    'getting-started/quick-start-guide',
    'getting-started/project-structure',
    'getting-started/customize',
    'getting-started/themes',
    'getting-started/i18n',
    'getting-started/algolia-search',
    'getting-started/components',
    'getting-started/components/code-block',
    'getting-started/components/custom',
    'getting-started/components/file-system',
    'getting-started/components/image-link',
    'getting-started/components/note',
    'getting-started/components/stepper',
    'getting-started/components/tabs',
    'hooks/use-local-storage',
    'hooks/use-is-mobile',
  ].map(route => ({
    url: `${baseUrl}/docs/${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  // Blog routes
  const blogRoutes = [
    'file-rec',
    'next-react',
  ].map(slug => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))
  
  return [...staticRoutes, ...docRoutes, ...blogRoutes]
}
