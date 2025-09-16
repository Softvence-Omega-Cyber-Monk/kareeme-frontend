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
  const [role, setRole] = useState("Role");
  return (
    <div>
      <div className="w-full p-8 bg-[#0D1D22] rounded-xl shadow-md">
        <MiniTitle
          title="Create New Client"
          subTitle="Enter or update the client's details below."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName" className="text-sm text-white">
              First Name
            </Label>
            <Input
              id="firstName"
              className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm text-gray-600">
              E-mail Address
            </Label>
            <Input
              id="email"
              type="email"
              className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm text-gray-600">
              Phone Number
            </Label>
            <Input
              id="phone"
              className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
            />
          </div>
          <div className="text-white">
            <label htmlFor="role" className="text-lg mb-2 block">
              Role
            </label>
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger className="bg-[#253638] text-white px-4 py-3 rounded-xl border-none w-full hover:bg-[#344b51]">
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent className="bg-gray-700 text-white border-none">
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
          <div className="space-y-2">
            <Label htmlFor="currentPassword" className="text-sm text-gray-600">
              Current Password
            </Label>
            <Input
              id="currentPassword"
              type="password"
              //   value={formData.currentPassword}
              //   onChange={(e) =>
              //     handleInputChange("currentPassword", e.target.value)
              //   }
              className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
            />
          </div>
        </div>
        <button className="w-full py-2 mt-4 bg-blue-600 rounded-md text-white hover:bg-blue-500">
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default CreateNewClient;
