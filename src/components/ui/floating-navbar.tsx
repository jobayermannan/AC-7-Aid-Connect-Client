import { Link, NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import { useAutoAnimate } from "@formkit/auto-animate/react";


export const FloatingNav = ({
  navItems,
  rightElement,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
  rightElement?: JSX.Element;
}) => {
  const boldNavItemIndex = 0;
  const [parent] = useAutoAnimate();

  return (
    <div
      ref={parent}
      className={cn(
        "fixed top-8 left-0 right-0 z-[5000] flex justify-center items-center space-x-4 max-w-fit mx-auto p-4 border border-transparent shadow-lg",
        "bg-white dark:bg-black text-black dark:text-white",
        "rounded-full",
        "sm:top-8",
        "sm:space-x-2",
        "sm:p-2",
        "md:top-8 md:space-x-4 md:p-4",
      )}
    >
      {navItems.map((navItem, idx) => {
        if (idx === boldNavItemIndex) {
          return (
            <Link
              to={navItem.link}
              key={idx}
              className="text-sm font-medium relative  border-neutral-200 text-black dark:text-white px-4 py-2  dark:hover:text-neutral-300 "
            >
              {navItem.name}
              <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
            </Link>
          );
        } else {
          return (
            <Link
              key={idx}
              to={navItem.link}
              className={cn(
                "relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500"
              )}
            >
              <span className="block sm:hidden">{navItem.icon}</span>
              <span className="hidden sm:block text-sm">{navItem.name}</span>
            </Link>
          );
        }
      })}
      {rightElement ?? (
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
         <NavLink to="/login">Login</NavLink>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
        )}
    </div>
  );
};
