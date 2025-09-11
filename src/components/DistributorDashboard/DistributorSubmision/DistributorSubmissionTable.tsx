import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

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
]

function StatusBadge({ status }: { status: string }) {
  const getStatusStyles = (status: string) => {
    switch (status) {
      case "Pending":
        return "bg-orange-500/20 text-orange-400 border-orange-500/30"
      case "Approved":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Declined":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return <span className={`px-2 py-1 rounded-md text-xs font-medium border ${getStatusStyles(status)}`}>{status}</span>
}

export function DistributorSubmissionTable() {
  return (
    <div className="w-full mt-[48px]">
      {/* Header with search and filters */}
      <div className="flex items-center justify-between mb-6">
        <div className="relative  w-full  pr-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search"
            className="pl-10 h-12  bg-[#17171A] border-[#E2E8F04D] text-gray-300 placeholder-gray-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <select className="appearance-none h-12 bg-[#17171A] border border-[#E2E8F04D] text-gray-300 px-4 py-2 pr-8 rounded-md focus:border-blue-500 focus:outline-none">
              <option>All Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Declined</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="appearance-none h-12 bg-[#17171A] border-[#E2E8F04D] border text-gray-300 px-4 py-2 pr-8 rounded-md focus:border-blue-500 focus:outline-none">
              <option>All Type</option>
              <option>Single</option>
              <option>EP</option>
              <option>Album</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
          </div>

          <div className="relative">
            <select className="appearance-none border h-12 bg-[#17171A] border-[#E2E8F04D]  text-gray-300 px-4 py-2 pr-8 rounded-md focus:border-blue-500 focus:outline-none">
              <option>Sort by Date</option>
              <option>Newest First</option>
              <option>Oldest First</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#3a4553]">
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Artist</th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Release</th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Submission Date</th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Type</th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Status</th>
              <th className="text-left py-4 px-6 text-gray-400 font-medium text-sm">Action</th>
            </tr>
          </thead>
          <tbody>
            {submissions.map((submission) => (
              <tr key={submission.id} className="border-b border-[#3a4553] hover:bg-[#2a3441]/50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={submission.avatar || "/placeholder.svg"} alt={submission.artist} />
                      <AvatarFallback className="bg-[#3a4553] text-gray-300 text-xs">
                        {submission.artist
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-gray-300 font-medium">{submission.artist}</span>
                  </div>
                </td>
                <td className="py-4 px-6 text-gray-300">{submission.release}</td>
                <td className="py-4 px-6 text-gray-400">{submission.submissionDate}</td>
                <td className="py-4 px-6 text-gray-300">{submission.type}</td>
                <td className="py-4 px-6">
                  <StatusBadge status={submission.status} />
                </td>
                <td className="py-4 px-6">
                  <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 h-auto font-normal">
                    Details →
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Load More */}
        <div className="p-6 text-center border-t border-[#3a4553]">
          <Button variant="link" className="text-blue-400 hover:text-blue-300 p-0 h-auto font-normal">
            Load More →
          </Button>
        </div>
      </div>
    </div>
  )
}
