import React from "react";
import incomicon from "@/assets/icons/income1.svg";
import expressicon from "@/assets/icons/express1.svg";
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

type RevenueData = {
  month: string;
  week?: string;
  revenue: number;
  expenses: number;
};

// Yearly data (by month)
const yearlyData: RevenueData[] = [
  { month: "1", revenue: 7000, expenses: 4000 },
  { month: "2", revenue: 9500, expenses: 6000 },
  { month: "3", revenue: 12000, expenses: 8500 },
  { month: "4", revenue: 18000, expenses: 12000 },
  { month: "5", revenue: 22000, expenses: 15000 },
  { month: "6", revenue: 28000, expenses: 18000 },
  { month: "7", revenue: 35000, expenses: 22000 },
  { month: "8", revenue: 30000, expenses: 20000 },
  { month: "9", revenue: 26000, expenses: 17000 },
  { month: "10", revenue: 20000, expenses: 12000 },
  { month: "11", revenue: 15000, expenses: 9000 },
  { month: "12", revenue: 10000, expenses: 6000 },
  { month: "13", revenue: 11000, expenses: 7000 },
  { month: "14", revenue: 12000, expenses: 8000 },
  { month: "15", revenue: 14000, expenses: 9500 },
  { month: "16", revenue: 16000, expenses: 11000 },
  { month: "17", revenue: 18000, expenses: 12500 },
  { month: "18", revenue: 20000, expenses: 14000 },
  { month: "19", revenue: 22000, expenses: 16000 },
  { month: "20", revenue: 24000, expenses: 18000 },
  { month: "21", revenue: 26000, expenses: 20000 },
  { month: "22", revenue: 28000, expenses: 22000 },
  { month: "23", revenue: 30000, expenses: 24000 },
  { month: "24", revenue: 32000, expenses: 26000 },
  { month: "25", revenue: 34000, expenses: 28000 },
  { month: "26", revenue: 36000, expenses: 30000 },
  { month: "27", revenue: 38000, expenses: 32000 },
  { month: "28", revenue: 40000, expenses: 34000 },
  { month: "29", revenue: 42000, expenses: 30000 },
  { month: "30", revenue: 45000, expenses: 30000 },
];

const IncomeExpensesChart = () => {
  const [timeRange /* setTimeRange */] = React.useState<
    "week" | "month" | "year"
  >("year");

  const getData = () => {
    switch (timeRange) {
      case "week":
        return []; // Add weeklyData if needed
      case "month":
        return []; // Add monthlyData if needed
      case "year":
      default:
        return yearlyData;
    }
  };

  const getXAxisKey = () => {
    switch (timeRange) {
      case "week":
      case "month":
        return "week";
      case "year":
      default:
        return "month";
    }
  };

  const formatTooltip = (value: number, name: string) => {
    return [
      `$${value.toLocaleString()}`,
      name.charAt(0).toUpperCase() + name.slice(1),
    ];
  };

  return (
    <div className="bg-[#0E2323] rounded-xl shadow-md p-8">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <h1 className="text-2xl font-medium text-white">Income vs Expenses</h1>

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

        <Select>
          <SelectTrigger className="w-full sm:w-[200px] md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
            <SelectValue placeholder="June 2024" className="text-gray-300" />
          </SelectTrigger>

          <SelectContent className="border-none bg-[#17171A] text-white font-sans shadow-lg rounded-lg">
            <SelectGroup>
              <SelectItem
                value="July"
                className="hover:bg-[#131320] p-3 cursor-pointer  border-b border-[#2C2C3A]"
              >
                July 2025
              </SelectItem>
              <SelectItem
                value="Aug"
                className="hover:bg-[#131320] p-3 cursor-pointer   border-b border-[#2C2C3A]"
              >
                Aug 2026
              </SelectItem>
              <SelectItem
                value="Sep"
                className="hover:bg-[#131320] p-3 cursor-pointer   border-b border-[#2C2C3A]"
              >
                Sep 2027
              </SelectItem>
              <SelectItem
                value="Oct"
                className="hover:bg-[#131320] p-3 cursor-pointer   border-b border-[#2C2C3A]"
              >
                Oct 2028
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={getData()}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#01D449" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#01D449" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#D31301" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#D31301" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey={getXAxisKey()}
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#969696" }}
              padding={{ left: 20 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#969696" }}
              tickFormatter={(value) =>
                timeRange === "year" ? `$${value / 1000}k` : `$${value}`
              }
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                border: "none",
              }}
              formatter={formatTooltip}
              labelFormatter={(label) =>
                `${
                  timeRange === "year"
                    ? "Month"
                    : timeRange === "month"
                    ? "Week"
                    : "Day"
                }: ${label}`
              }
            />

            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#D31301"
              fill="url(#colorExpenses)"
              strokeWidth={2}
              name="Expenses"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#01D449"
              fill="url(#colorRevenue)"
              strokeWidth={2}
              name="Income"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default IncomeExpensesChart;
