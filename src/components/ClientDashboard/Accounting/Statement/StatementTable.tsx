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

const getStatusClasses = (status: string) => {
  switch (status) {
    case "Paid":
      return "text-[#01D449]";
    case "Payment Required":
      return "text-[#D31301]";
    case "Payment Not Required":
      return "text-[#BDBDBD]";
    case "Payment Submitted":
      return "text-[#E2C001]";
    default:
      return "bg-gray-500 text-white";
  }
};

const StatementTable = () => {
  const navigate = useNavigate();

  const goToDetails = (_id: string) => {
    navigate(`:id`); // Navigate to details page
  };
  // const goToDetails = (id: string) => {
  //   navigate(`/statement/${id}`); // Navigate to details page
  // };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[700px]">
        <TableHeader>
          <TableRow className="text-[#BDBDBD] text-sm md:text-base">
            <TableHead className="w-[200px] px-2 md:px-4 py-2">
              Statement
            </TableHead>
            <TableHead className="text-end pr-4 md:pr-0 py-2">Status</TableHead>
            <TableHead className="text-right pr-4 md:pr-8 py-2">
              Payment Amounts (USD)
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

              <TableCell
                className={`text-end text-sm md:text-base font-medium rounded-full px-3 py-1 ${getStatusClasses(
                  product.status
                )}`}
              >
                {product.status}
              </TableCell>

              <TableCell
                className="text-right pr-4 md:pr-8 py-3 text-sm md:text-base flex items-center justify-end gap-2 cursor-pointer hover:text-blue-500"
                onClick={() => goToDetails(product.id)}
              >
                {product.amount}
                <FaChevronRight className="w-4 h-4 text-[#3A5CFF]" />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default StatementTable;

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// import download from "@/assets/icons/download.svg";

// // Add a status field to each product
// const productData = [
//   {
//     id: "10001",
//     assetsName: "Statement for January 2025",
//     name: "Gemini Chachi",
//     amount: "$350.00 USD",
//     status: "Paid",
//     image: download,
//   },
//   {
//     id: "10002",
//     assetsName: "Active",
//     name: "DJ Nova",
//     amount: "$350.00 USD",
//     status: "Payment Required",
//     image: download,
//   },
//   {
//     id: "10003",
//     assetsName: "Statement for February 2025",
//     name: "Auntie House",
//     amount: "$350.00 USD",
//     status: "Payment Not Required",
//     image: download,
//   },
//   {
//     id: "10004",
//     assetsName: "Statement for April 2025",
//     name: "Celia Dawn",
//     amount: "$350.00 USD",
//     status: "Payment Submitted",
//     image: download,
//   },
//   {
//     id: "10005",
//     assetsName: "OOH YEA",
//     name: "Auntie House",
//     amount: "$350.00 USD",
//     status: "Paid",
//     image: download,
//   },
//   {
//     id: "10006",
//     assetsName: "Statement for June 2025",
//     name: "Luna Sparks",
//     amount: "$350.00 USD",
//     status: "Payment Required",
//     image: download,
//   },
//   {
//     id: "10007",
//     assetsName: "Statement for July 2025",
//     name: "DJ Blaze",
//     amount: "$350.00 USD",
//     status: "Payment Not Required",
//     image: download,
//   },
//   {
//     id: "10008",
//     assetsName: "Midnight Flow",
//     name: "Gemini Chachi",
//     amount: "$350.00 USD",
//     status: "Payment Submitted",
//     image: download,
//   },
//   {
//     id: "10009",
//     assetsName: "Statement for June 2025",
//     name: "Celia Dawn",
//     amount: "$350.00 USD",
//     status: "Paid",
//     image: download,
//   },
// ];

// // Function to return Tailwind classes based on status
// const getStatusClasses = (status: string) => {
//   switch (status) {
//     case "Paid":
//       return " text-[#01D449]";
//     case "Payment Required":
//       return " text-[#D31301]";
//     case "Payment Not Required":
//       return " text-[#BDBDBD]";
//     case "Payment Submitted":
//       return " text-[#E2C001]";
//     default:
//       return "bg-gray-500 text-white";
//   }
// };

// const StatementTable = () => {
//   return (
//     <div className="overflow-x-auto">
//       <Table className="w-full min-w-[700px]">
//         <TableHeader>
//           <TableRow className="text-[#BDBDBD] text-sm md:text-base">
//             <TableHead className="w-[200px] px-2 md:px-4 py-2">
//               Statement
//             </TableHead>

//             <TableHead className=" text-end pr-4 md:pr-0 py-2">
//               Status
//             </TableHead>
//             <TableHead className="text-right pr-4 md:pr-8 py-2">
//               Payment Amounts (USD)
//             </TableHead>
//           </TableRow>
//         </TableHeader>
//         <TableBody className="text-white">
//           {productData.map((product) => (
//             <TableRow key={product.id}>
//               <TableCell className="px-2 md:px-4 py-3 flex items-center gap-2 md:gap-3">
//                 <img
//                   src={product.image}
//                   alt=""
//                   className="h-5 w-5 md:h-7 md:w-7"
//                 />
//                 <div className="flex flex-col">
//                   <span className="text-sm md:text-base">
//                     {product.assetsName}
//                   </span>
//                   <span className="text-xs md:text-sm text-gray-500">
//                     {product.name}
//                   </span>
//                 </div>
//               </TableCell>

//               <TableCell
//                 className={` text-end text-sm md:text-base  font-medium  rounded-full  px-3 py-1 ${getStatusClasses(
//                   product.status
//                 )}`}
//               >
//                 {product.status}
//               </TableCell>

//               <TableCell className="text-right pr-4 md:pr-8 py-3 text-sm md:text-base">
//                 {product.amount}
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default StatementTable;

// const getStatusClasses = (status: string) => {
//   switch (status) {
//     case "Paid":
//       return "bg-[#0C2A1E] text-[#01D449]";
//     case "Payment Required":
//       return "bg-[#331814] text-[#D31301]";
//     case "Payment Not Required":
//       return "bg-[#3C4748] text-[#BDBDBD]";
//     case "Payment Submitted":
//       return "bg-[#323714] text-[#E2C001]";
//     default:
//       return "bg-gray-500 text-white";
//   }
// };
