import IcomeExpenssMonth from "./IcomeExpenssMonth";
import { IncomeProfitLossTable } from "./IncomeProfitLossTable";
import LossSummary from "./LossSummary";

import ProfitLossHead from "./ProfitLossHead";
import ProfitSummary from "./ProfitSummary";

const ProfitLoss = () => {
  return (
    <div className="space-y-6">
      <ProfitLossHead />
    
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
