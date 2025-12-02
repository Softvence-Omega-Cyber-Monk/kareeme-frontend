import BackCatalog from "@/components/DistributorDashboard/DistributorDashboardBackCatalog/BackCatalog";
import DistributorBackCatalogGrid from "@/components/DistributorDashboard/DistributorDashboardBackCatalog/DistributorBackCatalogGrid";

const DistributorBackCatalog = () => {
  return (
    <div className="space-y-10">
      <BackCatalog />
      <DistributorBackCatalogGrid />
    </div>
  );
};

export default DistributorBackCatalog;
