import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Verify from "@/pages/Verify";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebarItems } from "./adminSidebarItems";
import { rideSidebarItems } from "./rideSidebarItems";
import { withAuth } from "@/utils/withAuth";
import Unauthorized from "@/pages/Unauthorized";
import { role } from "@/constants/role";
import { TRole } from "@/types";
import Homepage from "@/pages/Homepage";
import FeaturesSection from "@/pages/FeaturesSection";
import FaqSection from "@/pages/FaqSection";
import Contact from "@/pages/Contact";
import RideBooking from "@/components/modules/Rider/RideBooking";
import CreateDriver from "@/components/modules/Driver/CreateDriver";


export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Homepage,
        index: true,
      },  
      {
        Component: About,
        path: "about",
      },
   
      {
        Component: FeaturesSection,
        path: "features",
      },
      {
        Component: FaqSection,
        path: "faq",
      },
      {
        Component: Contact,
        path: "contact",
      },
      {
        Component: RideBooking,
        path: "ride-booking",
      },
      {
        Component: CreateDriver,
        path: "createDriver",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.superAdmin as TRole || role.admin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/analytics" /> },
      ...generateRoutes(adminSidebarItems),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.rider as TRole),
    path: "/rider",
    children: [
      { index: true, element: <Navigate to="/rider/analytics" /> },
      ...generateRoutes(rideSidebarItems),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
  {
    Component: Unauthorized,
    path: "/unauthorized",
  },

]);