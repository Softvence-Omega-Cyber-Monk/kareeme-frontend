import { useState } from "react";
import { FiUpload } from "react-icons/fi";
import StatementTable from "./StatemenmtTable";

const StatementComponent = () => {
  const [selectedYear, setSelectedYear] = useState("2025"); // default year

  const yearData = [
    { year: "2025", amount: "$999.27 USD" },
    { year: "2024", amount: "$1,249.15 USD" },
    { year: "2023", amount: "$879.45 USD" },
    { year: "2022", amount: "$799.99 USD" },
  ];

  return (
    <div className="space-y-9">
      {/* Header */}

      {/* Year Selector + Upload Button */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
        {/* Year Selector */}
        <div className="w-full pb-2 grid grid-cols-2 gap-3 sm:flex sm:overflow-x-auto sm:gap-3">
          {yearData.map((item) => (
            <div
              key={item.year}
              onClick={() => setSelectedYear(item.year)}
              className={`flex px-3 py-3 justify-center items-center rounded-[12px] 
          border cursor-pointer transition
          ${
            selectedYear === item.year
              ? "border-[#2941B5] bg-[#3A5CFF] text-white"
              : "border-[#636E6B] bg-[#0D2B24] text-white"
          }`}
            >
              <div className="text-center">
                <h2 className="text-xl font-sans">{item.year}</h2>
                <p className="text-sm">{item.amount}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upload Button */}
        {/* Upload Button */}
        <div className="w-full md:w-auto">
          <button
            className="w-full md:w-[240px] h-12 flex items-center justify-center gap-2
               rounded-[15px] border border-[rgba(226,232,240,0.30)]
               bg-[#17171A] shadow-sm
               hover:border-[#3A5CFF] hover:bg-[#1E1E22]
               focus:border-[#3A5CFF] focus:ring-2 focus:ring-[#3A5CFF]/50
               transition-all duration-200
               cursor-pointer"
          >
            <FiUpload size={18} />
            Upload Report
          </button>
        </div>
      </div>

      {/* Table (Filtered by Year) */}
      <StatementTable selectedYear={selectedYear} />
    </div>
  );
};

export default StatementComponent;
