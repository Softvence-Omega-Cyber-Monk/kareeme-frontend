import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import { toast } from "sonner";
import { ArtistInfo, FormDataType, Track } from "./data";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    producer: "",
    location: "",
    releaseDate: "",
    preOrderDate: "",
    additionalDetails: "",
    hasArtistOnSpotify: false,
    hasMusicVideo: false,
    isExplicitContent: false,
    hasDolbyAtmosVersion: false,
    hasExtendedMixForDjStores: false,
    hasExternalRightsHolder: false,
    lyricistCredits: "",
    typeOfRelease: "",
    labelName: "",
    albumLevelArtistName: "",
    releaseTitle: "",
    genre: "",
    producerCredits: "",
    artwork: null,
    musicFile: "",
    // Add fields for StepTwo
    publisher: "",
    copyrightHolder: "",
    language: "",
    lyricist: "",
    masterSplits: "",
    territory: "",
    externalSplits: "",
    territories: "",
    // Add fields for StepFour
    songTitle: "",
    iswc: "",
    releaseDateSplit: "",
    recordingArtists: "",
    recordLabel: "",
    recordLabelFull: "",
  });
  const [artistInfo, setArtistInfo] = useState<ArtistInfo>({
    name: "",
    email: "",
    phone: "",
    stageName: "",
    location: "",
  });
  const [trackInfo, setTrackInfo] = useState<Track>({
    releaseId: "",
    trackNumber: 0,
    trackTitle: "",
    trackGenre: "",
    trackMix: "",
    explicitContent: false,
    trackLanguage: "",
    trackPublisher: "",
    audioFileUrl: "",
    originalReleaseDate: "",
    territoryRestrictions: "",
    trackArtists: [],
    trackIsrc: "",
  });
  const artistInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target as HTMLInputElement;
    setArtistInfo((prev) => ({ ...prev, [name]: value }));
  };
  const handleTrackInfoChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "radio") {
      const booleanValue =
        value === "true" ? true : value === "false" ? false : value;
      setTrackInfo((prev) => ({ ...prev, [name]: booleanValue }));
    } else {
      setTrackInfo((prev) => ({ ...prev, [name]: value }));
    }
  };
  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const files = (e.target as HTMLInputElement).files;

    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else if (type === "radio") {
      // Convert "true"/"false" strings to actual booleans
      const booleanValue =
        value === "true" ? true : value === "false" ? false : value;
      setFormData((prev) => ({ ...prev, [name]: booleanValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Navigation
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  // Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("✅ Final Form Data:", formData);
    toast.success("Form submitted successfully! Check console for data.");
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
            formData={formData}
            artistData={artistInfo}
            handleChange={handleChange}
            nextStep={nextStep}
            artistInfoChange={artistInfoChange}
          />
        )}
        {step === 2 && (
          <StepTwo
            formData={formData}
            trackInfo={trackInfo}
            handleChange={handleChange}
            handleTrackInfoChange={handleTrackInfoChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <StepThree
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 4 && (
          <StepFour
            formData={formData}
            handleChange={handleChange}
            prevStep={prevStep}
          />
        )}
      </form>
    </div>
  );
};

export default MultiStepForm;
