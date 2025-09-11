import { FormDataType } from "./MultiStepForm";

type StepThreeProps = {
  formData: FormDataType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  prevStep: () => void;
};

const StepThree = ({ formData, handleChange, prevStep }: StepThreeProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Content & Promotion</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="file"
          name="artwork"
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
        <input
          type="url"
          name="musicFile"
          placeholder="Music File Link (http://...)"
          value={formData.musicFile}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
        <input
          type="text"
          name="genre"
          placeholder="Genre"
          value={formData.genre}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
        <input
          type="file"
          name="tiktokClip"
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
      </div>
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={prevStep}
          className="px-6 py-2 bg-gray-600 rounded-xl hover:bg-gray-700"
        >
          ← Back
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-green-600 rounded-xl hover:bg-green-700"
        >
          Submit ✅
        </button>
      </div>
    </div>
  );
};

export default StepThree;
