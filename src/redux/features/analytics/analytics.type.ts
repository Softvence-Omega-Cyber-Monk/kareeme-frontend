export interface EarningsByType {
  earnings: string;
  views: string;
  percentage: number;
}

export interface EstimatedEarning {
  month: string;
  views: number;
  earnings: number;
}

export interface TopCountry {
  country: string;
  earnings: string;
}

export interface TopUSRegion {
  region: string;
  views: number;
}

export interface TopAsset {
  title: string;
  earnings: string;
}

export interface TopClaim {
  title: string;
  earnings: string;
}

export interface PlatformOverviewData {
  platform: string;
  totalViews: string;
  totalEarnings: string;
  earningsByType: {
    free: EarningsByType;
    premium: EarningsByType;
  };
  estimatedEarnings: EstimatedEarning[];
  topCountries: TopCountry[];
  topUSRegions: TopUSRegion[];
  topAssets: TopAsset[];
  topClaims: TopClaim[];
}

export interface PlatformOverviewResponse {
  success: boolean;
  message: string;
  data: PlatformOverviewData;
}

export interface DashboardAnalyticsResponse {
  success: boolean;
  message: string;
  data: PlatformOverviewData[];
}
