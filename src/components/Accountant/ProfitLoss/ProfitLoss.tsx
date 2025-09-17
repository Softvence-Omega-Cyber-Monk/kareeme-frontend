import IcomeExpenssMonth from "@/components/AdminDashboard/AdminAccounting/ProfitLoss/IcomeExpenssMonth";
import { IncomeProfitLossTable } from "@/components/AdminDashboard/AdminAccounting/ProfitLoss/IncomeProfitLossTable";
import LossSummary from "@/components/AdminDashboard/AdminAccounting/ProfitLoss/LossSummary";
import ProfitSummary from "@/components/AdminDashboard/AdminAccounting/ProfitLoss/ProfitSummary";

const ProfitLoss = () => {
  return (
    <div className=" space-y-8">
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="w-full lg:w-1/2">
          <ProfitSummary />
        </div>
        <div className="w-full lg:w-1/2">
          <LossSummary />
        </div>
      </div>
      <div>
        <IcomeExpenssMonth />
      </div>
      <div>
        <IncomeProfitLossTable />
      </div>
    </div>
  );
};

export default ProfitLoss;
