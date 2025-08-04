import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { Navbar } from "@/components/navbar";
import { LightHooksBanner } from "@/components/light-hooks-banner";
import { Space_Mono, Space_Grotesk } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';
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
  title: "Light Hooks - Documentation",
  metadataBase: new URL("https://light-hooks-docs.vercel.app/"),
  description:
    "Comprehensive documentation for light-hooks, a collection of lightweight and efficient React hooks designed to simplify state management and common patterns in modern React applications.",
  icons: {
    icon: [
      { url: '/logo.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' }
    ],
    shortcut: '/logo.svg',
    apple: '/logo.png',
  },
  openGraph: {
    title: "Light Hooks - Documentation",
    description: "Comprehensive documentation for light-hooks, a collection of lightweight and efficient React hooks.",
    images: ['/logo.png'],
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
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
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
        </ThemeProvider>
      </body>
    </html>
  );
}
