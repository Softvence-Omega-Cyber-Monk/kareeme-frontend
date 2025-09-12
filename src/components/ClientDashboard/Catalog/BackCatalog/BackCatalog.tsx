import AlbumGrid from "./AlbumGrid";
import BackCatalogCard from "./BackCatalogCard";
import CatalogDetailsData from "./CatalogDetailsData";
import DataEntryForm from "./DataEntryForm";

const BackCatalog = () => {
  return (
    <div>
      <BackCatalogCard />
      <AlbumGrid />
      <DataEntryForm />
      <CatalogDetailsData />
    </div>
  );
};

export default BackCatalog;
