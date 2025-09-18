// AlbumCard.tsx
import React from "react";

type AlbumCardProps = {
  title: string;
  artist: string;
  label: string;
  upc: string;
  releaseDate: string;
  type: string;
  imageUrl: string;
};

const SplitSheetCard: React.FC<AlbumCardProps> = ({
  title,
  artist,
  label,
  upc,
  releaseDate,
  type,
  imageUrl,
}) => {
  return (
    <div className="bg-[#0C1F21] p-2 rounded-xl overflow-hidden shadow-lg flex flex-col border border-[#2C403E]">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-3">
          <h2 className=" text-2xl font-sans">{title}</h2>
          <p className="text-[#3A5CFF] text-xl">{artist}</p>
          <p className="text-[#BDBDBD] text-base">{label}</p>
          <hr className=" text-[#2C2C2C]" />

          <div className="text-[#BDBDBD] text-sm mt-2 space-y-3">
            <div className=" flex justify-between items-center">
              <p>
                UPC: <span className="text-white">{upc}</span>
              </p>
              <p>
                Type: <span className="text-white">{type}</span>{" "}
              </p>
            </div>
            <p>
              Release Date: <span className="text-white">{releaseDate}</span>{" "}
            </p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <button className=" text-base flex-1 py-2 bg-[#3A5CFF] text-white rounded-[15px] hover:bg-blue-500 transition cursor-pointer">
            View Split Sheet
          </button>
        </div>
      </div>
    </div>
  );
};

export default SplitSheetCard;
