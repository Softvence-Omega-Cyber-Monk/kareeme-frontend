// import { DashboardActivity } from "@/components/DistributorDashboard/Dashboard/DashboardActivity";
import DistributorDashboardCard from "@/components/DistributorDashboard/DistributorDashboardCard";
import { DistributorRecentActivity } from "@/components/DistributorDashboard/DistributorRecentActivity";

const DistributorDashboardPage = () => {
  return (
    <div>
      <DistributorDashboardCard />
      <DistributorRecentActivity />
      {/* <DashboardActivity /> */}
    </div>
  );
};

export default DistributorDashboardPage;
