


import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "../floating-navbar";
import { NavLink } from "react-router-dom";
import { useAppSelector } from "@/redux/hook";
import { ShadButton } from "../base/ShadButton";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@/redux/hook";
import { logout } from "@/redux/features/authSlice";

export function Navbar() {
  const { isAuthenticated } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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

  const rightElement = isAuthenticated ? (
    <ShadButton
      variant="outline"
      className="text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full"
      onClick={() => {
        if (window.confirm("Are you sure you want to logout?")) {
          dispatch(logout());
          navigate("/login", { replace: true });
        }
      }}
    >
      <LogOut className="h-4 w-4 mr-2" />
      Logout
    </ShadButton>
  ) : (
    <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
      <NavLink to="/login">Login</NavLink>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
    </button>
  );

  return (
    <div className=" w-full ">
      <FloatingNav navItems={navItems} rightElement={rightElement} />
    </div>
  );
}
