import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Clock, ArrowRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { getLocalPosts, getExternalPosts, BlogPost, Author } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Light Hooks - Blog",
  description: "Latest articles, tutorials, and insights about React hooks development and best practices.",
};

export default function BlogPage() {
  const localPosts = getLocalPosts();
  const externalPosts = getExternalPosts();

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
          Blog & Articles
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on React development, custom hooks, and modern web development practices.
        </p>
      </div>

      {/* Featured/Recent Posts */}
      {localPosts.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold">Latest Articles</h2>
            <Badge variant="secondary" className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300">
              On Site
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}

      {/* External Posts */}
      {externalPosts.length > 0 && (
        <section>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl font-bold">Published Elsewhere</h2>
            <Badge variant="outline" className="border-blue-200 text-blue-700 dark:border-blue-800 dark:text-blue-300">
              External
            </Badge>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {externalPosts.map((post) => (
              <ExternalBlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
    >
      <div className="aspect-video relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
          <span className="text-4xl font-bold text-muted-foreground/50">
            {post.title.charAt(0)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag: string) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
        
        <div className="flex items-center gap-2 mt-4 pt-4 border-t">
          <AvatarGroup users={post.authors} />
        </div>
      </div>
    </Link>
  );
}

function ExternalBlogCard({ post }: { post: BlogPost }) {
  const platformColors = {
    Medium: "bg-gray-800 text-white",
    LinkedIn: "bg-blue-600 text-white", 
    "Dev.to": "bg-black text-white"
  };

  return (
    <a
      href={post.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 relative"
    >
      {/* External indicator */}
      <div className="absolute top-3 right-3 z-10">
        <div className={`px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1 ${platformColors[post.platform as keyof typeof platformColors] || 'bg-gray-600 text-white'}`}>
          <ExternalLink className="w-3 h-3" />
          {post.platform}
        </div>
      </div>
      
      <div className="aspect-video relative overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
          <span className="text-4xl font-bold text-muted-foreground/50">
            {post.title.charAt(0)}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {post.tags.slice(0, 2).map((tag: string) => (
            <Badge key={tag} variant="outline" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
        
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {post.description}
        </p>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </div>
          </div>
          
          <ExternalLink className="w-4 h-4 group-hover:scale-110 transition-transform" />
        </div>
        
        <div className="flex items-center gap-2 mt-4 pt-4 border-t">
          <AvatarGroup users={post.authors} />
        </div>
      </div>
    </a>
  );
}

function AvatarGroup({ users, max = 3 }: { users: Author[]; max?: number }) {
  const displayUsers = users.slice(0, max);
  const remainingUsers = Math.max(users.length - max, 0);

  return (
    <div className="flex items-center">
      {displayUsers.map((user, index) => (
        <Avatar
          key={user.username}
          className={`inline-block border-2 border-background w-8 h-8 ${
            index !== 0 ? "-ml-2" : ""
          }`}
        >
          <AvatarFallback className="text-xs">
            {user.name.split(' ').map((n: string) => n[0]).join('').toUpperCase()}
          </AvatarFallback>
        </Avatar>
      ))}
      {remainingUsers > 0 && (
        <Avatar className="-ml-2 inline-block border-2 border-background w-8 h-8">
          <AvatarFallback className="text-xs">+{remainingUsers}</AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
