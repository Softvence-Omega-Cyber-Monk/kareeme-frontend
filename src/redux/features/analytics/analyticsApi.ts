import { baseApi } from "@/redux/hooks/baseApi";
import {
  AnalyticsAssetsResponse,
  AnalyticsClaimsResponse,
  AnalyticsGeoTrendsResponse,
  DashboardAnalyticsResponse,
  PlatformOverviewResponse,
} from "./analytics.type";

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
    getAnalyticsAssets: builder.query<
      AnalyticsAssetsResponse,
      { page: number; limit: number; platform: string }
    >({
      query: ({ page, limit, platform }) => ({
        url: `/analytics/assets`,
        method: "GET",
        params: { page, limit, platform },
      }),
    }),
    getAnalyticsGeoTrends: builder.query<
      AnalyticsGeoTrendsResponse,
      { page: number; limit: number; platform: string }
    >({
      query: ({ page, limit, platform }) => ({
        url: `/analytics/geo-trends`,
        method: "GET",
        params: { page, limit, platform },
      }),
    }),
    getAnalyticsClaims: builder.query<
      AnalyticsClaimsResponse,
      { page: number; limit: number; platform: string }
    >({
      query: ({ page, limit, platform }) => ({
        url: `/analytics/claims`,
        method: "GET",
        params: { page, limit, platform },
      }),
    }),
  }),
});

export const {
  useGetPlatformOverviewQuery,
  useGetDashboardAnalyticsQuery,
  useGetAnalyticsAssetsQuery,
  useGetAnalyticsGeoTrendsQuery,
  useGetAnalyticsClaimsQuery,
} = analyticsApi;
export default analyticsApi;
