import DistributorDashboardCard from "@/components/DistributorDashboard/DistributorDashboardCard";
import { DistributorRecentActivity } from "@/components/DistributorDashboard/DistributorRecentActivity";


const DistributorDashboardPage = () => {


  return (
    <div>
     <DistributorDashboardCard></DistributorDashboardCard>
     <DistributorRecentActivity></DistributorRecentActivity>
    </div>
  );
};

export default DistributorDashboardPage;
