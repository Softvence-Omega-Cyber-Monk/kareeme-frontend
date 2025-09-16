import { Button } from "@/components/ui/button";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const submissions = [
  {
    id: 1,
    artist: "Luna Ray",
    release: "Dreams at Dusk",
    submissionDate: "15/08/23",
    type: "EP",
    status: "Pending",
    avatar: "/luna-ray-artist.jpg",
  },
  {
    id: 2,
    artist: "Theresa Webb",
    release: "Whispers of Tomorrow",
    submissionDate: "22/08/23",
    type: "Single",
    status: "Declined",
    avatar: "/theresa-webb-artist.jpg",
  },
  {
    id: 3,
    artist: "Darlene Robertson",
    release: "Chasing Stars",
    submissionDate: "05/10/23",
    type: "Album",
    status: "Pending",
    avatar: "/darlene-robertson-artist.jpg",
  },
  {
    id: 4,
    artist: "Devon Lane",
    release: "Echoes of the Past",
    submissionDate: "11/11/23",
    type: "EP",
    status: "Approved",
    avatar: "/devon-lane-artist.jpg",
  },
  {
    id: 5,
    artist: "Savannah Nguyen",
    release: "Dancing in the Rain",
    submissionDate: "03/12/23",
    type: "Album",
    status: "Approved",
    avatar: "/savannah-nguyen-artist.jpg",
  },
  {
    id: 6,
    artist: "Robert Fox",
    release: "Journey to the Unknown",
    submissionDate: "27/01/24",
    type: "Single",
    status: "Approved",
    avatar: "/robert-fox-artist.jpg",
  },
  {
    id: 7,
    artist: "Kathryn Murphy",
    release: "Heartbeats in Harmony",
    submissionDate: "18/02/24",
    type: "Single",
    status: "Declined",
    avatar: "/kathryn-murphy-artist.jpg",
  },
  {
    id: 8,
    artist: "Ralph Edwards",
    release: "Dreams on Fire",
    submissionDate: "30/03/24",
    type: "Album",
    status: "Pending",
    avatar: "/ralph-edwards-artist.jpg",
  },
  {
    id: 9,
    artist: "Albert Flores",
    release: "Lost in the Melody",
    submissionDate: "14/04/24",
    type: "Single",
    status: "Pending",
    avatar: "/placeholder-1w1hw.png",
  },
  {
    id: 10,
    artist: "Jenny Wilson",
    release: "Beyond the Horizon",
    submissionDate: "28/05/24",
    type: "EP",
    status: "Approved",
    avatar: "/placeholder-mz9rg.png",
  },
  {
    id: 11,
    artist: "Courtney Henry",
    release: "Fading Light",
    submissionDate: "09/06/24",
    type: "Single",
    status: "Approved",
    avatar: "/placeholder-qbu0m.png",
  },
  {
    id: 12,
    artist: "Floyd Miles",
    release: "Whirlwind of Emotions",
    submissionDate: "21/07/24",
    type: "Album",
    status: "Declined",
    avatar: "/placeholder-jewv9.png",
  },
  {
    id: 13,
    artist: "Cameron Williamson",
    release: "Silent Echoes",
    submissionDate: "04/08/24",
    type: "EP",
    status: "Pending",
    avatar: "/placeholder-l6yp6.png",
  },
  {
    id: 14,
    artist: "Jacob Jones",
    release: "Fragments of Time",
    submissionDate: "17/09/24",
    type: "Album",
    status: "Approved",
    avatar: "/placeholder-33ds4.png",
  },
  {
    id: 15,
    artist: "Jane Cooper",
    release: "Sailing Through Dreams",
    submissionDate: "29/10/24",
    type: "Single",
    status: "Pending",
    avatar: "/jane-cooper-artist.jpg",
  },
  {
    id: 16,
    artist: "Jerome Bell",
    release: "The Sound of Solitude",
    submissionDate: "12/11/24",
    type: "Album",
    status: "Pending",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 17,
    artist: "Wade Warren",
    release: "A Canvas of Colors",
    submissionDate: "23/12/24",
    type: "EP",
    status: "Approved",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 18,
    artist: "Arlene McCoy",
    release: "The Rhythm of Life",
    submissionDate: "06/01/25",
    type: "EP",
    status: "Approved",
    avatar: "/placeholder.svg?height=32&width=32",
  },
];

function StatusBadge({ status }: { status: string }) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30";
      case "Approved":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Declined":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <span
      className={`px-2 py-1 rounded-md text-xs font-medium border ${getStatusStyles(
        status
      )}`}
    >
      {status}
    </span>
  );
}

export function DistributorSubmissionTable() {
  return (
    <div className="w-full mt-[48px]">
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 w-full mb-6">
        {/* Search Input */}
        <div className="w-full lg:flex-1 relative">
          <Input
            className="w-full min-w-[200px] h-12 px-4 pr-12 rounded-[15px] border border-[#696B6F] bg-[#17171A] text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            placeholder="Search"
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer">
            <IoSearch className="w-5 h-5 md:w-6 md:h-6" />
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Status */}
          <Select>
            <SelectTrigger className="w-full sm:w-48 md:w-56 lg:w-52 h-12 rounded-[15px] border border-[rgba(226,232,240,0.3)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue placeholder="All Status" className="text-gray-300" />
            </SelectTrigger>
            <SelectContent className="border-none bg-[#17171A] text-white rounded-lg shadow-lg">
              <SelectGroup>
                <SelectItem
                  value="pending"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Pending
                </SelectItem>
                <SelectItem
                  value="approved"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Approved
                </SelectItem>
                <SelectItem
                  value="declined"
                  className="hover:bg-[#131320] p-3 cursor-pointer"
                >
                  Declined
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Type */}
          <Select>
            <SelectTrigger className="w-full sm:w-48 md:w-56 lg:w-52 h-12 rounded-[15px] border border-[rgba(226,232,240,0.3)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue placeholder="All Type" className="text-gray-300" />
            </SelectTrigger>
            <SelectContent className="border-none bg-[#17171A] text-white rounded-lg shadow-lg">
              <SelectGroup>
                <SelectItem
                  value="single"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Single
                </SelectItem>
                <SelectItem
                  value="ep"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  EP
                </SelectItem>
                <SelectItem
                  value="album"
                  className="hover:bg-[#131320] p-3 cursor-pointer"
                >
                  Album
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Sort by Date */}
          <Select>
            <SelectTrigger className="w-full sm:w-48 md:w-56 lg:w-52 h-12 rounded-[15px] border border-[rgba(226,232,240,0.3)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue
                placeholder="Sort by Date"
                className="text-gray-300"
              />
            </SelectTrigger>
            <SelectContent className="border-none bg-[#17171A] text-white rounded-lg shadow-lg">
              <SelectGroup>
                <SelectItem
                  value="newest"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Newest First
                </SelectItem>
                <SelectItem
                  value="oldest"
                  className="hover:bg-[#131320] p-3 cursor-pointer"
                >
                  Oldest First
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#3a4553]">
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">
                Artist
              </th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">
                Release
              </th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">
                Submission Date
              </th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">
                Type
              </th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">
                Status
              </th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr
                key={submission.id}
                className="border-b border-[#3a4553] hover:bg-[#2a3441]/50 transition-colors"
              >
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={submission.avatar || "/placeholder.svg"}
                        alt={submission.artist}
                      />
                      <AvatarFallback className="bg-[#3a4553] text-gray-300 text-xs">
                        {submission.artist
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-300 font-medium">
                      {submission.artist}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-300">
                  {submission.release}
                </td>
                <td className="py-4 px-6 text-gray-400">
                  {submission.submissionDate}
                </td>
                <td className="py-4 px-6 text-gray-300">{submission.type}</td>
                <td className="py-4 px-6">
                  <StatusBadge status={submission.status} />
                </td>
                <td className="py-4 px-6">
                  <Link to="/diostributor-dashboard/submissions/details">
                    <Button className="text-blue-400 hover:text-blue-300 p-0 h-auto font-normal cursor-pointer">
                      Details <FaChevronRight />
                    </Button>
                  </Link>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Load More */}
        <div className="p-6 text-center border-t border-[#3a4553]">
          <Button
            variant="link"
            className="text-blue-400 hover:text-blue-300 p-0 h-auto font-normal"
          >
            Load More →
          </Button>
        </div>
      </div>
    </div>
  );
}
