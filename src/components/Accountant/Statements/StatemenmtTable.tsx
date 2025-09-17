import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import download from "@/assets/icons/download.svg";

import { useNavigate } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const productData = [
  {
    id: "10001",
    assetsName: "Statement for January 2025",
    name: "Gemini Chachi",
    amount: "$350.00 USD",
    status: "Paid",
    image: download,
  },
  {
    id: "10002",
    assetsName: "Active",
    name: "DJ Nova",
    amount: "$350.00 USD",
    status: "Payment Required",
    image: download,
  },
  {
    id: "10003",
    assetsName: "Statement for February 2025",
    name: "Auntie House",
    amount: "$350.00 USD",
    status: "Payment Not Required",
    image: download,
  },
  {
    id: "10004",
    assetsName: "Statement for April 2025",
    name: "Celia Dawn",
    amount: "$350.00 USD",
    status: "Payment Submitted",
    image: download,
  },
  {
    id: "10005",
    assetsName: "OOH YEA",
    name: "Auntie House",
    amount: "$350.00 USD",
    status: "Paid",
    image: download,
  },
  {
    id: "10006",
    assetsName: "Statement for June 2025",
    name: "Luna Sparks",
    amount: "$350.00 USD",
    status: "Payment Required",
    image: download,
  },
  {
    id: "10007",
    assetsName: "Statement for July 2025",
    name: "DJ Blaze",
    amount: "$350.00 USD",
    status: "Payment Not Required",
    image: download,
  },
  {
    id: "10008",
    assetsName: "Midnight Flow",
    name: "Gemini Chachi",
    amount: "$350.00 USD",
    status: "Payment Submitted",
    image: download,
  },
  {
    id: "10009",
    assetsName: "Statement for June 2025",
    name: "Celia Dawn",
    amount: "$350.00 USD",
    status: "Paid",
    image: download,
  },
];

// Status pills with subtle background
const getStatusClasses = (status: string) => {
  switch (status) {
    case "Paid":
      return "bg-[#0B2B1E] text-green-700";
    case "Payment Required":
      return "bg-[#341815] text-red-700";
    case "Payment Not Required":
      return "bg-[#3D4748] text-[#BDBDBD]";
    case "Payment Submitted":
      return "bg-[#333715] text-yellow-700";
    default:
      return "bg-gray-200 text-gray-800";
  }
};

const StatemenmtTable = () => {
  const navigate = useNavigate();

  // const goToDetails = (id: string) => {
  //   navigate(`/statement/${id}`);
  // };

  const goToDetails = (_id: string) => {
    navigate(`:id`); // Navigate to details page
  };
  return (
    <div className="overflow-x-auto rounded-lg shadow ">
      <Table className="w-full min-w-[700px] divide-y divide-gray-200">
        <TableHeader>
          <TableRow className="bg-[#0C2322] text-[#979797] text-sm md:text-base">
            <TableHead className="px-4 py-3 text-left">Statement</TableHead>
            <TableHead className="px-4 py-3 text-center">Status</TableHead>
            <TableHead className="px-4 py-3 text-right">
              Payment Amounts (USD)
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {productData.map((product, index) => (
            <TableRow
              key={product.id}
              className={`${
                index % 2 === 0 ? "bg-[#0C2322]" : "bg-[#0C2322]"
              }  transition-colors duration-200`}
            >
              {/* Statement Info */}
              <TableCell className="px-4 py-3 flex items-center gap-3">
                <img
                  src={product.image}
                  alt=""
                  className="h-6 w-6 md:h-7 md:w-7"
                />
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-medium text-white">
                    {product.assetsName}
                  </span>
                  <span className="text-xs md:text-sm text-[#CACACA]">
                    {product.name}
                  </span>
                </div>
              </TableCell>

              {/* Status Pill */}
              <TableCell className="text-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${getStatusClasses(
                    product.status
                  )}`}
                >
                  {product.status}
                </span>
              </TableCell>

              {/* Amount */}
              <TableCell
                className="text-right px-4 py-3 text-sm md:text-base flex items-center justify-end gap-2 cursor-pointer text-blue-600 hover:text-blue-800"
                onClick={() => goToDetails(product.id)}
              >
                {product.amount}
                <FaChevronRight className="w-4 h-4" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StatemenmtTable;
