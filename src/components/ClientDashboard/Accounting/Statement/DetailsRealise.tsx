// import RealiseTable from "./Shared/RealiseTable";
import { ReleasesDetailsTable } from "./Shared/ReleasesDetailsTable";
import ReleasesStatementCard from "./Shared/ReleasesStatementCard";
import ReleasesTable from "./Shared/ReleasesTable";

const DetailsRealise = () => {
  return (
    <div className="space-y-6">
      <div className=" space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-5">
          <div className="xl:col-span-3 w-full">
            <ReleasesTable />
          </div>
          <div className="w-full xl:col-span-1 space-y-6">
            <ReleasesStatementCard />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          <ReleasesDetailsTable />
        </div>
      </div>
    </div>
  );
};

export default DetailsRealise;
