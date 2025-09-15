import ArtistCard from "./BackCatalogCard";

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

const BackCatalogGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {artists.map((artist, index) => (
        <ArtistCard key={index} {...artist} />
      ))}
    </div>
  );
};

export default BackCatalogGrid;
