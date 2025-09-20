import { TrackDetailsTable } from "./Shared/TrackDetailsTable";
import TrackStatementCard from "./Shared/TrackStatementCard";
import TrackTable from "./Shared/TrackTable";

const DetailsTracks = () => {
  return (
    <div>
      <div className=" space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4  gap-5">
          <div className="2xl:col-span-3 w-full">
            <TrackTable />
          </div>
          <div className="w-full 2xl:col-span-1 space-y-6">
            <TrackStatementCard />
          </div>
        </div>
      </div>

      <div>
        <TrackDetailsTable />
      </div>
    </div>
  );
};

export default DetailsTracks;
