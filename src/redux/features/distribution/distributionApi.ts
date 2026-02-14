import { baseApi } from "@/redux/hooks/baseApi";
import {
  ApproveSubmissionPayload,
  ClientActionResponse,
  ClientsQueryParams,
  ClientsResponse,
  DashboardResponse,
  DeclineSubmissionPayload,
  SubmissionActionResponse,
  SubmissionDetailsResponse,
  SubmissionsQueryParams,
  SubmissionsResponse,
} from "./distribution.type";

const distributionApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDashboard: builder.query<DashboardResponse, void>({
      query: () => ({
        url: "/distribution/dashboard",
        method: "GET",
      }),
      providesTags: ["Submissions"],
    }),
    getSubmissions: builder.query<SubmissionsResponse, SubmissionsQueryParams>({
      query: ({ page = 1, limit = 10, status }) => ({
        url: "/distribution/submissions",
        method: "GET",
        params: {
          page,
          limit,
          ...(status && { status }),
        },
      }),
      providesTags: ["Submissions"],
    }),
    getSubmissionDetails: builder.query<SubmissionDetailsResponse, string>({
      query: (releaseId) => ({
        url: `/distribution/submissions/${releaseId}`,
        method: "GET",
      }),
      providesTags: ["Submissions"],
    }),
    getClients: builder.query<ClientsResponse, ClientsQueryParams>({
      query: ({ page = 1, limit = 10 }) => ({
        url: "/distribution/clients",
        method: "GET",
        params: {
          page,
          limit,
        },
      }),
      providesTags: ["Clients"],
    }),
    deactivateClient: builder.mutation<ClientActionResponse, string>({
      query: (clientId) => ({
        url: `/distribution/clients/${clientId}/deactivate`,
        method: "PATCH",
      }),
      invalidatesTags: ["Clients"],
    }),
    approveSubmission: builder.mutation<
      SubmissionActionResponse,
      { releaseId: string; payload?: ApproveSubmissionPayload }
    >({
      query: ({ releaseId, payload }) => ({
        url: `/distribution/submissions/${releaseId}/approve`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Submissions"],
    }),
    declineSubmission: builder.mutation<
      SubmissionActionResponse,
      { releaseId: string; payload: DeclineSubmissionPayload }
    >({
      query: ({ releaseId, payload }) => ({
        url: `/distribution/submissions/${releaseId}/decline`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Submissions"],
    }),
  }),
});

export const {
  useGetDashboardQuery,
  useGetSubmissionsQuery,
  useGetSubmissionDetailsQuery,
  useGetClientsQuery,
  useApproveSubmissionMutation,
  useDeclineSubmissionMutation,
  useDeactivateClientMutation,
} = distributionApi;
export default distributionApi;
