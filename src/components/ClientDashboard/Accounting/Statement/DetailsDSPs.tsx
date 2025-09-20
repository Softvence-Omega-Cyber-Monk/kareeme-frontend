import { DSPsDetailsTable } from "./Shared/DSPsDetailsTable";
import DSPsStatementCard from "./Shared/DSPsStatementCard";
import DSPsTable from "./Shared/DSPsTable";

const DetailsDSPs = () => {
  return (
    <div>
      <div className=" space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-3 w-full">
            <DSPsTable />
          </div>
          <div className="w-full xl:col-span-1 space-y-6">
            <DSPsStatementCard />
          </div>
        </div>
      </div>

      <div>
        <DSPsDetailsTable />
      </div>
    </div>
  );
};

export default DetailsDSPs;
