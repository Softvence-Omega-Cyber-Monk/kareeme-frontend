import { useState } from "react";
import { FaCopy } from "react-icons/fa";
import { useGetSubmissionsQuery } from "@/redux/features/distribution/distributionApi";
import ComponentLoader from "@/components/Reuseable/ComponentLoader";
import ComponentError from "@/components/Reuseable/ComponentError";
import { useNavigate } from "react-router-dom";

const ClientSubmit = () => {
  const navigate = useNavigate();
  const [page] = useState(1);
  const [limit] = useState(100); // Get all submissions for stats
  
  const { data, isLoading, error } = useGetSubmissionsQuery({ page, limit });

  if (isLoading) {
    return <ComponentLoader />;
  }

  if (error || !data?.data) {
    return <ComponentError />;
  }

  const submissions = data.data;
  
  const totalSubmissions = data.metadata.total;
  const approvedCount = submissions.filter((s) => s.status === "Approved").length;
  const pendingCount = submissions.filter((s) => s.status === "Pending Review").length;
  const declinedCount = submissions.filter((s) => s.status === "Declined").length;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "text-green-500";
      case "Pending Review":
        return "text-yellow-500";
      case "Declined":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-gray-400 text-sm">Catalog</p>
        <h1 className="text-3xl font-medium text-white">Submit</h1>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-[#0B1D21] border border-[#2F3B40] rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2">Total Submission</p>
          <p className="text-4xl font-bold text-blue-500">{totalSubmissions}</p>
        </div>
        <div className="bg-[#0B1D21] border border-[#2F3B40] rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2">Approved</p>
          <p className="text-4xl font-bold text-green-500">{approvedCount}</p>
        </div>
        <div className="bg-[#0B1D21] border border-[#2F3B40] rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2">Pending</p>
          <p className="text-4xl font-bold text-yellow-500">{pendingCount}</p>
        </div>
        <div className="bg-[#0B1D21] border border-[#2F3B40] rounded-lg p-6">
          <p className="text-gray-400 text-sm mb-2">Declined</p>
          <p className="text-4xl font-bold text-red-500">{declinedCount}</p>
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-[#0B1D21] border border-[#2F3B40] rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#2F3B40]">
                <th className="text-left p-4 text-gray-400 font-medium">Title</th>
                <th className="text-left p-4 text-gray-400 font-medium">UPC</th>
                <th className="text-left p-4 text-gray-400 font-medium">Type</th>
                <th className="text-left p-4 text-gray-400 font-medium">Release Date</th>
                <th className="text-left p-4 text-gray-400 font-medium">Status</th>
                <th className="text-left p-4 text-gray-400 font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission) => (
                <tr
                  key={submission.releaseId}
                  className="border-b border-[#1A2F35] hover:bg-[#0D2329] transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                        {submission.title.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium">{submission.title}</p>
                        <p className="text-gray-400 text-sm">{submission.artist}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">N/A</span>
                      <button
                        onClick={() => copyToClipboard("N/A")}
                        className="text-gray-400 hover:text-blue-500 transition-colors opacity-50 cursor-not-allowed"
                        title="UPC not available"
                        disabled
                      >
                        <FaCopy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{submission.type}</td>
                  <td className="p-4 text-gray-300">{formatDate(submission.releaseDate)}</td>
                  <td className="p-4">
                    <span className={`font-medium ${getStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button 
                      onClick={() => navigate(`/admin/catalog/submit/${submission.releaseId}`)}
                      className="text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"
                    >
                      →
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClientSubmit;
