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

const Team = () => {
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
        {/* Optional Right-side controls */}
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
              First Name
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
              Email Address
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

        {/* Add Member Button */}
        <div className="pt-4 ">
          <Button className="w-full md:w-auto bg-sky-500 hover:bg-sky-600 text-white font-sans text-base px-6 py-6 rounded-xl shadow-lg transition-all duration-200 cursor-pointer">
            Add Member
            <FaPlus />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Team;
