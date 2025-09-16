// import { BackCatalogClient } from "@/components/DistributorDashboard/DistributorDashboardBackCatalog/BackCatalogClient"
// import BackCatalogHeader from "@/components/DistributorDashboard/DistributorDashboardBackCatalog/BackCatalogHeader"

import BackCatalog from "@/components/DistributorDashboard/DistributorDashboardBackCatalog/BackCatalog";
import DistributorBackCatalogGrid from "@/components/DistributorDashboard/DistributorDashboardBackCatalog/DistributorBackCatalogGrid";

const DistributorBackCatalog = () => {
  return (
    <div className="space-y-10">
      <BackCatalog />
      <DistributorBackCatalogGrid />

      {/* <BackCatalogHeader></BackCatalogHeader>
        <BackCatalogClient></BackCatalogClient> */}
    </div>
  );
};

export default DistributorBackCatalog;
