import { baseApi } from "@/redux/baseApi";

export const driverApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Promote a user to a driver
    promoteToDriver: builder.mutation({
      query: (userId) => ({
        url: `/drivers/promote-to-driver/${userId}`, // Endpoint for promoting user to driver
        method: "PATCH",
      }),
      invalidatesTags: ["USER", "DRIVER"], // Invalidating USER and DRIVER data
    }),

    // Fetch all drivers
    getAllDrivers: builder.query({
      query: () => ({
        url: "/drivers/all", // Endpoint to get all drivers
        method: "GET",
      }),
      providesTags: ["DRIVER"], // Provides DRIVER tag for caching and invalidation
    }),

    // Get a specific driver's details
    getDriverDetails: builder.query({
      query: (driverId) => ({
        url: `/drivers/${driverId}`, // Endpoint for fetching driver details by ID
        method: "GET",
      }),
      providesTags: ["DRIVER"],
    }),

    // Update driver status (e.g., approve or suspend)
    updateDriverStatus: builder.mutation({
      query: ({ driverId, status }) => ({
        url: `/drivers/${driverId}/status`, // Endpoint to update driver status
        method: "PATCH",
        body: { status }, // Pass status (approved, suspended, etc.)
      }),
      invalidatesTags: ["DRIVER"],
    }),
  }),
});

export const {
  usePromoteToDriverMutation,
  useGetAllDriversQuery,
  useGetDriverDetailsQuery,
  useUpdateDriverStatusMutation,
} = driverApi;
