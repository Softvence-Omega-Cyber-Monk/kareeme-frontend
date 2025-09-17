import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PiCurrencyDollarSimpleBold } from "react-icons/pi";

import Youtube from "@/assets/icons/youtube.png";
import sportify from "@/assets/icons/sportity.png";
import apple from "@/assets/icons/apple.png";
import soundClud from "@/assets/icons/soundCloud.png";
import audio from "@/assets/icons/audio.png";
import deser from "@/assets/icons/deezer.png";
import tidal from "@/assets/icons/tidal.png";
import heart from "@/assets/icons/heart2.png";
import { Button } from "@/components/ui/button";

const productData = [
  {
    id: "10001",
    name: "Women Dominated ",

    views: "12,540",
    adSupported: "$120.00",
    premium: "$230.00",
    earning: "$350.00",
    image: Youtube,
  },
  {
    id: "10002",
    name: "Active",

    views: "8,940",
    adSupported: "$90.00",
    premium: "$260.00",
    earning: "$350.00",
    image: sportify,
  },
  {
    id: "10003",
    name: "Gang About ",

    views: "15,320",
    adSupported: "$150.00",
    premium: "$200.00",
    earning: "$350.00",
    image: apple,
  },
  {
    id: "10004",
    name: "Lost It ",

    views: "10,780",
    adSupported: "$170.00",
    premium: "$180.00",
    earning: "$350.00",
    image: soundClud,
  },
  {
    id: "10005",
    name: "OOH YEA",

    views: "9,210",
    adSupported: "$130.00",
    premium: "$220.00",
    earning: "$350.00",
    image: audio,
  },
  {
    id: "10006",
    name: "Skyline Dreams",

    views: "11,400",
    adSupported: "$110.00",
    premium: "$240.00",
    earning: "$350.00",
    image: deser,
  },
  {
    id: "10007",
    name: "Fire Beats (Remix)",

    views: "13,750",
    adSupported: "$140.00",
    premium: "$210.00",
    earning: "$350.00",
    image: tidal,
  },
  {
    id: "10008",
    name: "Midnight Flow",

    views: "7,860",
    adSupported: "$100.00",
    premium: "$250.00",
    earning: "$350.00",
    image: heart,
  },
];

export function EarningsBreakdownTable() {
  return (
    <div className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Left side - Title */}
        <h1 className="text-base sm:text-lg md:text-2xl font-medium text-white">
          Assets
        </h1>
      </div>

      {/* Table Section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          {/* responsive part */}
          <div className="overflow-x-auto">
            <Table className="w-full min-w-[600px]">
              <TableHeader>
                <TableRow className="text-[#BDBDBD] text-sm md:text-base">
                  <TableHead className="w-[200px] px-2 md:px-4 py-2">
                    Title
                  </TableHead>
                  <TableHead className="text-center px-2 md:px-4 py-2">
                    Gross Earnings
                  </TableHead>
                  <TableHead className="text-center px-2 md:px-4 py-2">
                    Comission
                  </TableHead>

                  <TableHead className="text-right pr-4 md:pr-8 py-2">
                    Net Earnings
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
                        <span>{product.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center px-2 md:px-4 py-3 text-sm md:text-base">
                      {product.views}
                    </TableCell>
                    <TableCell className="text-center px-2 md:px-4 py-3 text-sm md:text-base">
                      {product.adSupported}
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
      </div>

      <div className="bg-[#0E1F22] border border-[#2E3A42] p-4 rounded-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Text Section */}
          <div className="space-y-6">
            <h3>Pending Payments</h3>
            <h3>
              Pending Payment: <span className="text-[#01D449]">$200.00</span>
            </h3>
          </div>

          {/* Button */}
          <Button className="w-full md:w-auto text-base bg-[#01D449] hover:bg-[#026322] text-white px-6 py-3 h-12 gap-2 rounded-[15px] shadow-lg transition-all duration-200 cursor-pointer">
            <PiCurrencyDollarSimpleBold />
            Proceed Payment
          </Button>
        </div>
      </div>
    </div>
  );
}
