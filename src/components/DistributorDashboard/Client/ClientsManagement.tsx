import ClientManageHeader from "./ClientManageHeader";
import ClientsManagementTable from "./ClientsManagementTable";

const ClientsManagement = () => {
  return (
    <div className=" space-y-10">
      <ClientManageHeader />
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          <ClientsManagementTable />
        </div>
      </div>
    </div>
  );
};

export default ClientsManagement;
