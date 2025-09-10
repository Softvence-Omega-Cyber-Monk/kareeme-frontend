import MiniComponent from "./MiniComponent";
import StatementTable from "./StatementTable";

const Statement = () => {
  return (
    <div className="space-y-9">
      <MiniComponent />

      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-4  gap-5">
        <div className="xl:col-span-4 w-full">
          <StatementTable />
        </div>
      </div>
    </div>
  );
};

export default Statement;
