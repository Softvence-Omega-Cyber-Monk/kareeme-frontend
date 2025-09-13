import DashboardCard from "./DashboardCard";
import ProfitLossSummary from "./ProfitLossSummary";
import RecentActivity from "./RecentActivity";
import RevenueOverview from "./RevenueOverview";

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <DashboardCard />
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="w-full lg:w-1/2">
          <RevenueOverview />
        </div>
        <div className="w-full lg:w-1/2">
          <ProfitLossSummary />
        </div>
      </div>
      <div>
        <RecentActivity />
      </div>
    </div>
  );
};

export default AdminDashboard;
