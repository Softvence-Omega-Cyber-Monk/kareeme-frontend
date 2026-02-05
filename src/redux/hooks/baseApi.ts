import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { AppRootState } from "@/redux/store";
import { setCredentials, logout } from "@/redux/features/auth/authSlice";
import { UserRole } from "@/redux/types/auth.type";
import { Mutex } from "async-mutex";

const baseURL = import.meta.env.VITE_API_BASE_URL;

if (!baseURL) {
  throw new Error("VITE_API_BASE_URL is not defined in environment variables");
}

// Mutex to prevent multiple refresh calls
const mutex = new Mutex();

const rawBaseQuery = fetchBaseQuery({
  baseUrl: baseURL,
  credentials: "include", // Important: sends HttpOnly cookies
  prepareHeaders: (headers, { getState }) => {
    // Get token from Redux state (in-memory)
    const token = (getState() as AppRootState).auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  // Wait for any ongoing refresh to complete
  await mutex.waitForUnlock();
  
  let result = await rawBaseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    // Check if mutex is locked (another request is refreshing)
    if (!mutex.isLocked()) {
      const release = await mutex.acquire();
      
      try {
        // Try to refresh the token
        const refreshResult = await rawBaseQuery(
          { url: "/auth/refresh", method: "POST" },
          api,
          extraOptions
        );

        if (refreshResult.data) {
          // Store the new token
          const data = refreshResult.data as { 
            data: { 
              access_token: string; 
              user: {
                clientId?: string;
                id?: string;
                fullName: string;
                email: string;
                phoneNumber: string;
                profileImageUrl?: string | null;
                role: UserRole;
              };
            } 
          };
          api.dispatch(
            setCredentials({
              token: data.data.access_token,
              user: data.data.user,
            })
          );

          // Retry the original request with new token
          result = await rawBaseQuery(args, api, extraOptions);
        } else {
          // Refresh failed, logout user
          api.dispatch(logout());
          if (typeof window !== "undefined") {
            window.location.href = "/login";
          }
        }
      } finally {
        release();
      }
    } else {
      // Wait for the refresh to complete and retry
      await mutex.waitForUnlock();
      result = await rawBaseQuery(args, api, extraOptions);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["User"],
  endpoints: () => ({}),
});
