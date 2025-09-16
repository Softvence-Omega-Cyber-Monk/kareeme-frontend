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

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const BackCatalog = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const handleChange = (dates: [Date | null, Date | null] | null) => {
    if (dates) {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }
  };

  return (
    <div className="space-y-9">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-2xl font-sans">Client Back Catalog Overview</h1>
          <p className="text-base">
            View the historical music releases of all artists before they joined
            the platform.
          </p>
        </div>
      </div>

      {/* Right: Controls */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-4 w-full">
        {/* Search Input */}
        <div className="w-full lg:flex-1 relative">
          <Input
            className="w-full h-12 px-4 pr-12 rounded-[15px] border border-[#696B6F] bg-[#171719] text-sm md:text-base placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
            placeholder="Search"
          />
          <span className="absolute inset-y-0 right-4 flex items-center text-gray-400 cursor-pointer">
            <IoSearch className="w-5 h-5 md:w-6 md:h-6" />
          </span>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          {/* Release Type */}
          <Select>
            <SelectTrigger className="w-full sm:w-48 md:w-56 lg:w-52 h-12 rounded-[15px] border border-[rgba(226,232,240,0.3)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue
                placeholder="Release Type"
                className="text-gray-300"
              />
            </SelectTrigger>
            <SelectContent className="border-none bg-[#17171A] text-white rounded-lg shadow-lg">
              <SelectGroup>
                <SelectItem
                  value="last_7_days"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Last 7 Days
                </SelectItem>
                <SelectItem
                  value="last_30_days"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Last 30 Days
                </SelectItem>
                <SelectItem
                  value="last_6_months"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Last 6 Months
                </SelectItem>
                <SelectItem
                  value="last_1_year"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Last 1 Year
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

          {/* Status */}
          <Select>
            <SelectTrigger className="w-full sm:w-48 md:w-56 lg:w-52 h-12 rounded-[15px] border border-[rgba(226,232,240,0.3)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
              <SelectValue placeholder="All Status" className="text-gray-300" />
            </SelectTrigger>
            <SelectContent className="border-none bg-[#17171A] text-white rounded-lg shadow-lg">
              <SelectGroup>
                <SelectItem
                  value="active"
                  className="hover:bg-[#131320] p-3 border-b border-[#2C2C3A] cursor-pointer"
                >
                  Active
                </SelectItem>
                <SelectItem
                  value="inactive"
                  className="hover:bg-[#131320] p-3 cursor-pointer"
                >
                  Inactive
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Date Range */}
          <div className="w-full sm:w-48 md:w-56 lg:w-52">
            <DatePicker
              selected={startDate} // Required, but only for default display
              onChange={handleChange} // Type-safe callback
              startDate={startDate}
              endDate={endDate}
              selectsRange
              placeholderText="Select Date Range"
              className="w-full h-12 px-3 rounded-[15px] border border-[rgba(226,232,240,0.3)] bg-[#17171A] text-gray-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackCatalog;
