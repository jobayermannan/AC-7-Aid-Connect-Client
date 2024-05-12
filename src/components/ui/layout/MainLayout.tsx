import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import Footer from "./Footer";





const MainLayout= () => {


  
  return (
	
	 <div className=" ">
	
	<div
	className="">
		
		<Navbar></Navbar>
		<Outlet/>
		<Footer></Footer>
	
	</div>


	 
			
 </div>

 
	

  );
};

export default MainLayout;


	  