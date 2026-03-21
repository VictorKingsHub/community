export type NavItem = {
  label: string;
  href?: string;
  children?: NavItem[];
};

export const navLinks: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Communities",
    children: [
      { label: "All Communities", href: "/communities" },
      { label: "Umudi", href: "/communities/umudi" },
      { label: "Ukomi", href: "/communities/ukomi" },
      { label: "Amaekwuru", href: "/communities/amaekwuru" },
      { label: "Uru", href: "/communities/uru" },
      { label: "Ihite", href: "/communities/ihite" },
    ],
  },
  {
    label: "Heritage",
    children: [
      { label: "Culture", href: "/heritage/culture" },
      { label: "Education", href: "/heritage/education" },
      { label: "Festivals", href: "/heritage/festivals" },
      { label: "Market Day (Nkwo)", href: "/heritage/market" },
      { label: "History", href: "/heritage/history" },
    ],
  },
  {
    label: "Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];