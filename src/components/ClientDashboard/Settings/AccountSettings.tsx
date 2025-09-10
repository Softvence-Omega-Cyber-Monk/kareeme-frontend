import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const AccountSettings = () => {
  const [formData, setFormData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    jobtitle: "Senior Dispatcher",
    country: "",
    language: "",
    password: "********",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="w-full">
      <div className="flex flex-col lg:flex-col xl:flex-row md:flex-col sm:flex-col justify-center items-start space-x-8 p-8 space-y-5">
        {/* Left Side: Profile Information */}
        <div className="w-full sm:max-w-[488px] p-8 bg-[#0D1D22]   rounded-xl shadow-md flex flex-col gap-8">
          <div className="flex items-center space-x-4">
            <Avatar className="w-24 h-24 rounded-full bg-[#D9D9D9]">
              <AvatarImage src="/placeholder-avatar.jpg" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold ">
                {formData.firstName} {formData.lastName}
              </h2>
              <p className="text-gray-500">{formData.jobtitle}</p>
            </div>
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm text-gray-600">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
              />
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-sm text-gray-600">
                Phone
              </Label>
              <Input
                id="phone"
                value={formData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
              />
            </div>

            {/* Job Title */}
            <div className="space-y-2">
              <Label htmlFor="jobTitle" className="text-sm text-gray-600">
                Job Title
              </Label>
              <Input
                id="jobTitle"
                value={formData.jobtitle}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm text-gray-600">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-4 text-sm text-[#10B981] cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-4 w-8" />
                  ) : (
                    <FaEye className="h-4 w-8" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Editable Profile Form */}
        <div className="w-full  p-8 bg-[#0D1D22]   rounded-xl shadow-md">
          <h1 className="text-2xl font-semibold  mb-6">
            Edit Profile(Pending this page work)
          </h1>

          <div className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First Name */}
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm text-white">
                  First Name
                </Label>
                <Input
                  id="firstName"
                  className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm text-gray-600">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm text-gray-600">
                  Phone
                </Label>
                <Input className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]" />
              </div>
              {/* Email */}
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
            </div>
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm text-gray-600">
                Job Title
              </Label>
              <Input
                id="jobTitle"
                className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
              />
            </div>
            <h1 className="text-2xl font-semibold">Change Password</h1>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-sm text-gray-600">
                Current Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    handleInputChange("password", e.target.value)
                  }
                  className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-4 text-sm text-[#10B981] cursor-pointer"
                >
                  {showPassword ? (
                    <FaEyeSlash className="h-4 w-8" />
                  ) : (
                    <FaEye className="h-4 w-8" />
                  )}
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-gray-600">
                  New Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-4 text-sm text-[#10B981] cursor-pointer"
                  ></button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm text-gray-600">
                  Retype New Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    className="border border-[#B3B3B3] rounded-xl px-6 py-6 w-full bg-[#253438]"
                  />
                  <button
                    type="button"
                    className="absolute right-2 top-4 text-sm text-[#10B981] cursor-pointer"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
