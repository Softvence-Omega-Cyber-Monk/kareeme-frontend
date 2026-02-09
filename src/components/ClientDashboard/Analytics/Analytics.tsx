import Tabs from "./Tabs";
import Youtube from "./Youtube/Youtube";

const Analytics = ({ platform = "YouTube" }: { platform?: string }) => {
  return (
    <div className="space-y-9">
      <Youtube platform={platform} />
      <Tabs platform={platform} />
    </div>
  );
};

export default Analytics;
