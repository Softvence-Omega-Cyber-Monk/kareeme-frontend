import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import download from "@/assets/icons/photo.png";

// Sample Data
const productData = [
  {
    id: "10001",
    Name: "Stand on Dat",
    role: "Artist",
    release: "1",
    status: "Live",
    image: download,
    number: "+1234567890",
    email: "kshiday@example.com",
  },
  {
    id: "10002",
    Name: "Handle Me",
    role: "Label",
    release: "2",
    status: "Live",
    image: download,
    number: "+1234567891",
    email: "kshiday2@example.com",
  },
  {
    id: "10003",
    Name: "Cater 2 You",
    role: "Artist",
    release: "3",
    status: "Live",
    image: download,
    number: "+1234567892",
    email: "auntiehouse@example.com",
  },
  {
    id: "10004",
    Name: "K Shiday",
    role: "Label",
    release: "4",
    status: "Live",
    image: download,
    number: "+1234567893",
    email: "kshiday3@example.com",
  },
  {
    id: "10005",
    Name: "K Shiday",
    role: "Artist",
    release: "5",
    status: "Live",
    image: download,
    number: "+1234567894",
    email: "kshiday4@example.com",
  },
];

const ClientsManagementTable = () => {
  const navigate = useNavigate();

  const goToDetails = (id: string) => {
    navigate(`/client-dashboard/catalog/releases/${id}`);
  };

  return (
    <div className="overflow-x-auto">
      <Table className="w-full min-w-[1000px]">
        {/* Table Header */}
        <TableHeader>
          <TableRow className="text-[#BDBDBD] text-sm md:text-base">
            <TableHead className="w-[250px] px-4 py-2">Title</TableHead>
            <TableHead className="px-4 py-2">Contact</TableHead>
            <TableHead className="px-4 py-2">Role</TableHead>
            <TableHead className="px-4 py-2">Release</TableHead>
            <TableHead className="text-center px-4 py-2">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody className="text-white">
          {productData.map((product) => (
            <TableRow
              key={product.id}
              className="border-b border-gray-800 hover:bg-gray-900"
            >
              {/* Title & Image */}
              <TableCell className="px-4 py-3 flex items-center gap-3">
                <img
                  src={product.image}
                  alt={product.Name}
                  className="h-8 w-8 rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-medium">
                    {product.Name}
                  </span>
                  <span className="text-xs md:text-sm text-gray-500">
                    {product.role}
                  </span>
                </div>
              </TableCell>

              {/* Contact Info */}
              <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
                <div className="flex flex-col">
                  <span className="font-medium">{product.email}</span>
                  <span className="text-gray-500">{product.number}</span>
                </div>
              </TableCell>

              {/* Role */}
              <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
                {product.role}
              </TableCell>

              {/* Release */}
              <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
                {product.release}
              </TableCell>

              {/* Actions */}
              <TableCell className="px-4 py-3 text-center flex items-center justify-center ">
                {/* Edit Button */}
                <button
                  className="flex items-center gap-1 px-3 py-1 text-[#3A5CFF] text-sm md:text-base"
                  onClick={() => goToDetails(product.id)}
                >
                  Edit
                </button>

                {/* Deactivate Button */}
                <button
                  className="flex items-center gap-1 px-3 py-1 text-red-700 text-sm md:text-base"
                  onClick={() => alert(`Deactivate ${product.Name}`)}
                >
                  Deactivate
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ClientsManagementTable;

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import { useNavigate } from "react-router-dom";
// import { FaChevronRight } from "react-icons/fa";
// import download from "@/assets/icons/photo.png";

// // Sample Data
// const productData = [
//   {
//     id: "10001",
//     Name: "Stand on Dat",

//     role: "Artist",
//     release: "1",
//     amount: "$350.00 USD",
//     status: "Live",
//     image: download,
//     number: "+1234567890",
//     email: "kshiday@example.com",
//   },
//   {
//     id: "10002",
//     Name: "Handle Me",

//     role: "Label",
//     release: "2",
//     amount: "$350.00 USD",
//     status: "Live",
//     image: download,
//     number: "+1234567891",
//     email: "kshiday2@example.com",
//   },
//   {
//     id: "10003",
//     Name: "Cater 2 You",

//     role: "Artist",
//     release: "3",
//     amount: "$350.00 USD",
//     status: "Live",
//     image: download,
//     number: "+1234567892",
//     email: "auntiehouse@example.com",
//   },
//   {
//     id: "10004",

//     name: "K Shiday",
//     role: "Label",
//     release: "4",
//     amount: "$350.00 USD",
//     status: "Live",
//     image: download,
//     number: "+1234567893",
//     email: "kshiday3@example.com",
//   },
//   {
//     id: "10005",

//     name: "K Shiday",
//     role: "Artist",
//     release: "5",
//     amount: "$350.00 USD",
//     status: "Live",
//     image: download,
//     number: "+1234567894",
//     email: "kshiday4@example.com",
//   },
// ];

// // Main Table Component
// const ClientsManagementTable = () => {
//   const navigate = useNavigate();

//   const goToDetails = (id: string) => {
//     navigate(`/client-dashboard/catalog/releases/${id}`);
//   };

//   return (
//     <div className="overflow-x-auto">
//       <Table className="w-full min-w-[1000px]">
//         {/* Table Header */}
//         <TableHeader>
//           <TableRow className="text-[#BDBDBD] text-sm md:text-base">
//             <TableHead className="w-[200px] px-4 py-2">Title</TableHead>
//             <TableHead className="px-30 py-2">Contact</TableHead>
//             <TableHead className="px-4 py-2">Role</TableHead>
//             <TableHead className="px-4 py-2">Release </TableHead>
//             <TableHead className="text-right px-4 py-2">Action</TableHead>
//           </TableRow>
//         </TableHeader>

//         {/* Table Body */}
//         <TableBody className="text-white">
//           {productData.map((product) => (
//             <TableRow key={product.id} className="border-b border-gray-800">
//               {/* Title & Artist */}
//               <TableCell className="px-4 py-3 flex items-center gap-3">
//                 <img
//                   src={product.image}
//                   alt=""
//                   className="h-6 w-6 md:h-8 md:w-8 rounded-full"
//                 />
//                 <div className="flex flex-col">
//                   <span className="text-sm md:text-base font-medium">
//                     {product.Name}
//                   </span>
//                   <span className="text-xs md:text-sm text-gray-500">
//                     {product.role}
//                   </span>
//                 </div>
//               </TableCell>
//               <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
//                 <div className="flex flex-col">
//                   <span className="text-sm md:text-base font-medium">
//                     {product.email}
//                   </span>
//                   <span className="text-xs md:text-sm text-gray-500">
//                     {product.number}
//                   </span>
//                 </div>
//               </TableCell>

//               {/*

//               {/* role */}
//               <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
//                 {product.role}
//               </TableCell>

//               {/* Release Date */}
//               <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
//                 {product.release}{" "}
//               </TableCell>

//               {/* Status + Arrow */}
//               <TableCell
//                 className="px-4 py-3 text-right text-sm md:text-base font-medium flex items-center justify-end gap-2 cursor-pointer hover:text-blue-500"
//                 onClick={() => goToDetails(product.id)}
//               >
//                 <span className="bg-[#0E261F] text-[#01D449] px-4 py-2 rounded-full text-xs md:text-sm font-medium">
//                   {product.status}
//                 </span>
//                 <FaChevronRight className="w-4 h-4 text-[#3A5CFF]" />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </div>
//   );
// };

// export default ClientsManagementTable;
