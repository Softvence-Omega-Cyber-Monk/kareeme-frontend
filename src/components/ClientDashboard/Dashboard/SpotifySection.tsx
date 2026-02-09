import { ImSpotify } from "react-icons/im";
import EarningsByType from "./EarningsByType";
import EstimatedEarning from "./EstimatedEarning";
import ReuserableCommonPart from "./Shared/ReuserableCommonPart";
import { PlatformOverviewData } from "@/redux/features/analytics/analytics.type";

const SpotifySection = ({ data }: { data?: PlatformOverviewData }) => {
  if (!data) return null;

  return (
    <ReuserableCommonPart
      title="Spotify"
      icon={<ImSpotify className="text-[#1ED760] w-10 h-6" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-3 gap-5">
        <div className="w-full space-y-6">
          <EarningsByType data={data.earningsByType} />
        </div>
        <div className="lg:col-span-2 w-full">
          <EstimatedEarning 
            data={data.estimatedEarnings} 
            totalViews={data.totalViews} 
            totalEarnings={data.totalEarnings} 
          />
        </div>
      </div>
    </ReuserableCommonPart>
  );
};

export default SpotifySection;
