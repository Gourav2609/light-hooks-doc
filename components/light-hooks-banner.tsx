"use client";
import { StickyBanner } from "@/components/ui/sticky-banner";
import { usePathname } from "next/navigation";

export function LightHooksBanner() {
  const pathname = usePathname();
  
  // Don't show banner on landing page
  if (pathname === "/") {
    return null;
  }

  return (
    <StickyBanner className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 border-b">
      <p className="mx-0 max-w-[90%] text-white drop-shadow-md text-center text-sm sm:text-base">
        🚀 We&rsquo;re actively developing new and unique custom hooks for React!{" "}
        <a 
          href="https://github.com/Gourav2609/light-hooks" 
          target="_blank"
          rel="noopener noreferrer"
          className="transition duration-200 hover:underline font-semibold"
        >
          Contribute on GitHub
        </a>
      </p>
    </StickyBanner>
  );
}
