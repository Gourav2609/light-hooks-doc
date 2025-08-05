import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { LightHooksBanner } from "@/components/light-hooks-banner";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/next"
import "@/styles/globals.css";

const sansFont = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: "400",
});

const monoFont = Space_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Light Hooks - Lightweight React Hooks Library | Documentation",
    template: "%s | Light Hooks Documentation"
  },
  metadataBase: new URL("https://www.lighthooks.com/"),
  description:
    "Comprehensive documentation for light-hooks, a collection of lightweight and efficient React hooks designed to simplify state management and common patterns in modern React applications. Features useLocalStorage, useIsMobile, and more.",
  keywords: [
    "React hooks",
    "React library",
    "useLocalStorage",
    "useIsMobile",
    "React state management",
    "lightweight React hooks",
    "custom React hooks",
    "React utilities",
    "JavaScript hooks",
    "TypeScript React hooks",
    "React documentation",
    "React development tools"
  ],
  authors: [{ name: "Light Hooks Team" }],
  creator: "Light Hooks",
  publisher: "Light Hooks",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Technology",
  classification: "React Library Documentation",
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' }
    ],
    shortcut: '/logo.svg',
    apple: '/logo.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.lighthooks.com/',
    siteName: 'Light Hooks Documentation',
    title: "Light Hooks - Lightweight React Hooks Library | Documentation",
    description: "Comprehensive documentation for light-hooks, a collection of lightweight and efficient React hooks designed to simplify state management and common patterns in modern React applications.",
    images: [
      {
        url: '/public-og.png',
        width: 1200,
        height: 630,
        alt: 'Light Hooks - React Hooks Library',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Light Hooks - Lightweight React Hooks Library",
    description: "Comprehensive documentation for light-hooks, a collection of lightweight and efficient React hooks for modern React applications.",
    images: ['/public-og.png'],
    creator: '@lighthooks',
    site: '@lighthooks',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://www.lighthooks.com/',
    languages: {
      'en-US': 'https://www.lighthooks.com/',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="algolia-site-verification" content="A343AA9A93FF47F6" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="color-scheme" content="light dark" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* Performance and Caching */}
        <meta httpEquiv="Cache-Control" content="public, max-age=31536000, immutable" />
        <meta name="preload" content="fonts" />
        
        {/* Security */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        
        {/* Additional SEO */}
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Light Hooks",
              "description": "A collection of lightweight and efficient React hooks for modern applications",
              "url": "https://www.lighthooks.com/",
              "logo": "https://www.lighthooks.com/logo.png",
              "sameAs": [
                "https://github.com/light-hooks/light-hooks",
                "https://www.npmjs.com/package/light-hooks"
              ]
            })
          }}
        />
        
        {/* Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Light Hooks Documentation",
              "description": "Comprehensive documentation for light-hooks React library",
              "url": "https://www.lighthooks.com/",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.lighthooks.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        
        {/* Structured Data - SoftwareApplication */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "Light Hooks",
              "description": "A collection of lightweight and efficient React hooks designed to simplify state management and common patterns in modern React applications",
              "applicationCategory": "DeveloperApplication",
              "operatingSystem": "Any",
              "programmingLanguage": ["JavaScript", "TypeScript"],
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD"
              },
              "author": {
                "@type": "Organization",
                "name": "Light Hooks Team"
              }
            })
          }}
        />
        
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.jsdelivr.net" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://vercel.live" />
        <link rel="dns-prefetch" href="https://vitals.vercel-analytics.com" />
      </head>
      <body
        className={`${sansFont.variable} ${monoFont.variable} font-regular antialiased tracking-wide`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LightHooksBanner />
          <Navbar />
          <main className="sm:container mx-auto w-[90vw] h-auto scroll-smooth">
            {children}
          </main>
          <Analytics />
          <SpeedInsights/>
        </ThemeProvider>
      </body>
    </html>
  );
}
