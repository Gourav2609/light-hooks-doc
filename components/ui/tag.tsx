import { cn } from "@/lib/utils";
import { Flame, Sparkles, Star, Zap } from "lucide-react";

interface TagProps {
  tag: string;
  className?: string;
}

export function Tag({ tag, className }: TagProps) {
  const getTagConfig = (tagName: string) => {
    switch (tagName.toLowerCase()) {
      case "hot":
        return {
          icon: Flame,
          className: "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg shadow-red-500/25",
          iconClassName: "text-yellow-200"
        };
      case "new":
        return {
          icon: Sparkles,
          className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25",
          iconClassName: "text-blue-200"
        };
      case "popular":
        return {
          icon: Star,
          className: "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/25",
          iconClassName: "text-purple-200"
        };
      case "coming soon":
        return {
          icon: Zap,
          className: "bg-gradient-to-r from-gray-400 to-gray-500 text-white shadow-lg shadow-gray-500/25",
          iconClassName: "text-gray-200"
        };
      default:
        return {
          icon: null,
          className: "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg shadow-blue-500/25",
          iconClassName: "text-blue-200"
        };
    }
  };

  const { icon: Icon, className: tagClassName, iconClassName } = getTagConfig(tag);

  return (
    <span 
      className={cn(
        "inline-flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-all duration-200 hover:scale-105",
        tagClassName,
        className
      )}
    >
      {Icon && <Icon className={cn("h-3 w-3", iconClassName)} />}
      {tag}
    </span>
  );
}
