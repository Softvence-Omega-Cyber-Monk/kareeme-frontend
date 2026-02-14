import { useState } from "react";
import SubmitCard, { ReviewStatus } from "./SubmitCard";
import { useGetSubmissionsQuery } from "@/redux/features/distribution/distributionApi";
import ComponentLoader from "@/components/Reuseable/ComponentLoader";
import ComponentError from "@/components/Reuseable/ComponentError";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export interface Artist {
  releaseId: string;
  name: string;
  type: string;
  releaseType: string;
  totalTracks: number;
  releaseDate: string;
  submitDate: string;
  reviewStatus: ReviewStatus;
}

const SubmitGrid = () => {
  const [page, setPage] = useState(1);
  const [limit] = useState(9); // 9 items for 3x3 grid
  
  const { data, isLoading, error } = useGetSubmissionsQuery({ page, limit });

  if (isLoading) {
    return <ComponentLoader />;
  }

  if (error) {
    return <ComponentError />;
  }

  const submissions = data?.data || [];
  const metadata = data?.metadata;

  // Map API data to Artist interface
  const artists: Artist[] = submissions.map((submission) => ({
    releaseId: submission.releaseId,
    name: submission.artist,
    type: submission.type,
    releaseType: `${submission.trackCount} Track${submission.trackCount !== 1 ? 's' : ''}`,
    totalTracks: submission.trackCount,
    releaseDate: new Date(submission.releaseDate).toISOString().split('T')[0],
    submitDate: new Date(submission.submittedAt).toISOString().split('T')[0],
    reviewStatus: submission.status === "Pending Review" ? "In Review" : submission.status as ReviewStatus,
  }));

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {artists.length > 0 ? (
          artists.map((artist, index) => (
            <SubmitCard key={index} {...artist} />
          ))
        ) : (
          <div className="col-span-full text-center py-12 text-gray-400">
            No submissions found
          </div>
        )}
      </div>

      {/* Pagination Controls */}
      {metadata && metadata.totalPage > 1 && (
        <div className="flex items-center justify-between px-4 py-4">
          <div className="text-gray-400 text-sm">
            Showing {((page - 1) * limit) + 1} to {Math.min(page * limit, metadata.total)} of {metadata.total} submissions
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                page === 1
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              <FaChevronLeft className="w-3 h-3" />
              Previous
            </button>
            <div className="text-white text-sm">
              Page {page} of {metadata.totalPage}
            </div>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === metadata.totalPage}
              className={`px-4 py-2 rounded-lg flex items-center gap-2 ${
                page === metadata.totalPage
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              Next
              <FaChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SubmitGrid;

