import cancel from "@/assets/icons/cancel.svg";
import type { JSX } from "react"
// import ConfirmDistribution from "../../ConfirmDistribution"
import ConfirmDistribution from "./ConfirmDistribution";
import useControlDispatch from "@/contexts/control/hooks/useControlDispatch";
// import useControlData from "@/contexts/control/hooks/useControlData";
// import { useGetSubmissionDetailsQuery } from "@/redux/features/distribution/distributionApi";
// import { useGetSingleReleaseQuery } from "@/redux/features/newRelease/newReleaseApi";
// import ConfirmDistributionSkeleton from "./Loading";
// import DistributionError from "./Error";
// import { skipToken } from "@reduxjs/toolkit/query";

export default function DetailModal(): JSX.Element {
    const { closeModal } = useControlDispatch()
    // const { releaseId } =  useControlData()
    // const { data, isLoading, isError } = useGetSubmissionDetailsQuery(releaseId ?? skipToken);
    // const { data: releaseData, isLoading: isReleaseLoading, isError: isReleaseError } = useGetSingleReleaseQuery(releaseId ?? skipToken)

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-[1px] bg-opacity-50 flex justify-center items-start overflow-auto py-10">
        <div className="bg-[#0B1D21] rounded-2xl w-full max-w-6xl p-6 relative">
            <button onClick={closeModal} className="absolute top-4 right-4 text-white text-xl font-bold cursor-pointer" >
              <img src={cancel} alt="" />
            </button>
            <ConfirmDistribution/> 
            {/* { (isError || isReleaseError) && <DistributionError/> }
            { (isLoading || isReleaseLoading) && <ConfirmDistributionSkeleton/> }
            { !isError && !isLoading && data?.data && ( )} */}
        </div>
    </div>
  )
}