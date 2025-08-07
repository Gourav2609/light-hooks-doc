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
      { title: "useClickOutside", href: "/use-click-outside" },
      { title: "useCopyToClipboard", href: "/use-copy-to-clipboard", tag: "New" },
      { title: "useCountdown", href: "/use-countdown" },
      { title: "useDebounce", href: "/use-debounce", tag: "New" },
      // { title: "useEvent", href: "/use-event", noLink: true, tag: "New" },
      { title: "useFetch", href: "/use-fetch", tag: "New" },
      { title: "useGeolocation", href: "/use-geolocation", tag: "New" },
      { title: "useHotkey", href: "/use-hotkey" },
      { title: "useIdle", href: "/use-idle", tag: "New" },
      { title: "useIsMobile", href: "/use-is-mobile" },
      { title: "useLocalStorage", href: "/use-local-storage" },
      { title: "usePermission", href: "/use-permission" },
      { title: "usePing", href: "/use-ping", tag: "Hot" },
      { title: "useScroll", href: "/use-scroll" },
      { title: "useThrottle", href: "/use-throttle", tag: "New" },
      { title: "useToggle", href: "/use-toggle", tag: "New" },
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
