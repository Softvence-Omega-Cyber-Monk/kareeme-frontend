import { BackCatalogClient } from "@/components/DistributorDashboard/DistributorDashboardBackCatalog/BackCatalogClient"
import BackCatalogHeader from "@/components/DistributorDashboard/DistributorDashboardBackCatalog/BackCatalogHeader"


const DistributorBackCatalog = () => {
  return (
    <div>
        
        <BackCatalogHeader></BackCatalogHeader>
        <BackCatalogClient></BackCatalogClient>
    </div>
  )
}

export default DistributorBackCatalog