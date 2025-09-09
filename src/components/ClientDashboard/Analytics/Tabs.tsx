import { useState } from "react";
import CommonPart from "../Dashboard/CommonPart";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="w-full  mx-auto">
      {/* Tab Buttons */}
      <div className="flex  border-gray-300 space-x-2">
        {["Overview", "Assets", "Claims", "Geo Trends"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium  cursor-pointer  ${
              activeTab === tab
                ? "text-blue-600 bg-[#0C272F] rounded-2xl"
                : "text-white text-base font-sans border-transparent hover:text-blue-600 hover:bg-[#0C272F] rounded-2xl"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="pt-8">
        {activeTab === "Overview" && (
          <div>
            <CommonPart />
          </div>
        )}
        {activeTab === "Assets" && <div>Assets Content Here</div>}
        {activeTab === "Claims" && <div>Claims Content Here</div>}
      </div>
    </div>
  );
};

export default Tabs;
