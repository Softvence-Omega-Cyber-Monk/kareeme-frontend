// AlbumCard.tsx
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

type AlbumCardProps = {
  title: string;
  artist: string;
  label: string;
  upc: string;
  releaseDate: string;
  type: string;
  imageUrl: string;
};

const AlbumCard: React.FC<AlbumCardProps> = ({
  title,
  artist,
  label,
  upc,
  releaseDate,
  type,
  imageUrl,
}) => {
  return (
    <div className="bg-[#0C1F21] p-2 rounded-xl overflow-hidden shadow-lg flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div className="space-y-1">
          <h2 className="text-white font-semibold text-lg">{title}</h2>
          <p className="text-blue-500 text-sm">{artist}</p>
          <p className="text-gray-400 text-sm">{label}</p>
          <hr className="text-[#2C2C2C]" />
          <div className="text-gray-400 text-xs mt-2">
            <p>UPC: {upc}</p>
            <p>Release Date: {releaseDate}</p>
            <p>Type: {type}</p>
          </div>
        </div>
        <div className="mt-4 flex gap-2">
          <Link to="/client-dashboard/catalog/back-catalog/edit">
            <Button className="flex-1 py-2 bg-gray-700 text-white rounded-[15px] hover:bg-gray-600 transition cursor-pointer">
              Edit
            </Button>
          </Link>
          <Link to="/client-dashboard/catalog/back-catalog/view">
            <Button className="flex-1 py-2 bg-blue-600 text-white rounded-[15px] hover:bg-blue-500 transition cursor-pointer">
              View Details
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AlbumCard;
