// import { motion } from "framer-motion";
// import smallLogoIcon from "@/assets/logo 1.png";
// import smallLOGO from "@/assets/smallLOGO.svg";

// interface HeroProps {
//   className?: string;
// }

// export const HeroItems: React.FC<HeroProps> = ({ className = "" }) => {
//   // Split main title for letter animation
//   const title1 = "ONEISONE".split("");
//   const title2 = "ENTERTAINMENT".split("");

//   return (
//     <section
//       className={`text-white text-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 ${className}`}
//     >
//       {/* Top Tag */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="flex items-center justify-center gap-1.5 sm:gap-3 mb-3 sm:mb-4 md:mb-6 lg:mb-8
//                 text-base sm:text-lg md:text-xl lg:text-base
//                 bg-[#112A28] rounded-3xl
//                 w-[220px] sm:w-[260px] md:w-[320px] lg:w-[396px]
//                 h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px]
//                 mx-auto px-3"
//       >
//         <img
//           src={smallLogoIcon}
//           alt="Small Logo"
//           className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 object-contain logo-spin"
//         />
//         <p className="text-xs sm:text-sm md:text-base lg:text-sm text-white font-light tracking-widest uppercase">
//           DISTRIBUTION | BRANDING | STRATEGY
//         </p>
//       </motion.div>

//       {/* Main Title Section */}
//       <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-8">
//         <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center flex-wrap gap-1">
//           WELCOME TO{" "}
//           {title1.map((char, idx) => (
//             <motion.span
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.1, type: "spring", stiffness: 300, damping: 20 }}
//               className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest"
//               style={{ color: "transparent", WebkitTextStroke: "2px #f0fdf4" }}
//             >
//               {char}
//             </motion.span>
//           ))}
//         </span>
//         <br className="block md:hidden" />
//         <br />
//         <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center flex-wrap gap-1">
//           {title2.map((char, idx) => (
//             <motion.span
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: idx * 0.08 + 0.5, type: "spring", stiffness: 300, damping: 20 }}
//               className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest"
//               style={{ color: "transparent", WebkitTextStroke: "2px #f0fdf4" }}
//             >
//               {char}
//             </motion.span>
//           ))}
//           {" "}WHERE DREM SHIFT THE
//         </span>
//         <br />
//         <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
//           CULTURE!!
//         </span>
//       </h1>

//       {/* Learn More Button */}
//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.100 }}
//         className="bg-[#3a4790] hover:bg-[#4b58a1] cursor-pointer bg-gradient-to-b from-[#7B92FF] to-[#2941B5] text-white font-semibold w-[180px] sm:w-[200px] md:w-[234px] h-[48px] sm:h-[50px] md:h-[55px] py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10 rounded-full shadow-lg shadow-[#3a4790]/50 transition duration-300 ease-in-out flex items-center justify-center mx-auto gap-2 text-sm sm:text-base md:text-lg"
//       >
//         Learn More
//         <span className="text-lg sm:text-xl md:text-xl">
//           <img src={smallLOGO} alt="Logo" className="w-4 sm:w-5 md:w-6 h-auto" />
//         </span>
//       </motion.button>
//     </section>
//   );
// };

import { motion } from "framer-motion";
import smallLogoIcon from "@/assets/logo 1.png";
import smallLOGO from "@/assets/smallLOGO.svg";
import angle3 from "@/assets/angle3.png";
import ReuseButon from "./Shared/ReuseButon";

interface HeroProps {
  className?: string;
}

export const HeroItems: React.FC<HeroProps> = ({ className = "" }) => {
  const title1 = "ONEISONE".split("");
  const title2 = "ENTERTAINMENT".split("");

  return (
    <section
      className={`relative text-white text-center py-12 sm:py-16 md:py-24 lg:py-32 
      px-4 sm:px-6 md:px-8 lg:px-12 z-10 ${className}`}
    >
      {/* ===========================
          ★ Angle Background Image ★ 
          =========================== */}
      <div className="absolute  top-0 left-1/2 -translate-x-1/2 -mt-64 w-full flex justify-center z-0 pointer-events-none">
        <img
          src={angle3}
          alt="angle-bg"
          className="w-[80%] max-w-[800px] opacity-100 select-none "
        />
      </div>
      {/* ===========================
          ★ SMALL TOP TAG ★
          =========================== */}
      {/* Top Tag */}{" "}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-1.5 sm:gap-3 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-base sm:text-lg md:text-xl lg:text-base bg-[#112A28] rounded-3xl w-[220px]
   sm:w-[260px] md:w-[320px] lg:w-[396px] h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] mx-auto px-3"
      >
        {" "}
        <img
          src={smallLogoIcon}
          alt="Small Logo"
          className="h-3 w-3 sm:h-4 sm:w-4
    md:h-5 md:w-5 lg:h-5 lg:w-5 object-contain logo-spin"
        />{" "}
        <p className="text-xs sm:text-sm md:text-base lg:text-sm text-white font-light tracking-widest uppercase">
          DISTRIBUTION | BRANDING | STRATEGY{" "}
        </p>
      </motion.div>
      {/* ===========================
          ★ MAIN TITLE ★
          =========================== */}
      {/* Main Title Section */}
      <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-8">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center flex-wrap gap-1">
          WELCOME TO{" "}
          {title1.map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.1,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest"
              style={{ color: "transparent", WebkitTextStroke: "2px #f0fdf4" }}
            >
              {" "}
              {char}{" "}
            </motion.span>
          ))}
        </span>
        <br className="block md:hidden" />
        <br />
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center flex-wrap gap-1">
          {title2.map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.08 + 0.5,
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #f0fdf4",
              }}
            >
              {" "}
              {char}
            </motion.span>
          ))}{" "}
          WHERE DREM SHIFT THE{" "}
        </span>
        <br />
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {" "}
          CULTURE!!{" "}
        </span>
      </h1>
      {/* ===========================
          ★ BUTTON ★
          =========================== */}
      {/* <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.9 }}
        className="bg-gradient-to-b from-[#7B92FF] to-[#2941B5] text-white font-semibold 
        w-[180px] sm:w-[200px] md:w-[234px] 
        h-[48px] sm:h-[50px] md:h-[55px]
        rounded-full shadow-lg shadow-[#3a4790]/50 
        transition duration-300 ease-in-out 
        flex items-center justify-center mx-auto gap-2 relative z-10"
      >
        Learn More
        <img src={smallLOGO} alt="Logo" className="w-4 sm:w-5 md:w-6" />
      </motion.button> */}
      {/* <div className="p-1.5 bg-[#202933] w-[246px] h-[68px] mx-auto rounded-[29.455px] mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="
    text-white font-semibold
    w-[234px] h-[55px]
    px-[64px] py-[13px]
    rounded-[29.455px]
    flex items-center justify-center gap-[10px]
    relative z-10
    transition duration-300 ease-in-out
    shadow-[0_0_180px_rgba(58,92,181,0.6)]
    bg-[radial-gradient(50%_50%_at_50%_50%,#7B92FF_0%,#2941B5_100%)] whitespace-nowrap cursor-pointer
  "
        >
          Learn More
          <img src={smallLOGO} alt="Logo" className="w-6" />
        </motion.button>
      </div> */}
      <ReuseButon
        text="Learn More"
        icon={smallLOGO}
        onClick={() => console.log("Button clicked")}
      />
    </section>
  );
};
