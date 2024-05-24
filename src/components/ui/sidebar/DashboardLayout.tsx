import { Outlet } from "react-router";



import { cn } from "../../../lib/utils";
import { Dashboard } from "../../../pages/Dashboard";


export function DashboardLayout() {
	return (
	  <div className={cn('dark min-h-screen w-full flex', {'debug-screens': process.env.NODE_ENV === 'development'})}>
		 {/* Sidebar */}
		 <div className="border mr-6">
			<Dashboard></Dashboard>
		 </div>
 
		 {/* Main content area where <Outlet /> will render the matched route component */}
		 <div className="flex-1 mr-6">
			<Outlet/>
		 </div>
	  </div>
	);
 }