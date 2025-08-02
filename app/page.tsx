"use client";

import { HeroTagLine } from "@/components/hero-tag-line";
import { HeroText } from "@/components/hero-text";
import { Spotlight } from "@/components/ui/spotlight-new";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { page_routes } from "@/lib/routes-config";
import { TerminalSquareIcon, ArrowRight, Copy, Check } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("npm install light-hooks");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Spotlight
          translateY={-100}
          width={500}
          height={2400}
          smallWidth={220}
          duration={8}
          xOffset={80}
        />
      </div>

      <div className="relative flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-14 z-10">
        <div className="flex sm:flex-row flex-col items-center justify-center gap-4 mb-8">
          <Link
            href="https://github.com/Gourav2609/light-hooks"
            target="_blank"
            className="mb-5 sm:text-lg flex items-center gap-2  sm:-mt-12"
          >
            <HeroTagLine />
          </Link>
        </div>
        {/* <h1 className="text-[1.80rem] leading-8 sm:px-8 md:leading-[4.5rem] font-bold mb-4 sm:text-6xl text-left sm:text-center">
        Light Hooks
      </h1> */}
        <HeroText />
        <p className="mb-8 md:text-lg text-base  max-w-[1200px] text-muted-foreground text-left sm:text-center">
          A custom-built collection of lightweight and efficient React hooks crafted to 
          work seamlessly across all modern React frameworks and build tools. 
          Designed to simplify state management and common patterns in modern applications.
        </p>
        <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
          <Link href={`/docs${page_routes[0].href}`}>
            <ShinyButton className="group px-4 py-3 text-lg font-semibold bg-black dark:bg-white text-white dark:text-black border-white/20 dark:border-black/20 hover:shadow-lg hover:shadow-black/10 dark:hover:shadow-lg dark:hover:shadow-black/10">
              <span className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform duration-300 ease-out group-hover:translate-x-1" />
              </span>
            </ShinyButton>
          </Link>
          <Link
            href="/examples"
            className="group px-6 py-3 text-md font-medium underline underline-offset-4 decoration-2 transition-all duration-300 hover:bg-muted hover:no-underline rounded-lg"
          >
            See Examples
          </Link>
        </div>
        <div className="sm:flex hidden flex-row items-center sm:gap-2 gap-0.5 text-muted-foreground text-md mt-5 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
          <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
          <span className="select-all">npm install light-hooks</span>
          <button
            onClick={copyToClipboard}
            className="ml-2 p-1.5 rounded-md hover:bg-muted transition-colors duration-200 group"
            aria-label="Copy to clipboard"
          >
            {isCopied ? (
              <Check className="w-4 h-4 text-green-500" />
            ) : (
              <Copy className="w-4 h-4 group-hover:text-foreground transition-colors" />
            )}
          </button>
        </div>
      </div>
    </>
  );
}
