import AlbumCard from "./AlbumCard";

import img1 from "@/assets/photo/image1.png";
import img2 from "@/assets/photo/image2.png";
import img3 from "@/assets/photo/image3.png";
import img4 from "@/assets/photo/image4.png";
import img5 from "@/assets/photo/image5.png";
import img6 from "@/assets/photo/image6.png";

const albumData = [
  {
    title: "The World is Yours (feat. LeeLee Babii)",
    artist: "Gemini Chachi",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img1, // Replace with your image paths
  },
  {
    title: "Echoes of Time",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img2,
  },
  {
    title: "Echoes of Time",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img3,
  },
  {
    title: "Echoes of Time",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img4,
  },
  {
    title: "Echoes of Time",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img5,
  },
  {
    title: "Echoes of Time",
    artist: "Luna Waves",
    label: "OnelsOneEnt",
    upc: "123456789",
    releaseDate: "25 May, 2025",
    type: "Album",
    imageUrl: img6,
  },
];

const AlbumGrid = () => {
  return (
    <div className="  min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {albumData.map((album, index) => (
          <AlbumCard key={index} {...album} />
        ))}
      </div>
    </div>
  );
};

export default AlbumGrid;
