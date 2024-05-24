import { useState } from "react";
import { Nav } from "./nav";


	
import { Box, ChevronRight,  InfoIcon, LayoutDashboard, PlusSquare, User } from "lucide-react";
import { ShadButton } from "../ShadButton";
import {
  
  useWindowWidth
} from '@react-hook/window-size'




const 
Sidebar = () => {

const [isCollapsed,setIsCollapsed] =useState(false)

const onlyWidth = useWindowWidth()
const mobileWidth = onlyWidth <768
 const toggleBar= () =>{
	 setIsCollapsed(!isCollapsed)
 }

  return (
	 <div  className="relative min-w-[80px]  px-3  pb-10 pt-24 ">
     
       {!mobileWidth &&(

<div className="absolute right-[-20px] top-7">
<ShadButton onClick={toggleBar} variant='secondary' className="rounded-full p-2">
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
			  
	 </div>
  );
};

export default Sidebar;

