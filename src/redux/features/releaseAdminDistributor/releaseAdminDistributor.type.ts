export type ReleaseStatus = "Draft" | "Approved" | "Declined";

export type ReleaseType =
  | "Single"
  | "EP"
  | "Album"
  | "Select release type"
  | string; // fallback if backend sends new values

export interface Release {
  releaseId: string;
  releaseTitle: string;
  typeOfRelease: ReleaseType;
  releaseDate: string; // ISO date (YYYY-MM-DD)
  status: ReleaseStatus;

  artistName?: string; // optional (not always present)
  upc?: string;        // optional (not always present)

  createdAt: string;   // ISO datetime
}

export interface ReleasesMetadata {
  page: number;
  limit: number;
  total: number;
  totalPage: number;
}

export interface ReleasesResponse {
  success: boolean;
  message: string;
  data: Release[];
  metadata: ReleasesMetadata;
}

export interface ReleaseDetailResponse {
  success: boolean;
  message: string;
  data: ReleaseDetails;
}

export interface ReleaseDetails {
  releaseId: string;

  releaseTitle: string;
  typeOfRelease: string;
  primaryArtist: string;

  releaseDate: string;
  preOrderDate: string | null;

  genre: string | null;
  language: string | null;

  isExplicitContent: boolean | null;
  hasExternalRightsHolder: boolean | null;
  hasDolbyAtmosVersion: boolean | null;
  hasExtendedMixForDjStores: boolean | null;
  hasArtistOnSpotify: boolean | null;
  hasMusicVideo: boolean | null;

  additionalDetails: string | null;

  status: string;

  labelName: string;
  distributor: string;

  upc: string;
  catalogueNumber: string;

  releasePLine: string;
  releaseCLine: string;

  tracks: Track[];

  artists: unknown[];

  contributors: Contributor[];

  territories: unknown[];

  submittedBy: SubmittedBy;

  submittedAt: string;
}


export interface ReleaseArtist {
  releaseId: string;
  artistId: string;
  role: string;
  artist: Artist;
}

export interface ReleaseTerritory {
  releaseId: string;
  territory: string;
}

export interface Track {
  trackId: string;

  trackNumber: number;

  title: string;

  isrc: string;

  genre: string;

  mix: string;

  language: string;

  explicit: boolean;

  publisher: string;

  originalReleaseDate: string;

  territoryRestrictions: string;

  audioFileUrl: string;

  artists: unknown[];
}


export interface TrackArtist {
  trackArtistId: string;
  trackId: string;

  artistId: string | null;

  clientName: string;
  nameOnTrack: string;

  artistType: string;
  songwriterRole: string;

  realName: string;

  masterSplit: string;

  spotifyId: string | null;
  appleId: string | null;

  createdAt: string;
  updatedAt: string;

  artist: Artist | null;
}

export interface Artist {
  artistId: string;
  userId: string;

  name: string;
  email: string;
  phone: string;

  stageName: string;

  bio: string | null;
  imageUrl: string | null;

  spotifyId: string | null;
  appleId: string | null;

  createdAt: string;
  updatedAt: string;
}

export interface SplitSheetAgreement {
  splitId: string;
  releaseId: string;

  songTitle: string;
  isrc: string;

  releaseDate: string;

  recordLabelId: string | null;

  createdAt: string;
  updatedAt: string;

  contributors: Contributor[];

  recordLabel: unknown | null;
}

export interface Contributor {
  contributorId: string;
  splitId: string;

  fullName: string | null;
  contribution: string | null;

  email: string | null;
  phone: string;

  address: string;

  publisher: string | null;
  affiliation: string;

  ipiCaeNumber: string;

  percentageSplit: string;

  createdAt: string;
  updatedAt: string;
}

export interface SubmittedBy {
  id: string;
  name: string;
  email: string;
}

export interface BackCatalogue {
  catalogueId: string;
  releaseId: string;

  labelName: string | null;
  distributor: string | null;
  upc: string | null;
  catalogueNumber: string | null;
  releaseArtist: string | null;
  releaseTitle: string | null;
  releaseType: string | null;
  releaseDate: string | null;
  releasePLine: string | null;
  releaseCLine: string | null;

  createdAt: string;
  updatedAt: string;
}
