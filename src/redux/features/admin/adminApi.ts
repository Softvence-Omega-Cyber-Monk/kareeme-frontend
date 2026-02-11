
import { baseApi } from "@/redux/hooks/baseApi";
import { AdminDashboardResponse } from "./admin.type";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminDashboard: builder.query<AdminDashboardResponse, void>({
      query: () => ({
        url: "/admin/dashboard",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAdminDashboardQuery } = adminApi;
export default adminApi;
