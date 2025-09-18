import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import flag from "@/assets/icons/flag.svg";

const incomeData = [
  {
    id: "10001",
    source: "August 2024 Royalties",
    amount: "$350.00",
    date: "2024-08-31",
    method: "PayPal",
    image: flag,
  },
  {
    id: "10002",
    source: "May 2025 Royalties",
    amount: "$420.00",
    date: "2025-05-31",
    method: "Payoneer",
    image: flag,
  },
  {
    id: "10003",
    source: "June 2025 Royalties",
    amount: "$300.00",
    date: "2025-06-30",
    method: "PayPal",
    image: flag,
  },
  {
    id: "10004",
    source: "July 2025 Royalties",
    amount: "$500.00",
    date: "2025-07-31",
    method: "Payoneer",
    image: flag,
  },
  {
    id: "10005",
    source: "May 2025 Royalties",
    amount: "$350.00",
    date: "2025-05-15",
    method: "PayPal",
    image: flag,
  },
];

export function PaymentHistory() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-medium text-white">
          Payment History
        </h1>
      </div>
      <div className="bg-[#0C2322] border border-[#313E41] rounded-2xl shadow-sm p-4 md:p-6 ">
        {/* Table */}
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[500px] md:min-w-full">
            <TableHeader>
              <TableRow className="text-[#BDBDBD]">
                <TableHead className="px-2 md:px-4 py-2">Date</TableHead>
                <TableHead className="px-2 md:px-4 py-2">Client Name</TableHead>
                <TableHead className="text-right px-2 md:px-4 py-2">
                  Amount
                </TableHead>
                <TableHead className="text-right px-2 md:px-4 py-2">
                  Method
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody className="text-white">
              {incomeData.map((item) => (
                <TableRow
                  key={item.id}
                  className="hover:bg-[#1E3A38] transition-colors"
                >
                  {/* Date */}
                  <TableCell className="pr-4 md:pr-8 py-4">
                    {item.date}
                  </TableCell>
                  {/* Client */}
                  <TableCell className="flex items-center gap-2 pr-4 md:pr-8 py-4">
                    {item.source}
                  </TableCell>
                  {/* Amount */}
                  <TableCell className="text-right pr-4 md:pr-8 py-4 ">
                    {item.amount}
                  </TableCell>
                  {/* Method */}
                  <TableCell className="text-right pr-4 md:pr-8 py-4">
                    {item.method}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TableCell colSpan={4}></TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </div>
    </div>
  );
}
