import RideAnalytics from "@/pages/Ride/RideAnalytics";
import RiderRideHistory from "@/pages/Ride/RiderRideHistory";
import UpdateProfile from "@/pages/Ride/UpdateProfile";
import { ISidebarItem } from "@/types";

export const rideSidebarItems: ISidebarItem[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Analytics",
        url: "/rider/analytics",
        component: RideAnalytics,
      },
    ],
  },
    {
        title: "Ride History",
        items: [
            {
                title: "My Ride History",
                url: "/rider/ride-history",
                component: RiderRideHistory
            }
        ],
    },
    {
        title: "Manage Profile",
        items: [
            {
                title: "Update Rider Profile",
                url: "/rider/update-profile",
                component: UpdateProfile
            }
        ],
    },
];
