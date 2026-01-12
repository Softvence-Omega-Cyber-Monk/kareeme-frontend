import { baseApi } from "@/redux/hooks/baseApi";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  AuthMeResponse,
} from "@/redux/types/auth.type";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<LoginResponse, LoginRequest>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
      invalidatesTags: ["User"],
    }),
    register: builder.mutation<RegisterResponse, RegisterRequest>({
      query: (userData) => ({
        url: "/auth/register",
        method: "POST",
        body: userData,
      }),
    }),
    authMe: builder.query<AuthMeResponse, void>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      providesTags: ["User"],
    }),
    logout: builder.mutation<void, { refreshToken: string }>({
      query: (body) => ({
        url: "/auth/logout",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useAuthMeQuery,
  useLogoutMutation,
} = authApi;

// import { baseApi } from "@/redux/hooks/baseApi";
// import {
//   LoginRequest,
//   LoginResponse,
//   RegisterRequest,
//   RegisterResponse,
// } from "@/redux/types/auth.type";

// export const authApi = baseApi.injectEndpoints({
//   endpoints: (builder) => ({
//     login: builder.mutation<LoginResponse, LoginRequest>({
//       query: (credentials) => ({
//         url: "/auth/login",
//         method: "POST",
//         body: credentials,
//       }),
//       invalidatesTags: ["User"],
//     }),
//     register: builder.mutation<RegisterResponse, RegisterRequest>({
//       query: (userData) => ({
//         url: "/auth/register",
//         method: "POST",
//         body: userData,
//       }),
//     }),
//   }),
// });

// export const { useLoginMutation, useRegisterMutation } = authApi;
