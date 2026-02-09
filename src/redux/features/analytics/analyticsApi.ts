import { baseApi } from "@/redux/hooks/baseApi";
import { DashboardAnalyticsResponse, PlatformOverviewResponse } from "./analytics.type";

const analyticsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getPlatformOverview: builder.query<PlatformOverviewResponse, string>({
      query: (platform) => ({
        url: `/analytics/${platform}/overview`,
        method: "GET",
      }),
    }),
    getDashboardAnalytics: builder.query<DashboardAnalyticsResponse, void>({
      query: () => ({
        url: "/analytics/dashboard",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetPlatformOverviewQuery, useGetDashboardAnalyticsQuery } = analyticsApi;
export default analyticsApi;
