/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { toast } from "sonner";
import {
  ReleaseData,
  TrackData,
  SplitSheetData,
  Territory,
  SplitContributor,
} from "./data";
import {
  useCreateNewReleaseMutation,
  useCreateTrackMutation,
  useCreateSplitSheetMutation,
  useUploadTrackAudioMutation,
} from "@/redux/features/newRelease/newReleaseApi";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  // 1. Release Data (POST /releases)
  const [releaseData, setReleaseData] = useState<ReleaseData>({
    releaseDate: "",
    preOrderDate: "",
    releaseTitle: "",
    producerCredits: "",
    lyricistCredits: "",
    masterSplits: "",
    copyrightHolder: "",
    labelName: "",
    albumLevelArtistName: "",
    musicFileLink: "",
    typeOfRelease: "Single",
    genre: "",
    language: "English",
    isExplicitContent: false,
    hasExternalRightsHolder: false,
    hasDolbyAtmosVersion: false,
    hasExtendedMixForDjStores: false,
    additionalDetails: "",
    hasArtistOnSpotify: false,
    hasMusicVideo: false,
    artists: [
      {
        name: "",
        email: "",
        phone: "",
        address: "",
        stageName: "",
        role: "Primary Artist",
      },
    ],
    territories: [{ territory: "WW" }], // Default to World Wide
    status: "Draft",
    artwork: null,
  });

  // 2. Track Data (POST /tracks)
  const [trackData, setTrackData] = useState<TrackData>({
    releaseId: "",
    trackNumber: 1,
    trackTitle: "",
    trackGenre: "",
    trackMix: "Original Mix",
    explicitContent: false,
    trackLanguage: "English",
    trackPublisher: "",
    originalReleaseDate: "",
    trackIsrc: "",
    territoryRestrictions: "None",
    audioFileUrl: "",
    trackArtists: [],
  });

  // 3. Split Sheet Data (POST /split-sheets)
  const [splitSheetData, setSplitSheetData] = useState<SplitSheetData>({
    releaseId: "",
    songTitle: "",
    isrc: "",
    releaseDate: "",
    recordLabelId: "",
    contributors: [],
  });

  // API Mutations
  const [createRelease, { isLoading: isReleaseLoading }] = useCreateNewReleaseMutation();
  const [createTrack, { isLoading: isTrackLoading }] = useCreateTrackMutation();
  const [uploadAudio, { isLoading: isAudioLoading }] = useUploadTrackAudioMutation();
  const [createSplitSheet, { isLoading: isSplitLoading }] = useCreateSplitSheetMutation();

  const isSubmitting = isReleaseLoading || isTrackLoading || isAudioLoading || isSplitLoading;

  // Handlers
  const handleReleaseChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const files = (e.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      setReleaseData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "radio") {
      const booleanValue = value === "true";
      setReleaseData((prev) => ({ ...prev, [name]: booleanValue }));
    } else {
      setReleaseData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleArtistChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setReleaseData((prev) => {
      const updatedArtists = [...prev.artists];
      updatedArtists[0] = { ...updatedArtists[0], [name]: value };
      return { ...prev, artists: updatedArtists };
    });
  };

  const handleTrackChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const files = (e.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      setTrackData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "radio") {
      const booleanValue = value === "true";
      setTrackData((prev) => ({ ...prev, [name]: booleanValue }));
    } else {
      setTrackData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleTerritoryChange = (territories: Territory[]) => {
    setReleaseData((prev) => ({ ...prev, territories }));
  };

  const handleSplitChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setSplitSheetData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContributorsChange = (contributors: SplitContributor[]) => {
    setSplitSheetData((prev) => ({ ...prev, contributors }));
  };

  // Navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // 1. Create Release
      toast.loading("Creating release...", { id: "submit-form" });
      
      const releasePayload = {
        ...releaseData,
        releaseDate: releaseData.releaseDate ? new Date(releaseData.releaseDate).toISOString() : "",
        preOrderDate: releaseData.preOrderDate ? new Date(releaseData.preOrderDate).toISOString() : "",
      };

      const releaseResult = await createRelease(releasePayload).unwrap();
      console.log("Full Release Response:", releaseResult);
      const releaseId = releaseResult.data?.releaseId;
      console.log("Extracted releaseId:", releaseId);

      if (!releaseId) throw new Error("Failed to get release ID from server response");

      // 2. Create Track
      toast.loading("Creating track...", { id: "submit-form" });
      
      const trackPayload = {
        ...trackData,
        releaseId,
        originalReleaseDate: trackData.originalReleaseDate 
          ? new Date(trackData.originalReleaseDate).toISOString() 
          : (releasePayload.releaseDate || new Date().toISOString()),
      };

      const trackResult = await createTrack(trackPayload).unwrap();
      console.log("Full Track Response:", trackResult);
      const trackId = trackResult.data?.trackId || trackResult.data?.id;
      console.log("Extracted trackId:", trackId);

      // 3. Upload Audio if present
      if (trackId && trackData.audioFile) {
        toast.loading("Uploading audio file...", { id: "submit-form" });
        await uploadAudio({ trackId, audioFile: trackData.audioFile }).unwrap();
      }

      // 4. Create Split Sheet
      toast.loading("Creating split sheet...", { id: "submit-form" });
      const splitPayload = {
        ...splitSheetData,
        releaseId,
        releaseDate: releasePayload.releaseDate, 
      };
      await createSplitSheet(splitPayload).unwrap();

      toast.success("Release submitted successfully!", { id: "submit-form" });
      // Redirect or reset form if needed
    } catch (error) {
      console.error("Submission failed:", error);
      const errorMessage = (error as any)?.data?.message || "Something went wrong during submission";
      toast.error(errorMessage, { id: "submit-form" });
    }
  };

  return (
    <div className="w-full mt-4">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        <div
          className={`h-2 flex-1 rounded-full mr-2 ${
            step >= 1
              ? "bg-linear-to-r from-[#04A245] via-[#167F7E] to-[#2E4ACA]"
              : "bg-gray-600"
          }`}
        />
        <div
          className={`h-2 flex-1 rounded-full mr-2 ${
            step >= 2
              ? "bg-linear-to-r from-[#04A245] via-[#167F7E] to-[#2E4ACA]"
              : "bg-gray-600"
          }`}
        />
        <div
          className={`h-2 flex-1 rounded-full mr-2 ${
            step >= 3
              ? "bg-linear-to-r from-[#04A245] via-[#167F7E] to-[#2E4ACA]"
              : "bg-gray-600"
          }`}
        />
        <div
          className={`h-2 flex-1 rounded-full ${
            step >= 4
              ? "bg-linear-to-r from-[#04A245] via-[#167F7E] to-[#2E4ACA]"
              : "bg-gray-600"
          }`}
        />
        {/* <div
      className={`h-2 flex-1 rounded-full ${
        step >= 4 ? "bg-gradient-to-r from-[#04A245] via-[#167F7E] to-[#2E4ACA]" : "bg-gray-600"
      }`}
    /> */}
      </div>

      {/* Steps */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <StepOne
            releaseData={releaseData}
            handleReleaseChange={handleReleaseChange}
            handleArtistChange={handleArtistChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <StepTwo
            releaseData={releaseData}
            trackData={trackData}
            handleReleaseChange={handleReleaseChange}
            handleTrackChange={handleTrackChange}
            handleTerritoryChange={handleTerritoryChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <StepThree
            releaseData={releaseData}
            handleReleaseChange={handleReleaseChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && (
          <StepFour
            releaseData={releaseData}
            splitSheetData={splitSheetData}
            handleSplitChange={handleSplitChange}
            handleContributorsChange={handleContributorsChange}
            prevStep={prevStep}
            isSubmitting={isSubmitting}
          />
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
