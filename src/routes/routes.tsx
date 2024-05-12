

import App from "@/App";
import Home from "@/components/ui/layout/Home";

import CreateSupplyPostPage from "@/pages/CreateSupplyPostPage";
import DashboardMainPage from "@/pages/DashboardMainpage";
import Login from "@/pages/Login";






import Register from "@/pages/Register";


import {
 

  createBrowserRouter,
} from "react-router-dom";
import { DashboardLayout } from "@/components/ui/sidebar/DashboardLayout";
import DashboardProfile from "@/pages/DashboardProfile";
import AboutUs from "@/pages/AboutUs";
import AllSupplies from "@/pages/AllSupplies";
import DashBoardAllSupplies from "@/pages/DashBoardAllSupplies";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [

   
      { path: "/",
       element: <Home /> 
      },
      { path: "/all-supplies",
       element: <AllSupplies /> 
      },
   
      { path: "register",
       element: <Register /> 
      },
      { path: "login",
       element: <Login></Login>
      },
      
     
    ],
  },
  {
    path: "/admin",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      { path: "/admin", element: <DashboardMainPage /> },
      { path: "/admin/profile", element: <DashboardProfile /> },
      { path: "/admin/supplies", element: <DashBoardAllSupplies /> },
      { path: "/admin/create-supply", element: <CreateSupplyPostPage /> },
      { path: "/admin/about-us", element: <AboutUs/> },
     
    ]
  
  
    }


]);
