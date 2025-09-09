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

export interface NavbarProps {
  onMobileMenuToggle: () => void;
  notificationCount?: number;
  userName?: string;
  isSidebarOpen: boolean;
}

const ClientDashboardNavbar: React.FC<NavbarProps> = ({
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
              <DropdownMenuItem className="cursor-pointer border-b border-[#364241] px-4 py-2  hover:bg-[#1C1D28] transition-colors">
                <IoMdSettings />
                Settings
              </DropdownMenuItem>
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

export default ClientDashboardNavbar;

// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// import dashboard from "@/assets/icons/dashboard.svg";
// import notification from "@/assets/icons/notification.svg";
// import user from "@/assets/icons/user.svg";

// export interface NavbarProps {
//   onMobileMenuToggle: () => void;
//   notificationCount?: number;
//   userName?: string;
//   isSidebarOpen: boolean;
// }

// const ClientDashboardNavbar: React.FC<NavbarProps> = ({
//   onMobileMenuToggle,
//   notificationCount = 12,
//   userName = "Gemini Chachi",
//   isSidebarOpen,
// }) => {
//   return (
//     <div className="bg-gradient-to-r from-[#052117] via-[#0A1C19] to-[#0F131B] border-b border-[#212C64]">
//       <header
//         className={`flex items-center justify-between h-16 px-4 md:px-8 mb-2 ${
//           isSidebarOpen ? "max-w-[1400px] mx-auto" : ""
//         }`}
//       >
//         {/* Left Section */}
//         <div className="flex items-center space-x-4">
//           {/* Mobile Menu */}
//           <Button
//             variant="ghost"
//             size="icon"
//             className="lg:hidden text-white"
//             onClick={onMobileMenuToggle}
//           >
//             <Menu className="w-6 h-6" />
//           </Button>

//           {/* Logo + Dashboard text */}
//           <div className="flex items-center space-x-3 pl-0 md:pl-8 lg:pl-60">
//             <div className="flex flex-col leading-tight">
//               <span className="text-xs text-gray-400">Dashboard</span>
//               <span className="text-sm md:text-base font-medium text-white">
//                 HELLO, {userName}
//               </span>
//             </div>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center space-x-4">
//           {/* Dashboard Icon */}
//           <Button variant="ghost" size="icon" className="relative text-white">
//             <img src={dashboard} alt="Dashboard" className="w-5 h-5" />
//           </Button>

//           {/* Notifications */}
//           <Button variant="ghost" size="icon" className="relative text-white">
//             <img src={notification} alt="Notifications" className="w-6 h-6" />
//             {notificationCount > 0 && (
//               <Badge className="absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-[10px] rounded-full bg-white text-black">
//                 {notificationCount > 99 ? "99+" : notificationCount}
//               </Badge>
//             )}
//           </Button>

//           {/* User */}
//           <Button variant="ghost" size="icon" className="text-white">
//             <img src={user} alt="User" className="w-6 h-6" />
//           </Button>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default ClientDashboardNavbar;

// import { Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Badge } from "@/components/ui/badge";

// import dashboard from "@/assets/icons/dashboard.svg";
// import notification from "@/assets/icons/notification.svg";
// import user from "@/assets/icons/user.svg";

// export interface NavbarProps {
//   onMobileMenuToggle: () => void;
//   notificationCount?: number;
//   cartItems?: number;
//   userName?: string;
//   userRole?: string;
//   userAvatar?: string;
//   userInitials?: string;
//   isSidebarOpen: boolean;
// }

// const ClientDashboardNavbar: React.FC<NavbarProps> = ({
//   onMobileMenuToggle,
//   notificationCount = 20,
//   userRole = "Seller",
//   userName = "Savannah Nguyen",
//   userAvatar = "/placeholder-avatar.jpg",
//   userInitials = "SN",
//   isSidebarOpen,
// }) => {
//   console.log("isSidebarOpen", isSidebarOpen);
//   return (
//     <div
//       className={`bg-gradient-to-r from-[#052318] via-[#0A1C19] to-[#0F131B]  border-b border-foundation-white border-[#212C64]
//       `}
//     >
//       <header
//         className={` ${
//           isSidebarOpen
//             ? " w-full max-w-[1400px] mx-auto my-auto   px-4 md:px-10  "
//             : " px-4"
//         }`}
//       >
//         <div className="flex items-center justify-between py-3">
//           {/* Left Side - Mobile Menu & Title */}
//           <div className="flex items-center space-x-2 sm:space-x-4">
//             {/* Mobile Menu Button */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="lg:hidden"
//               onClick={onMobileMenuToggle}
//             >
//               <Menu className="w-5 h-5" />
//             </Button>

//             {/* User Info */}
//             <div className="flex items-center space-x-2">
//               <Avatar className="w-8 h-8 md:w-10 md:h-10 border">
//                 <AvatarImage src={userAvatar} alt="User" />
//                 <AvatarFallback>{userInitials}</AvatarFallback>
//               </Avatar>
//               <div className="hidden lg:block">
//                 <p className="text-lg font-medium text-[#1A1A1A]">{userName}</p>
//                 <p className="text-sm font-medium text-[#6A6A6A]">{userRole}</p>
//               </div>
//             </div>
//           </div>

//           {/* Right Side Actions */}
//           <div className="flex items-center space-x-2 sm:space-x-4">
//             {/* <div className="hidden sm:block w-full sm:w-[451px] mx-auto px-4">
//               <div className="flex items-center w-full h-12 px-4 gap-3 border border-[#E5E5E5] rounded-full bg-white">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="flex-grow outline-none bg-transparent text-gray-700 placeholder-gray-400"
//                 />
//                 <button className="w-8 h-8 flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white rounded-full transition-colors duration-200">
//                   <FiSearch size={16} />
//                 </button>
//               </div>
//             </div> */}

//             {/* Cart */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="relative cursor-pointer"
//             >
//               <img src={dashboard} className="text-black" alt="" />
//             </Button>

//             {/* Notifications */}
//             <Button
//               variant="ghost"
//               size="icon"
//               className="relative cursor-pointer"
//             >
//               <img src={notification} className="w-6 h-6" alt="" />
//               {notificationCount > 0 && (
//                 <Badge
//                   // variant="destructive"
//                   className=" text-black bg-white absolute -top-1 -right-1 w-4 h-4 flex items-center justify-center text-xs p-0"
//                 >
//                   {notificationCount > 99 ? "99+" : notificationCount}
//                 </Badge>
//               )}
//             </Button>
//             <Button
//               variant="ghost"
//               size="icon"
//               className="relative cursor-pointer"
//             >
//               <img src={user} className="w-6 h-6" alt="" />
//             </Button>
//           </div>
//         </div>
//       </header>
//     </div>
//   );
// };

// export default ClientDashboardNavbar;
