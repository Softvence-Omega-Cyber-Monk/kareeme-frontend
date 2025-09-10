import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const expressData = [
  {
    id: "30001",
    source: "January 2025 Royalties",
    amount: "$410.00",
    date: "2025-01-31",
  },
  {
    id: "30002",
    source: "February 2025 Royalties",
    amount: "$380.00",
    date: "2025-02-28",
  },
  {
    id: "30003",
    source: "March 2025 Royalties",
    amount: "$525.00",
    date: "2025-03-31",
  },
  {
    id: "30004",
    source: "April 2025 Royalties",
    amount: "$465.00",
    date: "2025-04-30",
  },
  {
    id: "30005",
    source: "May 2025 Royalties",
    amount: "$490.00",
    date: "2025-05-31",
  },
  {
    id: "30006",
    source: "June 2025 Royalties",
    amount: "$350.00",
    date: "2025-06-30",
  },
  {
    id: "30007",
    source: "July 2025 Royalties",
    amount: "$530.00",
    date: "2025-07-31",
  },
  {
    id: "30008",
    source: "August 2025 Royalties",
    amount: "$470.00",
    date: "2025-08-31",
  },
  {
    id: "30009",
    source: "September 2025 Royalties",
    amount: "$510.00",
    date: "2025-09-30",
  },
  {
    id: "30010",
    source: "October 2025 Royalties",
    amount: "$440.00",
    date: "2025-10-31",
  },
  {
    id: "30011",
    source: "November 2025 Royalties",
    amount: "$495.00",
    date: "2025-11-30",
  },
  {
    id: "30012",
    source: "December 2025 Royalties",
    amount: "$520.00",
    date: "2025-12-31",
  },
  {
    id: "30013",
    source: "January 2026 Royalties",
    amount: "$480.00",
    date: "2026-01-31",
  },
  {
    id: "30014",
    source: "February 2026 Royalties",
    amount: "$460.00",
    date: "2026-02-28",
  },
  {
    id: "30015",
    source: "March 2026 Royalties",
    amount: "$500.00",
    date: "2026-03-31",
  },
];

export function Express() {
  return (
    <div className="bg-[#0C2322] border border-[#313E41] rounded-2xl shadow-sm p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h1 className="text-lg md:text-2xl font-medium text-white">Expenses</h1>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table className="w-full min-w-[400px] md:min-w-full">
          <TableHeader>
            <TableRow className="text-[#BDBDBD]">
              <TableHead className="px-2 md:px-4 py-2">Source</TableHead>
              <TableHead className="text-right px-2 md:px-4 py-2">
                Amount
              </TableHead>
              <TableHead className="text-right px-2 md:px-4 py-2">
                Date
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody className="text-white">
            {expressData.map((item) => (
              <TableRow
                key={item.id}
                className="hover:bg-[#1E3A38] transition-colors"
              >
                <TableCell className="flex items-center gap-2 pr-4 md:pr-8 py-3">
                  {item.source}
                </TableCell>
                <TableCell className="text-right pr-4 md:pr-8 py-3 text-[#D31301]">
                  {item.amount}
                </TableCell>
                <TableCell className="text-right pr-4 md:pr-8 py-3">
                  {item.date}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3}></TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </div>
  );
}
