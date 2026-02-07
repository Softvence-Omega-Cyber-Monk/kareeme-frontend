export type ReleaseArtist = {
  name: string;
  email: string;
  phone: string;
  address: string;
  stageName: string;
  spotifyId?: string;
  appleId?: string;
  role: string;
};

export type Territory = {
  territory: string;
};

export type ReleaseData = {
  releaseDate: string;
  preOrderDate: string;
  releaseTitle: string;
  producerCredits: string;
  lyricistCredits: string;
  masterSplits: string;
  copyrightHolder: string;
  labelName: string;
  albumLevelArtistName: string;
  musicFileLink: string;
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
  artists: ReleaseArtist[];
  territories: Territory[];
  status: "Draft" | "Submitted";
  artwork?: File | null; // For frontend handled specifically
};

export type TrackArtist = {
  artistId?: string;
  clientName: string;
  nameOnTrack: string;
  artistType: string;
  songwriterRole: string;
  realName: string;
  masterSplit: string;
  spotifyId?: string;
  appleId?: string;
};

export type TrackData = {
  releaseId: string;
  trackNumber: number;
  trackTitle: string;
  trackGenre: string;
  trackMix: string;
  explicitContent: boolean;
  trackLanguage: string;
  trackPublisher: string;
  originalReleaseDate: string;
  trackIsrc: string;
  territoryRestrictions: string;
  audioFileUrl: string;
  trackArtists: TrackArtist[];
  audioFile?: File | null; // For frontend handled specifically
};

export type SplitContributor = {
  fullName: string;
  contribution: string;
  email: string;
  phone: string;
  address: string;
  publisher: string;
  affiliation: string;
  ipiCaeNumber: string;
  percentageSplit: number;
};

export type SplitSheetData = {
  releaseId: string;
  songTitle: string;
  isrc: string;
  releaseDate: string;
  recordLabelId: string;
  contributors: SplitContributor[];
};

// Legacy or mapping types if needed
export interface ArtistInfo {
  name: string;
  email: string;
  phone: string;
  stageName: string;
  bio?: string;
  location: string;
  imageUrl?: string;
  spotifyId?: string;
  appleId?: string;
}

export type FormDataType = ReleaseData;
export type Track = TrackData;