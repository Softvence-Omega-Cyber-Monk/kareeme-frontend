import { useState } from "react";
import { FaPlus } from "react-icons/fa";

export default function DataEntryForm() {
  const [tracks, setTracks] = useState([{ id: 1 }]);

  const addTrack = () => {
    setTracks([...tracks, { id: tracks.length + 1 }]);
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white p-8 space-y-8">
      {/* General Release Information */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 bg-[#111827] rounded-2xl p-6 shadow-lg space-y-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            🌸 General Release Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input className="form-input" placeholder="Enter label name" />
            <input
              className="form-input"
              placeholder="Enter Distributor name"
            />
            <input className="form-input" placeholder="Enter UPC Code" />
            <input
              className="form-input"
              placeholder="Enter catalogue number"
            />
            <input className="form-input" placeholder="Enter release artist" />
            <input className="form-input" placeholder="Enter release title" />
            <select className="form-input">
              <option>Select release type</option>
              <option>Single</option>
              <option>Album</option>
              <option>EP</option>
            </select>
            <input type="date" className="form-input" />
            <input className="form-input" placeholder="Enter P line" />
            <input className="form-input" placeholder="Enter C line" />
          </div>
        </div>

        {/* Artwork Upload */}
        <div className="bg-[#111827] rounded-2xl p-6 flex items-center justify-center text-center border-2 border-dashed border-gray-600">
          <div>
            <div className="text-green-400 text-3xl">⬆️</div>
            <p className="mt-2 text-gray-300">
              Drop artwork file here or{" "}
              <span className="text-blue-400 cursor-pointer">browse</span>
            </p>
            <p className="text-xs text-gray-500">JPEG or PNG, max 10MB</p>
          </div>
        </div>
      </div>

      {/* Track Information */}
      <div className="bg-[#111827] rounded-2xl p-6 shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            🎵 Track Information
          </h2>
          <button
            onClick={addTrack}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-sm transition"
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
                className="form-input"
                placeholder="Track Number"
                value={idx + 1}
                readOnly
              />
              <input className="form-input" placeholder="Track Title" />
              <input
                className="form-input"
                placeholder="Artist name on track"
              />
              <input className="form-input" placeholder="Track Genre" />
              <input className="form-input" placeholder="Track Mix/Version" />
              <select className="form-input">
                <option>No</option>
                <option>Yes</option>
              </select>
              <input className="form-input" placeholder="Track Language" />
              <input className="form-input" placeholder="Track Publisher" />
              <input type="date" className="form-input" />
              <input className="form-input" placeholder="Enter ISRC code" />
              <input
                className="form-input"
                placeholder="Territory Restrictions"
              />
              <input className="form-input" placeholder="Track Publisher" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
