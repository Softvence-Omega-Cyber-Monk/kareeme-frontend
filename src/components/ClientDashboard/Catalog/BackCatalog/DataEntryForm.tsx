import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { RiFileMusicFill } from "react-icons/ri";

type TrackDetail = {
  trackTitle?: string;
  artistNameOnTrack?: string;
  trackGenre?: string;
  trackMix?: string;
  isRemix?: string;
  trackLanguage?: string;
  trackPublisher?: string;
  trackDate?: string;
  isrcCode?: string;
  territoryRestrictions?: string;
  trackPublisherInfo?: string;
};

export default function DataEntryForm() {
  const [tracks, setTracks] = useState([{ id: 1 }]);
  type FormDataType = {
    labelName: string;
    distributorName: string;
    upcCode: string;
    catalogueNumber: string;
    releaseArtist: string;
    releaseTitle: string;
    releaseType: string;
    releaseDate: string;
    pLine: string;
    cLine: string;
    artwork: File | null;
    trackDetails: TrackDetail[];
    clientName: string;
    nameOnTrack: string;
    artistType: string;
    songWriterRole: string;
    realName: string;
    spotifyId: string;
    appleId: string;
  };

  const [formData, setFormData] = useState<FormDataType>({
    labelName: "",
    distributorName: "",
    upcCode: "",
    catalogueNumber: "",
    releaseArtist: "",
    releaseTitle: "",
    releaseType: "",
    releaseDate: "",
    pLine: "",
    cLine: "",
    artwork: null,
    trackDetails: [{} as TrackDetail],
    clientName: "",
    nameOnTrack: "",
    artistType: "",
    songWriterRole: "",
    realName: "",
    spotifyId: "",
    appleId: "",
  });

  const addTrack = () => {
    setTracks([...tracks, { id: tracks.length + 1 }]);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setFormData((prevData) => ({ ...prevData, artwork: file }));
  };

  const handleTrackChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
    idx: number
  ) => {
    const { name, value } = e.target;
    const updatedTracks = [...formData.trackDetails];
    updatedTracks[idx] = { ...updatedTracks[idx], [name]: value };
    setFormData((prevData) => ({ ...prevData, trackDetails: updatedTracks }));
  };

  return (
    <div className=" text-white  space-y-8">
      {/* General Release Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[#0D1F21] rounded-2xl p-6 shadow-lg space-y-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            🌸 General Release Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              placeholder="Enter label name"
              name="labelName"
              value={formData.labelName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              placeholder="Enter Distributor name"
              name="distributorName"
              value={formData.distributorName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              placeholder="Enter UPC Code"
              name="upcCode"
              value={formData.upcCode}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              placeholder="Enter catalogue number"
              name="catalogueNumber"
              value={formData.catalogueNumber}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              placeholder="Enter release artist"
              name="releaseArtist"
              value={formData.releaseArtist}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              placeholder="Enter release title"
              name="releaseTitle"
              value={formData.releaseTitle}
              onChange={handleInputChange}
            />
            <select
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              name="releaseType"
              value={formData.releaseType}
              onChange={handleInputChange}
            >
              <option>Select release type</option>
              <option>Single</option>
              <option>Album</option>
              <option>EP</option>
            </select>
            <input
              type="date"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              name="releaseDate"
              value={formData.releaseDate}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              placeholder="Enter P line"
              name="pLine"
              value={formData.pLine}
              onChange={handleInputChange}
            />
            <input
              type="text"
              className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
              placeholder="Enter C line"
              name="cLine"
              value={formData.cLine}
              onChange={handleInputChange}
            />
          </div>
        </div>

        {/* Artwork Upload */}
        <label className="cursor-pointer  border-gray-500 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-gray-800 bg-[#0D1F21] flex items-center justify-center border-2 border-dashed ">
          <div>
            <div className="cursor-pointer  border-gray-500 rounded-lg p-6 text-center hover:border-blue-400 hover:bg-gray-800">
              <div className="text-green-400 text-3xl">⬆️</div>
              <div className="mt-2 text-gray-300">
                Drop artwork file here or browse
              </div>
              <input
                type="file"
                className="hidden"
                accept=".jpg,.jpeg,.png"
                onChange={handleFileChange}
              />
              <p className="text-xs text-gray-500 mt-2">
                JPEG or PNG, max 10MB
              </p>
            </div>
          </div>
        </label>
      </div>

      {/* Track Information */}
      <div className="bg-[#0D1F21] rounded-2xl p-6 shadow-lg space-y-4">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              🎵 Track Information
            </h2>
            <button
              onClick={addTrack}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition cursor-pointer"
            >
              <FaPlus /> Add Track
            </button>
          </div>

          {tracks.map((track, idx) => (
            <div
              key={track.id}
              className="border-t border-gray-700 pt-6 mt-6 space-y-4"
            >
              <h3 className="font-medium text-gray-200">Track {idx + 1}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Track Number"
                  value={idx + 1}
                  readOnly
                  name={`trackNumber-${idx}`}
                />
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Track Title"
                  name={`trackTitle-${idx}`}
                  value={formData.trackDetails[idx]?.trackTitle || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Artist name on track"
                  name={`artistNameOnTrack-${idx}`}
                  value={formData.trackDetails[idx]?.artistNameOnTrack || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Track Genre"
                  name={`trackGenre-${idx}`}
                  value={formData.trackDetails[idx]?.trackGenre || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Track Mix/Version"
                  name={`trackMix-${idx}`}
                  value={formData.trackDetails[idx]?.trackMix || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <select
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  name={`isRemix-${idx}`}
                  value={formData.trackDetails[idx]?.isRemix || "No"}
                  onChange={(e) => handleTrackChange(e, idx)}
                >
                  <option>No</option>
                  <option>Yes</option>
                </select>
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Track Language"
                  name={`trackLanguage-${idx}`}
                  value={formData.trackDetails[idx]?.trackLanguage || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Track Publisher"
                  name={`trackPublisher-${idx}`}
                  value={formData.trackDetails[idx]?.trackPublisher || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <input
                  type="date"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  name={`trackDate-${idx}`}
                  value={formData.trackDetails[idx]?.trackDate || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Enter ISRC code"
                  name={`isrcCode-${idx}`}
                  value={formData.trackDetails[idx]?.isrcCode || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Territory Restrictions"
                  name={`territoryRestrictions-${idx}`}
                  value={
                    formData.trackDetails[idx]?.territoryRestrictions || ""
                  }
                  onChange={(e) => handleTrackChange(e, idx)}
                />
                <input
                  type="text"
                  className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
                  placeholder="Track Publisher"
                  name={`trackPublisherInfo-${idx}`}
                  value={formData.trackDetails[idx]?.trackPublisherInfo || ""}
                  onChange={(e) => handleTrackChange(e, idx)}
                />
              </div>
            </div>
          ))}
        </div>
        {/* <div className="max-w-sm bg-[#0D1F21] rounded-2xl p-6 flex items-center justify-center text-center border-2 border-dashed border-gray-600">
          <div>
            <div className="text-[#3A5CFF] text-3xl">
              <RiFileMusicFill />
            </div>
            <p className="mt-2 text-gray-300">
              Upload audio file (.wav preferred)
            </p>
          </div>
        </div> */}
        <label className="cursor-pointer border-gray-600 rounded-2xl p-6 text-center hover:border-blue-400 hover:bg-gray-800 bg-[#0D1F21] flex items-center justify-center border-2 border-dashed max-w-sm">
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#3A5CFF] text-3xl">
                <RiFileMusicFill />
              </div>
              <p className="mt-2 text-gray-300">
                Upload audio file (.wav preferred)
              </p>
              <input
                type="file"
                className="hidden"
                accept=".wav,.mp3,.ogg"
                // onChange={handleAudioChange} // your handler
              />
              <p className="text-xs text-gray-500 mt-2">
                WAV, MP3, or OGG, max 20MB
              </p>
            </div>
          </div>
        </label>
      </div>

      {/* Artist Metadata (Per Track) */}
      <div className="bg-[#0D1F21] rounded-2xl p-6 shadow-lg space-y-4">
        <h2 className="text-lg font-semibold">
          🎤 Artist Metadata (Per Track)
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
            placeholder="Client Name"
            name="clientName"
            value={formData.clientName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
            placeholder="Name On Track"
            name="nameOnTrack"
            value={formData.nameOnTrack}
            onChange={handleInputChange}
          />
          <select
            className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
            name="artistType"
            value={formData.artistType}
            onChange={handleInputChange}
          >
            <option>Select Artist Type</option>
            <option>Type 1</option>
            <option>Type 2</option>
          </select>
          <input
            type="text"
            className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
            placeholder="Song Writer Role"
            name="songWriterRole"
            value={formData.songWriterRole}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
            placeholder="Real Name"
            name="realName"
            value={formData.realName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
            placeholder="Spotify ID"
            name="spotifyId"
            value={formData.spotifyId}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
            placeholder="Apple ID"
            name="appleId"
            value={formData.appleId}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="flex justify-end mt-6 space-x-4">
        <button className="px-6 py-2 bg-gray-600 rounded-lg text-white cursor-pointer hover:bg-gray-700 transition">
          Save As Draft
        </button>
        <button className="px-6 py-2 bg-blue-600 rounded-lg text-white cursor-pointer hover:bg-blue-700 transition">
          Submit Back Catalog Data
        </button>
      </div>
    </div>
  );
}

// import { useState } from "react";
// import { FaPlus } from "react-icons/fa";
// import { RiFileMusicFill } from "react-icons/ri";

// export default function DataEntryForm() {
//   const [tracks, setTracks] = useState([{ id: 1 }]);

//   const addTrack = () => {
//     setTracks([...tracks, { id: tracks.length + 1 }]);
//   };

//   return (
//     <div className="min-h-screen text-white p-8 space-y-8">
//       {/* General Release Information */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="md:col-span-2 bg-[#0D1F21] rounded-2xl p-6 shadow-lg space-y-6">
//           <h2 className="text-lg font-semibold flex items-center gap-2">
//             🌸 General Release Information
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//               placeholder="Enter label name"
//             />
//             <input
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//               placeholder="Enter Distributor name"
//             />
//             <input
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//               placeholder="Enter UPC Code"
//             />
//             <input
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//               placeholder="Enter catalogue number"
//             />
//             <input
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//               placeholder="Enter release artist"
//             />
//             <input
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//               placeholder="Enter release title"
//             />
//             <select className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white">
//               <option>Select release type</option>
//               <option>Single</option>
//               <option>Album</option>
//               <option>EP</option>
//             </select>
//             <input
//               type="date"
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//             />
//             <input
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//               placeholder="Enter P line"
//             />
//             <input
//               className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//               placeholder="Enter C line"
//             />
//           </div>
//         </div>

//         {/* Artwork Upload */}
//         <div className="bg-[#0D1F21] rounded-2xl p-6 flex items-center justify-center text-center border-2 border-dashed border-gray-600">
//           <div>
//             <div className="text-green-400 text-3xl">⬆️</div>
//             <p className="mt-2 text-gray-300">
//               Drop artwork file here or{" "}
//               <span className="text-blue-400 cursor-pointer">browse</span>
//             </p>
//             <p className="text-xs text-gray-500">JPEG or PNG, max 10MB</p>
//           </div>
//         </div>
//       </div>

//       {/* Track Information */}
//       <div className="bg-[#0D1F21] rounded-2xl p-6 shadow-lg space-y-4">
//         <div>
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-lg font-semibold flex items-center gap-2">
//               🎵 Track Information
//             </h2>
//             <button
//               onClick={addTrack}
//               className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition"
//             >
//               <FaPlus /> Add Track
//             </button>
//           </div>

//           {tracks.map((track, idx) => (
//             <div
//               key={track.id}
//               className="border-t border-gray-700 pt-6 mt-6 space-y-4"
//             >
//               <h3 className="font-medium text-gray-200">Track {idx + 1}</h3>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Track Number"
//                   value={idx + 1}
//                   readOnly
//                 />
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Track Title"
//                 />
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Artist name on track"
//                 />
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Track Genre"
//                 />
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Track Mix/Version"
//                 />
//                 <select className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white">
//                   <option>No</option>
//                   <option>Yes</option>
//                 </select>
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Track Language"
//                 />
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Track Publisher"
//                 />
//                 <input
//                   type="date"
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                 />
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Enter ISRC code"
//                 />
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Territory Restrictions"
//                 />
//                 <input
//                   className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//                   placeholder="Track Publisher"
//                 />
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="max-w-sm bg-[#0D1F21] rounded-2xl p-6 flex items-center justify-center text-center border-2 border-dashed border-gray-600">
//           <div>
//             <div className="text-[#3A5CFF] text-3xl">
//               <RiFileMusicFill />
//             </div>
//             <p className="mt-2 text-gray-300">
//               Upload audio file (.wav preferred)
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Artist Metadata (Per Track) */}
//       <div className="bg-[#0D1F21] rounded-2xl p-6 shadow-lg space-y-4">
//         <h2 className="text-lg font-semibold">
//           🎤 Artist Metadata (Per Track)
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//           <input
//             className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//             placeholder="Client Name"
//           />
//           <input
//             className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//             placeholder="Name On Track"
//           />
//           <select className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white">
//             <option>Select Artist Type</option>
//             <option>Type 1</option>
//             <option>Type 2</option>
//           </select>
//           <input
//             className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//             placeholder="Song Writer Role"
//           />
//           <input
//             className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//             placeholder="Real Name"
//           />
//           <input
//             className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//             placeholder="Spotify ID"
//           />
//           <input
//             className="w-full p-3 mt-2 rounded-xl bg-[#253638] text-white"
//             placeholder="Apple ID"
//           />
//         </div>
//       </div>

//       <div className="flex justify-end mt-6 space-x-4">
//         <button className="px-6 py-2 bg-gray-600 rounded-lg text-white">
//           Save As Draft
//         </button>
//         <button className="px-6 py-2 bg-blue-600 rounded-lg text-white">
//           Submit Back Catalog Data
//         </button>
//       </div>
//     </div>
//   );
// }
