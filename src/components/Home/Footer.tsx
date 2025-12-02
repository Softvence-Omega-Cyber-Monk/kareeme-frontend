import img from "@/assets/logo 4.png";
import { useState } from 'react';
import { Send, Instagram, Youtube, Facebook, X } from 'lucide-react';
import logoImage from "@/assets/logo 1.png";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const DRIPPING_CSS = `
@keyframes drip {
  0% { transform: translateY(0) scale(1); opacity: 1; text-shadow: 0 0 5px rgba(255,255,255,0.8); }
  50% { transform: translateY(5px) scale(0.95); opacity: 0.9; }
  75% { transform: translateY(12px) scale(0.9); opacity: 0.5; }
  100% { transform: translateY(0) scale(1); opacity: 1; text-shadow: 0 0 5px rgba(255,255,255,0.8); }
}
`;

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: DRIPPING_CSS }} />

      <footer className="bg-gradient-to-b from-gray-900 to-[#1a2832] text-white font-['Inter']">
        <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

          {/* LEFT SECTION */}
          <div className="flex flex-col items-center md:items-start space-y-6">

            {/* Rotating Logo */}
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full  flex items-center justify-center mb-3 ml-18"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            >
              <img
                src={logoImage}
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
              />
            </motion.div>

            {/* Footer Text Image */}
            <img
              src={img}
              alt="Footer Text Image"
              className="w-40 sm:w-52 md:w-60 lg:w-72 object-contain mx-auto md:mx-0"
            />

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
              <motion.a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer rounded-full flex items-center justify-center transition-transform duration-300 bg-red-600 hover:bg-red-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer rounded-full flex items-center justify-center transition-transform duration-300 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer rounded-full flex items-center justify-center transition-transform duration-300 bg-blue-600 hover:bg-blue-700"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="#"
                className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer rounded-full flex items-center justify-center transition-transform duration-300 bg-black hover:bg-gray-900"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="X"
              >
                <X className="w-5 h-5" />
              </motion.a>
            </div>

          </div>

          {/* MIDDLE SECTION */}
          <div className="flex flex-col items-center md:items-start space-y-8">

            {/* Manually written nav links */}
            <nav className="flex flex-wrap justify-center md:justify-start gap-5">
              <Link to="/" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer">Home</Link>
              <Link to="/labelbridge" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer">Label Bridge</Link>
              <Link to="/news-articles" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer">News & Articles</Link>
              <Link to="/about" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer">About</Link>
              <Link to="/shop" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer">Shop</Link>
            </nav>

            <div className="relative w-full max-w-md">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full cursor-pointer bg-gray-800/50 border border-gray-700 rounded-full py-3 px-5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
              />
              <motion.button
                onClick={handleSubmit}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Submit email"
              >
                <Send className="w-4 h-4 text-white" />
              </motion.button>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col items-center md:items-end space-y-6 w-full max-w-sm md:max-w-none">

            <div className="grid grid-cols-2 md:flex md:flex-col md:space-y-2 gap-2 w-full md:w-auto text-center md:text-right">
              {/* Manually written footer links */}
              <Link to="/privacy" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base">Privacy Policy</Link>
              <Link to="/term" className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base">Terms & Condition</Link>

              <div className="flex flex-col items-center md:items-end col-span-2 md:col-span-1">
                <p className="text-gray-400 text-sm mb-1">Email</p>
                <a href="mailto:Info@OneIOneEnt.com" className="text-white hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base break-all">
                  Info@OneIOneEnt.com
                </a>
              </div>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;




// import img from "@/assets/logo 4.png";
// import { useState } from 'react';
// import { Send, Instagram, Youtube, Facebook, X } from 'lucide-react';
// import logo from "@/assets/icons/logo.svg";
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';

// const DRIPPING_CSS = `
// @keyframes drip {
//   0% { transform: translateY(0) scale(1); opacity: 1; text-shadow: 0 0 5px rgba(255,255,255,0.8); }
//   50% { transform: translateY(5px) scale(0.95); opacity: 0.9; }
//   75% { transform: translateY(12px) scale(0.9); opacity: 0.5; }
//   100% { transform: translateY(0) scale(1); opacity: 1; text-shadow: 0 0 5px rgba(255,255,255,0.8); }
// }
// `;

// const Footer: React.FC = () => {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     if (email) {
//       console.log('Email submitted:', email);
//       setEmail('');
//     }
//   };

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "Label Bridge", path: "/labelbridge" },
//   { name: "News & Articles", path: "/news-articles" },
//   { name: "About", path: "/about" },
//   { name: "Shop", path: "/shop" },
// ];


//   const socialLinks = [
//     { icon: <Youtube className="w-5 h-5" />, bg: 'bg-red-600', hover: 'hover:bg-red-700', label: 'YouTube' },
//     { icon: <Instagram className="w-5 h-5" />, bg: 'bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500', hover: '', label: 'Instagram' },
//     { icon: <Facebook className="w-5 h-5" />, bg: 'bg-blue-600', hover: 'hover:bg-blue-700', label: 'Facebook' },
//     { icon: <X className="w-5 h-5" />, bg: 'bg-black', hover: 'hover:bg-gray-900', label: 'X' },
//   ];

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: DRIPPING_CSS }} />

//       <footer className="bg-gradient-to-b from-gray-900 to-[#1a2832] text-white font-['Inter']">
//         <div className="max-w-7xl mx-auto px-6 py-12 lg:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

//           {/* LEFT SECTION */}
//           <div className="flex flex-col items-center md:items-start space-y-6">

//             {/* Rotating Logo */}
//             <motion.div
//               className="w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
//                rounded-full border-2 border-dashed border-gray-400 
//                flex items-center justify-center mb-3 ml-18"
//               animate={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
//             >
//               <img
//                 src={logo}
//                 alt="Logo"
//                 className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
//               />
//             </motion.div>

//             {/* ⭐ REPLACED FULLTEXT WITH IMAGE ⭐ */}
//             <img
//               src={img}
//               alt="Footer Text Image"
//               className="w-40 sm:w-52 md:w-60 lg:w-72 object-contain mx-auto md:mx-0"
//             />

//             {/* Social Icons */}
//             <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
//               {socialLinks.map((item, i) => (
//                 <motion.a
//                   key={i}
//                   href="#"
//                   className={`w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 cursor-pointer 
//                     rounded-full flex items-center justify-center 
//                     transition-transform duration-300 
//                     ${item.bg} ${item.hover}`}
//                   whileHover={{ scale: 1.2 }}
//                   whileTap={{ scale: 0.9 }}
//                   aria-label={item.label}
//                 >
//                   {item.icon}
//                 </motion.a>
//               ))}
//             </div>

//           </div>

//           {/* MIDDLE SECTION */}
//           <div className="flex flex-col items-center md:items-start space-y-8">
//             <nav className="flex flex-wrap justify-center md:justify-start gap-5">
//               {navLinks.map(link => (
//                 <Link
//                   key={link.name}
//                   to={link.path}
//                   className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base cursor-pointer"
//                 >
//                   {link.name}
//                 </Link>
//               ))}
//             </nav>

//             <div className="relative w-full max-w-md">
//               <input
//                 type="email"
//                 value={email}
//                 onChange={e => setEmail(e.target.value)}
//                 placeholder="Enter your email"
//                 className="w-full cursor-pointer bg-gray-800/50 border border-gray-700 rounded-full py-3 px-5 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-400/20 transition-all duration-300"
//               />
//               <motion.button
//                 onClick={handleSubmit}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center"
//                 whileHover={{ scale: 1.2 }}
//                 whileTap={{ scale: 0.9 }}
//                 aria-label="Submit email"
//               >
//                 <Send className="w-4 h-4 text-white" />
//               </motion.button>
//             </div>
//           </div>

//           {/* RIGHT SECTION */}
//           <div className="flex flex-col items-center md:items-end space-y-6 w-full max-w-sm md:max-w-none">

//             <div className="
//               grid grid-cols-2 
//               md:flex md:flex-col md:space-y-2 
//               gap-2 w-full md:w-auto 
//               text-center md:text-right
//             ">
//               {['Privacy Policy', 'Terms & Condition'].map(item => (
//                 <a
//                   key={item}
//                   href="privacy"
//                   className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base "
//                 >
//                   {item}
//                 </a>
//               ))}

//               <div className="flex flex-col items-center md:items-end col-span-2 md:col-span-1">
//                 <p className="text-gray-400 text-sm mb-1">Email</p>
//                 <a
//                   href="mailto:Info@OneIOneEnt.com"
//                   className="text-white hover:text-emerald-400 transition-colors duration-300 text-sm sm:text-base break-all"
//                 >
//                   Info@OneIOneEnt.com
//                 </a>
//               </div>
//             </div>

//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;
