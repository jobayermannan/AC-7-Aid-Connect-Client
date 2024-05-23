
// Import necessary dependencies




// Import your sub-components


import { Link } from 'react-router-dom';
import Sidebar from '../components/ui/sidebar/Sidebar';



export function Dashboard() {
  return (
   
      <div >
         <span className=' className="  px-4 md:px-8 text-sm font-medium relative border-neutral-200 text-black dark:text-white rounded-full   ' >  
             <span>
              <Link to="/"> Aid Connect</Link>
             </span>

          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </span> 
       <Sidebar></Sidebar>
     
       
    
   
   
      </div>
   
  );
}

 // SupplyPostsPage.jsx



    // <div className="p-10 bg-slate-400">
      //   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      //     {/* Existing Cards */}
      //     <Card className="col-span-1 md:col-span-2 p-5 bg-white shadow-md rounded-lg">
      //       <h2 className="font-bold text-xl mb-4  ">Dashboard Overview</h2>
      //       <p>Welcome to your dashboard. Here's a quick overview...</p>
      //       <Link to="/dashboard/supplies">
      //         <Button className="mt-4 text-black">Manage Supplies</Button>
      //       </Link>
      //       <Link to="/dashboard/create-supply">
      //         <Button className="mt-4 text-black">Add Supply Post</Button>
      //       </Link>
      //     </Card>
      //     {/* Other Cards */}
      //   </div>
      //   {/* Routing Setup */}
   
      // </div>