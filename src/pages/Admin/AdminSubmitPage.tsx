import Submit from "@/components/AdminDashboard/AdminCatalog/Submit/Submit";
import SubmitGrid from "@/components/AdminDashboard/AdminCatalog/Submit/SubmitGrid";

const AdminSubmitPage = () => {
  return (
    <div className="space-y-8">
      <Submit />
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          <SubmitGrid />
        </div>
      </div>
    </div>
  );
};

export default AdminSubmitPage;
