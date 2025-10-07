import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaMusic } from "react-icons/fa";

const SplitSheetDetail = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { title } = useParams();

  if (!state) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-[#0C1F21]">
        <p className="text-gray-400 text-lg mb-6">Song not found.</p>
        <button
          onClick={() => navigate("/client-dashboard/split-sheet")}
          className="bg-[#3A5CFF] hover:bg-blue-600 transition-colors text-white px-6 py-2 rounded-lg shadow-md"
        >
          Go Back
        </button>
      </div>
    );
  }

  const {
    songTitle,
    label,
    upc,
    releaseDate,
    type,
    imageUrl,
    genre,
    duration,
    producers,
    writers,
    description,
    recordingArtists,
    recordLabelFull,
    iswc,
  } = state;

  return (
    <div className="mx-auto bg-[#0C1F21] rounded-xl border border-[#2C403E] p-6 shadow-xl text-white">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 bg-[#3A5CFF] hover:bg-blue-600 transition-colors px-5 py-2 rounded-lg shadow-md cursor-pointer"
      >
        ← Back
      </button>

      {/* Song Image on Top */}
      <div className="flex justify-center mb-8">
        <img
          src={imageUrl}
          alt={songTitle || title}
          className="rounded-2xl shadow-lg border border-gray-700 object-cover w-full max-h-[400px]"
        />
      </div>

      {/* Song Details in 2-column Grid */}
      <div className="bg-[#0D1F21] text-white p-6 rounded-xl shadow-lg">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <FaMusic /> Song Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2 font-sans">Song Title</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={songTitle || title}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">ISWC No</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={iswc}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">Release Date</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={releaseDate}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">
              Recording Artist(s)
            </label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={recordingArtists}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">Record Label</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={recordLabelFull || label}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">UPC</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={upc}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">Type</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={type}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">Genre</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={genre}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">Duration</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={duration}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">Producers</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={producers.join(", ")}
              readOnly
            />
          </div>

          <div>
            <label className="block text-sm mb-2 font-sans">Writers</label>
            <input
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
              type="text"
              value={writers.join(", ")}
              readOnly
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm mb-2 font-sans">Description</label>
            <textarea
              className="p-3 rounded-xl bg-[#20362F] w-full text-white resize-none"
              value={description}
              rows={4}
              readOnly
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="bg-[#3A5CFF] hover:bg-blue-600 transition-colors text-white px-8 py-3 rounded-xl shadow-lg font-semibold cursor-pointer">
            Download Split Sheet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitSheetDetail;

// import { useLocation, useNavigate, useParams } from "react-router-dom";

// const SplitSheetDetail = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const { title } = useParams();

//   if (!state) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-[#0C1F21]">
//         <p className="text-gray-400 text-lg mb-6">Album not found.</p>
//         <button
//           onClick={() => navigate("/client-dashboard/split-sheet")}
//           className="bg-[#3A5CFF] hover:bg-blue-600 transition-colors text-white px-6 py-2 rounded-lg shadow-md"
//         >
//           Go Back
//         </button>
//       </div>
//     );
//   }

//   const {
//     artist,
//     label,
//     upc,
//     releaseDate,
//     type,
//     imageUrl,
//     genre,
//     duration,
//     producers,
//     writers,
//     description,
//   } = state;

//   return (
//     <div className=" mx-auto  bg-[#0C1F21] rounded-xl border border-[#2C403E] p-6 shadow-xl text-white">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-8 bg-[#3A5CFF] hover:bg-blue-600 transition-colors px-5 py-2 rounded-lg shadow-md cursor-pointer"
//       >
//         ← Back
//       </button>

//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Album Image */}
//         <div className="md:w-1/2 flex justify-center items-start">
//           <img
//             src={imageUrl}
//             alt={title}
//             className="rounded-2xl shadow-lg border border-gray-700 object-cover w-full max-h-[400px]"
//           />
//         </div>

//         {/* Album Info */}
//         <div className="flex-1 flex flex-col justify-between">
//           <div className="space-y-3">
//             <h1 className="text-4xl font-extrabold">{title}</h1>
//             <p className="text-2xl text-[#3A5CFF] font-semibold">{artist}</p>
//             <p className="text-gray-300 text-lg">Label: {label}</p>

//             <div className="border-t border-[#2C403E] my-4"></div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-400">
//               <p>
//                 <span className="text-white font-medium">UPC:</span> {upc}
//               </p>
//               <p>
//                 <span className="text-white font-medium">Release Date:</span>{" "}
//                 {releaseDate}
//               </p>
//               <p>
//                 <span className="text-white font-medium">Type:</span> {type}
//               </p>
//               <p>
//                 <span className="text-white font-medium">Genre:</span> {genre}
//               </p>
//               <p>
//                 <span className="text-white font-medium">Duration:</span>{" "}
//                 {duration}
//               </p>
//               <p>
//                 <span className="text-white font-medium">Producers:</span>{" "}
//                 {producers.join(", ")}
//               </p>
//               <p>
//                 <span className="text-white font-medium">Writers:</span>{" "}
//                 {writers.join(", ")}
//               </p>
//             </div>
//           </div>

//           <div className="border-t border-[#2C403E] my-6"></div>

//           <div className="text-gray-300 leading-relaxed text-lg">
//             {description}
//           </div>

//           <div className="mt-8">
//             <button className="bg-[#3A5CFF] hover:bg-blue-600 transition-colors text-white px-8 py-3 rounded-xl shadow-lg font-semibold cursor-pointer">
//               Download Split Sheet
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SplitSheetDetail;
