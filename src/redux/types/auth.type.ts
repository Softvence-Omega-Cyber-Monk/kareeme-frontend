export type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "CLIENT"
  | "DISTRIBUTOR"
  | "ACCOUNTANT";

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  status: string;
  isVerified: boolean;
  isTFAEnabled: boolean;
  lastLoginAt: string;
  lastActiveAt: string;
  profilePictureUrl: string | null;
  createdAt: string;
  updatedAt: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

export type LoginResponseData = {
  user: User;
  token: {
    accessToken: string;
    refreshToken: string;
    refreshTokenExpiresAt: string;
  };
  access_token: string;
  refresh_token: string;
};

export type RegisterResponseData = {
  email: string;
};

export type LoginResponse = ApiResponse<LoginResponseData>;
export type RegisterResponse = ApiResponse<RegisterResponseData>;

export type TAuth = {
  user: User | null;
  token: string | null;
};

export type AuthMeResponse = ApiResponse<User>;

// export type User = {
//   id: string;
//   name: string;
//   email: string;
//   role: "admin" | "client" | "distributor" | "accountant";
//   businessName?: string;
//   address_Pickup_Location?: string;
//   phone?: string;
// };

// export type LoginResponse = {
//   success: boolean;
//   message: string;
//   data: {
//     accessToken: string;
//     user: User;
//   };
// };

// export type RegisterResponse = {
//   success: boolean;
//   message: string;
//   data: User;
// };

// export type TAuth = {
//   user: User | null;
//   token: string | null;
// };

// export type RegisterRequest = {
//   name: string;
//   businessName: string;
//   address_Pickup_Location: string;
//   phone: string;
//   email: string;
//   password: string;
// };

// export type LoginRequest = {
//   email: string;
//   password: string;
// };
