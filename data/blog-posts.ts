// Blog post data structure
export interface Author {
  name: string;
  username: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  description: string;
  slug?: string; // For local posts
  externalUrl?: string; // For external posts
  platform?: string; // For external posts (Medium, LinkedIn, etc.)
  date: string;
  readTime: string;
  cover: string;
  type: "local" | "external";
  tags: string[];
  authors: Author[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Custom React Hooks: Best Practices and Patterns",
    description: "Learn how to create efficient, reusable hooks that follow React's principles and provide excellent developer experience.",
    slug: "building-custom-react-hooks",
    date: "2024-12-15",
    readTime: "8 min read",
    cover: "/blog-covers/react-hooks-guide.jpg",
    type: "local",
    tags: ["React", "Hooks", "Best Practices"],
    authors: [
      {
        name: "Gourav Kumar",
        username: "gourav2609",
        avatar: "/avatars/gourav.jpg",
      }
    ],
  },
  {
    id: "2",
    title: "The Complete Guide to useClickOutside Hook",
    description: "Everything you need to know about implementing click-outside detection in React applications.",
    slug: "complete-guide-useclickoutside",
    date: "2024-12-10",
    readTime: "6 min read",
    cover: "/blog-covers/click-outside-guide.jpg",
    type: "local",
    tags: ["React", "Hooks", "UI/UX"],
    authors: [
      {
        name: "Gourav Kumar",
        username: "gourav2609", 
        avatar: "/avatars/gourav.jpg",
      }
    ],
  },
  {
    id: "3",
    title: "Modern React Development with Light Hooks",
    description: "Discover how light-hooks can streamline your React development workflow and improve code maintainability.",
    externalUrl: "https://medium.com/@gourav2609/modern-react-development-with-light-hooks",
    platform: "Medium",
    date: "2024-12-05",
    readTime: "10 min read",
    cover: "/blog-covers/modern-react.jpg",
    type: "external",
    tags: ["React", "Performance", "DX"],
    authors: [
      {
        name: "Gourav Kumar",
        username: "gourav2609",
        avatar: "/avatars/gourav.jpg",
      }
    ],
  },
  {
    id: "4",
    title: "State Management Patterns in Modern React",
    description: "Exploring different state management approaches and when to use custom hooks vs external libraries.",
    externalUrl: "https://linkedin.com/pulse/state-management-patterns-modern-react-gourav-kumar",
    platform: "LinkedIn",
    date: "2024-11-28",
    readTime: "12 min read",
    cover: "/blog-covers/state-management.jpg",
    type: "external",
    tags: ["State Management", "React", "Architecture"],
    authors: [
      {
        name: "Gourav Kumar",
        username: "gourav2609",
        avatar: "/avatars/gourav.jpg",
      }
    ],
  },
  {
    id: "5",
    title: "Performance Optimization with Custom Hooks",
    description: "Learn advanced techniques for building performant React hooks that scale with your application.",
    slug: "performance-optimization-custom-hooks",
    date: "2024-11-20",
    readTime: "15 min read",
    cover: "/blog-covers/performance-hooks.jpg",
    type: "local",
    tags: ["Performance", "React", "Optimization"],
    authors: [
      {
        name: "Gourav Kumar",
        username: "gourav2609",
        avatar: "/avatars/gourav.jpg",
      }
    ],
  },
  {
    id: "6",
    title: "Building a Hook Library: Lessons Learned",
    description: "My journey creating light-hooks and the challenges faced while building a production-ready hook library.",
    externalUrl: "https://dev.to/gourav2609/building-hook-library-lessons-learned",
    platform: "Dev.to",
    date: "2024-11-15",
    readTime: "8 min read", 
    cover: "/blog-covers/library-lessons.jpg",
    type: "external",
    tags: ["Open Source", "Library", "React"],
    authors: [
      {
        name: "Gourav Kumar",
        username: "gourav2609",
        avatar: "/avatars/gourav.jpg",
      }
    ],
  },
];

// Helper functions for filtering and sorting blog posts
export const getLocalPosts = () => blogPosts.filter(post => post.type === "local");
export const getExternalPosts = () => blogPosts.filter(post => post.type === "external");
export const getAllPosts = () => blogPosts;
export const getPostById = (id: string) => blogPosts.find(post => post.id === id);
export const getPostBySlug = (slug: string) => blogPosts.find(post => post.slug === slug);
export const getPostsByTag = (tag: string) => blogPosts.filter(post => 
  post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
);
export const getPostsByAuthor = (username: string) => blogPosts.filter(post =>
  post.authors.some(author => author.username === username)
);
