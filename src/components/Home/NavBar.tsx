import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import { ShoppingCart } from "lucide-react";
// import logoImage from "@/assets/logo 1.png";
import { getCartCount } from "@/utils/cartUtils";
import { useCart } from "@/contexts/CartContext";
import CartModal from "@/components/CartModal";

import logo from "@/assets/kareme/icon/logo2.png";
import star from "@/assets/kareme/icon/star1.png";

export const NavBar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const { isCartOpen, openCart, closeCart } = useCart();

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
            src={logoImage}
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
        <div className="hidden md:flex items-center gap-4">
          {/* Cart Icon with Badge */}
          <button
            onClick={handleCartClick}
            className={`relative p-2 rounded-xl cursor-pointer transition-all duration-300 
              hover:bg-white/10`}
          >
            {cartCount > 0 && (
              <span
                className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
                w-5 h-5 flex items-center justify-center rounded-full shadow-md"
              >
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}

            <ShoppingCart
              size={22}
              className="text-gray-300 hover:text-white"
            />
          </button>

          {/* Sign In button */}
          <Link to="/login">
            <button
              className="bg-[#1B1E30] text-white px-6 py-3 rounded-full 
              text-sm font-medium shadow-md hover:bg-[#2A2E45] transition-all 
              active:scale-95 cursor-pointer"
            >
              Sign In
            </button>
          </Link>
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

            {/* Mobile Sign in */}
            <Link
              to="/login"
              className="w-[90%] mx-auto"
              onClick={() => setMenuOpen(false)}
            >
              <button
                className="w-full py-3 bg-[#155DFC] rounded-xl text-lg text-white 
                shadow-md hover:bg-[#0F4CD3] transition-all cursor-pointer"
              >
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* Cart Modal */}
      {isCartOpen && <CartModal onClose={closeCart} />}
    </>
  );
};

// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShoppingCart } from "lucide-react";
// import logoImage from "@/assets/logo 1.png";
// import { getCartCount } from "@/utils/cartUtils"; // Adjust path

// export const NavBar = () => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [cartCount, setCartCount] = useState(getCartCount());

//   // Listen for cart updates
//   useEffect(() => {
//     const handleCartUpdate = () => {
//       setCartCount(getCartCount());
//     };

//     window.addEventListener('cartUpdated', handleCartUpdate);
//     return () => window.removeEventListener('cartUpdated', handleCartUpdate);
//   }, []);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Label Bridge", path: "/labelbridge" },
//     { name: "News & Articles", path: "/news-articles" },
//     { name: "About", path: "/about" },
//     { name: "Shop", path: "/shop" },
//     // { name: "Cart", path: "/cart" }, // Added Cart link
//   ];

//   const isCartActive = location.pathname === "/cart";

//   return (
//     <div className="w-full max-w-[1350px] mx-auto px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-2xl rounded-full shadow-lg shadow-black/10 flex items-center justify-between relative z-50">
//       {/* Logo */}
//       <motion.img
//         src={logoImage}
//         alt="Logo"
//         className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
//       />

//       {/* Desktop Links */}
//       <div className="hidden md:flex items-center gap-3 lg:gap-5">
//         {links.map((link) => {
//           const isActive = location.pathname === link.path;

//           return (
//             <a
//               key={link.name}
//               href={link.path}
//               className={`whitespace-nowrap px-4 py-2 text-sm lg:text-base font-medium
//                 rounded-xl transition-all duration-300 flex items-center gap-2
//                 ${
//                   isActive
//                     ? "text-[#00ff00] bg-green-500/10 shadow-md"
//                     : "text-gray-300 hover:text-[#05E306]"
//                 }`}
//             >
//               {link.name}
//               {link.name === "Cart" && cartCount > 0 && (
//                 <span className="bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                   {cartCount}
//                 </span>
//               )}
//             </a>
//           );
//         })}
//       </div>

//       {/* --- RIGHT SIDE (Cart + Sign In) --- */}
//       <div className="hidden md:flex items-center gap-4">
//         {/* Cart Icon with Badge */}
//         <a
//           href="/cart"
//           className={`relative p-2 rounded-xl transition-all duration-300
//             ${isCartActive ? "bg-green-500/10" : "hover:bg-white/10"}`}
//         >
//           {/* Badge */}
//           {cartCount > 0 && (
//             <span
//               className="absolute -top-1 -right-1 bg-red-500 text-white text-xs
//               w-5 h-5 flex items-center justify-center rounded-full shadow-md"
//             >
//               {cartCount}
//             </span>
//           )}

//           <ShoppingCart
//             size={22}
//             className={isCartActive ? "!text-[#00ff00]" : "text-gray-300"}
//           />
//         </a>

//         {/* Sign In button */}
//         <Link to="/login">
//           <button
//             className="bg-[#1B1E30] cursor-pointer text-white px-6 py-3 rounded-full
//           text-sm font-medium shadow-md hover:bg-[#1B1E30] transition-all active:scale-95"
//           >
//             Sign In
//           </button>
//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="md:hidden bg-[#283531] text-white text-3xl cursor-pointer px-2 py-1
//           backdrop-blur-sm active:scale-95"
//       >
//         {menuOpen ? "✕" : "☰"}
//       </button>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div
//           className="absolute top-[82px] left-0 w-full bg-black/90 backdrop-blur-xl
//             rounded-2xl shadow-xl py-4 flex flex-col gap-3 md:hidden"
//         >
//           {links.map((link) => {
//             const isActive = location.pathname === link.path;

//             return (
//               <a
//                 key={link.name}
//                 href={link.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={`w-[90%] mx-auto text-center py-3 text-lg rounded-xl
//                   transition-all duration-300 flex justify-center items-center gap-2
//                   ${
//                     isActive
//                       ? "bg-green-500/10 !text-[#00ff00] shadow-lg shadow-green-500/20"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//               >
//                 {link.name}
//                 {link.name === "Cart" && cartCount > 0 && (
//                   <span className="bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
//                     {cartCount}
//                   </span>
//                 )}
//               </a>
//             );
//           })}

//           {/* Mobile Cart with Badge */}
//           <a
//             href="/cart"
//             onClick={() => setMenuOpen(false)}
//             className="w-[90%] mx-auto relative text-center py-3 text-lg rounded-xl
//             flex justify-center items-center gap-2 text-gray-300 hover:text-white"
//           >
//             {/* Badge */}
//             {cartCount > 0 && (
//               <span
//                 className="absolute top-2 right-10 bg-red-500 text-white text-xs
//                 w-5 h-5 flex items-center justify-center rounded-full shadow-md"
//               >
//                 {cartCount}
//               </span>
//             )}

//             <ShoppingCart size={22} />
//           </a>

//           {/* Mobile Sign in */}
//           <button className="w-[90%] mx-auto py-3 bg-[#155DFC] cursor-pointer rounded-xl text-lg text-white shadow-md">
//             Sign In
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShoppingCart } from "lucide-react";
// import logoImage from "@/assets/logo 1.png";

// export const NavBar = () => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Example cart count — replace with real data later
//   const cartCount = 3;

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Label Bridge", path: "/labelbridge" },
//     { name: "News & Articles", path: "/news-articles" },
//     { name: "About", path: "/about" },
//     { name: "Shop", path: "/shop" },
//   ];

//   const isCartActive = location.pathname === "/cart";

//   return (
//     <div className="w-full max-w-[1350px] mx-auto px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-2xl rounded-full shadow-lg shadow-black/10 flex items-center justify-between relative z-50">
//       {/* Logo */}
//       <motion.img
//         src={logoImage}
//         alt="Logo"
//         className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
//       />

//       {/* Desktop Links */}
//       <div className="hidden md:flex items-center gap-3 lg:gap-5">
//         {links.map((link) => {
//           const isActive = location.pathname === link.path;

//           return (
//             <a
//               key={link.name}
//               href={link.path}
//               className={`whitespace-nowrap px-4 py-2 text-sm lg:text-base font-medium
//                 rounded-xl transition-all duration-300 flex items-center gap-2
//                 ${
//                   isActive
//                     ? "text-[#00ff00] bg-green-500/10 shadow-md"
//                     : "text-gray-300 hover:text-[#05E306]"
//                 }`}
//             >
//               {link.name}
//             </a>
//           );
//         })}
//       </div>

//       {/* --- RIGHT SIDE (Cart + Sign In) --- */}
//       <div className="hidden md:flex items-center gap-4">
//         {/* Cart Icon with Badge */}
//         <a
//           href="/cart"
//           className={`relative p-2 rounded-xl transition-all duration-300
//             ${isCartActive ? "bg-green-500/10" : "hover:bg-white/10"}`}
//         >
//           {/* Badge */}
//           {cartCount > 0 && (
//             <span
//               className="absolute -top-1 -right-1 bg-red-500 text-white text-xs
//               w-5 h-5 flex items-center justify-center rounded-full shadow-md"
//             >
//               {cartCount}
//             </span>
//           )}

//           <ShoppingCart
//             size={22}
//             className={isCartActive ? "!text-[#00ff00]" : "text-gray-300"}
//           />
//         </a>

//         {/* Sign In button */}
//         <Link to="/login">
//           <button
//             className="bg-[#1B1E30] cursor-pointer text-white px-6 py-3 rounded-full
//           text-sm font-medium shadow-md hover:bg-[#1B1E30] transition-all active:scale-95"
//           >
//             Sign In
//           </button>
//         </Link>
//       </div>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="md:hidden bg-[#283531] text-white text-3xl cursor-pointer px-2 py-1
//           backdrop-blur-sm active:scale-95"
//       >
//         {menuOpen ? "✕" : "☰"}
//       </button>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div
//           className="absolute top-[82px] left-0 w-full bg-black/90 backdrop-blur-xl
//             rounded-2xl shadow-xl py-4 flex flex-col gap-3 animate-fadeIn md:hidden"
//         >
//           {links.map((link) => {
//             const isActive = location.pathname === link.path;

//             return (
//               <a
//                 key={link.name}
//                 href={link.path}
//                 onClick={() => setMenuOpen(false)}
//                 className={`w-[90%] mx-auto text-center py-3 text-lg rounded-xl
//                   transition-all duration-300 flex justify-center items-center gap-2
//                   ${
//                     isActive
//                       ? "bg-green-500/10 !text-[#00ff00] shadow-lg shadow-green-500/20"
//                       : "text-gray-300 hover:text-white"
//                   }`}
//               >
//                 {link.name}
//               </a>
//             );
//           })}

//           {/* Mobile Cart with Badge */}
//           <a
//             href="/cart"
//             onClick={() => setMenuOpen(false)}
//             className="w-[90%] mx-auto relative text-center py-3 text-lg rounded-xl
//             flex justify-center items-center gap-2 text-gray-300 hover:text-white"
//           >
//             {/* Badge */}
//             {cartCount > 0 && (
//               <span
//                 className="absolute top-2 right-10 bg-red-500 text-white text-xs
//                 w-5 h-5 flex items-center justify-center rounded-full shadow-md"
//               >
//                 {cartCount}
//               </span>
//             )}

//             <ShoppingCart size={22} />
//           </a>

//           {/* Mobile Sign in */}
//           <button className="w-[90%] mx-auto py-3 bg-[#155DFC] cursor-pointer rounded-xl text-lg text-white shadow-md">
//             Sign In
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };
