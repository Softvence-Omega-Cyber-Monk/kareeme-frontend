export interface RecentActivityItem {
  title: string;
  subtitle: string;
  timestamp: string;
}

export interface DistributionStatus {
  completed: number;
  inProgress: number;
  failed: number;
}

export interface PlatformPerformanceItem {
  name: string;
  streams: string;
  icon?: string;
  iconColor?: string;
}

export interface DashboardData {
  submissionsToReview: number;
  releasesToDistribute: number;
  newClients: number;
  liveReleases: number;
  recentActivity: RecentActivityItem[];
  distributionStatus: DistributionStatus;
  platformPerformance: PlatformPerformanceItem[];
}

export interface DashboardResponse {
  success: boolean;
  message: string;
  data: DashboardData;
}

// Submissions types
export interface SubmissionItem {
  releaseId: string;
  title: string;
  artist: string;
  type: string;
  trackCount: number;
  releaseDate: string;
  submittedAt: string;
  status: "Pending Review" | "Approved" | "Declined";
  genre: string | null;
  language: string | null;
}

export interface SubmissionsMetadata {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface SubmissionsResponse {
  success: boolean;
  message: string;
  data: SubmissionItem[];
  metadata: SubmissionsMetadata;
}

export interface SubmissionsQueryParams {
  page?: number;
  limit?: number;
  status?: "PendingReview" | "Approved" | "Declined";
}

export interface ApproveSubmissionPayload {
  note?: string;
}

export interface DeclineSubmissionPayload {
  reason: string;
}

export interface SubmissionActionResponse {
  success: boolean;
  message: string;
}

// Submission details types
export interface SubmissionDetailsArtist {
  artistId: string;
  name: string;
  role: string;
  email: string;
}

export interface SubmissionDetailsSubmittedBy {
  id: string;
  name: string;
  email: string;
}

export interface SubmissionDetailsData {
  releaseId: string;
  releaseTitle: string;
  typeOfRelease: string;
  primaryArtist: string;
  releaseDate: string;
  preOrderDate: string | null;
  genre: string;
  language: string;
  isExplicitContent: boolean;
  hasExternalRightsHolder: boolean;
  hasDolbyAtmosVersion: boolean;
  hasExtendedMixForDjStores: boolean;
  hasArtistOnSpotify: boolean;
  hasMusicVideo: boolean;
  additionalDetails: string | null;
  status: string;
  tracks: any[]; // Can be typed more specifically if needed
  artists: SubmissionDetailsArtist[];
  contributors: any[]; // Can be typed more specifically if needed
  territories: string[];
  submittedBy: SubmissionDetailsSubmittedBy;
  submittedAt: string;
}

export interface SubmissionDetailsResponse {
  success: boolean;
  message: string;
  data: SubmissionDetailsData;
}


