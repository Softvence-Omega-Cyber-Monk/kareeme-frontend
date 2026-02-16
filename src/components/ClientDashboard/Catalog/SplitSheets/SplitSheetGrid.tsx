import { useState } from "react";
import SplitSheetCard, { SplitSheetAPI } from "./SplitSheetCard";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";
import { useGetAllSplitSheetsQuery } from "@/redux/features/newRelease/newReleaseApi";

const SplitSheetGrid = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: response, isLoading, isError } = useGetAllSplitSheetsQuery({});

  const splitSheets: SplitSheetAPI[] = response?.data || [];

  const filteredSplitSheets = splitSheets.filter((split) => {
    const term = searchTerm.toLowerCase();
    return (
      split.songTitle.toLowerCase().includes(term) ||
      (split.isrc && split.isrc.toLowerCase().includes(term))
    );
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#3A5CFF]"></div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center text-red-500 py-10">
        <p>Failed to load split sheets. Please try again later.</p>
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Search Input */}
      <div className="w-full sm:w-72 md:w-96 lg:w-[736px] relative">
        <Input
          className="w-full border h-12 bg-[#17171A] border-[#696B6F] rounded-[15px] px-3 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#2563EB] text-sm md:text-base border-none"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="absolute inset-y-0 right-3 flex items-center text-gray-400 cursor-pointer">
          <IoSearch className="w-4 h-4 md:w-5 md:h-5" />
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredSplitSheets.map((split) => (
          <SplitSheetCard key={split.splitId} split={split} />
        ))}
        {filteredSplitSheets.length === 0 && (
          <p className="col-span-full text-center text-gray-400">
            No split sheets found.
          </p>
        )}
      </div>
    </div>
  );
};

export default SplitSheetGrid;

