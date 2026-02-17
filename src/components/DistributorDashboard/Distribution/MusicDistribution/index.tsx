import { useState, useRef } from "react";
import { useGetReleasesQuery } from "@/redux/features/releaseAdminDistributor/releaseAdminDistributorApi";
import MusicDistributionError from "./Error";
import MusicDistributionLoadingSkeleton from "./Loading";
import PendingItem from "./Item/PendingItem";
import DistributedItem from "./Item/DistributedItem";
import FailedItem from "./Item/FailedItem";
import useControlData from "@/contexts/control/hooks/useControlData";
import DetailModal from "./DetailModal";
import type { JSX } from "react";
import type { Release, ReleasesMetadata } from "@/redux/features/releaseAdminDistributor/releaseAdminDistributor.type"

export default function MusicDistribution(): JSX.Element{
  const { isOpen: isConfirmDistributionModalOpen } = useControlData()
  const containerRef = useRef<HTMLDivElement>(null);

  const [page, setPage] = useState(1);
  const { data, isLoading, isError, isFetching } = useGetReleasesQuery({  page, limit: 10 });

  const metaData: ReleasesMetadata | undefined = data?.metadata
  const handleLoadMore = () => {
    if (!metaData) return;
    if (metaData?.page < metaData?.totalPage) {
      setPage((prev) => prev + 1);
    }
  };

if(isError) return <MusicDistributionError/>

  return (
    <div>
      <div ref={containerRef} className="text-white space-y-6"  >
        {
          Array.isArray(data?.data) && data.data.length > 0 &&
            (data.data as Release[]).map((item: Release) => {
              switch (item.status) {

                case "Approved":
                  return <DistributedItem key={item.releaseId} data={item} />;

                case "Draft":
                  return <PendingItem key={item.releaseId} data={item} />;

                case "Declined":
                  return <FailedItem key={item.releaseId} data={item} />;

                default:
                  return null;
              }

            })
        }
        { (isLoading || isFetching) && <MusicDistributionLoadingSkeleton/> }
        { isError && <MusicDistributionError/>}
        {
          metaData && (metaData.page < metaData.totalPage)
            && <div className="mx-auto w-fit">
                  <button onClick={handleLoadMore} className=" text-blue-500 hover:underline cursor-pointer text-center font-medium">
                      Load More → 
                  </button>
          </div>
        }
      </div>

      {/* ConfirmDistribution modal */}
      { isConfirmDistributionModalOpen  && <DetailModal/> }
    </div>
  )
};

