import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, CommandIcon } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "@/lib/routes-config";
import { SheetClose } from "@/components/ui/sheet";
import AlgoliaSearch from "./algolia-search";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Examples",
    href: "#",
  },
];

const algolia_props = {
  appId: process.env.ALGOLIA_APP_ID!,
  indexName: process.env.ALGOLIA_INDEX!,
  apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
};

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="lg:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-1 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">

          <Link
            href="https://github.com/Gourav2609/light-hooks"
            target="_blank"
            rel="noopener noreferrer"
            className="sm:flex hidden items-center gap-2"
          >
            <ShinyButton className="group px-3 py-1.5 text-sm font-semibold bg-black dark:bg-white text-white dark:text-black border-white/20 dark:border-black/20">
              <span className="flex items-center gap-1.5">
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
                Star us
              </span>
            </ShinyButton>
          </Link>
          <AlgoliaSearch {...algolia_props} />
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0 items-center gap-2">
              <Link
                href="https://github.com/Gourav2609/light-hooks"
                target="_blank"
                rel="noopener noreferrer"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <GithubIcon className="h-[1.1rem] w-[1.1rem]" />
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <CommandIcon className="w-6 h-6 text-muted-foreground" strokeWidth={2} />
      <h2 className="text-md font-bold font-code">Light Hooks</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold bg-primary/10 dark:bg-primary/10"
            absolute
            className="group relative flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:bg-muted hover:text-foreground dark:text-stone-300/85 text-stone-700 hover:scale-105"
            href={item.href}
          >
            <span className="relative z-10">{item.title}</span>
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}
