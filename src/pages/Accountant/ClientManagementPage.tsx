import ClientManagement from "@/components/Accountant/ClientManagement/ClientManagement";

const ClientManagementPage = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          <ClientManagement />
        </div>
      </div>
    </div>
  );
};

export default ClientManagementPage;
