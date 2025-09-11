import img1 from "@/assets/photo/split1.png";
import img2 from "@/assets/photo/split2.png";
import img3 from "@/assets/photo/split3.png";
import img4 from "@/assets/photo/split4.png";
import img5 from "@/assets/photo/split5.png";
import img6 from "@/assets/photo/split6.png";
import SplitSheetCard from "./SplitSheetCard";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";

const albumData = [
  {
    title: "Echoes of Time",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img1, // Replace with your image paths
  },
  {
    title: "Whispers Through the Ages",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img2,
  },
  {
    title: "Melodies of the Past",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img3,
  },
  {
    title: "Timeless Reverberations",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img4,
  },
  {
    title: "Rhythms of Remembrance",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img5,
  },
  {
    title: "Songs of Forgotten Moments",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img6,
  },
];

const SplitSheetGrid = () => {
  return (
    <div className="space-y-10 ">
      {/* Search Input */}
      <div className="w-full sm:w-72 md:w-96 lg:w-[736px] relative">
        <Input
          className="w-full border h-12 bg-[#17171A] border-[#696B6F] rounded-[15px] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm md:text-base"
          placeholder="Search loads"
        />
        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
          <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {albumData.map((album, index) => (
          <SplitSheetCard key={index} {...album} />
        ))}
      </div>
    </div>
  );
};

export default SplitSheetGrid;
