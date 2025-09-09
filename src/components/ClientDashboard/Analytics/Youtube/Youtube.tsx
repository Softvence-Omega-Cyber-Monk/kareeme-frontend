import { FaYoutube } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Youtube = () => {
  return (
    <div className="space-y-9">
      <div>
        <div className="flex justify-between items-center">
          <div className=" space-y-2">
            <h1 className="text-base font-sans">Analytics</h1>
            <div className="flex justify-start items-center">
              <FaYoutube className="text-[#FF0000] w-10 h-6" />
              <h1 className="text-2xl font-sans">Youtube</h1>
            </div>
          </div>
          <Select>
            <SelectTrigger
              className="w-[180px] bg-[#161619] border border-[#54565A] rounded-xl shadow-sm
               hover:border-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
            >
              <SelectValue
                placeholder="Last 1 Year"
                className="text-gray-700"
              />
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
      </div>

   
    </div>
  );
};

export default Youtube;
