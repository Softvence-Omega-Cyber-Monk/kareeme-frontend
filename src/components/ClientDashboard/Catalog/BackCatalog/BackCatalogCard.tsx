import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { IoMdAdd } from "react-icons/io";

const BackCatalogCard = () => {
  return (
    <div className="space-y-6 md:space-y-9 ">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left: Titles */}
        <div className="space-y-1 md:space-y-2">
          <h1 className="text-sm md:text-base font-sans text-gray-400">
            Catalog
          </h1>
          <h2 className="text-lg sm:text-xl md:text-2xl font-sans font-semibold text-white">
            Back Catalog
          </h2>
        </div>

        {/* Right: Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="w-full sm:w-64 md:w-80 lg:w-96 relative">
            <Input
              className="w-full h-[44px] md:h-[48px] border bg-[#17171A] border-[#696B6F] rounded-[15px] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm md:text-base"
              placeholder="Search loads"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
              <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </div>

          {/* Filter */}
          <Select>
            <SelectTrigger className="w-full  sm:w-[200px] md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue
                placeholder="All Assets"
                className="text-gray-300 "
              />
            </SelectTrigger>

            <SelectContent className="border-none bg-[#17171A] text-white font-sans shadow-lg rounded-lg">
              <SelectGroup>
                <SelectItem
                  value="all"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  All Assets
                </SelectItem>
                <SelectItem
                  value="PAID"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Paid Assets
                </SelectItem>
                <SelectItem
                  value="PENDING"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Pending Assets
                </SelectItem>
                <SelectItem
                  value="PROCESSING"
                  className="hover:bg-[#131320] p-3 cursor-pointer"
                >
                  Processing Assets
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Location Time */}
          <Select>
            <SelectTrigger className="w-full sm:w-[200px] md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue
                placeholder="Last 1 Year"
                className="text-gray-300"
              />
            </SelectTrigger>

            <SelectContent className="border-none bg-[#17171A] text-white font-sans shadow-lg rounded-lg">
              <SelectGroup>
                <SelectItem
                  value="last_7_days"
                  className="hover:bg-[#131320] p-3 cursor-pointer  border-b border-[#2C2C3A]"
                >
                  Last 7 Days
                </SelectItem>
                <SelectItem
                  value="last_30_days"
                  className="hover:bg-[#131320] p-3 cursor-pointer   border-b border-[#2C2C3A]"
                >
                  Last 30 Days
                </SelectItem>
                <SelectItem
                  value="last_6_months"
                  className="hover:bg-[#131320] p-3 cursor-pointer  border-b border-[#2C2C3A]"
                >
                  Last 6 Months
                </SelectItem>
                <SelectItem
                  value="last_1_year"
                  className="hover:bg-[#131320] p-3 cursor-pointer  border-b border-[#2C2C3A]"
                >
                  Last 1 Year
                </SelectItem>
                <SelectItem
                  value="this_year"
                  className="hover:bg-[#131320] p-3  cursor-pointer"
                >
                  This Year
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Add Button */}
          <div className="w-full sm:w-auto">
            <button className="w-full flex justify-center md:justify-center items-center gap-2 px-4 md:px-6 py-2 rounded-[15px] bg-[#3A5CFF] hover:bg-[#002afa] transition text-white font-medium text-base md:text-lg cursor-pointer">
              <span>Add</span>
              <IoMdAdd className="text-lg md:text-xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Table / Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4 gap-5">
        <div className="xl:col-span-4 w-full">{/* <TableHere /> */}</div>
      </div>
    </div>
  );
};

export default BackCatalogCard;

// import { Input } from "@/components/ui/input";
// import { IoSearch } from "react-icons/io5";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { IoMdAdd } from "react-icons/io";

// const BackCatalogCard = () => {
//   return (
//     <div className="space-y-9">
//       {/* Header Section */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
//         {/* Left: Titles */}
//         <div className="space-y-2">
//           <h1 className="text-sm md:text-base font-sans text-gray-400">
//             Catalog
//           </h1>
//           <h2 className="text-xl md:text-2xl font-sans font-semibold text-white">
//             Back Catalog
//           </h2>
//         </div>

//         {/* Right: Controls */}
//         <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
//           {/* Search Input */}
//           <div className="w-full sm:w-72 md:w-96 relative">
//             <Input
//               className="w-full border bg-gradient-to-l from-[#12121E] to-[#1A1A2B] border-[#696B6F] rounded-[15px] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm md:text-base"
//               placeholder="Search loads"
//             />
//             <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
//               <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
//             </span>
//           </div>

//           {/* Payment Status Filter */}
//           <Select>
//             <SelectTrigger className="w-full  sm:w-[200px] md:w-[240px] md:h-[48px] rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-gradient-to-l from-[#12121E] to-[#1A1A2B] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
//               <SelectValue
//                 placeholder="All Assets"
//                 className="text-gray-300 "
//               />
//             </SelectTrigger>

//             <SelectContent className="border-none   bg-[#1C1C29] text-white font-sans shadow-lg rounded-lg">
//               <SelectGroup>
//                 <SelectItem
//                   value="all"
//                   className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
//                 >
//                   All Assets
//                 </SelectItem>
//                 <SelectItem
//                   value="PAID"
//                   className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
//                 >
//                   Paid Assets
//                 </SelectItem>
//                 <SelectItem
//                   value="PENDING"
//                   className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
//                 >
//                   Pending Assets
//                 </SelectItem>
//                 <SelectItem
//                   value="PROCESSING"
//                   className="hover:bg-[#17171A] cursor-pointer"
//                 >
//                   Processing Assets
//                 </SelectItem>
//               </SelectGroup>
//             </SelectContent>
//           </Select>

//           {/* Location Time */}
//           <Select>
//             <SelectTrigger className="w-full sm:w-[200px] md:w-[240px] h-[44px] md:h-[48px] rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-gradient-to-l from-[#12121E] to-[#1A1A2B] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
//               <SelectValue
//                 placeholder="Last 1 Year"
//                 className="text-gray-300"
//               />
//             </SelectTrigger>

//             <SelectContent className="border-none bg-[#1C1C29] text-white font-sans shadow-lg rounded-lg">
//               <SelectGroup>
//                 <SelectItem
//                   value="last_7_days"
//                   className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
//                 >
//                   Last 7 Days
//                 </SelectItem>
//                 <SelectItem
//                   value="last_30_days"
//                   className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
//                 >
//                   Last 30 Days
//                 </SelectItem>
//                 <SelectItem
//                   value="last_6_months"
//                   className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
//                 >
//                   Last 6 Months
//                 </SelectItem>
//                 <SelectItem
//                   value="last_1_year"
//                   className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
//                 >
//                   Last 1 Year
//                 </SelectItem>
//                 <SelectItem
//                   value="this_year"
//                   className="hover:bg-[#17171A] cursor-pointer"
//                 >
//                   This Year
//                 </SelectItem>
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//           {/* add */}

//           <div className="w-full md:w-auto">
//             <button className="w-full flex justify-between md:justify-center items-center gap-4 px-4 md:px-6 py-2 rounded-[15px] bg-[#3A5CFF] hover:bg-[#002afa] transition cursor-pointer">
//               <h2 className="text-white font-sans text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[28.8px]">
//                 Add
//               </h2>
//               <IoMdAdd className="text-lg" />
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
//         <div className="xl:col-span-4 w-full">{/* <TableHere /> */}</div>
//       </div>
//     </div>
//   );
// };

// export default BackCatalogCard;
