import { useState } from "react";
import { FaCopy } from "react-icons/fa";

interface Submission {
  id: string;
  title: string;
  artist: string;
  coverImage: string;
  upc: string;
  type: string;
  releaseDate: string;
  status: "Approved" | "Pending" | "Declined";
}

// Mock data - replace with API call later
const mockSubmissions: Submission[] = [
  {
    id: "1",
    title: "Trickin",
    artist: "K-Shady",
    coverImage: "/api/placeholder/50/50",
    upc: "UPC: 723277809397",
    type: "single",
    releaseDate: "01/03/25",
    status: "Approved",
  },
  {
    id: "2",
    title: "No Music",
    artist: "K-Shady",
    coverImage: "/api/placeholder/50/50",
    upc: "UPC: 723277809397",
    type: "single",
    releaseDate: "01/03/25",
    status: "Approved",
  },
  {
    id: "3",
    title: "Cater 2 You",
    artist: "K-Shady",
    coverImage: "/api/placeholder/50/50",
    upc: "UPC: 723277809397",
    type: "single",
    releaseDate: "01/03/25",
    status: "Pending",
  },
  {
    id: "4",
    title: "Handle Me",
    artist: "K-Shady",
    coverImage: "/api/placeholder/50/50",
    upc: "UPC: 723277809397",
    type: "single",
    releaseDate: "01/03/25",
    status: "Approved",
  },
  {
    id: "5",
    title: "Stand on Dat",
    artist: "K-Shady",
    coverImage: "/api/placeholder/50/50",
    upc: "UPC: 723277809397",
    type: "single",
    releaseDate: "01/03/25",
    status: "Declined",
  },
];

const ClientSubmit = () => {
  const [submissions] = useState<Submission[]>(mockSubmissions);

  const totalSubmissions = submissions.length;
  const approvedCount = submissions.filter((s) => s.status === "Approved").length;
  const pendingCount = submissions.filter((s) => s.status === "Pending").length;
  const declinedCount = submissions.filter((s) => s.status === "Declined").length;

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text.replace("UPC: ", ""));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Approved":
        return "text-green-500";
      case "Pending":
        return "text-yellow-500";
      case "Declined":
        return "text-red-500";
      default:
        return "text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <p className="text-gray-400 text-sm">Catalog</p>
        <h1 className="text-3xl font-bold text-white">Submit</h1>
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
      <div className="bg-[#0B1D21] border-2 border-[#1E90FF] rounded-lg overflow-hidden">
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
                  key={submission.id}
                  className="border-b border-[#1A2F35] hover:bg-[#0D2329] transition-colors"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={submission.coverImage}
                        alt={submission.title}
                        className="w-12 h-12 rounded-lg object-cover bg-gray-700"
                      />
                      <div>
                        <p className="text-white font-medium">{submission.title}</p>
                        <p className="text-gray-400 text-sm">{submission.artist}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-300">{submission.upc}</span>
                      <button
                        onClick={() => copyToClipboard(submission.upc)}
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        title="Copy UPC"
                      >
                        <FaCopy className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">{submission.type}</td>
                  <td className="p-4 text-gray-300">{submission.releaseDate}</td>
                  <td className="p-4">
                    <span className={`font-medium ${getStatusColor(submission.status)}`}>
                      {submission.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <button className="text-blue-500 hover:text-blue-400 transition-colors">
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
