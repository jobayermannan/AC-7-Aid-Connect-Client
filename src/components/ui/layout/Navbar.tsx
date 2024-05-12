


import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "../floating-navbar";

export function Navbar() {
  const navItems = [
    {
      name: "Aid Connect",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "All Supplies",
      link: "/all-supplies",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Dashboard",
      link: "/admin",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="  w-full ">
  
      <FloatingNav navItems={navItems} />
    
    </div>
  );
}
