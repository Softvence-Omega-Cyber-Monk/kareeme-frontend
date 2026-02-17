/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useNavigate } from "react-router-dom";
import download from "@/assets/icons/photo.png";
import {
  useGetClientsQuery,
  useDeactivateClientMutation,
} from "@/redux/features/distribution/distributionApi";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { toast } from "sonner";

const ClientsManagementTable = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [limit] = useState(10);
  const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = useState(false);
  const [selectedClient, setSelectedClient] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const { data, isLoading, isError } = useGetClientsQuery({ page, limit });
  const [deactivateClient, { isLoading: isDeactivating }] =
    useDeactivateClientMutation();

  const goToDetails = (id: string) => {
    navigate(`/distributor-dashboard/clients/${id}`);
  };

  const handleDeactivateClick = (clientId: string, clientName: string) => {
    setSelectedClient({ id: clientId, name: clientName });
    setIsDeactivateDialogOpen(true);
  };

  const handleDeactivateConfirm = async () => {
    if (!selectedClient) return;

    try {
      await deactivateClient(selectedClient.id).unwrap();
      toast.success(`Client ${selectedClient.name} deactivated successfully`);
      setIsDeactivateDialogOpen(false);
      setSelectedClient(null);
    } catch (error: any) {
      toast.error(error?.data?.message || "Failed to deactivate client");
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-white text-lg">Loading clients...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-red-400 text-lg">Error loading clients</div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="overflow-x-auto">
        <Table className="w-full min-w-[1000px]">
          {/* Table Header */}
          <TableHeader>
            <TableRow className="text-[#BDBDBD] text-sm md:text-base">
              <TableHead className="w-[250px] px-4 py-2">Title</TableHead>
              <TableHead className="px-4 py-2">Contact</TableHead>
              <TableHead className="px-4 py-2">Role</TableHead>
              <TableHead className="px-4 py-2">Release</TableHead>
              <TableHead className="text-center px-4 py-2">Action</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody className="text-white">
            {data?.data && data.data.length > 0 ? (
              data.data.map((client) => (
                <TableRow
                  key={client.clientId}
                  className="border-b border-gray-800 hover:bg-[#0E141B]"
                >
                  {/* Title & Image */}
                  <TableCell className="px-4 py-3 flex items-center gap-3">
                    <img
                      src={download}
                      alt={client.user.name}
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <span className="text-sm md:text-base font-medium">
                        {client.user.name}
                      </span>
                      <span className="text-xs md:text-sm text-gray-500">
                        {client.role}
                      </span>
                    </div>
                  </TableCell>

                  {/* Contact Info */}
                  <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
                    <div className="flex flex-col">
                      <span className="font-medium">{client.user.email}</span>
                      <span className="text-gray-500">
                        {client.phoneNumber || client.user.phone || "N/A"}
                      </span>
                    </div>
                  </TableCell>

                  {/* Role */}
                  <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
                    {client.role}
                  </TableCell>

                  {/* Release */}
                  <TableCell className="px-4 py-3 text-sm md:text-base text-gray-400">
                    {client.totalReleases}
                  </TableCell>

                  {/* Actions */}
                  <TableCell className="px-4 py-3 text-center flex items-center justify-center">
                    {/* Edit Button */}
                    <button
                      className="flex items-center gap-1 px-3 py-1 text-[#3A5CFF] text-sm md:text-base hover:text-[#2f4de0] transition"
                      onClick={() => goToDetails(client.clientId)}
                    >
                      Edit
                    </button>

                    {/* Deactivate Button */}
                    <button
                      className="flex items-center gap-1 px-3 py-1 text-red-700 text-sm md:text-base hover:text-red-600 transition"
                      onClick={() =>
                        handleDeactivateClick(client.clientId, client.user.name)
                      }
                    >
                      Deactivate
                    </button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-12 text-gray-400">
                  No clients found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      {data?.metadata && (
        <div className="p-6 flex items-center justify-between border-t border-[#3a4553]">
          <div className="text-gray-400 text-sm">
            Page {data.metadata.page} of {data.metadata.totalPage} ({data.metadata.total} total clients)
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="bg-[#17171A] border border-[#696B6F] text-white hover:bg-[#2a3441] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <FaChevronLeft /> Previous
            </Button>
            <Button
              onClick={() => setPage((p) => Math.min(data.metadata.totalPage, p + 1))}
              disabled={page === data.metadata.totalPage}
              className="bg-[#17171A] border border-[#696B6F] text-white hover:bg-[#2a3441] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next <FaChevronRight />
            </Button>
          </div>
        </div>
      )}

      {/* Deactivate Confirmation Dialog */}
      <Dialog
        open={isDeactivateDialogOpen}
        onOpenChange={setIsDeactivateDialogOpen}
      >
        <DialogContent className="bg-[#0B1D21] border border-[#2F3B40] text-white">
          <DialogHeader>
            <DialogTitle>Deactivate Client</DialogTitle>
            <DialogDescription className="text-gray-400">
              Are you sure you want to deactivate{" "}
              <span className="font-semibold text-white">
                {selectedClient?.name}
              </span>
              ? This action can be reversed later.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => {
                setIsDeactivateDialogOpen(false);
                setSelectedClient(null);
              }}
              className="border-[#696B6F] text-white hover:bg-[#2a3441]"
            >
              Cancel
            </Button>
            <Button
              onClick={handleDeactivateConfirm}
              disabled={isDeactivating}
              className="bg-red-600 hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isDeactivating ? "Deactivating..." : "Deactivate Client"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ClientsManagementTable;
