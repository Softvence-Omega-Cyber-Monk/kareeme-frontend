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
} from "recharts";
import { MonthlyProfitLossData } from "@/redux/features/accountant/accountant.type";

interface ProfitSummaryProps {
  monthlyData: MonthlyProfitLossData[];
}

// Format Y-axis to show values in k
const formatYAxis = (tick: number) => `${tick / 1000}k`;

const ProfitSummary = ({ monthlyData }: ProfitSummaryProps) => {
  const [hovered, setHovered] = useState(false);

  // Calculate profit from income - expense
  const profitData = monthlyData.map((item) => ({
    name: item.month,
    profit: item.income - item.expense,
  }));

  return (
    <div className="w-full h-full p-6 bg-[#0C1D21] rounded-xl shadow-md space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] leading-[130%] text-white">
          Profit Summary
        </h1>
      </div>

      {/* Profit Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={profitData} barGap={20}>
          <Bar
            dataKey="profit"
            barSize={30}
            fill={hovered ? "#5AFD7A" : "#1FCD5A"}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          />
          <CartesianGrid stroke="#2C3E50" strokeDasharray="5 5" />
          <XAxis dataKey="name" stroke="#969696" />
          <YAxis tickFormatter={formatYAxis} stroke="#969696" />
          <Tooltip
            cursor={{ fill: "rgba(255, 255, 255, 0.1)" }}
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

export default ProfitSummary;
