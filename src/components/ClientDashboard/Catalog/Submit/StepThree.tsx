import { FaAnglesLeft } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { FormDataType } from "./data";

type StepThreeProps = {
  formData: FormDataType;
  handleChange: () => void;
  nextStep: () => void;
  prevStep: () => void;
};

const StepThree = ({
  formData,
  handleChange,
  prevStep,
  nextStep,
}: StepThreeProps) => {
  return (
    <div className="space-y-9">
      <div>
        <h1 className="text-3xl font-sans">Additional & Partner Details</h1>
        <p className="text-gray-400 mt-2 text-sm">
          Please provide any extra information for special distribution and
          promotion.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-sans mb-4">Content & Promotion</h2>
        <div className="space-y-6">
          {/* Dolby Atmos Version */}
          <div>
            <label className="block text-sm mb-2">
              Does this track have a Dolby Atmos version?
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasDolbyAtmosVersion"
                  value="true"
                  checked={formData.hasDolbyAtmosVersion === true}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-0 cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasDolbyAtmosVersion"
                  value="false"
                  checked={formData.hasDolbyAtmosVersion === false}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-0 cursor-pointer"
                />
                No
              </label>
            </div>
          </div>

          {/* Extended Mix */}
          <div>
            <label className="block text-sm mb-2">
              Is there an extended mix available for DJ stores?
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasExtendedMixForDjStores"
                  value="true"
                  checked={formData.hasExtendedMixForDjStores === true}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-0 cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasExtendedMixForDjStores"
                  value="false"
                  checked={formData.hasExtendedMixForDjStores === false}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-0 cursor-pointer"
                />
                No
              </label>
            </div>
          </div>

          {/* Artist on Spotify */}
          <div>
            <label className="block text-sm mb-2">
              Does the artist already have a profile on Spotify?
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasArtistOnSpotify"
                  value="true"
                  checked={formData.hasArtistOnSpotify === true}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-0 cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasArtistOnSpotify"
                  value="false"
                  checked={formData.hasArtistOnSpotify === false}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-0 cursor-pointer"
                />
                No
              </label>
            </div>
          </div>

          {/* Music Video */}
          <div>
            <label className="block text-sm mb-2">
              Is there a music video for this release?
            </label>
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasMusicVideo"
                  value="true"
                  checked={formData.hasMusicVideo === true}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-0 cursor-pointer"
                />
                Yes
              </label>
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="hasMusicVideo"
                  value="false"
                  checked={formData.hasMusicVideo === false}
                  onChange={handleChange}
                  className="text-blue-500 focus:ring-0 cursor-pointer"
                />
                No
              </label>
            </div>
          </div>

          {/* Additional Details (Message) */}
          <div className="grid w-full gap-2">
            <label
              htmlFor="additionalDetails"
              className="text-sm font-medium text-gray-200"
            >
              Additional Details
            </label>
            <textarea
              id="additionalDetails"
              name="additionalDetails"
              value={formData.additionalDetails || ""}
              onChange={handleChange}
              placeholder="Type any additional details here..."
              className="w-full min-h-[120px] rounded-xl border border-gray-600 bg-[#213430] px-4 py-3 text-sm text-gray-100 placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-y"
            />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={prevStep}
            className="flex items-center gap-2 px-6 py-2 rounded-xl 
             bg-gray-600 text-white font-medium shadow-md 
             hover:bg-gray-700 hover:shadow-lg 
             focus:outline-none focus:ring-2 focus:ring-gray-400 
             transition-all duration-200 cursor-pointer"
          >
            <FaAnglesLeft className="text-lg" />
            Previous
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="flex items-center gap-2 px-6 py-2 text-white font-medium bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 cursor-pointer"
          >
            Next
            <FaAngleDoubleRight className="text-lg" />
          </button>

          {/* <button
            type="submit"
            className="px-6 py-2 bg-green-600 rounded-xl hover:bg-green-700 cursor-pointer"
          >
            Submit
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default StepThree;
