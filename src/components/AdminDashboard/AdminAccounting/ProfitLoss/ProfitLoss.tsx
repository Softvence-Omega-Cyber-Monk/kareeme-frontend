import ProfitLossSummary from "../../Dashboard/ProfitLossSummary";
import IcomeExpenssMonth from "./IcomeExpenssMonth";
import ProfitLossCard from "./ProfitLossCard";
import ProfitLossHead from "./ProfitLossHead";

const ProfitLoss = () => {
  return (
    <div className="space-y-6">
      <ProfitLossHead />
      <ProfitLossCard />
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="w-full lg:w-1/2">
          <ProfitLossSummary />
        </div>
        <div className="w-full lg:w-1/2">
          <ProfitLossSummary />
        </div>
      </div>
      <div>
        <IcomeExpenssMonth />
      </div>
    </div>
  );
};

export default ProfitLoss;
