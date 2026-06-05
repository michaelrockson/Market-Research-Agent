import { useState } from "react";
import { MdDashboard } from "react-icons/md";
import type { IconType } from "react-icons";

export type SideBarNavItems = {
  id: number;
  icon?: IconType;
  navLabel: string;
};

const navItems: SideBarNavItems[] = [
  {
    id: 0,
    navLabel: "Dashboard",
    icon: MdDashboard,
  },
  // {
  //   id: 1,
  //   navLabel: "Active Subreddits",
  //   icon: FaReddit,
  // },
  // {
  //   id: 2,
  //   navLabel: "Painpoint Pipelines",
  //   icon: IoMdFunnel,
  // },
  // {
  //   id: 3,
  //   navLabel: "Reports & Analysis",
  //   icon: MdBarChart,
  // },
  // {
  //   id: 4,
  //   navLabel: "Agent Settings",
  //   icon: MdSettings,
  // },
];

export function useSideBar(): { sideBarNavs: SideBarNavItems[] } {
  const [sideBarNavs] = useState(navItems);

  return { sideBarNavs };
}
