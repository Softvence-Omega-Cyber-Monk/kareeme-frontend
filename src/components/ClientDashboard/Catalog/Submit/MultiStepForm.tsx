import { useState } from "react";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

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
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormDataType>({
    name: "",
    email: "",
    phone: "",
    artistName: "",
    location: "",
    releaseDate: "",
    preOrderDate: "",
    label: "",
    albumArtist: "",
    releaseTitle: "",
    releaseType: "Single",
    genre: "",
    artwork: null,
    musicFile: "",
    tiktokClip: null,
  });

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (files && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
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
    alert("Form submitted successfully! Check console for data.");
  };

  return (
    <div className=" w-full ">
      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-8">
        <div
          className={`h-2 flex-1 rounded-full mr-2 ${
            step >= 1 ? "bg-green-500" : "bg-gray-600"
          }`}
        />
        <div
          className={`h-2 flex-1 rounded-full mr-2 ${
            step >= 2 ? "bg-blue-500" : "bg-gray-600"
          }`}
        />
        <div
          className={`h-2 flex-1 rounded-full ${
            step >= 3 ? "bg-purple-500" : "bg-gray-600"
          }`}
        />
      </div>

      {/* Steps */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {step === 1 && (
          <StepOne
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <StepTwo
            formData={formData}
            handleChange={handleChange}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <StepThree
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

// import { useState } from "react";

// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     artistName: "",
//     location: "",
//     releaseDate: "",
//     preOrderDate: "",
//     label: "",
//     albumArtist: "",
//     releaseTitle: "",
//     releaseType: "Single",
//     genre: "",
//     artwork: null as File | null,
//     musicFile: "",
//     tiktokClip: null as File | null,
//   });

//   // Handle input changes
//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value, files } = e.target as HTMLInputElement;
//     if (files && files.length > 0) {
//       setFormData({ ...formData, [name]: files[0] });
//     } else {
//       setFormData({ ...formData, [name]: value });
//     }
//   };

//   // Navigation functions
//   const nextStep = () => setStep((prev) => prev + 1);
//   const prevStep = () => setStep((prev) => prev - 1);

//   // Submit
//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log("✅ Final Form Data:", formData);
//     alert("Form submitted successfully! Check console for data.");
//   };

//   return (
//     <div className=" text-white flex items-center justify-center px-4">
//       <div className="max-w-4xl w-full bg-black/30 p-8 rounded-2xl shadow-lg">
//         {/* Progress Bar */}
//         <div className="flex items-center justify-between mb-8">
//           <div
//             className={`h-2 flex-1 rounded-full mr-2 ${
//               step >= 1 ? "bg-green-500" : "bg-gray-600"
//             }`}
//           ></div>
//           <div
//             className={`h-2 flex-1 rounded-full mr-2 ${
//               step >= 2 ? "bg-blue-500" : "bg-gray-600"
//             }`}
//           ></div>
//           <div
//             className={`h-2 flex-1 rounded-full ${
//               step >= 3 ? "bg-purple-500" : "bg-gray-600"
//             }`}
//           ></div>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-6">
//           {/* STEP 1 */}
//           {step === 1 && (
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Artist Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Your Name"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Your Email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="artistName"
//                   placeholder="Artist Name"
//                   value={formData.artistName}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="location"
//                   placeholder="Where are you from?"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full col-span-2"
//                 />
//               </div>
//               <div className="flex justify-end mt-6">
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700"
//                 >
//                   Next →
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* STEP 2 */}
//           {step === 2 && (
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Release Information</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="date"
//                   name="releaseDate"
//                   value={formData.releaseDate}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="date"
//                   name="preOrderDate"
//                   value={formData.preOrderDate}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="label"
//                   placeholder="Label Name"
//                   value={formData.label}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="albumArtist"
//                   placeholder="Album Level Artist"
//                   value={formData.albumArtist}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="releaseTitle"
//                   placeholder="Release Title"
//                   value={formData.releaseTitle}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <select
//                   name="releaseType"
//                   value={formData.releaseType}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 >
//                   <option>Single</option>
//                   <option>Album</option>
//                   <option>EP</option>
//                 </select>
//               </div>
//               <div className="flex justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="px-6 py-2 bg-gray-600 rounded-xl hover:bg-gray-700"
//                 >
//                   ← Back
//                 </button>
//                 <button
//                   type="button"
//                   onClick={nextStep}
//                   className="px-6 py-2 bg-blue-600 rounded-xl hover:bg-blue-700"
//                 >
//                   Next →
//                 </button>
//               </div>
//             </div>
//           )}

//           {/* STEP 3 */}
//           {step === 3 && (
//             <div>
//               <h2 className="text-2xl font-bold mb-4">Content & Promotion</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="file"
//                   name="artwork"
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="url"
//                   name="musicFile"
//                   placeholder="Music File Link (http://...)"
//                   value={formData.musicFile}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="text"
//                   name="genre"
//                   placeholder="Genre"
//                   value={formData.genre}
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//                 <input
//                   type="file"
//                   name="tiktokClip"
//                   onChange={handleChange}
//                   className="p-3 rounded bg-gray-800 w-full"
//                 />
//               </div>
//               <div className="flex justify-between mt-6">
//                 <button
//                   type="button"
//                   onClick={prevStep}
//                   className="px-6 py-2 bg-gray-600 rounded-xl hover:bg-gray-700"
//                 >
//                   ← Back
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-6 py-2 bg-green-600 rounded-xl hover:bg-green-700"
//                 >
//                   Submit ✅
//                 </button>
//               </div>
//             </div>
//           )}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default MultiStepForm;
