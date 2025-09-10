import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import camera from "@/assets/icons/audio.svg";
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

const productData = [
  {
    id: "10001",
    assetsName: "Women Dominated Cypher 2021 (Official Cypher)",
    name: "Gemini Chachi",
    views: "12,540",
    adSupported: "$120.00",
    premium: "$230.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10002",
    assetsName: "Active",
    name: "DJ Nova",
    views: "8,940",
    adSupported: "$90.00",
    premium: "$260.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10003",
    assetsName: "Gang About You (Live Performance)",
    name: "Auntie House",
    views: "15,320",
    adSupported: "$150.00",
    premium: "$200.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10004",
    assetsName: "Lost It (Official Grannie House Performance)",
    name: "Celia Dawn",
    views: "10,780",
    adSupported: "$170.00",
    premium: "$180.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10005",
    assetsName: "OOH YEA",
    name: "Auntie House",
    views: "9,210",
    adSupported: "$130.00",
    premium: "$220.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10006",
    assetsName: "Skyline Dreams",
    name: "Luna Sparks",
    views: "11,400",
    adSupported: "$110.00",
    premium: "$240.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10007",
    assetsName: "Fire Beats (Remix)",
    name: "DJ Blaze",
    views: "13,750",
    adSupported: "$140.00",
    premium: "$210.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10008",
    assetsName: "Midnight Flow",
    name: "Gemini Chachi",
    views: "7,860",
    adSupported: "$100.00",
    premium: "$250.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10009",
    assetsName: "Golden Hour Symphony",
    name: "Celia Dawn",
    views: "16,230",
    adSupported: "$160.00",
    premium: "$190.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10010",
    assetsName: "Rolling Vibes",
    name: "DJ Nova",
    views: "8,450",
    adSupported: "$120.00",
    premium: "$230.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10011",
    assetsName: "Electric Heartbeat",
    name: "Luna Sparks",
    views: "14,600",
    adSupported: "$150.00",
    premium: "$200.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10012",
    assetsName: "Ocean Breeze",
    name: "Auntie House",
    views: "9,950",
    adSupported: "$130.00",
    premium: "$220.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10013",
    assetsName: "Shadow Lights (Acoustic)",
    name: "Celia Dawn",
    views: "12,870",
    adSupported: "$140.00",
    premium: "$210.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10014",
    assetsName: "Neon Streets",
    name: "DJ Blaze",
    views: "10,320",
    adSupported: "$120.00",
    premium: "$230.00",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10015",
    assetsName: "Dream Catcher",
    name: "Gemini Chachi",
    views: "17,110",
    adSupported: "$170.00",
    premium: "$180.00",
    earning: "$350.00",
    image: camera,
  },
];

export function TopAssetsDetails() {
  return (
    <div className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left side - Title */}
        <h1 className="text-base sm:text-lg md:text-2xl font-medium text-white">
          Assets
        </h1>

        {/* Right side - Search + Filters */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="w-full sm:w-72 md:w-96 relative">
            <Input
              className="w-full border bg-gradient-to-l from-[#12121E] to-[#1A1A2B] border-[#696B6F] rounded-[15px] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm md:text-base"
              placeholder="Search loads"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
              <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </div>

          {/* Payment Status Filter */}
          <Select>
            <SelectTrigger className="w-full  sm:w-[200px] md:w-[240px] md:h-[48px] rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-gradient-to-l from-[#12121E] to-[#1A1A2B] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue
                placeholder="All Assets"
                className="text-gray-300 "
              />
            </SelectTrigger>

            <SelectContent className="border-none   bg-[#1C1C29] text-white font-sans shadow-lg rounded-lg">
              <SelectGroup>
                <SelectItem
                  value="all"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  All Assets
                </SelectItem>
                <SelectItem
                  value="PAID"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Paid Assets
                </SelectItem>
                <SelectItem
                  value="PENDING"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Pending Assets
                </SelectItem>
                <SelectItem
                  value="PROCESSING"
                  className="hover:bg-[#17171A] cursor-pointer"
                >
                  Processing Assets
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Location Time */}
          <Select>
            <SelectTrigger className="w-full sm:w-[200px] md:w-[240px] h-[44px] md:h-[48px] rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-gradient-to-l from-[#12121E] to-[#1A1A2B] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue
                placeholder="Last 1 Year"
                className="text-gray-300"
              />
            </SelectTrigger>

            <SelectContent className="border-none bg-[#1C1C29] text-white font-sans shadow-lg rounded-lg">
              <SelectGroup>
                <SelectItem
                  value="last_7_days"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 7 Days
                </SelectItem>
                <SelectItem
                  value="last_30_days"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 30 Days
                </SelectItem>
                <SelectItem
                  value="last_6_months"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 6 Months
                </SelectItem>
                <SelectItem
                  value="last_1_year"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 1 Year
                </SelectItem>
                <SelectItem
                  value="this_year"
                  className="hover:bg-[#17171A] cursor-pointer"
                >
                  This Year
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Table Section */}
      <div className="overflow-x-auto">
        <Table className="w-full min-w-[600px]">
          <TableHeader>
            <TableRow className="text-[#BDBDBD] text-sm md:text-base">
              <TableHead className="w-[200px] px-2 md:px-4 py-2">
                Title
              </TableHead>
              <TableHead className="text-center px-2 md:px-4 py-2">
                Views
              </TableHead>
              <TableHead className="text-center px-2 md:px-4 py-2">
                AD Supported
              </TableHead>
              <TableHead className="text-center px-2 md:px-4 py-2">
                YouTube Premium
              </TableHead>
              <TableHead className="text-right pr-4 md:pr-8 py-2">
                Total Earning
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-white">
            {productData.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="px-2 md:px-4 py-3 flex items-center gap-2 md:gap-3">
                  <img
                    src={product.image}
                    alt=""
                    className="h-5 w-5 md:h-7 md:w-7"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm md:text-base">
                      {product.assetsName}
                    </span>
                    <span className="text-xs md:text-sm text-gray-500">
                      {product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center px-2 md:px-4 py-3 text-sm md:text-base">
                  {product.views}
                </TableCell>
                <TableCell className="text-center px-2 md:px-4 py-3 text-sm md:text-base">
                  {product.adSupported}
                </TableCell>
                <TableCell className="text-center px-2 md:px-4 py-3 text-sm md:text-base">
                  {product.premium}
                </TableCell>
                <TableCell className="text-right pr-4 md:pr-8 py-3 text-sm md:text-base">
                  {product.earning}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
