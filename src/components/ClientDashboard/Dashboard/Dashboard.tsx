import { FaYoutube } from "react-icons/fa6";
import EarningsByType from "./EarningsByType";
import EstimatedEarning from "./EstimatedEarning";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Dashboard = () => {
  return (
    <div className=" space-y-9">
      <div className="flex justify-end items-center">
        <Select>
          <SelectTrigger
            className="w-[180px] bg-[#161619] border border-[#54565A] rounded-xl shadow-sm
               hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
          >
            <SelectValue placeholder="Last 1 Year" className="text-gray-700" />
          </SelectTrigger>
          <SelectContent className="bg-white border border-[#54565A] rounded-md shadow-lg">
            <SelectGroup>
              <SelectLabel className="text-gray-500">Time Range</SelectLabel>
              <SelectItem value="last_7_days" className="hover:bg-blue-50">
                Last 7 Days
              </SelectItem>
              <SelectItem value="last_30_days" className="hover:bg-blue-50">
                Last 30 Days
              </SelectItem>
              <SelectItem value="this_month" className="hover:bg-blue-50">
                This Month
              </SelectItem>
              <SelectItem value="last_month" className="hover:bg-blue-50">
                Last Month
              </SelectItem>
              <SelectItem value="last_3_months" className="hover:bg-blue-50">
                Last 3 Months
              </SelectItem>
              <SelectItem value="last_6_months" className="hover:bg-blue-50">
                Last 6 Months
              </SelectItem>
              <SelectItem value="last_1_year" className="hover:bg-blue-50">
                Last 1 Year
              </SelectItem>
              <SelectItem value="this_year" className="hover:bg-blue-50">
                This Year
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="p-6 border border-[#1C275C] rounded-2xl shadow-2xl bg-[#0B1C21]">
        <div className="space-y-6">
          <div className="flex justify-start items-center">
            <FaYoutube className="text-red-700 w-10 h-6" />
            <h1 className="text-2xl font-sans">Youtube</h1>
          </div>
          {/* Part-1 */}
          <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-3 gap-5">
            <div className="w-full space-y-6">
              <EarningsByType />
            </div>

            <div className="lg:col-span-2 w-full">
              <EstimatedEarning />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
