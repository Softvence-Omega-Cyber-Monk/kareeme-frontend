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
  fullName: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type LoginResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};

export type RegisterResponse = {
  access_token: string;
  refresh_token: string;
  user: User;
};

export type TAuth = {
  user: User | null;
  token: string | null;
  refreshToken?: string | null;
};

export type AuthMeResponse = User;

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
