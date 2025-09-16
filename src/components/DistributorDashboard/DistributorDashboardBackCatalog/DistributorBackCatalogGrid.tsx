import { useState } from "react";
import DistributorBackCatalogCard from "./DistributorBackCatalogCard";
import { FaArrowRightLong } from "react-icons/fa6";

const artists = [
  {
    name: "Darlene Robertson",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
  {
    name: "Kristin Watson",
    genre: "Pop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
  {
    name: "Ronald Richards",
    genre: "Rock Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
  {
    name: "Devon Lane",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
  {
    name: "Marvin McKinney",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
  {
    name: "Kathryn Murphy",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
  {
    name: "Savannah Nguyen",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
  {
    name: "Eleanor Pena",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
  {
    name: "Guy Hawkins",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Single",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
  },
];

const ITEMS_PER_LOAD = 6; // How many items to show at a time

const DistributorBackCatalogGrid = () => {
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_LOAD);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {artists.slice(0, visibleCount).map((artist, index) => (
          <DistributorBackCatalogCard key={index} {...artist} />
        ))}
      </div>

      {visibleCount < artists.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="flex items-center gap-2 text-sm md:text-base px-4 py-2  text-blue-600 hover:text-blue-800  cursor-pointer"
          >
            Load More
            <FaArrowRightLong className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default DistributorBackCatalogGrid;
