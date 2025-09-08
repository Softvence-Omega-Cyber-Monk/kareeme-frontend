import logo from "@/assets/icons/logo.svg"; // Adjust the path to your logo image
import { Badge } from "@/components/ui/badge";
import { FaTruck } from "react-icons/fa6";
import {
  MdGridView,
  MdOutlineMessage,
  MdOutlineRateReview,
} from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";

export interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  badge?: string;
}

export interface SidebarProps {
  items?: SidebarItem[];
  brandName?: string;
  userName?: string;
  userEmail?: string;
  userAvatar?: string;
  userInitials?: string;
  onItemClick?: () => void;
}

const defaultSidebarItems: SidebarItem[] = [
  { icon: MdGridView, label: "Dashboard", href: "/client-dashboard/dashboard" },
  {
    icon: MdOutlineRateReview,
    label: "Analytics",
    href: "/client-dashboard/analytics",
  },

  { icon: FaTruck, label: "Accounting", href: "/client-dashboard/products" },
  {
    icon: MdOutlineMessage,
    label: "Catalog",
    href: "/client-dashboard/orders",
  },
];

const ClientSidebar: React.FC<SidebarProps> = ({
  items = defaultSidebarItems,
  onItemClick,
}) => {
  const location = useLocation();

  return (
    <div
      className="flex flex-col h-full bg-[#17171A] object-cover rounded-l-3xl rounded-r-3xl"
      style={{ boxShadow: "3px 4px 42.3px 0px #0000001A" }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-2 sm:p-3 border-b border-[#212C64] mt-1">
        <img
          src={logo}
          alt="Logo"
          className="w-[24px] h-[44px] md:w-16 rounded-full "
        />
        <p className="text-[#F2F2F2] font-montserrat text-[20px] not-italic font-semibold leading-[120%]">
          LABEL BRIDGE
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 md:p-8">
        <div className="space-y-4 md:space-y-6">
          {items.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.label}
                to={item.href}
                onClick={onItemClick}
                className={`flex items-center justify-between w-full px-3 py-2 text-sm font-normal transition-all duration-300 ease-in-out ${
                  isActive
                    ? "text-[#3A5CFF] bg-[#1C1D28] rounded-xl shadow-md"
                    : "text-white hover:text-[#3A5CFF] hover:bg-[#1C1D28]/80 hover:rounded-xl hover:shadow-md"
                }`}
              >
                <div className="flex items-center space-x-2 md:text-lg">
                  <item.icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      isActive
                        ? "text-[#3A5CFF]"
                        : "text-white group-hover:text-[#3A5CFF]"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>

                {item.badge && (
                  <Badge
                    variant="secondary"
                    className="text-xs bg-[#3A5CFF]/10 text-[#3A5CFF] border border-[#3A5CFF]/30"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Help & Support */}

      <div className="p-2 md:p-4 border-t border-[#212C64]">
        {/* Centered Logo */}
        <div className="flex justify-center mb-1">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </div>

        <Link
          to="/client-dashboard/help-support"
          className="flex items-center justify-center space-x-3 text-white hover:text-[#3A5BF8] transition-colors"
        >
          <span className="text-sm font-medium">Help & Support</span>
          <RiShareBoxLine className="w-5 h-5 text-gray-300" />
        </Link>
      </div>
    </div>
  );
};

export default ClientSidebar;

// import logo from "@/assets/icons/logo.svg"; // Adjust the path to your logo image
// import { Badge } from "@/components/ui/badge";
// import { FaRegHeart } from "react-icons/fa";
// import { FaTruck } from "react-icons/fa6";

// import {
//   MdGridView,
//   MdOutlineCreditCard,
//   MdOutlineMessage,
//   MdOutlineRateReview,
// } from "react-icons/md";
// import { Link, useLocation } from "react-router-dom";

// export interface SidebarItem {
//   icon: React.ComponentType<{ className?: string }>;
//   label: string;
//   href: string;
//   badge?: string;
// }

// export interface SidebarProps {
//   items?: SidebarItem[];
//   brandName?: string;
//   userName?: string;
//   userEmail?: string;
//   userAvatar?: string;
//   userInitials?: string;
//   onItemClick?: () => void;
// }

// const defaultSidebarItems: SidebarItem[] = [
//   { icon: MdGridView, label: "Dashboard", href: "/client-dashboard/dashboard" },
//   { icon: FaTruck, label: "Products", href: "/client-dashboard/products" },
//   { icon: MdOutlineMessage, label: "Orders", href: "/client-dashboard/orders" },
//   {
//     icon: MdOutlineCreditCard,
//     label: "Inquiries",
//     href: "/client-dashboard/inquiries",
//   },
//   { icon: FaRegHeart, label: "Payments", href: "/client-dashboard/payments" },
//   {
//     icon: MdOutlineRateReview,
//     label: "Analytics",
//     href: "/client-dashboard/analytics",
//   },
// ];

// const ClientSidebar: React.FC<SidebarProps> = ({
//   items = defaultSidebarItems,
//   onItemClick,
// }) => {
//   const location = useLocation();

//   return (
//     <div
//       className="flex flex-col h-full bg-[#17171A] object-cover rounded-l-3xl rounded-r-3xl"
//       style={{ boxShadow: "3px 4px 42.3px 0px #0000001A" }}
//     >
//       {/* Logo */}
//       <div className="flex items-center justify-center p-2 sm:p-3 border-b border-[#212C64] mt-1">
//         <img
//           src={logo}
//           alt="Logo"
//           className="w-[24px] h-[44px] md:w-16 rounded-full "
//         />
//         <p className="text-[#F2F2F2] font-montserrat text-[20px] not-italic font-semibold leading-[120%]">
//           LABEL BRIDGE
//         </p>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4 md:p-8">
//         <div className="space-y-4 md:space-y-6">
//           {items.map((item) => {
//             const isActive = location.pathname === item.href;
//             return (
//               <Link
//                 key={item.label}
//                 to={item.href}
//                 onClick={onItemClick}
//                 className={`flex items-center justify-between w-full px-3 py-2 text-sm font-normal rounded-none transition-colors border-b-2 ${
//                   isActive
//                     ? "text-[#F7#3A5CFF"
//                     : "text-white border-transparent hover:text-[#F4#3A5CFF"
//                 }`}
//               >
//                 <div className="flex items-center space-x-2 md:text-lg">
//                   <item.icon
//                     className={`w-5 h-5 ${
//                       isActive
//                         ? "text-[#F7813B]"
//                         : "text-white hover:text-[#F46A39]"
//                     }`}
//                   />
//                   <span>{item.label}</span>
//                 </div>
//                 {item.badge && (
//                   <Badge variant="secondary" className="text-xs">
//                     {item.badge}
//                   </Badge>
//                 )}
//               </Link>
//             );
//           })}
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default ClientSidebar;
