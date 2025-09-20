import SubmitCard, { ReviewStatus } from "./SubmitCard";

export interface Artist {
  name: string;
  type: string;
  releaseType: string;
  totalTracks: number;
  releaseDate: string;
  submitDate: string;
  reviewStatus: ReviewStatus;
}

const artists: Artist[] = [
  {
    name: "Darlene Robertson",
    type: "Single",
    releaseType: "3 Albums, 2 Singles",
    totalTracks: 25,
    releaseDate: "2023-11-05",
    submitDate: "2023-12-01",
    reviewStatus: "In Review",
  },
  {
    name: "Kristin Watson",
    type: "Single",
    releaseType: "2 Albums, 3 Singles",
    totalTracks: 20,
    releaseDate: "2023-08-15",
    submitDate: "2023-09-10",
    reviewStatus: "Approved",
  },
  {
    name: "Ronald Richards",
    type: "Single",
    releaseType: "4 Albums, 1 Single",
    totalTracks: 30,
    releaseDate: "2022-05-22",
    submitDate: "2022-06-01",
    reviewStatus: "Declined",
  },
  {
    name: "Devon Lane",
    type: "Single",
    releaseType: "2 Albums, 2 Singles",
    totalTracks: 18,
    releaseDate: "2021-09-10",
    submitDate: "2021-09-20",
    reviewStatus: "Approved",
  },
  {
    name: "Marvin McKinney",
    type: "Single",
    releaseType: "3 Albums, 2 Singles",
    totalTracks: 22,
    releaseDate: "2023-01-05",
    submitDate: "2023-02-01",
    reviewStatus: "In Review",
  },
  {
    name: "Kathryn Murphy",
    type: "Single",
    releaseType: "3 Albums",
    totalTracks: 18,
    releaseDate: "2022-03-18",
    submitDate: "2022-04-05",
    reviewStatus: "Declined",
  },
  {
    name: "Savannah Nguyen",
    type: "Single",
    releaseType: "2 Albums, 3 Singles",
    totalTracks: 27,
    releaseDate: "2023-06-12",
    submitDate: "2023-07-01",
    reviewStatus: "Approved",
  },
  {
    name: "Eleanor Pena",
    type: "Single",
    releaseType: "4 Singles",
    totalTracks: 16,
    releaseDate: "2022-11-22",
    submitDate: "2022-12-05",
    reviewStatus: "In Review",
  },
  {
    name: "Guy Hawkins",
    type: "Single",
    releaseType: "5 Albums, 1 Single",
    totalTracks: 32,
    releaseDate: "2021-07-19",
    submitDate: "2021-08-01",
    reviewStatus: "Approved",
  },
];

const SubmitGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      {artists.map((artist, index) => (
        <SubmitCard key={index} {...artist} />
      ))}
    </div>
  );
};

export default SubmitGrid;

