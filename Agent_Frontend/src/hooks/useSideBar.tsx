import { useState } from "react";

export type SideBarNavItems = {
  id: number;
  icon?: null;
  navLabel: string;
};

const navItems: SideBarNavItems[] = [
  {
    id: 0,
    navLabel: "Dashboard",
  },
  {
    id: 1,
    navLabel: "Active Subreddits",
  },
  {
    id: 2,
    navLabel: "Painpoint Pipelines",
  },
  {
    id: 3,
    navLabel: "Reports & Analysis",
  },
  {
    id: 4,
    navLabel: "Agent Settings",
  },
];

export function useSideBar(): { sideBarNavs: SideBarNavItems[] } {
  const [sideBarNavs] = useState(navItems);

  return { sideBarNavs };
}
