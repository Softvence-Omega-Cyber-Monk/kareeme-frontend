import DistributorDashboardCard from "@/components/DistributorDashboard/DistributorDashboardCard";
import { DistributorRecentActivity } from "@/components/DistributorDashboard/DistributorRecentActivity";

const DistributorDashboardPage = () => {
  return (
    <div>
      <DistributorDashboardCard />
      <DistributorRecentActivity />
    </div>
  );
};

export default DistributorDashboardPage;
