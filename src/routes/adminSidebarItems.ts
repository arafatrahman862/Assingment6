
// import Analytics from "@/pages/Admin/Analytics";
import AdminAnalytics from "@/pages/Admin/AdminAnalytics";
import AdminRideHistory from "@/pages/Admin/AdminRideHistory";
import ManageDrivers from "@/pages/Admin/ManageDrivers";
import ManageFeedBacks from "@/pages/Admin/ManageFeedBacks";
import ManageUsers from "@/pages/Admin/ManageUsers";
import UpdateProfile from "@/pages/Admin/UpdateProfile";
import { ISidebarItem } from "@/types";
import { lazy } from "react";

const Analytics = lazy(() => import("@/pages/Admin/AdminAnalytics"));

export const adminSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/admin/analytics",
        component: AdminAnalytics,
      },
    ],
  },
  {
        title: "Ride History",
        items: [
            {
                title: "All Rides",
                url: "/admin/ride-history",
                component: AdminRideHistory
            }
        ],
    },
    {
        title: "User Management",
        items: [
            {
                title: "Manage Users",
                url: "/admin/manage-users",
                component: ManageUsers
            },
            {
                title: "Manage Drivers",
                url: "/admin/manage-drivers",
                component: ManageDrivers
            },
            {
                title: "Manage Feedbacks",
                url: "/admin/manage-feedbacks",
                component: ManageFeedBacks
            }
        ],
    },
    {
        title: "Manage Admin Profile",
        items: [
            {
                title: "Update Profile",
                url: "/admin/update-profile",
                component: UpdateProfile
            }
        ],
    },
];
