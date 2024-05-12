
import { motion, AnimatePresence } from "framer-motion";

import { Link, NavLink } from "react-router-dom";
import { cn } from "../../lib/utils";
import React from "react";

export const FloatingNav = ({
  navItems,

}: {
  navItems: {

    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const boldNavItemIndex = 0; // Index of the nav item you want to make bold

  return (
    <AnimatePresence>
  <motion.div
  initial={{ opacity: 1, y: 0 }} // Adjust the y value here
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.4 }}
  className={cn(
  "fixed top-8 left-0 right-0 z-[5000] flex justify-center items-center space-x-4 max-w-fit mx-auto p-4 border border-transparent shadow-lg",
  "bg-white dark:bg-black text-black dark:text-white",
  "rounded-full",
  "sm:top-8", // Adjust top positioning on small screens if needed
  "sm:space-x-2", // Reduce space between items on small screens
  "sm:p-2", // Reduce padding on small screens
  "md:top-8 md:space-x-4 md:p-4", // Adjustments for medium screens and up
)}
>

        {navItems.map((navItem, idx) => {
          if (idx === boldNavItemIndex) {
            return (
              <Link
                to={navItem.link}
                key={idx} // Ensure each button has a unique key
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
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
         <NavLink to="/login">Login</NavLink>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
