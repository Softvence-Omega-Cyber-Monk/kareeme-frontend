import { useState } from "react";

import DetailsRealise from "./DetailsRealise";
import DetailsTracks from "./DetailsTracks";
import DetailsAsserts from "./DetailsAsserts";
import DetailsDSPs from "./DetailsDSPs";
import DetailsTerritories from "./DetailsTerritories";

const DetailsTab = () => {
  const [activeTab, setActiveTab] = useState("Releases");

  return (
    <div className="w-full  mx-auto">
      {/* Tab Buttons */}
      <div className="flex  border-gray-300 space-x-2">
        {["Releases", "Tracks", "Assets", "DSPs", "Territories"].map((tab) => (
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
        {activeTab === "Releases" && (
          <div>
            <DetailsRealise />
          </div>
        )}
        {activeTab === "Tracks" && (
          <div>
            <DetailsTracks />
          </div>
        )}
        {activeTab === "Assets" && (
          <div>
            <DetailsAsserts />
          </div>
        )}
        {activeTab === "DSPs" && (
          <div>
            <DetailsDSPs />
          </div>
        )}
        {activeTab === "Territories" && (
          <div>
            <DetailsTerritories />
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsTab;
