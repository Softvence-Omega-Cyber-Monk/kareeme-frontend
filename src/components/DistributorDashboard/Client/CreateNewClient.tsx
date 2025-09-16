import MiniTitle from "@/components/ClientDashboard/Shared/MiniTitle";
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
import { useState } from "react";

const CreateNewClient = () => {
  const [role, setRole] = useState("");

  return (
    <div className=" ">
      <MiniTitle
        title="Create New Client"
        subTitle="Enter or update the client's details below."
      />

      <div className="w-full mt-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* First Name */}
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm text-white">
              First Name
            </Label>
            <Input
              id="firstName"
              className="border h-12 border-[#B3B3B3] rounded-xl px-6 py-4 w-full bg-[#213430] text-white"
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-white">
              E-mail Address
            </Label>
            <Input
              id="email"
              type="email"
              className="border h-12 border-[#B3B3B3] rounded-xl px-6 py-4 w-full bg-[#213430] text-white"
            />
          </div>

          {/* Phone Number */}
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm text-white">
              Phone Number
            </Label>
            <Input
              id="phone"
              className="border h-12 border-[#B3B3B3] rounded-xl px-6 py-4 w-full bg-[#213430] text-white"
            />
          </div>

          {/* Role */}
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm text-white">
              Role
            </Label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="bg-[#213430] h-12 text-white px-4 py-3 rounded-xl border-none w-full hover:bg-[#344b51] cursor-pointer">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 text-white border-none ">
                <SelectGroup>
                  <SelectItem
                    value="Admin"
                    className="hover:bg-[#253638] cursor-pointer"
                  >
                    Admin
                  </SelectItem>
                  <SelectItem
                    value="Client"
                    className="hover:bg-[#253638] cursor-pointer"
                  >
                    Client
                  </SelectItem>
                  <SelectItem
                    value="Distributor"
                    className="hover:bg-[#253638] cursor-pointer"
                  >
                    Distributor
                  </SelectItem>
                  <SelectItem
                    value="Accountant"
                    className="hover:bg-[#253638] cursor-pointer"
                  >
                    Accountant
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        {/* Current Password */}
        <div className="space-y-2">
          <Label htmlFor="currentPassword" className="text-sm text-white">
            Current Password
          </Label>
          <Input
            id="currentPassword"
            type="password"
            className="border h-12 border-[#B3B3B3] rounded-xl px-6 py-4 w-full bg-[#213430] text-white"
          />
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button className="px-6 py-3 bg-[#213430] text-white rounded-xl hover:bg-gray-500 transition-colors duration-200 cursor-pointer">
            Cancel
          </button>
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-colors duration-200 cursor-pointer">
            Create Client
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateNewClient;
