import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FaPlus } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
  DialogOverlay,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const ClientManageHeader = () => {
  const [email, setEmail] = useState("");

  const handleSendEmail = () => {
    console.log("Email sent to:", email);
    setEmail("");
  };

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="space-y-1">
          <h1 className="text-3xl font-semibold text-white">
            Client Submissions
          </h1>
          <p className="text-gray-400 text-base">
            View all submissions from clients along with their current status.
          </p>
        </div>
      </div>

      {/* Add Team Member Form */}
      <div className="bg-[#0E2223] border border-gray-700 rounded-2xl p-8 space-y-6 shadow-md">
        <h2 className="text-xl font-semibold text-white">
          Add New Team Member
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm text-gray-300">
              Name
            </Label>
            <Input
              id="firstName"
              placeholder="Enter first name"
              className="w-full bg-[#253638] border border-gray-600 rounded-xl px-4 py-3 h-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-gray-300">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              className="w-full bg-[#253638] border border-gray-600 rounded-xl px-4 py-3 h-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm text-gray-300">
              Role
            </Label>
            <Select>
              <SelectTrigger
                id="role"
                className="w-full bg-[#253638] text-white rounded-xl px-4 py-3 border border-gray-600 hover:bg-[#344b51]"
              >
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent className="bg-[#344b51] text-white border-none">
                <SelectGroup>
                  {["Admin", "Accountant", "Distributor", "Client"].map(
                    (role) => (
                      <SelectItem
                        key={role}
                        value={role}
                        className="hover:bg-[#253638] cursor-pointer"
                      >
                        {role}
                      </SelectItem>
                    )
                  )}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Add Member Button → Opens Dialog */}
        <div className="pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className=" w-full md:w-auto bg-[#3A5CFF] hover:bg-sky-600 text-white font-sans text-base px-6 py-6 rounded-xl shadow-lg transition-all duration-200 cursor-pointer flex items-center gap-2">
                Add Member
                <FaPlus />
              </Button>
            </DialogTrigger>

            {/* Custom Overlay */}
            <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-[0.2px] bg-opacity-50 transition-all duration-300" />

            {/* Dialog Box */}
            <DialogContent className="backdrop-blur-md bg-[#121E21]/90 border border-gray-700 text-white rounded-2xl shadow-2xl max-w-md w-full p-6 animate-in fade-in-50 slide-in-from-top-10">
              <div>
                <div className="flex items-center space-x-4 mb-8">
                  <Avatar className="w-20 h-20 rounded-full bg-[#D9D9D9]">
                    <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <h1 className="text-xl font-sans">Arfin Mia</h1>
                    <p className="font-sans text-base text-[#BDBDBD]">
                      Distributor
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mt-4">
                <Label htmlFor="inviteEmail">Email</Label>
                <Input
                  id="inviteEmail"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="example@email.com"
                  className="w-full bg-[#253638] border border-gray-600 rounded-xl px-4 py-3 h-12 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 focus:border-sky-400"
                />
              </div>

              <DialogFooter className="mt-6 flex justify-end">
                <Button
                  onClick={handleSendEmail}
                  className="bg-[#01D449] hover:bg-[#026322] text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-200 cursor-pointer"
                >
                  Send invite
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default ClientManageHeader;
