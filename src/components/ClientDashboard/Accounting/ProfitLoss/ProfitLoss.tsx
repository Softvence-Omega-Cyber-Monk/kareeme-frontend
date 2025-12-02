import { Express } from "./Express";
import { Income } from "./Income";
import IncomeExpensesChart from "./IncomeExpensesChart";
import ProfitCard from "./ProfitCard";

const ProfitLoss = () => {
  return (
    <div className=" space-y-9">
      <ProfitCard />
      <IncomeExpensesChart />
      {/* Income Express aprt */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-2 w-full">
          <Income />
        </div>
        <div className="w-full xl:col-span-2">
          <Express />
        </div>
      </div>
    </div>
  );
};

export default ProfitLoss;
