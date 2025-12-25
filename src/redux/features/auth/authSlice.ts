import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  User,
  TAuth,
  LoginResponse,
  RegisterResponse,
} from "@/redux/types/auth.type";
import { authApi } from "./authApi";
import { AppRootState } from "@/redux/store";

const initialState: TAuth = {
  user: null,
  token: null,
  refreshToken: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{
        user: User;
        token: string;
        refreshToken?: string;
      }>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.token;

      if (action.payload.refreshToken) {
        state.refreshToken = action.payload.refreshToken;
      }

      Cookies.set("token", action.payload.token, { expires: 7 });

      if (action.payload.refreshToken) {
        Cookies.set("refreshToken", action.payload.refreshToken, {
          expires: 30,
        });
      }

      localStorage.setItem("user", JSON.stringify(action.payload.user));
    },

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.refreshToken = null;

      Cookies.remove("token");
      Cookies.remove("refreshToken");
      localStorage.removeItem("user");
    },

    updateUser: (state, action: PayloadAction<Partial<User>>) => {
      if (state.user) {
        state.user = { ...state.user, ...action.payload };
        localStorage.setItem("user", JSON.stringify(state.user));
      }
    },
  },

  extraReducers: (builder) => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, { payload }: PayloadAction<LoginResponse>) => {
          state.user = payload.user;
          state.token = payload.access_token;
          state.refreshToken = payload.refresh_token;

          Cookies.set("token", payload.access_token, { expires: 7 });
          Cookies.set("refreshToken", payload.refresh_token, { expires: 30 });

          localStorage.setItem("user", JSON.stringify(payload.user));
        }
      )
      .addMatcher(
        authApi.endpoints.register.matchFulfilled,
        (state, { payload }: PayloadAction<RegisterResponse>) => {
          state.user = payload.user;
          state.token = payload.access_token;
          state.refreshToken = payload.refresh_token;

          Cookies.set("token", payload.access_token, { expires: 7 });
          Cookies.set("refreshToken", payload.refresh_token, { expires: 30 });

          localStorage.setItem("user", JSON.stringify(payload.user));
        }
      )
      .addMatcher(
        authApi.endpoints.authMe.matchFulfilled,
        (state, { payload }: PayloadAction<User>) => {
          state.user = payload;
          localStorage.setItem("user", JSON.stringify(payload));
        }
      );
  },
});

export const { setCredentials, logout, updateUser } = authSlice.actions;
export default authSlice.reducer;

// selectors
export const selectCurrentToken = (state: AppRootState) => state.auth.token;
export const selectCurrentUser = (state: AppRootState) => state.auth.user;
export const selectCurrentRefreshToken = (state: AppRootState) =>
  state.auth.refreshToken;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
// import {
//   User,
//   TAuth,
//   LoginResponse,
//   RegisterResponse,
// } from "@/redux/types/auth.type";
// import { authApi } from "./authApi";
// import { AppRootState } from "@/redux/store";

// interface DecodedToken {
//   sub: string;
//   email: string;
//   iat: number;
//   exp: number;
// }

// const initialState: TAuth = {
//   user: null,
//   token: null,
//   refreshToken: null,
// };

// const decodeToken = (
//   token: string
// ): { userId: string; email: string } | null => {
//   try {
//     const decoded = jwtDecode<DecodedToken>(token);
//     return {
//       userId: decoded.sub,
//       email: decoded.email,
//     };
//   } catch (error) {
//     console.error("Error decoding token:", error);
//     return null;
//   }
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setCredentials: (
//       state,
//       action: PayloadAction<{
//         user: User;
//         token: string;
//         refreshToken?: string;
//       }>
//     ) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       if (action.payload.refreshToken) {
//         state.refreshToken = action.payload.refreshToken;
//       }
//       Cookies.set("token", action.payload.token, { expires: 7 });
//       if (action.payload.refreshToken) {
//         Cookies.set("refreshToken", action.payload.refreshToken, {
//           expires: 30,
//         });
//       }
//       localStorage.setItem("user", JSON.stringify(action.payload.user));
//     },
//     logout: (state) => {
//       state.user = null;
//       state.token = null;
//       state.refreshToken = null;
//       Cookies.remove("token");
//       Cookies.remove("refreshToken");
//       localStorage.removeItem("user");
//     },
//     updateUser: (state, action: PayloadAction<Partial<User>>) => {
//       if (state.user) {
//         state.user = { ...state.user, ...action.payload };
//         localStorage.setItem("user", JSON.stringify(state.user));
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addMatcher(
//         authApi.endpoints.login.matchFulfilled,
//         (state, { payload }: PayloadAction<LoginResponse>) => {
//           state.user = payload.user;
//           state.token = payload.access_token;
//           state.refreshToken = payload.refresh_token;
//           Cookies.set("token", payload.access_token, { expires: 7 });
//           Cookies.set("refreshToken", payload.refresh_token, { expires: 30 });
//           localStorage.setItem("user", JSON.stringify(payload.user));
//         }
//       )
//       .addMatcher(
//         authApi.endpoints.register.matchFulfilled,
//         (state, { payload }: PayloadAction<RegisterResponse>) => {
//           state.user = payload.user;
//           state.token = payload.access_token;
//           state.refreshToken = payload.refresh_token;
//           Cookies.set("token", payload.access_token, { expires: 7 });
//           Cookies.set("refreshToken", payload.refresh_token, { expires: 30 });
//           localStorage.setItem("user", JSON.stringify(payload.user));
//         }
//       )
//       .addMatcher(
//         authApi.endpoints.authMe.matchFulfilled,
//         (state, { payload }: PayloadAction<User>) => {
//           state.user = payload;
//           localStorage.setItem("user", JSON.stringify(payload));
//         }
//       );
//   },
// });

// export const { setCredentials, logout, updateUser } = authSlice.actions;
// export default authSlice.reducer;

// export const selectCurrentToken = (state: AppRootState) => state.auth.token;
// export const selectCurrentUser = (state: AppRootState) => state.auth.user;
// export const selectCurrentRefreshToken = (state: AppRootState) =>
//   state.auth.refreshToken;

// import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import { jwtDecode } from "jwt-decode";
// import Cookies from "js-cookie";
// import { User, TAuth, LoginResponse } from "@/redux/types/auth.type";
// import { authApi } from "./authApi";
// import { AppRootState } from "@/redux/store";

// interface DecodedToken {
//   id: string;
//   name: string;
//   email: string;
//   role: "admin" | "client" | "distributor" | "accountant";
//   exp: number;
//   iat: number;
// }

// const initialState: TAuth = {
//   user: null,
//   token: null,
// };

// const decodeToken = (token: string): User | null => {
//   try {
//     const decoded = jwtDecode<DecodedToken>(token);
//     return {
//       id: decoded.id,
//       name: decoded.name,
//       email: decoded.email,
//       role: decoded.role,
//     };
//   } catch (error) {
//     console.error("Error decoding token:", error);
//     return null;
//   }
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<{ user: User; token: string }>) => {
//       state.user = action.payload.user;
//       state.token = action.payload.token;
//       Cookies.set("token", action.payload.token, { expires: 1 });
//     },
//     logOut: (state) => {
//       state.user = null;
//       state.token = null;
//       Cookies.remove("token");
//       localStorage.removeItem("user");
//     },
//     loadUserFromToken: (state) => {
//       const token = Cookies.get("token");
//       if (token) {
//         const user = decodeToken(token);
//         if (user) {
//           state.user = user;
//           state.token = token;
//         }
//       }
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addMatcher(
//       authApi.endpoints.login.matchFulfilled,
//       (state, { payload }: PayloadAction<LoginResponse>) => {
//         const user = decodeToken(payload.data.accessToken);
//         if (user) {
//           state.user = user;
//           state.token = payload.data.accessToken;
//           Cookies.set("token", payload.data.accessToken, { expires: 1 });
//           localStorage.setItem("user", JSON.stringify(user));
//         }
//       }
//     );
//     builder.addMatcher(
//       authApi.endpoints.register.matchFulfilled,
//       (state, { payload }) => {
//         state.user = payload.data;
//       }
//     );
//   },
// });

// export const { setUser, logOut, loadUserFromToken } = authSlice.actions;
// export default authSlice.reducer;

// export const useCurrentToken = (state: AppRootState) => state.auth.token;
// export const useCurrentUser = (state: AppRootState) => state.auth.user;
