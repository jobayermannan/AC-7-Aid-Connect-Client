
// Import necessary dependencies




// Import your sub-components


import { Link } from 'react-router-dom';
import Sidebar from '../components/ui/sidebar/Sidebar';



export function Dashboard() {
  return (
     <div>
       <span className="px-4 md:px-8 text-sm font-medium relative border-neutral-200 text-black dark:text-white rounded-full">
         <span>
           <Link to="/"> Aid Connect</Link>
         </span>
         <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
       </span>
       <Sidebar />
     </div>
  );
}
