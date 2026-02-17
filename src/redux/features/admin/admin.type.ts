
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

export interface Contributor {
  contributorId: string;
  splitId: string;
  fullName: string | null;
  contribution: string | null;
  email: string | null;
  phone: string | null;
  address: string | null;
  publisher: string | null;
  affiliation: string | null;
  ipiCaeNumber: string | null;
  percentageSplit: string;
  createdAt: string;
  updatedAt: string;
}

export interface AdminSplitSheet {
  splitId: string;
  releaseId: string;
  songTitle: string;
  isrc: string;
  releaseDate: string;
  recordLabelId: string | null;
  createdAt: string;
  updatedAt: string;
  contributors: Contributor[];
  recordLabel: Record<string, unknown> | null;
  release: {
    releaseId: string;
    releaseTitle: string;
  };
}

export interface AdminSplitSheetDetail extends Omit<AdminSplitSheet, "release"> {
  release: {
    releaseId: string;
    userId: string;
    releaseDate: string;
    preOrderDate: string;
    releaseTitle: string;
    typeOfRelease: string;
    genre: string;
    language: string;
    isExplicitContent: boolean;
    hasExternalRightsHolder: boolean;
    hasDolbyAtmosVersion: boolean;
    hasExtendedMixForDjStores: boolean;
    additionalDetails: string;
    hasArtistOnSpotify: boolean;
    hasMusicVideo: boolean;
    status: string;
    producerCredits: string;
    lyricistCredits: string;
    masterSplits: string;
    copyrightHolder: string;
    labelName: string;
    albumLevelArtistName: string;
    musicFileLink: string;
    createdAt: string;
    updatedAt: string;
  };
}

export interface AdminSingleSplitSheetResponse {
  success: boolean;
  message: string;
  data: AdminSplitSheetDetail;
}

export interface AdminSplitSheetsResponse {
  success: boolean;
  message: string;
  data: AdminSplitSheet[];
  metadata: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}

export interface AdminSplitSheetsQuery {
  page?: number;
  limit?: number;
}

export interface AdminBackCatalogueEntry {
  catalogueId: string;
  releaseId: string;
  labelName: string;
  distributor: string;
  upc: string;
  catalogueNumber: string;
  releaseArtist: string;
  releaseTitle: string;
  releaseType: string;
  releaseDate: string;
  releasePLine: string;
  releaseCLine: string;
  createdAt: string;
  updatedAt: string;
  release: {
    releaseId: string;
    releaseTitle: string;
    userId: string;
  };
}

export interface AdminBackCatalogueResponse {
  success: boolean;
  message: string;
  data: AdminBackCatalogueEntry[];
  metadata: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}

export interface AdminBackCatalogueQuery {
  page?: number;
  limit?: number;
}

export interface AdminRelease {
  releaseId: string;
  releaseTitle: string;
  typeOfRelease: string;
  releaseDate: string;
  status: string;
  upc?: string;
  artistName?: string;
  createdAt: string;
}

export interface AdminReleasesResponse {
  success: boolean;
  message: string;
  data: AdminRelease[];
  metadata: {
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  };
}

export interface AdminReleasesQuery {
  page?: number;
  limit?: number;
}
