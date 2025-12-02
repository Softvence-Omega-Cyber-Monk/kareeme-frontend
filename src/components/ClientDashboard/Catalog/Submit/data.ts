export type FormDataType = {
  name: string;
  email: string;
  phone: string;
  artistName: string;
  location: string;
  releaseDate: string;
  preOrderDate: string;
  label: string;
  albumArtist: string;
  releaseTitle: string;
  releaseType: string;
  genre: string;
  artwork: File | null;
  musicFile: string;
  tiktokClip: File | null;
  // Add fields for StepTwo
  publisher: string;
  copyrightHolder: string;
  language: string;
  explicit: string;
  producer: string;
  lyricist: string;
  masterSplits: string;
  territory: string;
  externalSplits: string;
  territories: string;
  // Add fields for StepFour
  songTitle: string;
  iswc: string;
  releaseDateSplit: string;
  recordingArtists: string;
  recordLabel: string;
  recordLabelFull: string;
};
