import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReuseAccounting from "../Shared/ReuseAccounting";

interface ProfitLossHeadProps {
  clientFilter: string;
  setClientFilter: (value: string) => void;
  timeFilter: string;
  setTimeFilter: (value: string) => void;
}

const ProfitLossHead = ({ 
  clientFilter, 
  setClientFilter, 
  timeFilter, 
  setTimeFilter 
}: ProfitLossHeadProps) => {
  return (
    <div className="space-y-9">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        {/* Reusable Header */}
        <ReuseAccounting platform="Profit & Loss" icon="" />

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-4">
          {/* Client Filter */}
          <Select value={clientFilter} onValueChange={setClientFilter}>
            <SelectTrigger className="w-full sm:w-full md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue placeholder="All Client" className="text-gray-300" />
            </SelectTrigger>
            <SelectContent className="border-none bg-[#17171A] text-white font-sans shadow-lg rounded-lg">
              <SelectGroup>
                <SelectItem
                  value="all_clients"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  All Clients
                </SelectItem>
                <SelectItem
                  value="client_a"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Client A
                </SelectItem>
                <SelectItem
                  value="client_b"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Client B
                </SelectItem>
                <SelectItem
                  value="client_c"
                  className="hover:bg-[#131320] p-3 cursor-pointer"
                >
                  Client C
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Time Filter */}
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-full sm:w-full md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue placeholder="Select Year" className="text-gray-300" />
            </SelectTrigger>
            <SelectContent className="border-none bg-[#17171A] text-white font-sans shadow-lg rounded-lg">
              <SelectGroup>
                <SelectItem
                  value="2024"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  2024
                </SelectItem>
                <SelectItem
                  value="2023"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  2023
                </SelectItem>
                <SelectItem
                  value="2022"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  2022
                </SelectItem>
                <SelectItem
                  value="last_6_months"
                  className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 6 Months
                </SelectItem>
                <SelectItem
                  value="this_year"
                  className="hover:bg-[#131320] p-3 cursor-pointer"
                >
                  This Year
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default ProfitLossHead;
