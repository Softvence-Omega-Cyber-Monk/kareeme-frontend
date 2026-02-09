import EarningsByType from "./EarningsByType";
import EstimatedEarning from "./EstimatedEarning";
import ReuserableCommonPart from "./Shared/ReuserableCommonPart";
import iconapple from "@/assets/icons/AppleMusic.svg"
import { PlatformOverviewData } from "@/redux/features/analytics/analytics.type";

const AppleMusicSection = ({ data }: { data?: PlatformOverviewData }) => {
  if (!data) return null;

  return (
    <ReuserableCommonPart
      title="Apple Music"
      icon={<img src={iconapple} className="text-[#FF0000] w-10 h-6" alt="" />}
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

export default AppleMusicSection;
