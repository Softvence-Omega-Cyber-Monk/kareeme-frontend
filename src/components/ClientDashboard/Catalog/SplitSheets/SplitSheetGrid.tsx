import { useState } from "react";
import img1 from "@/assets/photo/split1.png";
import img2 from "@/assets/photo/split2.png";
import img3 from "@/assets/photo/split3.png";
import img4 from "@/assets/photo/split4.png";
import img5 from "@/assets/photo/split5.png";
import img6 from "@/assets/photo/split6.png";
import SplitSheetCard from "./SplitSheetCard";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";

export const albumData = [
  {
    title: "Echoes of Time",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    genre: "Ambient Pop",
    duration: "42:15",
    producers: ["Eliot Summers", "Luna Waves"],
    writers: ["Luna Waves", "Ava Mendez"],
    description:
      "A dreamy ambient-pop journey exploring the passage of time and the echoes of memory. Features rich synth textures and emotional vocals.",
    imageUrl: img1,
  },
  {
    title: "Whispers Through the Ages",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "987654321",
    releaseDate: "12 Jun, 2025",
    type: "Single",
    genre: "Electronic Chill",
    duration: "04:32",
    producers: ["Eliot Summers"],
    writers: ["Luna Waves"],
    description:
      "A soft, hypnotic single blending downtempo beats with ethereal melodies — an ode to the whispers of time and love.",
    imageUrl: img2,
  },
  {
    title: "Melodies of the Past",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "192837465",
    releaseDate: "30 Jul, 2025",
    type: "EP",
    genre: "Dreamwave",
    duration: "24:10",
    producers: ["Luna Waves", "Noah Quinn"],
    writers: ["Luna Waves", "Noah Quinn"],
    description:
      "An EP filled with nostalgic synth sounds and slow-burning beats that transport listeners to a world of reflection and serenity.",
    imageUrl: img3,
  },
  {
    title: "Timeless Reverberations",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "564738291",
    releaseDate: "10 Aug, 2025",
    type: "Album",
    genre: "Synthwave",
    duration: "50:25",
    producers: ["Eliot Summers", "Luna Waves"],
    writers: ["Luna Waves", "Ava Mendez"],
    description:
      "A sonic exploration of nostalgia and futurism — blending retro synths with modern electronic soundscapes.",
    imageUrl: img4,
  },
  {
    title: "Rhythms of Remembrance",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "314159265",
    releaseDate: "01 Sep, 2025",
    type: "Album",
    genre: "Lo-fi Beats",
    duration: "37:42",
    producers: ["Eliot Summers"],
    writers: ["Luna Waves"],
    description:
      "A mellow lo-fi collection featuring dusty beats, ambient textures, and soulful melodies to relax and reflect to.",
    imageUrl: img5,
  },
  {
    title: "Songs of Forgotten Moments",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "246813579",
    releaseDate: "18 Oct, 2025",
    type: "Album",
    genre: "Indie Electronica",
    duration: "48:59",
    producers: ["Luna Waves"],
    writers: ["Luna Waves", "Ava Mendez"],
    description:
      "A poetic and emotional exploration of fleeting memories and lost connections, beautifully captured in lush electronic arrangements.",
    imageUrl: img6,
  },
];

const SplitSheetGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredAlbums = albumData.filter((album) => {
    const term = searchTerm.toLowerCase();
    return (
      album.title.toLowerCase().includes(term) ||
      album.artist.toLowerCase().includes(term) ||
      album.label.toLowerCase().includes(term)
    );
  });

  return (
    <div className="space-y-10">
      {/* Search Input */}
      <div className="w-full sm:w-72 md:w-96 lg:w-[736px] relative">
        <Input
          className="w-full border h-12 bg-[#17171A] border-[#696B6F] rounded-[15px] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm md:text-base"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
          <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
        </span>
      </div>

      {/* Album Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAlbums.map((album, index) => (
          <SplitSheetCard key={index} {...album} />
        ))}
        {filteredAlbums.length === 0 && (
          <p className="col-span-full text-center text-gray-400">
            No albums found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SplitSheetGrid;
