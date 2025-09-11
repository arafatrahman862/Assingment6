import { baseApi } from "@/redux/baseApi";

// Admin API endpoints
export const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Fetch all users with optional query parameters (pagination, filtering)
    getAllUsers: builder.query({
      query: (params) => ({
        url: "/users/all-users",  // Your backend endpoint
        method: "GET",
        params, // For pagination, search filters, etc.
      }),
      providesTags: ["USER"],  // Used for cache invalidation
    }),

    // Change user status (active, blocked, etc.)
    changeUserStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/users/change-status/${id}`,  // Backend endpoint for changing user status
        method: "PATCH",
        data: { status }, // Sending the new status as data
      }),
      invalidatesTags: ["USER"],  // Invalidate USERS cache after mutation
    }),

    // Fetch all drivers (similar to getAllUsers)
    getAllDrivers: builder.query({
      query: (params) => ({
        url: "/drivers/all-drivers",  // Your backend endpoint for drivers
        method: "GET",
        params, // Optional query params (pagination, search)
      }),
      providesTags: ["DRIVER"],  // For cache invalidation
    }),

    // Change driver status (active, blocked, etc.)
    changeDriverStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/drivers/status/${id}`,  // Backend endpoint for driver status
        method: "PATCH",
        data: { status }, // Sending the new status as data
      }),
      invalidatesTags: ["DRIVER"],  // Invalidate DRIVERS cache after mutation
    }),

    // Manage user feedbacks (assuming feedbacks are an important part of the admin panel)
    getAllFeedbacks: builder.query({
      query: () => ({
        url: "/feedbacks",  // Backend endpoint for feedbacks
        method: "GET",
      }),
      providesTags: ["FEEDBACK"],  // Tag for feedback cache invalidation
    }),

    // Delete feedback (or other feedback management actions)
    deleteFeedback: builder.mutation({
      query: (id) => ({
        url: `/feedbacks/${id}`,  // Backend endpoint for deleting feedback
        method: "DELETE",
      }),
      invalidatesTags: ["FEEDBACK"],  // Invalidate feedback cache after mutation
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useChangeUserStatusMutation,
  useGetAllDriversQuery,
  useChangeDriverStatusMutation,
  useGetAllFeedbacksQuery,
  useDeleteFeedbackMutation,
} = adminApi;
