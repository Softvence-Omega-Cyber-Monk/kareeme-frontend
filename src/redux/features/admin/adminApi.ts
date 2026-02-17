
import { baseApi } from "@/redux/hooks/baseApi";
import {
  AdminDashboardResponse,
  AddTeamMemberRequest,
  TeamResponse,
  TeamQuery,
  UpdateTeamMemberRequest,
  GenericResponse,
  AdminSplitSheetsResponse,
  AdminSplitSheetsQuery,
  AdminSingleSplitSheetResponse,
} from "./admin.type";

const adminApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAdminDashboard: builder.query<AdminDashboardResponse, void>({
      query: () => ({
        url: "/admin/dashboard",
        method: "GET",
      }),
    }),
    addTeamMember: builder.mutation<GenericResponse, AddTeamMemberRequest>({
      query: (data) => ({
        url: "/admin/team",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Team"],
    }),
    getTeamMembers: builder.query<TeamResponse, TeamQuery>({
      query: (params) => ({
        url: "/admin/team",
        method: "GET",
        params,
      }),
      providesTags: ["Team"],
    }),
    updateTeamMember: builder.mutation<GenericResponse, UpdateTeamMemberRequest>({
      query: ({ memberId, ...data }) => ({
        url: `/admin/team/${memberId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Team"],
    }),
    suspendTeamMember: builder.mutation<GenericResponse, string>({
      query: (memberId) => ({
        url: `/admin/team/${memberId}/suspend`,
        method: "PATCH",
      }),
      invalidatesTags: ["Team"],
    }),
    deleteTeamMember: builder.mutation<GenericResponse, string>({
      query: (memberId) => ({
        url: `/admin/team/${memberId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Team"],
    }),
    getAdminSplitSheets: builder.query<AdminSplitSheetsResponse, AdminSplitSheetsQuery>({
      query: (params) => ({
        url: "/admin/split-sheets",
        method: "GET",
        params,
      }),
      providesTags: ["SplitSheets"],
    }),
    getSingleAdminSplitSheet: builder.query<AdminSingleSplitSheetResponse, string>({
      query: (id) => ({
        url: `/admin/split-sheets/${id}`,
        method: "GET",
      }),
      providesTags: ["SplitSheets"],
    }),
  }),
});

export const {
  useGetAdminDashboardQuery,
  useAddTeamMemberMutation,
  useGetTeamMembersQuery,
  useUpdateTeamMemberMutation,
  useSuspendTeamMemberMutation,
  useDeleteTeamMemberMutation,
  useGetAdminSplitSheetsQuery,
  useGetSingleAdminSplitSheetQuery,
} = adminApi;
export default adminApi;
