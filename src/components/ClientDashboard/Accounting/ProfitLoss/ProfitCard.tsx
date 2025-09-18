import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ProfitCard = () => {
  const statusData = [
    { title: "Total Income", amount: "$1,061.16" },
    { title: "Total Expenses", amount: "$27,183.94" },
    { title: "Net Profit / Loss", amount: "$-26,122.78" },
  ];

  const getAmountColor = (item: (typeof statusData)[0]) => {
    switch (item.title) {
      case "Total Income":
        return "text-[#01D449]";
      case "Total Expenses":
        return "text-[#D31301]";
      case "Net Profit / Loss":
        const value = parseFloat(item.amount.replace(/[$,]/g, ""));
        return value >= 0 ? "text-[#E2C001]" : "text-[#E2C001]";
      case "Neat Earning":
        return "text-[#E2C001]";
      default:
        return "text-white";
    }
  };

  return (
    <div className="space-y-9">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-base font-sans text-gray-300">Accounting</h1>
          <div className="flex items-center">
            <h1 className="text-2xl font-semibold font-sans text-white">
              Profit & Loss
            </h1>
          </div>
        </div>

        {/* Year Selector */}
        <Select>
          <SelectTrigger className="w-full sm:w-[200px] md:w-[240px] h-12 rounded-[15px] border border-[rgba(226,232,240,0.30)] bg-[#17171A] shadow-sm hover:border-[#1C1D28] focus:border-blue-500 focus:ring-1 focus:ring-blue-500 cursor-pointer text-sm md:text-base">
            <SelectValue placeholder="2024" className="text-gray-300" />
          </SelectTrigger>

          <SelectContent className="border-none bg-[#17171A] text-white font-sans shadow-lg rounded-lg">
            <SelectGroup>
              <SelectItem
                value="2025"
                className="hover:bg-[#131320] p-3 cursor-pointer  border-b border-[#2C2C3A]"
              >
                2025
              </SelectItem>
              <SelectItem
                value="2026"
                className="hover:bg-[#131320] p-3 cursor-pointer   border-b border-[#2C2C3A]"
              >
                2026
              </SelectItem>
              <SelectItem
                value="2027"
                className="hover:bg-[#131320] p-3 cursor-pointer   border-b border-[#2C2C3A]"
              >
                2027
              </SelectItem>
              <SelectItem
                value="2028"
                className="hover:bg-[#131320] p-3 cursor-pointer   border-b border-[#2C2C3A]"
              >
                2028
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-5">
        {statusData.map((item) => (
          <div
            key={item.title}
            className="w-full h-[140px] p-5 sm:p-6 bg-[#0D1A23] rounded-[16px] border border-[#323943] flex flex-col justify-between"
          >
            {/* Title */}
            <h2 className="text-white text-[18px] leading-[160%] font-[400] font-poppins">
              {item.title}
            </h2>

            {/* Amount */}
            <h2
              className={`text-xl sm:text-2xl md:text-3xl 2xl:text-4xl font-semibold font-Robot tracking-[-0.68px] ${getAmountColor(
                item
              )}`}
            >
              {item.amount}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfitCard;
