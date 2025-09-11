import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import search from "../../assets/icons/search.png";
import calender from "../../assets/icons/calender.png";
import light from "../../assets/icons/Frame 1321317601 2.png";
import people from "../../assets/icons/people.png";

const DistributorDashboardCard = () => {
  const metrics = [
    {
      icon: search,
      label: "Submissions to Review",
      value: "12",
    },
    {
      icon: light,
      label: "Releases to Distribute",
      value: "7",
    },
    {
      icon: people,
      label: "New Clients (Last 30 Days)",
      value: "3",
    },
    {
      icon: calender,
      label: "Live Releases",
      value: "45",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-0 text-white">
      <div>
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4 sm:gap-0">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-white mb-1">
              Distribution Dashboard
            </h1>
            <p className="text-gray-400 text-sm sm:text-base">
              Overview of all distribution activities
            </p>
          </div>
          <Button className="bg-[#3a5cff] text-white px-4 py-2 rounded-[15px] flex items-center gap-2 w-full sm:w-auto justify-center">
            Add New Client <span className="text-lg">+</span>
          </Button>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <Card
              key={index}
              className="border border-[#c6c6c630] p-4 sm:p-6 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gray-700 rounded-lg flex-shrink-0">
                  <img src={metric.icon} alt={metric.label} className="w-7 h-7" />
                </div>
                <span className="text-gray-300 text-sm font-medium">
                  {metric.label}
                </span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white">
                {metric.value}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DistributorDashboardCard;
