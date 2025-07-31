import { HeroTagLine } from "@/components/hero-tag-line";
import { HeroText } from "@/components/hero-text";
import { buttonVariants } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight-new";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { page_routes } from "@/lib/routes-config";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
        Comprehensive documentation for light-hooks, a collection of lightweight
        and efficient React hooks designed to simplify state management and
        common patterns in modern React applications.
      </p>
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
        <Link href={`/docs${page_routes[0].href}`}>
          <InteractiveHoverButton className="px-6 text-base">
            Get Started
          </InteractiveHoverButton>
        </Link>
        <Link
          href="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
      </div>
      <span className="sm:flex hidden flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-5 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"npm install light-hooks"}
      </span>
      </div>
    </>
  );
}
