import BackCatalog from "@/components/AdminDashboard/AdminCatalog/BackCatalog/BackCatalog";
import BackCatalogGrid from "@/components/AdminDashboard/AdminCatalog/BackCatalog/BackCatalogGrid";

const AdminBackCatalogPage = () => {
  return (
    <div className=" space-y-9">
      <BackCatalog />
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          <BackCatalogGrid />
        </div>
      </div>
    </div>
  );
};

export default AdminBackCatalogPage;
