import { Metadata } from 'next'

interface SEOProps {
  title: string
  description: string
  keywords?: string[]
  image?: string
  url?: string
  type?: 'website' | 'article'
  publishedTime?: string
  modifiedTime?: string
  authors?: string[]
  section?: string
  tags?: string[]
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  image = '/public-og.png',
  url = '',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Light Hooks Team'],
  section = 'Documentation',
  tags = [],
}: SEOProps): Metadata {
  const baseUrl = 'https://www.lighthooks.com'
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl
  const fullImageUrl = image.startsWith('http') ? image : `${baseUrl}${image}`

  const defaultKeywords = [
    'React hooks',
    'React library',
    'JavaScript',
    'TypeScript',
    'React documentation',
    'useLocalStorage',
    'useIsMobile',
    'React state management',
    'custom hooks',
    'light-hooks'
  ]

  const allKeywords = [...new Set([...defaultKeywords, ...keywords, ...tags])]

  const metadata: Metadata = {
    title,
    description,
    keywords: allKeywords,
    authors: authors.map(name => ({ name })),
    creator: 'Light Hooks Team',
    publisher: 'Light Hooks',
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: 'Light Hooks Documentation',
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_US',
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [fullImageUrl],
      creator: '@lighthooks',
      site: '@lighthooks',
    },
    alternates: {
      canonical: fullUrl,
    },
  }

  // Add article-specific metadata
  if (type === 'article') {
    metadata.openGraph = {
      ...metadata.openGraph,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: authors,
      section,
      tags,
    }
  }

  return metadata
}

// Predefined metadata for common pages
export const homePageSEO = generateSEOMetadata({
  title: 'Light Hooks - Lightweight React Hooks Library',
  description: 'A collection of lightweight and efficient React hooks designed to simplify state management and common patterns in modern React applications. Start building better React apps today.',
  keywords: ['React hooks library', 'lightweight', 'efficient', 'state management'],
  url: '/',
})

export const docsPageSEO = generateSEOMetadata({
  title: 'Documentation - Light Hooks',
  description: 'Complete documentation for Light Hooks React library. Learn how to use useLocalStorage, useIsMobile, and other powerful hooks in your React applications.',
  keywords: ['React hooks documentation', 'API reference', 'examples', 'tutorials'],
  url: '/docs',
})

export const blogPageSEO = generateSEOMetadata({
  title: 'Blog - Light Hooks',
  description: 'Latest news, updates, and tutorials about Light Hooks React library. Stay updated with the latest features and best practices.',
  keywords: ['React hooks blog', 'tutorials', 'updates', 'news'],
  url: '/blog',
})

export const useLocalStorageSEO = generateSEOMetadata({
  title: 'useLocalStorage Hook - Light Hooks',
  description: 'Learn how to use the useLocalStorage hook for persistent state management in React. Complete API reference with examples and TypeScript support.',
  keywords: ['useLocalStorage', 'localStorage', 'React state', 'persistent state', 'local storage hook'],
  url: '/docs/hooks/use-local-storage',
  type: 'article',
  section: 'Hooks',
  tags: ['hooks', 'localStorage', 'state management'],
})

export const useIsMobileSEO = generateSEOMetadata({
  title: 'useIsMobile Hook - Light Hooks',
  description: 'Detect mobile devices and responsive breakpoints with the useIsMobile hook. Includes TypeScript support and custom breakpoint configuration.',
  keywords: ['useIsMobile', 'mobile detection', 'responsive design', 'breakpoints', 'mobile hook'],
  url: '/docs/hooks/use-is-mobile',
  type: 'article',
  section: 'Hooks',
  tags: ['hooks', 'mobile', 'responsive', 'breakpoints'],
})
