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
import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import NotificationReuseable from "../Reuseable/NotificationReuseable";

export interface NavbarProps {
  onMobileMenuToggle: () => void;
  notificationCount?: number;
  userName?: string;
  isSidebarOpen: boolean;
}

const DistributorDashboardNavbar: React.FC<NavbarProps> = ({
  onMobileMenuToggle,
  notificationCount = 12,
  userName = "Hello, Distributor",
  isSidebarOpen,
}) => {
  const [notificationOpen, setNotificationOpen] = useState(false);

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
                {userName}
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
          {/* <Button variant="ghost" size="icon" className="relative text-white">
            <img src={notification} alt="Notifications" className="w-6 h-6" />
            {notificationCount > 0 && (
              <Badge className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] rounded-full bg-white text-black">
                {notificationCount > 99 ? "99+" : notificationCount}
              </Badge>
            )}
          </Button> */}

          <Dialog open={notificationOpen} onOpenChange={setNotificationOpen}>
            <DialogTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="relative text-white cursor-pointer"
                onClick={() => setNotificationOpen(true)}
              >
                <img
                  src={notification}
                  alt="Notifications"
                  className="w-6 h-6"
                />
                {notificationCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] rounded-full bg-white text-black">
                    {notificationCount > 99 ? "99+" : notificationCount}
                  </Badge>
                )}
              </Button>
            </DialogTrigger>

            <DialogContent className="p-0 bg-transparent border-none fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <NotificationReuseable
                onClose={() => setNotificationOpen(false)}
              />
            </DialogContent>
          </Dialog>

          {/* User Dropdown */}
          {/* User Dropdown */}
          {/* <DropdownMenu>
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
              <Link to="/diostributor-dashboard/settings">
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
          </DropdownMenu> */}
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
              className="bg-[#10151C] text-white w-60 shadow-2xl rounded-3xl border border-[#3A5CFF]/40 backdrop-blur-md overflow-hidden animate-fadeIn"
            >
              <Link to="/diostributor-dashboard/settings">
                <DropdownMenuItem className="flex items-center gap-3 px-4 py-2 rounded-3xl hover:bg-gradient-to-r hover:from-[#3A5CFF]/30 hover:to-[#3A5CFF]/10 transition-colors cursor-pointer">
                  <IoMdSettings className="text-white" />
                  <span className="font-medium">Settings</span>
                </DropdownMenuItem>
              </Link>

              <DropdownMenuItem className="flex items-center gap-3 px-4 py-2 rounded-3xl hover:bg-gradient-to-r hover:from-[#3A5CFF]/30 hover:to-[#3A5CFF]/10 transition-colors cursor-pointer">
                <RiFileList3Fill className="text-white" />
                <span className="font-medium">Terms & Conditions</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-3 px-4 py-2 rounded-3xl hover:bg-gradient-to-r hover:from-[#3A5CFF]/30 hover:to-[#3A5CFF]/10 transition-colors cursor-pointer">
                <MdPrivacyTip className="text-white" />
                <span className="font-medium">Privacy Policy</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="flex items-center gap-3 px-4 py-2 rounded-3xl hover:bg-red-600 hover:text-white transition-colors cursor-pointer">
                <RiLogoutBoxRLine className="text-red-500" />
                <span className="font-medium">Sign Out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </div>
  );
};

export default DistributorDashboardNavbar;
