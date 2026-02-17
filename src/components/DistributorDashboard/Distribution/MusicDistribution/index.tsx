import { useState, useRef } from "react";
import type { JSX } from "react";
// import cancel from "@/assets/icons/cancel.svg";
// import ConfirmDistribution from "../ConfirmDistribution";
import { useGetSubmissionsQuery, useLazyGetMoreSubmissionsQuery } from "@/redux/features/distribution/distributionApi";
import MusicDistributionError from "./Error";
import MusicDistributionLoadingSkeleton from "./Loading";
import PendingItem from "./Item/PendingItem";
import DistributedItem from "./Item/DistributedItem";
import FailedItem from "./Item/FailedItem";
import SubmissionItemType from "./Item/Type";
import useControlData from "@/contexts/control/hooks/useControlData";
import DetailModal from "./DetailModal";
// import useSearchFilterData from "@/contexts/searchFilter/hooks/useSearchFilterData";


export default function MusicDistribution(): JSX.Element{
  // const { data: { isSubmissionsModalOpen } } = useControl()
  const { isOpen: isConfirmDistributionModalOpen } = useControlData()
  // const { closeModal } = useControlDispatch()

  const containerRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [status]= useState(null)

  // const { searchText, releaseRange, 
  //           // status 
  //         } = useSearchFilterData()
  const { data, isLoading, isError } = useGetSubmissionsQuery({ page: 1, limit: 10,
                                                          ...(status ? { status } : {}), });

  const [getMoreSubmissions, {  isLoading: isMoreDataLoading, 
                                  isError: isMoreDataError  }] = useLazyGetMoreSubmissionsQuery();
  
  const metaData = data?.metadata
  // console.log(isDetailModalOpen)

  const handleLoadMore = () => {
    if (data?.metadata) {
      getMoreSubmissions({ page: data?.metadata?.page || 0 + 1 , limit: 10 });
    }
  };

if(isError) return <MusicDistributionError/>

  return (
    <div>
      <div ref={containerRef} className="text-white space-y-6"  >
         {
            Array.isArray(data?.data) && data?.data?.length > 0 && 
              data?.data?.map((item, index) => {
              switch (item.status) {
                case "Approved":
                  return <DistributedItem key={index} data={item as SubmissionItemType} />;

                case "Pending Review":
                  return <PendingItem key={index} data={item as SubmissionItemType} />;

                case "Declined":
                  return <FailedItem key={index} data={item as SubmissionItemType} />;

                default:
                  return null;
              }
            })
          }
        { (isLoading || isMoreDataLoading) && <MusicDistributionLoadingSkeleton/> }
        { isMoreDataError && <MusicDistributionError/>}
        {
          // (submissions?.metadata.page < submissions?.metadata?.totalPage)
          metaData && (metaData.page < metaData.totalPage)
            && <div className="mx-auto w-fit">
                  <button onClick={handleLoadMore} className=" text-blue-500 hover:underline cursor-pointer text-center font-medium">
                      Load More → 
                  </button>
          </div>
        }
        
      </div>

      {/* ConfirmDistribution modal */}
      {
        // openDetails 
      
        isConfirmDistributionModalOpen  && <DetailModal/>
        
      //   && (
      //     <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] bg-opacity-50 flex justify-center items-start overflow-auto py-10">
      //       <div className="bg-[#0B1D21] rounded-2xl w-full max-w-6xl p-6 relative">
      //         {/* <button
      //           onClick={() => setOpenDetails(false)}
      //           className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer"
      //         >
      //           ✕
      //         </button> */}
      //         <img
      //           src={cancel}
      //           alt=""
      //           onClick={closeModal}
      //           className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer"
      //         />
      //         <ConfirmDistribution />
      //       </div>
      //     </div>
      // )
      
      }
    </div>
  );
};

