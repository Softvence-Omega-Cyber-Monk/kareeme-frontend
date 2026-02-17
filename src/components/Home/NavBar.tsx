import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ShoppingCart } from "lucide-react";
// import logoImage from "@/assets/logo 1.png";
import { getCartCount } from "@/utils/cartUtils";
import { useCart } from "@/contexts/CartContext";
import CartModal from "@/components/CartModal";

import logo from "@/assets/kareme/icon/logo2.png";
import star from "@/assets/kareme/icon/star1.png";
import { useSelector } from "react-redux";
import { selectCart } from "@/redux/features/cart/cartSlice";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAppSelector } from "@/redux/hooks/redux-hook";
import { selectCurrentUser, selectCurrentToken } from "@/redux/features/auth/authSlice";
import { useLogout } from "@/hooks/useLogout";
import userIcon from "@/assets/icons/user.svg";
import { Settings, LogOut, LayoutDashboard } from "lucide-react";

export const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { isCartOpen, openCart, closeCart } = useCart();
  const cartItems = useSelector(selectCart);
  
  const user = useAppSelector(selectCurrentUser);
  const token = useAppSelector(selectCurrentToken);
  const { handleLogout } = useLogout();
  const isAuthenticated = !!token && !!user;

  // Listen for cart updates
  useEffect(() => {
    // Initial load
    setCartCount(getCartCount());

    const handleCartUpdate = () => {
      setCartCount(getCartCount());
    };

    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Label Bridge", path: "/labelbridge" },
    { name: "News & Articles", path: "/news-articles" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];

  const handleCartClick = (e: React.MouseEvent) => {
    e.preventDefault();
    openCart();
    setMenuOpen(false);
  };

  return (
    <>
      <div className="w-full max-w-[1350px] mx-auto px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-2xl rounded-full shadow-lg shadow-black/10 flex items-center justify-between relative z-50">
        {/* Logo */}
        {/* <Link to="/">
          {" "}
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full cursor-pointer"
          />
        </Link> */}

        <Link
          to="/"
          className="relative flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 md:w-15 md:h-15"
        >
          {/* Rotating Star Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={star}
              alt="Star"
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-15 md:h-15 rounded-full object-cover animate-[spin_12s_linear_infinite]"
            />
          </div>

          {/* Center Logo (Static & smaller for mobile) */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full object-cover z-10 shadow-lg"
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-3 lg:gap-5">
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`whitespace-nowrap px-4 py-2 text-sm lg:text-base font-medium 
                  rounded-xl transition-all duration-300 flex items-center gap-2
                  ${
                    isActive
                      ? "text-[#00ff00] bg-green-500/10 shadow-md"
                      : "text-gray-300 hover:text-[#05E306] hover:bg-white/5"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Side (Cart + Sign In) */}
        <div className="hidden md:flex items-center gap-6">
          {/* Cart Icon with Badge */}
          <button
            onClick={handleCartClick}
            className="relative p-2 rounded-xl cursor-pointer transition-all duration-300 
              hover:bg-white/10"
          >
            {cartItems.totalQuantity > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
                w-5 h-5 flex items-center justify-center rounded-full shadow-md"
              >
                {cartItems.totalQuantity > 9 ? "9+" : cartItems.totalQuantity}
              </span>
            )}

            <ShoppingCart
              size={22}
              className="text-gray-300 hover:text-white"
            />
          </button>

          {/* Auth State Button */}
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 cursor-pointer outline-none group">
                  <div className="relative">
                    <img
                      src={user?.profilePictureUrl || userIcon}
                      alt="User"
                      className="w-10 h-10 rounded-full border-2 border-green-500/20 group-hover:border-green-500/50 transition-all object-cover"
                    />
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-[#0F172A] border border-white/10 text-white p-2 rounded-2xl shadow-2xl backdrop-blur-xl"
              >
                <div className="px-3 py-2 border-b border-white/5 mb-2">
                  <p className="text-sm font-medium truncate">{user?.name}</p>
                  <p className="text-xs text-gray-400 truncate">{user?.email}</p>
                </div>
                <Link to="/client-dashboard">
                  <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-xl cursor-pointer hover:bg-white/5 focus:bg-white/5 focus:text-[#00ff00]">
                    <LayoutDashboard size={18} />
                    <span>Dashboard</span>
                  </DropdownMenuItem>
                </Link>
                <Link to="/client-dashboard/catalog/settings">
                  <DropdownMenuItem className="flex items-center gap-2 p-2 rounded-xl cursor-pointer hover:bg-white/5 focus:bg-white/5 focus:text-[#00ff00]">
                    <Settings size={18} />
                    <span>Settings</span>
                  </DropdownMenuItem>
                </Link>
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="flex items-center gap-2 p-2 rounded-xl cursor-pointer hover:bg-red-500/10 text-red-400 hover:text-red-400 focus:bg-red-500/10 focus:text-red-400"
                >
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <button className="bg-white text-black px-6 py-2.5 rounded-full text-sm font-semibold shadow-lg hover:shadow-white/10 hover:bg-gray-100 transition-all active:scale-95">
                Sign In
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden bg-[#283531] text-white text-3xl cursor-pointer px-2 py-1  
            backdrop-blur-sm active:scale-95 rounded-lg"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className="absolute top-[82px] left-0 w-full bg-black/95 backdrop-blur-xl 
              rounded-2xl shadow-xl py-4 flex flex-col gap-3 md:hidden z-50"
          >
            {links.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMenuOpen(false)}
                  className={`w-[90%] mx-auto text-center py-3 text-lg rounded-xl 
                    transition-all duration-300 flex justify-center items-center gap-2
                    ${
                      isActive
                        ? "bg-green-500/10 text-[#00ff00] shadow-lg shadow-green-500/20"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* Mobile Cart with Badge */}
            <button
              onClick={handleCartClick}
              className="w-[90%] mx-auto relative text-center py-3 text-lg rounded-xl 
                flex justify-center items-center gap-2 text-gray-300 hover:text-white 
                hover:bg-white/5 transition-all"
            >
              {cartCount > 0 && (
                <span
                  className="absolute top-2 right-10 bg-red-500 text-white text-xs 
                  w-5 h-5 flex items-center justify-center rounded-full shadow-md"
                >
                  {cartCount > 9 ? "9+" : cartCount}
                </span>
              )}
              <ShoppingCart size={22} />
              Cart
            </button>

            {/* Mobile Auth State */}
            <div className="w-[90%] mx-auto pt-2 border-t border-white/5 mt-2">
              {isAuthenticated ? (
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 px-4 py-3">
                    <img
                      src={user?.profilePictureUrl || userIcon}
                      alt="User"
                      className="w-12 h-12 rounded-full border border-white/10"
                    />
                    <div className="flex flex-col">
                      <span className="text-white font-medium">{user?.name}</span>
                      <span className="text-gray-400 text-sm truncate max-w-[180px]">
                        {user?.email}
                      </span>
                    </div>
                  </div>
                  <Link
                    to="/client-dashboard"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    to="/client-dashboard/catalog/settings"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-xl transition-all"
                  >
                    <Settings size={20} />
                    <span>Settings</span>
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className="flex items-center gap-3 px-4 py-3 text-red-400 hover:bg-red-400/5 rounded-xl transition-all w-full text-left"
                  >
                    <LogOut size={20} />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link to="/login" className="w-full" onClick={() => setMenuOpen(false)}>
                  <button className="w-full py-4 bg-white text-black rounded-2xl text-lg font-bold shadow-lg transition-all active:scale-95">
                    Sign In
                  </button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Cart Modal */}
      {isCartOpen && <CartModal onClose={closeCart} />}
    </>
  );
};
