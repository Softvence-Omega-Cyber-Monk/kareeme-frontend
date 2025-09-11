import DistributorSubmisionCard from "@/components/DistributorDashboard/DistributorSubmision/DistributorSubmisionCard"
import { DistributorSubmissionTable } from "@/components/DistributorDashboard/DistributorSubmision/DistributorSubmissionTable"


const DistributorSubmissions = () => {
  return (
    <div>
      <DistributorSubmisionCard></DistributorSubmisionCard>
      <DistributorSubmissionTable></DistributorSubmissionTable>
    </div>
  )
}

export default DistributorSubmissions