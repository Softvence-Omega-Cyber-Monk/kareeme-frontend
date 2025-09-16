import ClientManageHeader from "./ClientManageHeader";
import ClientsManagementTable from "./ClientsManagementTable";

const ClientsManagement = () => {
  return (
    <div className=" space-y-10">
      <ClientManageHeader />
      <ClientsManagementTable />
    </div>
  );
};

export default ClientsManagement;
