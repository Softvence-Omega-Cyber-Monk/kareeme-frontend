import { useState } from "react";
import { Copy, ArrowLeft } from "lucide-react";
import realesphoto from "@/assets/photo/realesphoto.png";
import { Link } from "react-router-dom";

export default function ReleasesDetails() {
  const [copied, setCopied] = useState<"upc" | "isrc" | null>(null);

  const handleCopy = (text: string, type: "upc" | "isrc") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="text-white flex flex-col items-center  ">
      {/* Back */}

      <div className="w-full ">
        <Link to="/client-dashboard/catalog/releases">
          <button className="flex items-center gap-2 text-gray-400 hover:text-white transition cursor-pointer">
            <ArrowLeft size={18} />
            <span>Back To Releases</span>
          </button>
        </Link>
      </div>

      {/* Album Section */}
      <div className="flex flex-col items-center text-center mt-8">
        {/* Cover Art */}
        <div className="w-80 h-80 rounded-xl overflow-hidden shadow-lg">
          <img
            src={realesphoto}
            alt="Midnight Reflections"
            className="w-full h-full object-cover"
          />
        </div>

        <div className=" flex justify-start items-center gap-3 mt-6">
          {/* Title */}
          <h1 className=" text-[32px] font-sans">MIDNIGHT REFLECTIONS</h1>

          {/* Status */}
          <span className="bg-[#0B2A1E] text-[#01D449] text-base px-4 py-1 rounded-full ">
            Live
          </span>
        </div>

        {/* Artist */}
        <p className="text-gray-400 mt-3 text-xl">By Gemini Chachi</p>
        <p className="text-gray-400 text-xl">
          Single • Released on March 24, 2025
        </p>

        {/* Codes */}
        <div className="flex gap-6 mt-6">
          {/* UPC */}
          <div className="bg-gray-800 px-4 py-4 rounded-lg flex items-center gap-2 border-t-2 border-r border-l border-[#303B40]">
            <span className="text-gray-400 text-sm">UPC</span>
            <button
              onClick={() => handleCopy("723277809397", "upc")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 cursor-pointer"
            >
              723277809397
              <Copy size={16} />
            </button>
            {copied === "upc" && (
              <span className="text-green-400 text-xs ml-2 ">Copied!</span>
            )}
          </div>

          {/* ISRC */}
          <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 border-t-2 border-r border-l border-[#303B40]">
            <span className="text-gray-400 text-sm">ISRC</span>
            <button
              onClick={() => handleCopy("USRC17607839", "isrc")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 cursor-pointer"
            >
              USRC17607839
              <Copy size={16} />
            </button>
            {copied === "isrc" && (
              <span className="text-green-400 text-xs ml-2">Copied!</span>
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="w-full max-w-5xl mt-12">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="text-gray-400 text-sm">
              <th className="py-2">#</th>
              <th className="py-2">Title</th>
              <th className="py-2">ISRC</th>
              <th className="py-2">UPC</th>
              <th className="py-2">Primary Genre</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t border-gray-700 text-sm">
              <td className="py-3">1</td>
              <td className="py-3 font-medium">Midnight Reflections</td>
              <td className="py-3">USRC17607839</td>
              <td className="py-3">723277809397</td>
              <td className="py-3">R&amp;B/Soul</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
