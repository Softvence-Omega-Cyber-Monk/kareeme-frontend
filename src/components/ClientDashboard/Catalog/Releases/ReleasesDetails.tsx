import { useState } from "react";
import { Copy, ArrowLeft } from "lucide-react";
import realesphoto from "@/assets/photo/realesphoto.png";

export default function ReleasesDetails() {
  const [copied, setCopied] = useState<"upc" | "isrc" | null>(null);

  const handleCopy = (text: string, type: "upc" | "isrc") => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <div className="text-white flex flex-col items-center px-6 py-10">
      {/* Back */}
      <div className="w-full ">
        <button className="flex items-center gap-2 text-gray-400 hover:text-white transition cursor-pointer">
          <ArrowLeft size={18} />
          <span>Back To Releases</span>
        </button>
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

        {/* Title */}
        <h1 className="mt-6 text-2xl font-bold">MIDNIGHT REFLECTIONS</h1>

        {/* Status */}
        <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full mt-2">
          Live
        </span>

        {/* Artist */}
        <p className="text-gray-400 mt-3">
          By <span className="text-white font-medium">Gemini Chachi</span>
        </p>
        <p className="text-gray-500 text-sm">
          Single • Released on March 24, 2025
        </p>

        {/* Codes */}
        <div className="flex gap-6 mt-6">
          {/* UPC */}
          <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="text-gray-400 text-sm">UPC</span>
            <button
              onClick={() => handleCopy("723277809397", "upc")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
            >
              723277809397
              <Copy size={16} />
            </button>
            {copied === "upc" && (
              <span className="text-green-400 text-xs ml-2">Copied!</span>
            )}
          </div>

          {/* ISRC */}
          <div className="bg-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
            <span className="text-gray-400 text-sm">ISRC</span>
            <button
              onClick={() => handleCopy("USRC17607839", "isrc")}
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300"
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
