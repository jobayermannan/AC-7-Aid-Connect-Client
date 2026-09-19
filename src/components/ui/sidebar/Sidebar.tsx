import { useState } from "react";
import { Nav } from "./nav";


	
import { Box, ChevronRight,  InfoIcon, LayoutDashboard, PlusSquare, User, LogOut } from "lucide-react";
import { ShadButton } from "../base/ShadButton";
import {
  
  useWindowWidth
} from '@react-hook/window-size'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '@/redux/hook';
import { logout } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';



const 
Sidebar = () => {

const [isCollapsed,setIsCollapsed] =useState(false)
const navigate = useNavigate();
const dispatch = useAppDispatch();

const onlyWidth = useWindowWidth()
const mobileWidth = onlyWidth <768
 const toggleBar= () =>{
	 setIsCollapsed(!isCollapsed)
 }

  return (
	 <div  className="relative min-w-[80px]  px-3  pb-10 pt-24 ">
      
       {!mobileWidth &&(

<div className="absolute right-[-20px] top-7">
<ShadButton onClick={toggleBar} variant='secondary' className="rounded-full p-2" aria-label="Toggle sidebar">
  <ChevronRight/>
</ShadButton>
</div>
       )}
	     <Nav
            isCollapsed={ mobileWidth ? true: isCollapsed}
            links={[
              {
                title: "Dashboard",
                icon:LayoutDashboard,
                variant: "ghost",
				 href: '/admin'
              },
              {
                title: "Profile",
                icon:User,
                variant: "ghost",
				      href: '/admin/profile'
              },
             
              {
                title: "All Supply Post",
                icon:Box,
                variant: "ghost",
				      href: '/admin/supplies'
              },
              {
                title: "Create Supply",
                icon:PlusSquare,
                variant: "ghost",
				      href: '/admin/create-supply'
              },
			 {
				title: "About",
				icon:InfoIcon,
				variant: "ghost",
				href: '/admin/about-us'
			 },
            
            ]}
          />
		  <div className="mt-auto pt-4">
		    <ShadButton
		      variant="ghost"
		      className="w-full justify-start"
		      onClick={() => {
		        if (window.confirm('Are you sure you want to logout?')) {
		          toast.success("You've been logged out.");
		          dispatch(logout());
		          setTimeout(() => navigate('/login', { replace: true }), 1000);
		        }
		      }}
		    >
		      <LogOut className="h-4 w-4 mr-2" />
		      <span>Logout</span>
		    </ShadButton>
		  </div>
	 </div>
  );
};

export default Sidebar;