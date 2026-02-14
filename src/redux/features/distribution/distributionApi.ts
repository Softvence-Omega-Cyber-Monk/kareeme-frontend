import { baseApi } from "@/redux/hooks/baseApi";
import {
  ApproveSubmissionPayload,
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
  useApproveSubmissionMutation,
  useDeclineSubmissionMutation,
} = distributionApi;
export default distributionApi;
