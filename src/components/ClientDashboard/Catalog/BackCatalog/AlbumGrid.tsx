import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import AlbumCard from "./AlbumCard";

import img1 from "@/assets/photo/image1.png";
import img2 from "@/assets/photo/image2.png";
import img3 from "@/assets/photo/image3.png";
import img4 from "@/assets/photo/image4.png";
import img5 from "@/assets/photo/image5.png";
import img6 from "@/assets/photo/image6.png";

import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { IoMdAdd } from "react-icons/io";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const albumData = [
  {
    title: "The World is Yours (feat. LeeLee Babii)",
    artist: "Gemini Chachi",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "2025-05-25",
    type: "Album",
    status: "PAID",
    imageUrl: img1,
  },
  {
    title: "Echoes of Time",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "2025-05-25",
    type: "Album",
    status: "PENDING",
    imageUrl: img2,
  },
  {
    title: "Starlight Dreams",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "2024-12-15",
    type: "Album",
    status: "PROCESSING",
    imageUrl: img3,
  },
  {
    title: "Galaxy Pulse",
    artist: "Gemini Chachi",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "2024-06-10",
    type: "Album",
    status: "PAID",
    imageUrl: img4,
  },
  {
    title: "Nebula Nights",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "2025-01-20",
    type: "Album",
    status: "PENDING",
    imageUrl: img5,
  },
  {
    title: "Echoes of Time 2",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "2023-09-10",
    type: "Album",
    status: "PROCESSING",
    imageUrl: img6,
  },
];

const AlbumGrid = () => {
  const [search, setSearch] = useState("");
  const [filterLabel, setFilterLabel] = useState("all");
  const [filterYear, setFilterYear] = useState("all");

  const filteredAlbums = useMemo(() => {
    return albumData.filter((album) => {
      const matchesSearch =
        album.title.toLowerCase().includes(search.toLowerCase()) ||
        album.artist.toLowerCase().includes(search.toLowerCase());

      const matchesLabel =
        filterLabel === "all" ? true : album.status === filterLabel;

      const currentYear = new Date().getFullYear();
      const albumYear = new Date(album.releaseDate).getFullYear();
      let matchesYear = true;

      switch (filterYear) {
        case "last_7_days":
          matchesYear =
            new Date(album.releaseDate) >=
            new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
          break;
        case "last_30_days":
          matchesYear =
            new Date(album.releaseDate) >=
            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
          break;
        case "last_6_months":
          matchesYear =
            new Date(album.releaseDate) >=
            new Date(Date.now() - 6 * 30 * 24 * 60 * 60 * 1000);
          break;
        case "last_1_year":
          matchesYear =
            new Date(album.releaseDate) >=
            new Date(Date.now() - 365 * 24 * 60 * 60 * 1000);
          break;
        case "this_year":
          matchesYear = albumYear === currentYear;
          break;
        default:
          matchesYear = true;
      }

      return matchesSearch && matchesLabel && matchesYear;
    });
  }, [search, filterLabel, filterYear]);

  return (
    <div className="space-y-8">
      {/* Header: Titles + Search + Filters + Add Button */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-8 w-full">
        {/* Titles */}
        <div className="flex flex-col space-y-1 md:space-y-2 w-full md:w-auto">
          <h1 className="text-sm md:text-base font-sans text-gray-400">
            Catalog
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-sans font-semibold text-white">
            Back Catalog
          </h2>
        </div>

        {/* Search + Filters + Add */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 w-full md:w-auto flex-wrap">
          {/* Search */}
          {/* <div className="relative flex-1 sm:flex-none sm:w-64 md:w-80">
            <Input
              placeholder="Search by Title or Artist"
              className="w-full h-12 rounded-[15px] px-3 pr-10 bg-[#17171A] border border-[#696B6F] text-white focus:ring-2 focus:ring-blue-500"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div> */}

          <div className="w-full sm:w-64 md:w-80 lg:w-96 relative">
            <Input
              className="w-full h-[44px] md:h-[48px] border bg-[#17171A] border-[#696B6F] rounded-[15px] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm md:text-base"
              placeholder="Search"
              onChange={(e) => setSearch(e.target.value)}
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
              <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </div>

          {/* Label Filter */}
          <Select onValueChange={setFilterLabel}>
            <SelectTrigger className="w-full sm:w-[200px] md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] text-white text-sm md:text-base cursor-pointer">
              <SelectValue placeholder="Filter By Label" />
            </SelectTrigger>
            <SelectContent className="bg-[#17171A] text-white rounded-lg border-none ">
              <SelectGroup>
                <SelectItem className="cursor-pointer" value="all">
                  All Assets
                </SelectItem>
                <SelectItem className="cursor-pointer" value="PAID">
                  Paid Assets
                </SelectItem>
                <SelectItem className="cursor-pointer" value="PENDING">
                  Pending Assets
                </SelectItem>
                <SelectItem className="cursor-pointer" value="PROCESSING">
                  Processing Assets
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Year Filter */}
          <Select onValueChange={setFilterYear}>
            <SelectTrigger className="w-full sm:w-[200px] md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] text-white text-sm md:text-base cursor-pointer">
              <SelectValue placeholder="Release Year" />
            </SelectTrigger>
            <SelectContent className="bg-[#17171A] text-white rounded-lg border-none ">
              <SelectGroup>
                <SelectItem className="cursor-pointer" value="last_7_days">
                  Last 7 Days
                </SelectItem>
                <SelectItem className="cursor-pointer" value="last_30_days">
                  Last 30 Days
                </SelectItem>
                <SelectItem className="cursor-pointer" value="last_6_months">
                  Last 6 Months
                </SelectItem>
                <SelectItem className="cursor-pointer" value="last_1_year">
                  Last 1 Year
                </SelectItem>
                <SelectItem className="cursor-pointer" value="this_year">
                  This Year
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Add Button */}
          <Link
            to="/client-dashboard/catalog/back-catalog/edit"
            className="w-full sm:w-auto"
          >
            <button className="w-full flex justify-center items-center gap-2 px-4 py-2 rounded-[15px] bg-[#3A5CFF] hover:bg-[#002afa] text-white font-medium text-base md:text-lg transition cursor-pointer">
              <span>Add</span>
              <IoMdAdd className="text-lg md:text-xl" />
            </button>
          </Link>
        </div>
      </div>

      {/* Album Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredAlbums.length > 0 ? (
          filteredAlbums.map((album, idx) => <AlbumCard key={idx} {...album} />)
        ) : (
          <p className="text-gray-400 col-span-full text-center">
            No albums found.
          </p>
        )}
      </div>
    </div>
  );
};

export default AlbumGrid;

// import AlbumCard from "./AlbumCard";

// import img1 from "@/assets/photo/image1.png";
// import img2 from "@/assets/photo/image2.png";
// import img3 from "@/assets/photo/image3.png";
// import img4 from "@/assets/photo/image4.png";
// import img5 from "@/assets/photo/image5.png";
// import img6 from "@/assets/photo/image6.png";

// const albumData = [
//   {
//     title: "The World is Yours (feat. LeeLee Babii)",
//     artist: "Gemini Chachi",
//     label: "OnelsOneEnt",
//     upc: "123456789",
//     releaseDate: "25 May, 2025",
//     type: "Album",
//     imageUrl: img1, // Replace with your image paths
//   },
//   {
//     title: "Echoes of Time",
//     artist: "Luna Waves",
//     label: "OnelsOneEnt",
//     upc: "123456789",
//     releaseDate: "25 May, 2025",
//     type: "Album",
//     imageUrl: img2,
//   },
//   {
//     title: "Echoes of Time",
//     artist: "Luna Waves",
//     label: "OnelsOneEnt",
//     upc: "123456789",
//     releaseDate: "25 May, 2025",
//     type: "Album",
//     imageUrl: img3,
//   },
//   {
//     title: "Echoes of Time",
//     artist: "Luna Waves",
//     label: "OnelsOneEnt",
//     upc: "123456789",
//     releaseDate: "25 May, 2025",
//     type: "Album",
//     imageUrl: img4,
//   },
//   {
//     title: "Echoes of Time",
//     artist: "Luna Waves",
//     label: "OnelsOneEnt",
//     upc: "123456789",
//     releaseDate: "25 May, 2025",
//     type: "Album",
//     imageUrl: img5,
//   },
//   {
//     title: "Echoes of Time",
//     artist: "Luna Waves",
//     label: "OnelsOneEnt",
//     upc: "123456789",
//     releaseDate: "25 May, 2025",
//     type: "Album",
//     imageUrl: img6,
//   },
// ];

// const AlbumGrid = () => {
//   return (
//     <div className="  min-h-screen">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
//         {albumData.map((album, index) => (
//           <AlbumCard key={index} {...album} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default AlbumGrid;
