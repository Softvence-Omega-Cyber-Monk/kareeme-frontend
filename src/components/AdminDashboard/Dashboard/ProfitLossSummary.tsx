import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

// Sample data
const data = [
  { name: "Jan", profit: 400, loss: 240 },
  { name: "Feb", profit: 300, loss: 200 },
  { name: "Mar", profit: 500, loss: 150 },
  { name: "Apr", profit: 700, loss: 300 },
  { name: "May", profit: 600, loss: 250 },
  { name: "Jun", profit: 800, loss: 350 },
  { name: "Jul", profit: 900, loss: 400 },
];

const formatYAxis = (tick: number) => `${tick / 1000}k`;

const ProfitLossSummary = () => {
  const [_selectedFilter, setSelectedFilter] = useState("Last 6 Months");

  return (
    <div className="w-full h-full p-6 bg-[#0C1D21] rounded-xl shadow-md space-y-6">
      {/* Header with title and filter */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <h1 className="text-[24px] leading-[130%] text-white">
          Profit & Loss Summary
        </h1>

        {/* Filter Dropdown */}
        <div className="w-full sm:w-[250px] md:w-[221px]">
          <Select
            onValueChange={(value) => setSelectedFilter(value)}
            defaultValue="Last 6 Months"
          >
            <SelectTrigger className="w-full h-10 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base text-white">
              <SelectValue />
            </SelectTrigger>

            <SelectContent className="border-none bg-[#17171A] text-white font-sans shadow-lg rounded-lg">
              <SelectGroup>
                <SelectItem
                  value="last_7_days"
                  className="hover:bg-[#131320] p-2 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 7 Days
                </SelectItem>
                <SelectItem
                  value="last_30_days"
                  className="hover:bg-[#131320] p-2 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 30 Days
                </SelectItem>
                <SelectItem
                  value="last_6_months"
                  className="hover:bg-[#131320] p-2 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 6 Months
                </SelectItem>
                <SelectItem
                  value="Last 6 Months"
                  className="hover:bg-[#131320] p-2 cursor-pointer border-b border-[#2C2C3A]"
                >
                  Last 6 Months
                </SelectItem>
                <SelectItem
                  value="this_year"
                  className="hover:bg-[#131320] p-2 cursor-pointer"
                >
                  This Year
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Combined Profit & Loss Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} barGap={20}>
          {/* Profit Bar */}
          <Bar dataKey="profit" fill="#3A5CFF" barSize={30}>
            <LabelList dataKey="profit" position="top" fill="#fff" />
          </Bar>

          {/* Loss Bar */}
          <Bar dataKey="loss" fill="#D31301" barSize={30}>
            <LabelList dataKey="loss" position="top" fill="#fff" />
          </Bar>

          <CartesianGrid stroke="#2C3E50" strokeDasharray="5 5" />
          <XAxis dataKey="name" stroke="#969696" />
          <YAxis tickFormatter={formatYAxis} stroke="#969696" />
          <Tooltip
            contentStyle={{
              backgroundColor: "#1E293B",
              borderRadius: "8px",
              border: "none",
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#fff" }}
          />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ProfitLossSummary;
