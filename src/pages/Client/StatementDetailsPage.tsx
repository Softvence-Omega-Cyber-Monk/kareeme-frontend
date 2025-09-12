import DetailsTab from "@/components/ClientDashboard/Accounting/Statement/DetailsTab";
import StatementDetails from "@/components/ClientDashboard/Accounting/Statement/StatementDetails";

const StatementDetailsPage = () => {
  return (
    <div className="space-y-9">
      <StatementDetails />
      <DetailsTab />
    </div>
  );
};

export default StatementDetailsPage;
