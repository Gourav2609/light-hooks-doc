// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
  tag?: string;
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Installation",
        href: "/installation",
      },
      { title: "Quick Start Guide", href: "/quick-start-guide" },

      // { title: "Algolia Search", href: "/algolia-search"},
      // { title: "Themes", href: "/themes" },
      // {
      //   title: "Customize",
      //   href: "/customize",
      // },
    ],
  },
  {
    title: "Hook Categories",
    href: "/hook-categories",
  },
  {
    title: "Hooks",
    href: "/hooks",
    items: [
      { title: "useIsMobile", href: "/use-is-mobile" },
      { title: "useClickOutside", href: "/use-click-outside" },
      { title: "useCountdown", href: "/use-countdown" },
      // {
      //   title: "useCustomEvent",
      //   href: "/use-custom-event",
      //   noLink: true,
      //   tag: "Coming Soon",
      // },
      {
        title: "useEvent",
        href: "/use-event",
        noLink: true,
        tag: "New",
      },
      { title: "useHotkey", href: "/use-hotkey",  },
      { title: "useLocalStorage", href: "/use-local-storage", tag: "New" },
      { title: "usePermission", href: "/use-permission", tag: "New" },
      { title: "usePing", href: "/use-ping" , tag: "Hot" },
    ],
  },
  { title: "Contributing", href: "/contributing" },
  { title: "FAQ", href: "/faq" },
];

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
