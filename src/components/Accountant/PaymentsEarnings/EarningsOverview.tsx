import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

import Youtube from "@/assets/icons/youtube.png";
import sportify from "@/assets/icons/sportity.png";
import apple from "@/assets/icons/apple.png";
import soundClud from "@/assets/icons/soundCloud.png";
import audio from "@/assets/icons/audio.png";
import deser from "@/assets/icons/deezer.png";
import tidal from "@/assets/icons/tidal.png";
import heart from "@/assets/icons/heart2.png";

const productData = [
  {
    id: "10001",
    name: "Women Dominated ",

    views: "12,540",
    adSupported: "$120.00",
    premium: "$230.00",
    earning: "$350.00",
    image: Youtube,
    image1: audio,
  },
  {
    id: "10002",
    name: "Active",

    views: "8,940",
    adSupported: "$90.00",
    premium: "$260.00",
    earning: "$350.00",
    image: sportify,
    image1: deser,
  },
  {
    id: "10003",
    name: "Gang About ",

    views: "15,320",
    adSupported: "$150.00",
    premium: "$200.00",
    earning: "$350.00",
    image: apple,
    image1: tidal,
  },
  {
    id: "10004",
    name: "Lost It ",

    views: "10,780",
    adSupported: "$170.00",
    premium: "$180.00",
    earning: "$350.00",
    image: soundClud,
    image1: heart,
  },
];

const EarningsOverview = () => {
  return (
    <div className="bg-[#0C201F] border border-[#304240] p-4 sm:p-6 rounded-2xl">
      <div className="flex justify-between items-center">
        <div className="space-y-4">
          <div className=" space-y-4">
            <h1 className=" text-2xl font-sans">Earnings Overview</h1>
            <p className="text-base">Total Platform Earnings</p>
          </div>
          <div className="text-5xl font-sans  font-bold text-white">$5,000</div>
        </div>
        <div className="bg-[#1B2A2F] border border-[#304240] p-4 sm:p-6 rounded-2xl">
          <h1>Earnings Overview</h1>
          <div>
            <Table className="w-full min-w-[600px]">
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
                    <TableCell className="px-2 md:px-4 py-3 flex items-center gap-2 md:gap-3">
                      <img
                        src={product.image1}
                        alt=""
                        className="h-5 w-5 md:h-7 md:w-7"
                      />
                      <div className="flex flex-col">
                        <span>{product.name}</span>
                      </div>
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
    </div>
  );
};

export default EarningsOverview;
