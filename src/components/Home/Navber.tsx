import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import logoImage from "@/assets/logo 1.png";

export const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Example cart count — replace with real data later
  const cartCount = 3;

  const links = [
    { name: "Home", path: "/" },
    { name: "Label Bridge", path: "/labelbridge" },
    { name: "News & Articles", path: "/news-articles" },
    { name: "About", path: "/about" },
    { name: "Shop", path: "/shop" },
  ];

  const isCartActive = location.pathname === "/cart";

  return (
    <div className="w-full max-w-[1350px] mx-auto px-4 md:px-6 py-3 md:py-4 bg-white/10 backdrop-blur-2xl rounded-full shadow-lg shadow-black/10 flex items-center justify-between relative z-50">
      {/* Logo */}
      <motion.img
        src={logoImage}
        alt="Logo"
        className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
      />

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-3 lg:gap-5">
        {links.map((link) => {
          const isActive = location.pathname === link.path;

          return (
            <a
              key={link.name}
              href={link.path}
              className={`whitespace-nowrap px-4 py-2 text-sm lg:text-base font-medium 
                rounded-xl transition-all duration-300 flex items-center gap-2
                ${
                  isActive
                    ? "text-[#00ff00] bg-green-500/10 shadow-md"
                    : "text-gray-300 hover:text-[#05E306]"
                }`}
            >
              {link.name}
            </a>
          );
        })}
      </div>

      {/* --- RIGHT SIDE (Cart + Sign In) --- */}
      <div className="hidden md:flex items-center gap-4">
        {/* Cart Icon with Badge */}
        <a
          href="/cart"
          className={`relative p-2 rounded-xl transition-all duration-300 
            ${isCartActive ? "bg-green-500/10" : "hover:bg-white/10"}`}
        >
          {/* Badge */}
          {cartCount > 0 && (
            <span
              className="absolute -top-1 -right-1 bg-red-500 text-white text-xs 
              w-5 h-5 flex items-center justify-center rounded-full shadow-md"
            >
              {cartCount}
            </span>
          )}

          <ShoppingCart
            size={22}
            className={isCartActive ? "!text-[#00ff00]" : "text-gray-300"}
          />
        </a>

        {/* Sign In button */}
        <Link to="/login">
          <button
            className="bg-[#1B1E30] cursor-pointer text-white px-6 py-3 rounded-full 
          text-sm font-medium shadow-md hover:bg-[#1B1E30] transition-all active:scale-95"
          >
            Sign In
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden bg-[#283531] text-white text-3xl cursor-pointer px-2 py-1  
          backdrop-blur-sm active:scale-95"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="absolute top-[82px] left-0 w-full bg-black/90 backdrop-blur-xl 
            rounded-2xl shadow-xl py-4 flex flex-col gap-3 animate-fadeIn md:hidden"
        >
          {links.map((link) => {
            const isActive = location.pathname === link.path;

            return (
              <a
                key={link.name}
                href={link.path}
                onClick={() => setMenuOpen(false)}
                className={`w-[90%] mx-auto text-center py-3 text-lg rounded-xl 
                  transition-all duration-300 flex justify-center items-center gap-2
                  ${
                    isActive
                      ? "bg-green-500/10 !text-[#00ff00] shadow-lg shadow-green-500/20"
                      : "text-gray-300 hover:text-white"
                  }`}
              >
                {link.name}
              </a>
            );
          })}

          {/* Mobile Cart with Badge */}
          <a
            href="/cart"
            onClick={() => setMenuOpen(false)}
            className="w-[90%] mx-auto relative text-center py-3 text-lg rounded-xl 
            flex justify-center items-center gap-2 text-gray-300 hover:text-white"
          >
            {/* Badge */}
            {cartCount > 0 && (
              <span
                className="absolute top-2 right-10 bg-red-500 text-white text-xs 
                w-5 h-5 flex items-center justify-center rounded-full shadow-md"
              >
                {cartCount}
              </span>
            )}

            <ShoppingCart size={22} />
          </a>

          {/* Mobile Sign in */}
          <button className="w-[90%] mx-auto py-3 bg-[#E7EBFF] cursor-pointer rounded-xl text-lg text-white shadow-md">
            Sign In
          </button>
        </div>
      )}
    </div>
  );
};

// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShoppingCart } from "lucide-react";
// import logoImage from "@/assets/logo 1.png";

// export const Navbar = () => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Label Bridge", path: "/labelbridge" },
//     { name: "News & Articles", path: "/news-articles" },
//     { name: "About", path: "/about" },
//     { name: "Shop", path: "/shop" },
//   ];

//   const isCartActive = location.pathname === "/cart";

//   return (
//     <div
//       className="w-full max-w-[1350px] mx-auto px-4 md:px-6 py-3 md:py-4
//         bg-white/10 backdrop-blur-2xl rounded-4xl shadow-lg shadow-black/10
//         flex items-center justify-between relative z-50"
//     >
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
//                 ${isActive
//                   ? "text-[#00ff00] bg-green-500/10 shadow-md"
//                   : "text-gray-300 hover:text-[#05E306] "
//                 }`}
//             >
//               {link.name}
//             </a>
//           );
//         })}
//       </div>

//       {/* --- RIGHT SIDE (Cart + Sign In) --- */}
//       <div className="hidden md:flex items-center gap-4">
//         {/* Cart Icon (Moved Left of Sign In) */}
//         <a
//           href="/cart"
//           className={`p-2 rounded-xl transition-all duration-300
//             ${isCartActive ? "bg-green-500/10" : "hover:bg-white/10"}`}
//         >
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
//         className="md:hidden text-white text-3xl cursor-pointer px-2 py-1
//           backdrop-blur-sm  active:scale-95"
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
//                   ${isActive
//                     ? "bg-green-500/10 !text-[#00ff00] shadow-lg shadow-green-500/20"
//                     : "text-gray-300 hover:text-white"
//                   }`}
//               >
//                 {link.name}
//               </a>
//             );
//           })}

//           {/* Cart icon in Mobile */}
//           <a
//             href="/cart"
//             onClick={() => setMenuOpen(false)}
//             className="w-[90%] mx-auto text-center py-3 text-lg rounded-xl
//             flex justify-center items-center gap-2 text-gray-300 hover:text-white"
//           >
//             <ShoppingCart size={22} />
//           </a>

//           {/* Sign in button for mobile */}
//           <button className="w-[90%] mx-auto py-3 bg-[#1B1E30] cursor-pointer rounded-xl text-lg text-white shadow-md">
//             Sign In
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import { motion } from "framer-motion";
// import { ShoppingCart } from "lucide-react";
// import logoImage from "@/assets/logo 1.png";

// export const Navbar = () => {
//   const location = useLocation();
//   const [menuOpen, setMenuOpen] = useState(false);

//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Label Bridge", path: "/labelbridge" },
//     { name: "News & Articles", path: "/news-articles" },
//     { name: "About", path: "/about" },
//     { name: "Shop", path: "/shop" },
//     { name: "Cart", path: "/cart", icon: true },
//   ];

//   return (
//     <div
//       className="w-full max-w-[1350px] mx-auto px-4 md:px-6 py-3 md:py-4
//         bg-white/10 backdrop-blur-2xl rounded-4xl shadow-lg shadow-black/10
//         flex items-center justify-between relative z-50"
//     >
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
//                     : "text-gray-300 hover:text-white"
//                 }`}
//             >
//               {link.icon ? (
//                 <ShoppingCart
//                   size={20}
//                   className={isActive ? "!text-[#00ff00]" : "text-gray-400"}
//                 />
//               ) : (
//                 link.name
//               )}
//             </a>
//           );
//         })}
//       </div>

//       {/* Sign In button (Desktop only) */}
//       <button
//         className="hidden md:block bg-[#3a4790] text-white px-6 py-2 rounded-full
//         text-sm font-medium shadow-md hover:bg-[#4c59a5] transition-all active:scale-95"
//       >
//         Sign In
//       </button>

//       {/* Mobile Menu Button */}
//       <button
//         onClick={() => setMenuOpen(!menuOpen)}
//         className="md:hidden text-white text-3xl cursor-pointer px-2 py-1
//           backdrop-blur-sm  active:scale-95"
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
//                 {link.icon ? <ShoppingCart size={22} /> : link.name}
//               </a>
//             );
//           })}

//           {/* Sign in button for mobile */}
//           <button className="w-[90%] mx-auto py-3 bg-[#3a4790] rounded-xl text-lg text-white shadow-md">
//             Sign In
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import logoImage from "@/assets/logo 1.png";
// import { ShoppingCart } from "lucide-react";
// // import HeroBackgroundBlobs from "@/components/Home/HeroBackgroundBlobs";
// // import angle3 from "@/assets/angle3.png";
// export const Navbar = () => {
//   const location = useLocation();
//   const links = [
//     { name: "Home", path: "/" },
//     { name: "Label Bridge", path: "/labelbridge" },
//     { name: "News & Articles", path: "/news-articles" },
//     { name: "About", path: "/about" },
//     { name: "Shop", path: "/shop" },
//     { name: "Cart", path: "/cart", icon: true },
//   ];

//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="w-full max-w-[1350px] mx-auto p-2 md:p-6 h-[86px]  bg-[#FFFFFF1A]/40 backdrop-blur-md rounded-[40px] flex justify-between items-center relative z-20">
//       {/* Logo */}
//       <motion.img
//         src={logoImage}
//         alt="Company Logo"
//         className="h-8 w-8 sm:h-10 sm:w-10 object-cover rounded-full"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
//       />
//       {/* <img src={angle3} alt="" /> */}
//       {/* Desktop Links */}
//       <div className="hidden md:flex gap-4 lg:gap-6">
//         {links.map((link) => {
//           const isActive = location.pathname === link.path;

//           const linkClasses = `text-gray-400 no-underline text-sm sm:text-base px-3 sm:px-4 py-2 font-medium
//                               transition-all duration-300 hover:text-white flex items-center justify-center
//                               ${
//                                 isActive
//                                   ? "!text-[#00ff00] bg-green-500/10 rounded-xl "
//                                   : ""
//                               }`;

//           return (
//             <a
//               key={link.name}
//               href={link.path}
//               className={`${linkClasses} whitespace-nowrap`}
//             >
//               {link.icon ? (
//                 <ShoppingCart
//                   size={20}
//                   className={`${
//                     isActive
//                       ? "!text-[#00ff00]"
//                       : "text-gray-400 hover:text-white"
//                   }`}
//                 />
//               ) : (
//                 link.name
//               )}
//             </a>
//           );
//         })}
//       </div>
//       {/* Mobile Menu Icon */}
//       <div className="md:hidden flex items-center gap-3">
//         <button
//           onClick={() => setMenuOpen(!menuOpen)}
//           className="text-white text-2xl px-2 py-1 rounded-md border border-white/20 backdrop-blur-sm
//                shadow-md active:scale-95 transition-all"
//         >
//           {menuOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Desktop Sign In Button */}
//       <button className="hidden md:block bg-[#3a4790] text-white px-4 sm:px-6 py-1.5 sm:py-2 rounded-3xl text-sm sm:text-base cursor-pointer transition-all duration-300 whitespace-nowrap shadow-lg shadow-[#3a4790]/50 hover:bg-[#4b58a1]">
//         Sign In
//       </button>
//       {/* <HeroBackgroundBlobs /> */}
//       {/* Mobile Dropdown */}
//       {menuOpen && (
//         <div className="absolute top-[90px] left-0 w-full bg-black/90 backdrop-blur-md flex flex-col items-center py-4 rounded-2xl md:hidden gap-3">
//           {links.map((link) => {
//             const isActive = location.pathname === link.path;

//             return (
//               <a
//                 key={link.name}
//                 href={link.path}
//                 className={`text-gray-400 text-base px-4 py-2 font-medium w-full flex justify-center transition-all duration-300 hover:text-white
//                   ${
//                     isActive
//                       ? "!text-[#00ff00] bg-green-500/10 rounded-xl shadow-lg shadow-green-500/30"
//                       : ""
//                   }`}
//               >
//                 <span className="flex items-center gap-2">
//                   {link.icon ? <ShoppingCart size={20} /> : link.name}{" "}
//                 </span>
//               </a>
//             );
//           })}
//         </div>
//       )}
//     </nav>
//   );
// };
