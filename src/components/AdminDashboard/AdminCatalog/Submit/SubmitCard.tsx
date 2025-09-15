import { Link } from "react-router-dom";

export type ReviewStatus = "In Review" | "Declined" | "Approved";

interface ArtistCardProps {
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

const SubmitCard = ({
  name,
  totalRelease,
  releaseType,
  distributor,
  label,
  totalTracks,
  dateRange,
  reviewStatus,
}: ArtistCardProps) => {
  const statusColor =
    reviewStatus === "Approved"
      ? "text-green-500"
      : reviewStatus === "Declined"
      ? "text-red-500"
      : "text-yellow-400";

  return (
    <div className="bg-[#0D1F22] p-5 rounded-lg shadow-md text-white">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className={`font-semibold ${statusColor}`}>{reviewStatus}</p>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex justify-between">
          <p>Total Release:</p>
          <p>{totalRelease}</p>
        </div>
        <div className="flex justify-between">
          <p>Release Type:</p>
          <p>{releaseType}</p>
        </div>
        <div className="flex justify-between">
          <p>Distributor:</p>
          <p>{distributor}</p>
        </div>
        <div className="flex justify-between">
          <p>Label:</p>
          <p>{label}</p>
        </div>
        <div className="flex justify-between">
          <p>Total Track:</p>
          <p>{totalTracks}</p>
        </div>
        <div className="flex justify-between">
          <p>Date Range:</p>
          <p>{dateRange}</p>
        </div>
      </div>

      <Link to="/admin-dashboard/submit/view">
        <button className="w-full mt-4 px-6 py-2 bg-blue-500 rounded-lg hover:bg-blue-400 transition cursor-pointer">
          View Details
        </button>
      </Link>
    </div>
  );
};

export default SubmitCard;
