import { useLocation, useNavigate, useParams } from "react-router-dom";
import { FaMusic } from "react-icons/fa";
import { GiVanDammeSplit } from "react-icons/gi";


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
    <div className="mx-auto bg-[#0C1F21] rounded-xl border border-[#2C403E] p-6 shadow-xl text-white ">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 bg-[#3A5CFF] hover:bg-blue-600 transition-colors px-5 py-2 rounded-lg shadow-md cursor-pointer"
      >
        ← Back
      </button>

      {/* Song Image */}
      <div className="flex justify-center mb-8">
        <img
          src={imageUrl}
          alt={songTitle || title}
          className="rounded-2xl shadow-lg border border-gray-700 object-cover w-full max-h-[400px]"
        />
      </div>

      {/* Song Details */}
      <div className="bg-[#0D1F21] text-white ">
        <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
          <FaMusic /> Song Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-2 font-sans">Song Title</label>
            <input
              type="text"
              value={songTitle || title}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">ISWC No</label>
            <input
              type="text"
              value={iswc}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">Release Date</label>
            <input
              type="text"
              value={releaseDate}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">
              Recording Artist(s)
            </label>
            <input
              type="text"
              value={recordingArtists}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">Record Label</label>
            <input
              type="text"
              value={recordLabelFull || label}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">UPC</label>
            <input
              type="text"
              value={upc}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">Type</label>
            <input
              type="text"
              value={type}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">Genre</label>
            <input
              type="text"
              value={genre}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">Duration</label>
            <input
              type="text"
              value={duration}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">Producers</label>
            <input
              type="text"
              value={producers.join(", ")}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div>
            <label className="block text-sm mb-2 font-sans">Writers</label>
            <input
              type="text"
              value={writers.join(", ")}
              readOnly
              className="p-3 rounded-xl bg-[#20362F] w-full text-white"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm mb-2 font-sans">Description</label>
            <textarea
              value={description}
              readOnly
              rows={4}
              className="p-3 rounded-xl bg-[#20362F] w-full text-white resize-none"
            />
          </div>
        </div>

        {/* Static Contributors Section */}
        <div className=" text-white mt-5">
          <h2 className="text-2xl font-sans mb-6"></h2>
          <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
            <GiVanDammeSplit /> Contributors & Splits
          </h2>
          {/* Contributor 1 */}
          <div className=" rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm mb-2 font-sans">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="p-3 rounded-xl bg-[#20362F] w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-sans">
                  Contribution
                </label>
                <input
                  type="text"
                  placeholder="Enter contribution"
                  className="p-3 rounded-xl bg-[#20362F] w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-sans">Email</label>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="p-3 rounded-xl bg-[#20362F] w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-sans">Phone</label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="p-3 rounded-xl bg-[#20362F] w-full"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm mb-2 font-sans">
                Address (Optional)
              </label>
              <input
                type="text"
                placeholder="Street address, city, zip code"
                className="p-3 rounded-xl bg-[#20362F] w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm mb-2 font-sans">
                  Publisher
                </label>
                <input
                  type="text"
                  placeholder="Enter publisher name"
                  className="p-3 rounded-xl bg-[#20362F] w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-sans">
                  Affiliation
                </label>
                <input
                  type="text"
                  placeholder="Affiliation"
                  className="p-3 rounded-xl bg-[#20362F] w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-sans">
                  IPI/CAE Number
                </label>
                <input
                  type="number"
                  placeholder="Enter IPI/CAE number"
                  className="p-3 rounded-xl bg-[#20362F] w-full"
                />
              </div>
              <div>
                <label className="block text-sm mb-2 font-sans">
                  Percentage Split
                </label>
                <input
                  type="number"
                  placeholder="00"
                  className="p-3 rounded-xl bg-[#20362F] w-full"
                />
              </div>
            </div>
          </div>

          {/* You can duplicate the above block for Contributor 2, 3, etc. */}
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
// import { FaMusic } from "react-icons/fa";

// const SplitSheetDetail = () => {
//   const navigate = useNavigate();
//   const { state } = useLocation();
//   const { title } = useParams();

//   if (!state) {
//     return (
//       <div className="flex flex-col items-center justify-center h-screen bg-[#0C1F21]">
//         <p className="text-gray-400 text-lg mb-6">Song not found.</p>
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
//     songTitle,
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
//     recordingArtists,
//     recordLabelFull,
//     iswc,
//   } = state;

//   return (
//     <div className="mx-auto bg-[#0C1F21] rounded-xl border border-[#2C403E] p-6 shadow-xl text-white">
//       <button
//         onClick={() => navigate(-1)}
//         className="mb-8 bg-[#3A5CFF] hover:bg-blue-600 transition-colors px-5 py-2 rounded-lg shadow-md cursor-pointer"
//       >
//         ← Back
//       </button>

//       {/* Song Image on Top */}
//       <div className="flex justify-center mb-8">
//         <img
//           src={imageUrl}
//           alt={songTitle || title}
//           className="rounded-2xl shadow-lg border border-gray-700 object-cover w-full max-h-[400px]"
//         />
//       </div>

//       {/* Song Details in 2-column Grid */}
//       <div className="bg-[#0D1F21] text-white p-6 rounded-xl shadow-lg">
//         <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
//           <FaMusic /> Song Information
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <div>
//             <label className="block text-sm mb-2 font-sans">Song Title</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={songTitle || title}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">ISWC No</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={iswc}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">Release Date</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={releaseDate}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">
//               Recording Artist(s)
//             </label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={recordingArtists}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">Record Label</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={recordLabelFull || label}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">UPC</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={upc}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">Type</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={type}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">Genre</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={genre}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">Duration</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={duration}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">Producers</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={producers.join(", ")}
//               readOnly
//             />
//           </div>

//           <div>
//             <label className="block text-sm mb-2 font-sans">Writers</label>
//             <input
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white"
//               type="text"
//               value={writers.join(", ")}
//               readOnly
//             />
//           </div>

//           <div className="md:col-span-2">
//             <label className="block text-sm mb-2 font-sans">Description</label>
//             <textarea
//               className="p-3 rounded-xl bg-[#20362F] w-full text-white resize-none"
//               value={description}
//               rows={4}
//               readOnly
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex justify-end">
//           <button className="bg-[#3A5CFF] hover:bg-blue-600 transition-colors text-white px-8 py-3 rounded-xl shadow-lg font-semibold cursor-pointer">
//             Download Split Sheet
//           </button>
//         </div>
//       </div>

//       <div>

//       </div>
//     </div>
//   );
// };

// export default SplitSheetDetail;
