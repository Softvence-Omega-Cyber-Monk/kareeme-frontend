
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
