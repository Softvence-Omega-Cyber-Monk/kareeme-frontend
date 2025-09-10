import EarningsByType from "./EarningsByType";
import EstimatedEarning from "./EstimatedEarning";
import ReuserableCommonPart from "./Shared/ReuserableCommonPart";
import iconsoundcloud from "@/assets/icons/SoundCloud.svg"



const SoundCloudSection = () => {
  return (
    <ReuserableCommonPart
      title="SoundCloud"

       icon={<img src={iconsoundcloud} className="text-[#FF0000] w-10 h-6" alt="" />}
    //   icon={<FaYoutube className="text-[#FF0000] w-10 h-6" />}
    >
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 2xl:grid-cols-3 gap-5">
        <div className="w-full space-y-6">
          <EarningsByType />
        </div>
        <div className="lg:col-span-2 w-full">
          <EstimatedEarning />
        </div>
      </div>
    </ReuserableCommonPart>
  );
};

export default SoundCloudSection;
