import { baseApi } from "@/redux/hooks/baseApi";
import { AccountantDashboardResponse } from "./accountant.type";

const accountantApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAccountantDashboard: builder.query<AccountantDashboardResponse, void>({
      query: () => ({
        url: "/accountant/dashboard",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetAccountantDashboardQuery } = accountantApi;
export default accountantApi;
