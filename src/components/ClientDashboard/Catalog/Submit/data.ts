export type FormDataType = {

  location: string;
  releaseDate: string;
  preOrderDate: string;
  labelName: string;
  albumLevelArtistName: string;
  releaseTitle: string;
  typeOfRelease: string;
  genre: string;
  artwork: File | null;
  musicFile: string;
  lyricistCredits: string
  // Add fields for StepTwo
  publisher: string;
  producerCredits: string;
  copyrightHolder: string;
  language: string;
  isExplicitContent: boolean;
  producer: string;
  hasExternalRightsHolder: boolean;
  hasDolbyAtmosVersion: boolean;
  hasExtendedMixForDjStores: boolean;
  additionalDetails: string;
  lyricist: string;
  masterSplits: string;
  territory: string;
  externalSplits: string;
  territories: string;
  hasArtistOnSpotify: boolean;
  hasMusicVideo: boolean;

  // Add fields for StepFour
  songTitle: string;
  iswc: string;
  releaseDateSplit: string;
  recordingArtists: string;
  recordLabel: string;
  recordLabelFull: string;
};
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