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

// Full year monthly loss data
const monthlyData = [
  { name: "Jan", loss: 240 },
  { name: "Feb", loss: 200 },
  { name: "Mar", loss: 150 },
  { name: "Apr", loss: 300 },
  { name: "May", loss: 250 },
  { name: "Jun", loss: 350 },
  { name: "Jul", loss: 400 },
  { name: "Aug", loss: 370 },
  { name: "Sep", loss: 320 },
  { name: "Oct", loss: 280 },
  { name: "Nov", loss: 260 },
  { name: "Dec", loss: 300 },
];

// Format Y-axis to display in k
const formatYAxis = (tick: number) => `${tick / 1000}k`;

const LossSummary = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-full h-full p-6 bg-[#0C1D21] rounded-xl shadow-md space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-[24px] leading-[130%] text-white">Loss Summary</h1>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={monthlyData} barGap={20}>
          <Bar
            dataKey="loss"
            barSize={30}
            fill={hovered ? "#FF7B7B" : "#D31301"}
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

export default LossSummary;
