
export interface AdminStats {
  totalClients: number;
  totalReleases: number;
  activeSubmissions: number;
  totalRevenue: string; // The API returns string "2502"
  clientsGrowth: number;
  releasesGrowth: number;
  submissionsGrowth: number;
  revenueGrowth: number;
}

export interface RevenueData {
  month: string;
  value: number;
}

export interface ProfitLossData {
  month: string;
  profit: number;
  loss: number;
}

export interface RecentActivity {
  type: string;
  user: string;
  title: string;
  day: string;
  time: string;
}

export interface AdminDashboardData {
  stats: AdminStats;
  revenueData: RevenueData[];
  profitLossData: ProfitLossData[];
  recentActivity: RecentActivity[];
}

export interface AdminDashboardResponse {
  success: boolean;
  message: string;
  data: AdminDashboardData;
}

export interface AddTeamMemberRequest {
  name: string;
  email: string;
  role: string;
}

export interface UpdateTeamMemberRequest {
  memberId: string;
  role?: string;
  status?: "Active" | "Inactive";
}

export interface GenericResponse {
  success: boolean;
  message: string;
}

export interface TeamMember {
  memberId: string;
  userId: string;
  name: string;
  email: string;
  role: string;
  status: "Active" | "Inactive";
  joinDate: string;
  createdAt: string;
  updatedAt: string;
}

export interface TeamQuery {
  page: number;
  limit: number;
}

export interface TeamResponse {
  success: boolean;
  message: string;
  data: TeamMember[];
  metadata: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}
