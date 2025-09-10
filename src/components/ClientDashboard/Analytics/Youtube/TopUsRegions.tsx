import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import location from "@/assets/icons/location.svg";

const productData = [
  {
    id: "10001",
    orderId: "ORD-2025-347",
    location: "California",
    view: "350.00",
    image: location,
  },
  {
    id: "10002",
    orderId: "ORD-2025-482",
    location: "Texas",
    view: "350.00",
    image: location,
  },
  {
    id: "10003",
    orderId: "ORD-2025-763",
    location: "New York",
    view: "350.00",
    image: location,
  },
  {
    id: "10004",
    orderId: "ORD-2025-764",
    location: "Florida",
    view: "350.00",
    image: location,
  },
  {
    id: "10005",
    orderId: "ORD-2025-765",
    location: "Ohio",
    view: "350.00",
    image: location,
  },
];

export function TopUsRegions() {
  return (
    <div className="bg-[#0C2322] border border-[#313E41] rounded-2xl shadow-sm p-4 md:p-6 space-y-4 md:space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-lg md:text-2xl font-medium text-white">
            Top US Regions
          </h1>
        </div>
        <div>
          <button className="underline text-sm md:text-base text-[#3A5CFF] font-medium">
            Geo Trends
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <Table className="w-full min-w-[600px] md:min-w-full">
          <TableHeader>
            <TableRow className="text-[#BDBDBD]">
              <TableHead className="w-[160px] md:w-[200px] px-2 md:px-4 py-2">
                US Region
              </TableHead>

              <TableHead className="text-right pr-4 md:pr-8 py-2">
                Views
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
                    {product.location}
                  </span>
                </TableCell>

                <TableCell className="text-right pr-4 md:pr-8 py-3">
                  {product.view}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
