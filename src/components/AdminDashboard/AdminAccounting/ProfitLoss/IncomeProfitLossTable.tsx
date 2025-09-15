import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const clientData = [
  { id: "1", client: "Sco Brazy", income: "$450.00", expenses: "$200.00" },
  { id: "2", client: "Gemini Chachi", income: "$500.00", expenses: "$250.00" },
  { id: "3", client: "DJ Nova", income: "$600.00", expenses: "$300.00" },
  { id: "4", client: "Celia Dawn", income: "$400.00", expenses: "$150.00" },
  { id: "5", client: "Auntie House", income: "$550.00", expenses: "$220.00" },
  { id: "6", client: "Luna Sparks", income: "$470.00", expenses: "$180.00" },
  { id: "7", client: "DJ Blaze", income: "$520.00", expenses: "$210.00" },
];

export function IncomeProfitLossTable() {
  return (
    <div className="p-4 sm:p-5 md:p-6 space-y-4 md:space-y-6">
      {/* Table Section */}
      <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
        <div className="xl:col-span-3 w-full">
          <div className="overflow-x-auto">
            <Table className="w-full min-w-[500px]">
              <TableHeader>
                <TableRow className="text-[#BDBDBD] text-sm md:text-base">
                  <TableHead className="w-[200px] px-2 md:px-4 py-2">
                    Client
                  </TableHead>
                  <TableHead className="text-center px-2 md:px-4 py-2">
                    Income
                  </TableHead>
                  <TableHead className="text-center px-2 md:px-4 py-2">
                    Expenses
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="text-white">
                {clientData.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="px-2 md:px-4 py-3">
                      {row.client}
                    </TableCell>
                    <TableCell className="text-center px-2 md:px-4 py-3 text-sm md:text-base text-[#01D449]">
                      {row.income}
                    </TableCell>
                    <TableCell className="text-center px-2 md:px-4 py-3 text-sm md:text-base text-[#FF4C61]">
                      {row.expenses}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
