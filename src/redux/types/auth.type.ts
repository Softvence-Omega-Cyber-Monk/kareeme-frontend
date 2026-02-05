export type UserRole =
  | "SUPER_ADMIN"
  | "ADMIN"
  | "CLIENT"
  | "DISTRIBUTOR"
  | "ACCOUNTANT";

export type User = {
  clientId?: string;
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  profileImageUrl?: string | null;
  role: UserRole;
  isNewReleaseAlertsOn?: boolean;
  isEarningAlertsOn?: boolean;
  isPlatformUpdatesOn?: boolean;
  defaultDistributionPlatforms?: string[];
  defaultGenres?: string[];
  distributionTerritorys?: string[];
  createdAt?: string;
  updatedAt?: string;
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
  access_token: string;
  refresh_token: string;
  user: User;
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
