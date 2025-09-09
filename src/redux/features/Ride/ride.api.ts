import { baseApi } from "@/redux/baseApi";

export const rideApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (bookingData) => ({
        url: "/rides/request",
        method: "POST",
        body: bookingData, 
      }),
      invalidatesTags: ["BOOKING"],
    }),
      cancelBooking: builder.mutation<{ message: string }, string>({
      query: (rideId) => ({
        url: `/rides/${rideId}/status`,
        method: "PATCH",
        body: { rideStatus: "CANCELLED" },
      }),
      invalidatesTags: ["BOOKING"],
    }),
    getAllBookingHistory: builder.query({
      query: () => ({
        url: "/rides/me",
        method: "GET",
      }),
      providesTags: ["BOOKING"],
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useCancelBookingMutation,
  useGetAllBookingHistoryQuery,
} = rideApi;
