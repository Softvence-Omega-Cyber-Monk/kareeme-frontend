import React, { useState } from "react";
import {
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

import incomicon from "@/assets/icons/income1.svg";
import expressicon from "@/assets/icons/express1.svg";

type RevenueData = {
  month: string;
  revenue: number;
  views: number;
};

// Sample data
const yearlyData: RevenueData[] = [
  { month: "Jan", revenue: 10000, views: 7000 },
  { month: "Feb", revenue: 8000, views: 6000 },
  { month: "Mar", revenue: 4000, views: 9000 },
  { month: "Apr", revenue: 10000, views: 8000 },
  { month: "May", revenue: 12000, views: 15000 },
  { month: "Jun", revenue: 7000, views: 12000 },
  { month: "Jul", revenue: 15000, views: 10000 },
  { month: "Aug", revenue: 18000, views: 22000 },
  { month: "Sep", revenue: 13000, views: 17000 },
  { month: "Oct", revenue: 20000, views: 15000 },
  { month: "Nov", revenue: 10000, views: 14000 },
  { month: "Dec", revenue: 16000, views: 18000 },
];

const IcomeExpenssMonth: React.FC = () => {
  const [timeRange, setTimeRange] = useState<"Jan-Jun" | "Jul-Dec" | "Year">(
    "Year"
  );
  const [filteredData, setFilteredData] = useState<RevenueData[]>(yearlyData);

  // Handle time range change
  const handleTimeChange = (value: string) => {
    setTimeRange(value as any);

    switch (value) {
      case "Jan-Jun":
        setFilteredData(yearlyData.slice(0, 6));
        break;
      case "Jul-Dec":
        setFilteredData(yearlyData.slice(6, 12));
        break;
      default:
        setFilteredData(yearlyData);
        break;
    }
  };

  const formatTooltip = (value: number, name: string) => {
    if (name === "revenue") return [`$${value.toLocaleString()}`, "Revenue"];
    return [
      value.toLocaleString(),
      name.charAt(0).toUpperCase() + name.slice(1),
    ];
  };

  return (
    <div className="bg-[#0C2322] rounded-xl shadow-md p-8">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-medium ">Income vs Expenses By Month</h1>

        <div className="flex gap-6 text-white text-base">
          <div className="flex items-center gap-4">
            <img src={incomicon} className="w-6 h-6" alt="Income" />
            <p className="text-[#01D449] font-medium">Income</p>
          </div>
          <div className="flex items-center gap-4">
            <img src={expressicon} className="w-6 h-6" alt="Expenses" />
            <p className="text-[#D31301] font-medium">Expenses</p>
          </div>
        </div>

        {/* Time Range Dropdown */}
        <Select value={timeRange} onValueChange={handleTimeChange}>
          <SelectTrigger className="w-full sm:w-[200px] md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
            <SelectValue placeholder="Select Range" className="text-gray-300" />
          </SelectTrigger>

          <SelectContent className="border-none bg-[#17171A] text-white font-sans shadow-lg rounded-lg">
            <SelectGroup>
              <SelectItem
                value="Jan-Jun"
                className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
              >
                Jan - Jun
              </SelectItem>
              <SelectItem
                value="Jul-Dec"
                className="hover:bg-[#131320] p-3 cursor-pointer border-b border-[#2C2C3A]"
              >
                Jul - Dec
              </SelectItem>
              <SelectItem
                value="Year"
                className="hover:bg-[#131320] p-3 cursor-pointer"
              >
                Full Year
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Chart */}
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={filteredData}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#1f2937"
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#969696" }}
              padding={{ left: 20 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#969696" }}
              tickFormatter={(value) => `$${value / 1000}k`}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0,0,0,0.1)",
                border: "none",
              }}
              formatter={formatTooltip}
              labelFormatter={(label) => `Month: ${label}`}
            />

            <Area
              type="monotone"
              dataKey="views"
              stroke="#3A5CFF"
              fill="url(#colorViews)"
              strokeWidth={2}
              name="Views"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#01D449"
              fill="url(#colorRevenue)"
              strokeWidth={2}
              name="Earnings"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IcomeExpenssMonth;
