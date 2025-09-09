import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import camera from "@/assets/icons/flag.svg";

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

export function GeoTrendsDetails() {
  return (
    <div className="bg-[#0C2322] border border-[#313E41] rounded-2xl shadow-sm p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-medium text-white">Assets</h1>
        <button className="text-sm md:text-base text-[#3A5CFF] font-medium cursor-pointer hover:text-blue-500">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full min-w-[600px]">
          <TableHeader>
            <TableRow className="text-[#BDBDBD]">
              <TableHead className="w-[200px] px-2 md:px-4 py-2">
                Country
              </TableHead>
              <TableHead className="text-center px-2 md:px-4 py-2">
                Views
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
                    <span>{product.assetsName}</span>
                    <span className="text-sm text-gray-500">
                      {product.name}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="text-center px-2 md:px-4 py-3">
                  {product.views}
                </TableCell>

                <TableCell className="text-right pr-4 md:pr-8 py-3">
                  {product.earning}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={5}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
