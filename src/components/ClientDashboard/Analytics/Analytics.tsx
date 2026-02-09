import { useState } from "react";
import Tabs from "./Tabs";
import Youtube from "./Youtube/Youtube";

const Analytics = ({ platform = "YouTube" }: { platform?: string }) => {
  const [period, setPeriod] = useState("last_1_year");

  return (
    <div className="space-y-9">
      <Youtube platform={platform} period={period} setPeriod={setPeriod} />
      <Tabs platform={platform} period={period} />
    </div>
  );
};

export default Analytics;
