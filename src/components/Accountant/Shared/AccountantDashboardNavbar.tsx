import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import { IoMdSettings } from "react-icons/io";
import { RiFileList3Fill, RiLogoutBoxRLine } from "react-icons/ri";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import dashboard from "@/assets/icons/dashboard.svg";
import notification from "@/assets/icons/notification.svg";
import user from "@/assets/icons/user.svg";
import { MdPrivacyTip } from "react-icons/md";
import { Link } from "react-router-dom";

export interface NavbarProps {
  onMobileMenuToggle: () => void;
  notificationCount?: number;
  userName?: string;
  isSidebarOpen: boolean;
}

const AccountantDashboardNavbar: React.FC<NavbarProps> = ({
  onMobileMenuToggle,
  notificationCount = 12,
  userName = "Gemini Chachi",
  isSidebarOpen,
}) => {
  return (
    <div className="bg-gradient-to-r from-[#052117] via-[#0A1C19] to-[#0F131B] border-b border-[#212C64]">
      <header
        className={`flex items-center justify-between h-16 px-4 md:px-8 mb-2 ${
          isSidebarOpen ? "max-w-[1400px] mx-auto" : ""
        }`}
      >
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          {/* Mobile Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white"
            onClick={onMobileMenuToggle}
          >
            <Menu className="w-6 h-6" />
          </Button>

          {/* Logo + Dashboard text */}
          <div className="flex items-center space-x-3 pl-0 md:pl-8 lg:pl-60">
            <div className="flex flex-col leading-tight">
              <span className="text-xs text-gray-400">Dashboard</span>
              <span className="text-sm md:text-base font-medium text-white">
                HELLO, {userName}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Dashboard Icon */}
          <Button
            variant="ghost"
            size="icon"
            className="relative text-white cursor-pointer"
          >
            <img src={dashboard} alt="Dashboard" className="w-5 h-5" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative text-white">
            <img src={notification} alt="Notifications" className="w-6 h-6" />
            {notificationCount > 0 && (
              <Badge className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] rounded-full bg-white text-black">
                {notificationCount > 99 ? "99+" : notificationCount}
              </Badge>
            )}
          </Button>

          {/* User Dropdown */}
          {/* User Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white cursor-pointer"
              >
                <img src={user} alt="User" className="w-6 h-6 rounded-full" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-[#132221] text-white w-48 shadow-lg rounded-2xl border-none"
            >
              <Link to="/client-dashboard/catalog/settings">
                <DropdownMenuItem className="cursor-pointer border-b border-[#364241] px-4 py-2  hover:bg-[#1C1D28] transition-colors">
                  <IoMdSettings />
                  Settings
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem className="flex- justify-between cursor-pointer border-b border-[#364241] px-4 py-2  hover:bg-[#1C1D28] transition-colors">
                <RiFileList3Fill />
                Terms & Conditions
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer border-b border-[#364241] px-4 py-2  hover:bg-[#1C1D28] transition-colors">
                <MdPrivacyTip />
                Privacy Policy
              </DropdownMenuItem>
              <DropdownMenuItem className="cursor-pointer border-b border-[#364241] px-4 py-2  text-red-500 hover:bg-red-600 hover:text-white transition-colors">
                <RiLogoutBoxRLine />
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default AccountantDashboardNavbar;
