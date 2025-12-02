import { AssetsDetailsTable } from "./Shared/AssetsDetailsTable";
import AssetsStatementCard from "./Shared/AssetsStatementCard";
import AssetsTable from "./Shared/AssetsTable";

const DetailsAsserts = () => {
  return (
    <div>
      <div className=" space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-3 w-full">
            <AssetsTable />
          </div>
          <div className="w-full xl:col-span-1 space-y-6">
            <AssetsStatementCard />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          <AssetsDetailsTable />
        </div>
      </div>
    </div>
  );
};

export default DetailsAsserts;
