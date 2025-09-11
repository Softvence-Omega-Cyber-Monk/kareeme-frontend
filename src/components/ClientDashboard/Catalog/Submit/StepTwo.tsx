import { FormDataType } from "./MultiStepForm";

type StepTwoProps = {
  formData: FormDataType;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  nextStep: () => void;
  prevStep: () => void;
};

const StepTwo = ({
  formData,
  handleChange,
  nextStep,
  prevStep,
}: StepTwoProps) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Release Information</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="date"
          name="releaseDate"
          value={formData.releaseDate}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
        <input
          type="date"
          name="preOrderDate"
          value={formData.preOrderDate}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
        <input
          type="text"
          name="label"
          placeholder="Label Name"
          value={formData.label}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
        <input
          type="text"
          name="albumArtist"
          placeholder="Album Level Artist"
          value={formData.albumArtist}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
        <input
          type="text"
          name="releaseTitle"
          placeholder="Release Title"
          value={formData.releaseTitle}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        />
        <select
          name="releaseType"
          value={formData.releaseType}
          onChange={handleChange}
          className="p-3 rounded bg-gray-800 w-full"
        >
          <option>Single</option>
          <option>Album</option>
          <option>EP</option>
        </select>
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
          type="button"
          onClick={nextStep}
          className="px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700"
        >
          Next →
        </button>
      </div>
    </div>
  );
};

export default StepTwo;
