import logo from "@/assets/icons/logo.svg"; // Adjust the path to your logo image
import { Badge } from "@/components/ui/badge";
import { FaTruck } from "react-icons/fa6";
import {
  MdGridView,
  MdOutlineMessage,
  MdOutlineRateReview,
} from "react-icons/md";
import { RiShareBoxLine } from "react-icons/ri";
import { ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  badge?: string;
  children?: { label: string; href: string }[];
}

export interface SidebarProps {
  items?: SidebarItem[];
  onItemClick?: () => void;
}

const defaultSidebarItems: SidebarItem[] = [
  { icon: MdGridView, label: "Dashboard", href: "/client-dashboard/dashboard" },
  {
    icon: MdOutlineRateReview,
    label: "Analytics",
    children: [
      { label: "YouTube", href: "/client-dashboard/analytics/youtube" },
      { label: "Spotify", href: "/client-dashboard/analytics/spotify" },
      { label: "Apple Music", href: "/client-dashboard/analytics/apple-music" },
      { label: "SoundCloud", href: "/client-dashboard/analytics/soundcloud" },
    ],
  },
  {
    icon: FaTruck,
    label: "Accounting",
    children: [
      { label: "Statement", href: "/client-dashboard/accounting/statement" },
      {
        label: "Profit & Loss",
        href: "/client-dashboard/accounting/profit-loss",
      },
    ],
  },
  {
    icon: MdOutlineMessage,
    label: "Catalog",
    children: [
      { label: "Releases", href: "/client-dashboard/catalog/releases" },
      { label: "Submit", href: "/client-dashboard/catalog/submit" },
      { label: "Back Catalog", href: "/client-dashboard/catalog/back-catalog" },
      { label: "Split Sheets", href: "/client-dashboard/catalog/split-sheets" },
    ],
  },
];

const ClientSidebar: React.FC<SidebarProps> = ({
  items = defaultSidebarItems,
  onItemClick,
}) => {
  const location = useLocation();
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const toggleMenu = (label: string) => {
    setOpenMenu(openMenu === label ? null : label);
  };

  return (
    <div
      className="flex flex-col h-full bg-[#17171A] object-cover rounded-l-3xl rounded-r-3xl"
      style={{ boxShadow: "3px 4px 42.3px 0px #0000001A" }}
    >
      {/* Logo */}
      <Link to="/client-dashboard/dashboard">
        <div className="flex items-center justify-center p-2 sm:p-3 border-b border-[#212C64] mt-1">
          <img
            src={logo}
            alt="Logo"
            className="w-[24px] h-[44px] md:w-16 rounded-full"
          />
          <p className="text-[#F2F2F2] font-montserrat text-[20px] font-semibold leading-[120%] ml-2">
            LABEL BRIDGE
          </p>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex-1 p-4 md:p-8">
        <div className="space-y-4 md:space-y-6">
          {items.map((item) => {
            const isActive =
              location.pathname === item.href ||
              item.children?.some((child) => location.pathname === child.href);
            const isOpen = openMenu === item.label;

            return (
              <div key={item.label}>
                {/* Parent Item */}
                {item.href && !item.children ? (
                  // Direct route (Dashboard)
                  <Link
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
                          isActive ? "text-[#3A5CFF]" : "text-white"
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>
                  </Link>
                ) : (
                  // Expandable menu (Analytics, Accounting, Catalog)
                  <button
                    onClick={() => toggleMenu(item.label)}
                    className={`flex items-center justify-between w-full px-3 py-2 text-sm font-normal transition-all duration-300 ease-in-out cursor-pointer ${
                      isActive
                        ? "text-[#3A5CFF] bg-[#1C1D28] rounded-xl shadow-md"
                        : "text-white hover:text-[#3A5CFF] hover:bg-[#1C1D28]/80 hover:rounded-xl hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center space-x-2 md:text-lg">
                      <item.icon
                        className={`w-5 h-5 transition-colors duration-300 ${
                          isActive ? "text-[#3A5CFF]" : "text-white"
                        }`}
                      />
                      <span>{item.label}</span>
                    </div>

                    {item.children && (
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}

                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-[#3A5CFF]/10 text-[#3A5CFF] border border-[#3A5CFF]/30"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </button>
                )}

                {/* Child Items */}
                {item.children && isOpen && (
                  <div className="ml-6 mt-2 space-y-2">
                    {item.children.map((child) => {
                      const childActive = location.pathname === child.href;
                      return (
                        <Link
                          key={child.label}
                          to={child.href}
                          onClick={onItemClick}
                          className={`block px-3 py-2 text-sm rounded-lg transition-all ${
                            childActive
                              ? "text-[#3A5CFF] bg-[#1C1D28]"
                              : "text-gray-300 hover:text-[#3A5CFF] hover:bg-[#1C1D28]/70"
                          }`}
                        >
                          {child.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Help & Support */}
      <div className="p-2 md:p-4 border-t border-[#212C64]">
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
// import { FaTruck } from "react-icons/fa6";
// import {
//   MdGridView,
//   MdOutlineMessage,
//   MdOutlineRateReview,
// } from "react-icons/md";
// import { RiShareBoxLine } from "react-icons/ri";
// import { ChevronDown } from "lucide-react";
// import { Link, useLocation } from "react-router-dom";
// import { useState } from "react";

// export interface SidebarItem {
//   icon: React.ComponentType<{ className?: string }>;
//   label: string;
//   href?: string;
//   badge?: string;
//   children?: { label: string; href: string }[];
// }

// export interface SidebarProps {
//   items?: SidebarItem[];
//   onItemClick?: () => void;
// }

// const defaultSidebarItems: SidebarItem[] = [
//   { icon: MdGridView, label: "Dashboard", href: "/client-dashboard/dashboard" },
//   {
//     icon: MdOutlineRateReview,
//     label: "Analytics",
//     children: [
//       { label: "YouTube", href: "/client-dashboard/analytics/youtube" },
//       { label: "Spotify", href: "/client-dashboard/analytics/spotify" },
//       { label: "Apple Music", href: "/client-dashboard/analytics/apple-music" },
//       { label: "SoundCloud", href: "/client-dashboard/analytics/soundcloud" },
//     ],
//   },
//   {
//     icon: FaTruck,
//     label: "Accounting",
//     children: [
//       { label: "Statement", href: "/client-dashboard/accounting/statement" },
//       {
//         label: "Profit & Loss",
//         href: "/client-dashboard/accounting/profit-loss",
//       },
//     ],
//   },
//   {
//     icon: MdOutlineMessage,
//     label: "Catalog",
//     children: [
//       { label: "Releases", href: "/client-dashboard/catalog/releases" },
//       { label: "Submit", href: "/client-dashboard/catalog/submit" },
//       { label: "Back Catalog", href: "/client-dashboard/catalog/back-catalog" },
//       { label: "Split Sheets", href: "/client-dashboard/catalog/split-sheets" },
//     ],
//   },
// ];

// const ClientSidebar: React.FC<SidebarProps> = ({
//   items = defaultSidebarItems,
//   onItemClick,
// }) => {
//   const location = useLocation();
//   const [openMenu, setOpenMenu] = useState<string | null>(null);

//   const toggleMenu = (label: string) => {
//     setOpenMenu(openMenu === label ? null : label);
//   };

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
//           className="w-[24px] h-[44px] md:w-16 rounded-full"
//         />
//         <p className="text-[#F2F2F2] font-montserrat text-[20px] font-semibold leading-[120%]">
//           LABEL BRIDGE
//         </p>
//       </div>

//       {/* Navigation */}
//       <nav className="flex-1 p-4 md:p-8">
//         <div className="space-y-4 md:space-y-6">
//           {items.map((item) => {
//             const isActive =
//               location.pathname === item.href ||
//               item.children?.some((child) => location.pathname === child.href);
//             const isOpen = openMenu === item.label;

//             return (
//               <div key={item.label}>
//                 {/* Parent Item */}
//                 <button
//                   onClick={() =>
//                     item.children ? toggleMenu(item.label) : onItemClick?.()
//                   }
//                   className={`flex items-center justify-between w-full px-3 py-2 text-sm font-normal transition-all duration-300 ease-in-out cursor-pointer ${
//                     isActive
//                       ? "text-[#3A5CFF] bg-[#1C1D28] rounded-xl shadow-md"
//                       : "text-white hover:text-[#3A5CFF] hover:bg-[#1C1D28]/80 hover:rounded-xl hover:shadow-md"
//                   }`}
//                 >
//                   <div className="flex items-center space-x-2 md:text-lg cursor-pointer">
//                     <item.icon
//                       className={`w-5 h-5 transition-colors duration-300 ${
//                         isActive ? "text-[#3A5CFF]" : "text-white"
//                       }`}
//                     />
//                     <span>{item.label}</span>
//                   </div>

//                   {item.children && (
//                     <ChevronDown
//                       className={`w-4 h-4 transform transition-transform duration-300 cursor-pointer ${
//                         isOpen ? "rotate-180" : ""
//                       }`}
//                     />
//                   )}

//                   {item.badge && (
//                     <Badge
//                       variant="secondary"
//                       className="text-xs bg-[#3A5CFF]/10 text-[#3A5CFF] border border-[#3A5CFF]/30"
//                     >
//                       {item.badge}
//                     </Badge>
//                   )}
//                 </button>

//                 {/* Child Items */}
//                 {item.children && isOpen && (
//                   <div className="ml-6 mt-2 space-y-2">
//                     {item.children.map((child) => {
//                       const childActive = location.pathname === child.href;
//                       return (
//                         <Link
//                           key={child.label}
//                           to={child.href}
//                           onClick={onItemClick}
//                           className={`block px-3 py-2 text-sm rounded-lg transition-all ${
//                             childActive
//                               ? "text-[#3A5CFF] bg-[#1C1D28]"
//                               : "text-gray-300 hover:text-[#3A5CFF] hover:bg-[#1C1D28]/70"
//                           }`}
//                         >
//                           {child.label}
//                         </Link>
//                       );
//                     })}
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </nav>

//       {/* Help & Support */}
//       <div className="p-2 md:p-4 border-t border-[#212C64]">
//         <div className="flex justify-center mb-1">
//           <img src={logo} alt="Logo" className="h-8 w-auto" />
//         </div>
//         <Link
//           to="/client-dashboard/help-support"
//           className="flex items-center justify-center space-x-3 text-white hover:text-[#3A5BF8] transition-colors"
//         >
//           <span className="text-sm font-medium">Help & Support</span>
//           <RiShareBoxLine className="w-5 h-5 text-gray-300" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ClientSidebar;

// import logo from "@/assets/icons/logo.svg"; // Adjust the path to your logo image
// import { Badge } from "@/components/ui/badge";
// import { FaTruck } from "react-icons/fa6";
// import {
//   MdGridView,
//   MdOutlineMessage,
//   MdOutlineRateReview,
// } from "react-icons/md";
// import { RiShareBoxLine } from "react-icons/ri";
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
//   {
//     icon: MdOutlineRateReview,
//     label: "Analytics",
//     href: "/client-dashboard/analytics",
//   },

//   { icon: FaTruck, label: "Accounting", href: "/client-dashboard/products" },
//   {
//     icon: MdOutlineMessage,
//     label: "Catalog",
//     href: "/client-dashboard/orders",
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
//                 className={`flex items-center justify-between w-full px-3 py-2 text-sm font-normal transition-all duration-300 ease-in-out ${
//                   isActive
//                     ? "text-[#3A5CFF] bg-[#1C1D28] rounded-xl shadow-md"
//                     : "text-white hover:text-[#3A5CFF] hover:bg-[#1C1D28]/80 hover:rounded-xl hover:shadow-md"
//                 }`}
//               >
//                 <div className="flex items-center space-x-2 md:text-lg">
//                   <item.icon
//                     className={`w-5 h-5 transition-colors duration-300 ${
//                       isActive
//                         ? "text-[#3A5CFF]"
//                         : "text-white group-hover:text-[#3A5CFF]"
//                     }`}
//                   />
//                   <span>{item.label}</span>
//                 </div>

//                 {item.badge && (
//                   <Badge
//                     variant="secondary"
//                     className="text-xs bg-[#3A5CFF]/10 text-[#3A5CFF] border border-[#3A5CFF]/30"
//                   >
//                     {item.badge}
//                   </Badge>
//                 )}
//               </Link>
//             );
//           })}
//         </div>
//       </nav>

//       {/* Help & Support */}

//       <div className="p-2 md:p-4 border-t border-[#212C64]">
//         {/* Centered Logo */}
//         <div className="flex justify-center mb-1">
//           <img src={logo} alt="Logo" className="h-8 w-auto" />
//         </div>

//         <Link
//           to="/client-dashboard/help-support"
//           className="flex items-center justify-center space-x-3 text-white hover:text-[#3A5BF8] transition-colors"
//         >
//           <span className="text-sm font-medium">Help & Support</span>
//           <RiShareBoxLine className="w-5 h-5 text-gray-300" />
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ClientSidebar;

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
