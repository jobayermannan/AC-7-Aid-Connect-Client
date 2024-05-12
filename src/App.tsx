
import MainLayout from "./components/ui/layout/MainLayout"
import React from 'react';

import { cn } from "./lib/utils";



const App: React.FC = () => {

 
  return( 
 
 <div className={cn('dark min-h-screen w-full ',{'debug-screens':process.env.NODE_ENV === 'development'})}>
  

    <MainLayout    >
   
     </MainLayout>




 </div>
 
)
  
}
export default App


