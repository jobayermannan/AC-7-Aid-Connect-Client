import MainLayout from "./components/ui/layout/MainLayout"
import React from 'react';

import { cn } from "./lib/utils";



const App: React.FC = () => {

  
  return( 
 
 <div className={cn('dark min-h-screen w-full ',{'debug-screens':process.env.NODE_ENV === 'development'})}>
   <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-health-accent focus:text-white focus:rounded">
    Skip to main content
  </a>

    <MainLayout    >
    
     </MainLayout>



  </div>
  
 )
   
}
export default App
