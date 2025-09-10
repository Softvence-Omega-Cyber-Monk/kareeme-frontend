import { FaYoutube } from "react-icons/fa6";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
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
              className="w-[180px] rounded-[15px] border border-[rgba(226,232,240,0.30)] 
     bg-gradient-to-l from-[#12121E] to-[#1A1A2B]
     shadow-sm hover:border-[#1C1D28] 
     focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer"
            >
              <SelectValue
                placeholder="Last 1 Year"
                className="text-gray-300"
              />
            </SelectTrigger>

            <SelectContent className="border-none bg-[#1C1C29] text-white font-sans shadow-lg rounded-lg">
              <SelectGroup>
                <SelectItem
                  value="last_7_days"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 7 Days
                </SelectItem>
                <SelectItem
                  value="last_30_days"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 30 Days
                </SelectItem>
                <SelectItem
                  value="last_6_months"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 6 Months
                </SelectItem>
                <SelectItem
                  value="last_1_year"
                  className="hover:bg-[#17171A] cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 1 Year
                </SelectItem>
                <SelectItem
                  value="this_year"
                  className="hover:bg-[#17171A] cursor-pointer"
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

export default Youtube;
