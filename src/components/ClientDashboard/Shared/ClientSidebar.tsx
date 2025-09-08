import logo from "@/assets/icons/logo.svg"; // Adjust the path to your logo image
import { Badge } from "@/components/ui/badge";
import { FaRegHeart, FaRegStar } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { GrAnnounce } from "react-icons/gr";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import {
  MdGridView,
  MdOutlineCreditCard,
  MdOutlineMessage,
  MdOutlineRateReview,
} from "react-icons/md";
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
  { icon: MdGridView, label: "Dashboard", href: "/seller-dashboard/dashboard" },
  { icon: FaTruck, label: "Products", href: "/seller-dashboard/products" },
  { icon: MdOutlineMessage, label: "Orders", href: "/seller-dashboard/orders" },
  {
    icon: MdOutlineCreditCard,
    label: "Inquiries",
    href: "/seller-dashboard/inquiries",
  },
  { icon: FaRegHeart, label: "Payments", href: "/seller-dashboard/payments" },
  {
    icon: MdOutlineRateReview,
    label: "Analytics",
    href: "/seller-dashboard/analytics",
  },
  {
    icon: GrAnnounce,
    label: "Promotions",
    href: "/seller-dashboard/promotions",
  },
  { icon: FaRegStar, label: "Reviews", href: "/seller-dashboard/reviews" },
  {
    icon: IoSettingsOutline,
    label: "Settings",
    href: "/seller-dashboard/settings",
  },
  {
    icon: IoMdHelpCircleOutline,
    label: "Help",
    href: "/seller-dashboard/help",
  },
];

const ClientSidebar: React.FC<SidebarProps> = ({
  items = defaultSidebarItems,
  onItemClick,
}) => {
  const location = useLocation();

  return (
    <div
      className="flex flex-col h-full bg-[#17171A]"
      style={{ boxShadow: "3px 4px 42.3px 0px #0000001A" }}
    >
      {/* Logo */}
      <div className="flex items-center justify-center p-2 sm:p-3 border-b border-[#212C64] ">
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
                className={`flex items-center justify-between w-full px-3 py-2 text-sm font-normal rounded-none transition-colors border-b-2 ${
                  isActive
                    ? "text-[#F7813B] border-[#F7813B]"
                    : "text-white border-transparent hover:text-[#F46A39] hover:border-[#F46A39]"
                }`}
              >
                <div className="flex items-center space-x-2 md:text-lg">
                  <item.icon
                    className={`w-5 h-5 ${
                      isActive
                        ? "text-[#F7813B]"
                        : "text-white hover:text-[#F46A39]"
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <Badge variant="secondary" className="text-xs">
                    {item.badge}
                  </Badge>
                )}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default ClientSidebar;
