import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import camera from "@/assets/icons/audio.svg";

const productData = [
  {
    id: "10001",
    orderId: "ORD-2025-347",
    assetsName: "Women Dominated Cypher 2021 (Official Cypher)",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10002",
    orderId: "ORD-2025-482",
    assetsName: "Active",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10003",
    orderId: "ORD-2025-763",
    assetsName: "Gang About You (Live Performance)",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10004",
    orderId: "ORD-2025-764",
    assetsName: "Lost It (Official Grannie House Performance)",
    earning: "$350.00",
    image: camera,
  },
  {
    id: "10005",
    orderId: "ORD-2025-765",
    assetsName: "OOH YEA",
    earning: "$350.00",
    image: camera,
  },
];

export function TopAssets() {
  return (
    <div className="bg-[#0C2322] border border-[#313E41] rounded-2xl shadow-sm p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg md:text-2xl font-medium text-white">
            Top Assets
          </h1>
        </div>
        <div>
          <button className="underline text-sm md:text-base text-[#3A5CFF] font-medium">
            Assets
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full min-w-[400px] md:min-w-full">
          <TableHeader>
            <TableRow className="text-[#BDBDBD]">
              <TableHead className="w-[160px] md:w-[200px] px-2 md:px-4 py-2">
                Assetss
              </TableHead>
              <TableHead className="text-right pr-4 md:pr-8 py-2">
                Estimated Earnings
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
                  <span className="truncate max-w-[100px] md:max-w-none">
                    {product.assetsName}
                  </span>
                </TableCell>
                <TableCell className="text-right pr-4 md:pr-8 py-3">
                  {product.earning}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={2}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
