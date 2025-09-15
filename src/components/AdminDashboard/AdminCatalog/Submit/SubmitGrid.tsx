import SubmitCard, { ReviewStatus } from "./SubmitCard";

interface Artist {
  name: string;
  genre: string;
  totalRelease: number;
  releaseType: string;
  distributor: string;
  label: string;
  totalTracks: number;
  dateRange: string;
  reviewStatus: ReviewStatus;
}

const artists: Artist[] = [
  {
    name: "Darlene Robertson",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Singles",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
    reviewStatus: "In Review",
  },
  {
    name: "Kristin Watson",
    genre: "Pop Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Singles",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
    reviewStatus: "Approved",
  },
  {
    name: "Ronald Richards",
    genre: "Rock Artist",
    totalRelease: 5,
    releaseType: "3 Albums, 2 Singles",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 25,
    dateRange: "2018-2025",
    reviewStatus: "Declined",
  },
  {
    name: "Devon Lane",
    genre: "Hip Hop Artist",
    totalRelease: 4,
    releaseType: "2 Albums, 2 Singles",
    distributor: "ABC Distribution",
    label: "XYZ Records",
    totalTracks: 20,
    dateRange: "2019-2024",
    reviewStatus: "Approved",
  },
  {
    name: "Marvin McKinney",
    genre: "Pop Artist",
    totalRelease: 6,
    releaseType: "4 Albums, 2 Singles",
    distributor: "Global Distribution",
    label: "MNO Records",
    totalTracks: 30,
    dateRange: "2017-2025",
    reviewStatus: "In Review",
  },
  {
    name: "Kathryn Murphy",
    genre: "Rock Artist",
    totalRelease: 3,
    releaseType: "3 Albums",
    distributor: "XYZ Distribution",
    label: "ABC Records",
    totalTracks: 18,
    dateRange: "2020-2025",
    reviewStatus: "Declined",
  },
  {
    name: "Savannah Nguyen",
    genre: "Hip Hop Artist",
    totalRelease: 5,
    releaseType: "2 Albums, 3 Singles",
    distributor: "ABC Distribution",
    label: "DEF Records",
    totalTracks: 27,
    dateRange: "2018-2025",
    reviewStatus: "Approved",
  },
  {
    name: "Eleanor Pena",
    genre: "Pop Artist",
    totalRelease: 4,
    releaseType: "4 Singles",
    distributor: "Global Distribution",
    label: "GHI Records",
    totalTracks: 16,
    dateRange: "2019-2025",
    reviewStatus: "In Review",
  },
  {
    name: "Guy Hawkins",
    genre: "Rock Artist",
    totalRelease: 6,
    releaseType: "5 Albums, 1 Single",
    distributor: "XYZ Distribution",
    label: "JKL Records",
    totalTracks: 32,
    dateRange: "2016-2025",
    reviewStatus: "Approved",
  },
];

const SubmitGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {artists.map((artist, index) => (
        <SubmitCard key={index} {...artist} />
      ))}
    </div>
  );
};

export default SubmitGrid;
