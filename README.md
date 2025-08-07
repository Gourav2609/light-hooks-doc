# 🪝 Light Hooks Documentation

<div align="center">

[![npm version](https://img.shields.io/npm/v/light-hooks?style=flat-square)](https://www.npmjs.com/package/light-hooks)
[![npm downloads](https://img.shields.io/npm/dm/light-hooks?style=flat-square)](https://www.npmjs.com/package/light-hooks)
[![bundle size](https://img.shields.io/bundlephobia/minzip/light-hooks?style=flat-square)](https://bundlephobia.com/package/light-hooks)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue?style=flat-square)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)

**The official documentation site for Light Hooks** - A collection of lightweight, performant, and type-safe React hooks for modern applications.

[📖 Documentation](https://www.lighthooks.com) • [📦 npm Package](https://www.npmjs.com/package/light-hooks) • [💻 GitHub](https://github.com/Gourav2609/light-hooks) • [🚀 Examples](https://www.lighthooks.com/docs/getting-started/quick-start-guide)

</div>

---

## 🌟 About Light Hooks

Light Hooks is a comprehensive collection of **16+ carefully crafted React hooks** designed to solve common development challenges with minimal overhead. Our hooks are:

- **🪶 Lightweight**: Minimal bundle impact with tree-shakable exports
- **⚡ Performant**: Optimized for speed and efficiency
- **🔒 Type-Safe**: Full TypeScript support with comprehensive type definitions
- **🧪 Well-Tested**: Extensively tested across different scenarios
- **📱 Universal**: Works seamlessly across web and React Native
- **🔧 Developer-Friendly**: Intuitive APIs with excellent documentation

## 🚀 Featured Hooks

<table>
<tr>
<td width="50%">

### 🎯 **State Management**
- [`useToggle`](https://www.lighthooks.com/docs/hooks/use-toggle) - Boolean state with convenience methods
- [`useLocalStorage`](https://www.lighthooks.com/docs/hooks/use-local-storage) - Persistent state with localStorage
- [`useDebounce`](https://www.lighthooks.com/docs/hooks/use-debounce) - Debounced values and callbacks
- [`useThrottle`](https://www.lighthooks.com/docs/hooks/use-throttle) - Throttled function execution

</td>
<td width="50%">

### 🌐 **Network & Data**
- [`useFetch`](https://www.lighthooks.com/docs/hooks/use-fetch) - Complete HTTP client with retry logic
- [`usePing`](https://www.lighthooks.com/docs/hooks/use-ping) - Network connectivity monitoring
- [`useGeolocation`](https://www.lighthooks.com/docs/hooks/use-geolocation) - Location tracking with permissions

</td>
</tr>
<tr>
<td>

### 🖱️ **User Interaction**
- [`useClickOutside`](https://www.lighthooks.com/docs/hooks/use-click-outside) - Outside click detection
- [`useHotkey`](https://www.lighthooks.com/docs/hooks/use-hotkey) - Keyboard shortcuts
- [`useCopyToClipboard`](https://www.lighthooks.com/docs/hooks/use-copy-to-clipboard) - Clipboard operations
- [`useIdle`](https://www.lighthooks.com/docs/hooks/use-idle) - User inactivity detection

</td>
<td>

### 📱 **Responsive & Browser**
- [`useIsMobile`](https://www.lighthooks.com/docs/hooks/use-is-mobile) - Device type detection
- [`useScroll`](https://www.lighthooks.com/docs/hooks/use-scroll) - Scroll position tracking
- [`usePermission`](https://www.lighthooks.com/docs/hooks/use-permission) - Browser permissions API
- [`useCountdown`](https://www.lighthooks.com/docs/hooks/use-countdown) - Timer and countdown functionality

</td>
</tr>
</table>

## 🏗️ Documentation Site

This repository contains the **official documentation website** for Light Hooks, built with modern web technologies:

### 🛠️ Tech Stack

- **[Next.js 15](https://nextjs.org)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first styling
- **[MDX](https://mdxjs.com)** - Enhanced markdown with React components
- **[Algolia Search](https://www.algolia.com)** - Powerful documentation search
- **[Vercel](https://vercel.com)** - Deployment and hosting

### 🎨 Features

- 📱 **Responsive Design** - Perfect on all devices
- 🔍 **Instant Search** - Find hooks and examples quickly
- 🎨 **Syntax Highlighting** - Beautiful code examples
- 📋 **Copy-to-Clipboard** - Easy code copying
- 🌙 **Dark Mode** - Eye-friendly dark theme
- ⚡ **Fast Loading** - Optimized for performance
- 🔗 **SEO Optimized** - Comprehensive meta tags and structured data

## 🚦 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/Gourav2609/light-hooks-doc.git
cd light-hooks-doc

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

```bash
# Start the development server
npm run dev
# or
yarn dev
# or
pnpm dev

# Open http://localhost:3000 in your browser
```

### Building for Production

```bash
# Build the site
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
light-hooks-doc/
├── app/                    # Next.js app directory
│   ├── docs/              # Documentation pages
│   ├── blog/              # Blog posts
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/                # UI components
│   ├── markdown/          # MDX components
│   └── contexts/          # React contexts
├── contents/              # Documentation content
│   ├── docs/              # Hook documentation
│   │   ├── hooks/         # Individual hook docs
│   │   └── getting-started/
│   └── blogs/             # Blog content
├── lib/                   # Utility functions
│   ├── routes-config.ts   # Navigation configuration
│   ├── seo.ts            # SEO utilities
│   └── utils.ts          # General utilities
├── public/               # Static assets
└── styles/               # CSS files
```

## 📝 Contributing to Documentation

We welcome contributions to improve the documentation! Here's how you can help:

### 🐛 Report Issues

- Found a typo or error? [Open an issue](https://github.com/Gourav2609/light-hooks-doc/issues)
- Missing examples? Let us know!
- Broken links? We'll fix them quickly

### ✨ Contribute Content

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b improve-docs
   ```
3. **Make your changes**
   - Edit MDX files in `contents/docs/`
   - Add new examples or clarify existing ones
   - Update navigation in `lib/routes-config.ts`
4. **Test locally**
   ```bash
   npm run dev
   ```
5. **Submit a pull request**

### 📋 Content Guidelines

- **Clear Examples**: Provide practical, real-world examples
- **TypeScript First**: All examples should include proper typing
- **Consistent Format**: Follow the established documentation structure
- **SEO Friendly**: Include proper frontmatter and descriptions

## 🔗 Links & Resources

<table>
<tr>
<td>

**📖 Documentation**
- [Getting Started](https://www.lighthooks.com/docs/getting-started/introduction)
- [Hook Categories](https://www.lighthooks.com/docs/hook-categories)
- [API Reference](https://www.lighthooks.com/docs/hooks)
- [Examples](https://www.lighthooks.com/docs/getting-started/quick-start-guide)

</td>
<td>

**🔧 Development**
- [npm Package](https://www.npmjs.com/package/light-hooks)
- [GitHub Repository](https://github.com/Gourav2609/light-hooks)
- [TypeScript Types](https://www.npmjs.com/package/@types/light-hooks)
- [Changelog](https://github.com/Gourav2609/light-hooks/releases)

</td>
</tr>
</table>

## 📊 Analytics & Performance

This documentation site includes:

- **Vercel Analytics** - Performance monitoring
- **Core Web Vitals** - Loading performance optimization
- **Search Analytics** - Documentation usage insights
- **SEO Tracking** - Search engine optimization metrics

## 📄 License

Documentation site licensed under [MIT License](LICENSE).

The Light Hooks library is also licensed under [MIT License](https://github.com/Gourav2609/light-hooks/blob/main/LICENSE).

---

<div align="center">

**Made with ❤️ by the Light Hooks team**

[🌟 Star on GitHub](https://github.com/Gourav2609/light-hooks) • [🐦 Follow Updates](https://twitter.com/lighthooks) • [💬 Join Discord](https://discord.gg/lighthooks)

</div>
