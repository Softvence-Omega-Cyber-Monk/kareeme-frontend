import RealiseTable from "./RealiseTable";
import { ContentAccountTable } from "./Shared/ContentAccountTable";
import StatementCard from "./Shared/StatementCard";

const DetailsRealise = () => {
  return (
    <div>
      <div className=" space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-3 w-full">
            <RealiseTable />
          </div>
          <div className="w-full xl:col-span-1 space-y-6">
            <StatementCard />
          </div>
        </div>
      </div>

      <div>
        <ContentAccountTable />
      </div>
    </div>
  );
};

export default DetailsRealise;
