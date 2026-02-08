import { useGetAccountProfitAndLossQuery } from "@/redux/features/accounting/accountingApi";
import { Express } from "./Express";
import { Income } from "./Income";
import IncomeExpensesChart from "./IncomeExpensesChart";
import ProfitCard from "./ProfitCard";
import { useState } from "react";

const ProfitLoss = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const { data, isLoading } = useGetAccountProfitAndLossQuery({
    year: year.toString(),
  });
  if (isLoading || !data?.data) {
    return <div>loading</div>;
  }
  return (
    <div className=" space-y-9">
      <ProfitCard data={data?.data} year={year} setYear={setYear} />
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
