import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import fannel from "@/assets/icons/fanel.svg";
import short from "@/assets/icons/short.svg";
import { RiDownloadLine } from "react-icons/ri";
import TableHere from "./TableHere";
import { useGetAllReleasesQuery } from "@/redux/features/newRelease/newReleaseApi";

const ReleasesTable = () => {
  const { data, isLoading } = useGetAllReleasesQuery({
    limit: 10,
    page: 1,
  })
  console.log("data",data)
  return (
    <div className="space-y-9">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left: Titles */}
        <div className="space-y-2">
          <h1 className="text-sm md:text-base font-sans text-gray-400">
            Catalog
          </h1>
          <h2 className="text-xl md:text-2xl font-sans font-semibold text-white">
            Releases
          </h2>
        </div>

        {/* Right: Controls */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto">
          {/* Search Input */}
          <div className="w-full sm:w-72 md:w-96 relative">
            <Input
              className="w-full border h-12 bg-[#171719] border-[#696B6F] rounded-[15px] px-3 py-2 pr-10 text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              placeholder="Search loads"
            />
            <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
              <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
            </span>
          </div>

          {/* Filter Button */}
          <button className="bg-[#171719] flex h-12 px-3 justify-center items-center rounded-[15px] border border-slate-200/30 gap-2 hover:bg-[#1F1F21] transition cursor-pointer">
            <img
              src={fannel}
              alt="Filter Icon"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-sm md:text-base font-sans">Filter</span>
          </button>

          {/* Sort Button */}
          <button className="bg-[#171719] flex h-12 px-3 justify-center items-center rounded-[15px] border border-slate-200/30 gap-2 hover:bg-[#1F1F21] transition cursor-pointer">
            <img
              src={short}
              alt="Sort Icon"
              className="w-5 h-5 md:w-6 md:h-6"
            />
            <span className="text-sm md:text-base font-sans">Sort</span>
          </button>

          {/* Export Button */}
          <button className="bg-[#3A5CFF] flex h-12 px-3 justify-center items-center rounded-[15px] border border-slate-200/30 gap-2 hover:bg-[#2E4AE0] transition cursor-pointer">
            <RiDownloadLine className="w-5 h-5 md:w-6 md:h-6" />
            <span className="text-sm md:text-base font-sans">Export</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          <TableHere />
        </div>
      </div>
    </div>
  );
};

export default ReleasesTable;
