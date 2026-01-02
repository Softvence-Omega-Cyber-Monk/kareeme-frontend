import { motion } from "framer-motion";
// import smallLogoIcon from "@/assets/logo 1.png";
import logo from "@/assets/kareme/icon/logo2.png";
import star from "@/assets/kareme/icon/star1.png";

import smallLOGO from "@/assets/smallLOGO.svg";
import angle3 from "@/assets/Eff.png";
import ReuseButon from "./Shared/ReuseButon";
import { Link } from "react-router-dom";

interface HeroProps {
  className?: string;
}

export const HeroItems: React.FC<HeroProps> = ({ className = "" }) => {
  const title1 = "ONEISONE".split("");
  const title2 = "ENTERTAINMENT".split("");

  return (
    <section
      className={`relative text-white text-center pt-20 md:pt-28 xl:pt-[110px] pb-16 z-10 ${className}`}
    >
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 xl:-mt-72 w-full flex justify-center z-0 pointer-events-none">
        <img
          src={angle3}
          alt="Background Accent"
          className="w-full max-w-[1600px] opacity-90 select-none"
        />
      </div>

      {/* Top Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 rounded-full sm:rounded-3xl bg-[#09241d] border-t border-[#105C38] px-3 sm:px-4 w-[85%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[418px] h-[38px] sm:h-[42px] md:h-[46px] lg:h-[52px]"
      >
        {/* <img
          src={smallLogoIcon}
          alt="Small Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain logo-spin"
        /> */}
        <Link
          to="/"
          className="relative flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 "
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={star}
              alt="Star"
              className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full object-cover animate-[spin_12s_linear_infinite]"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-4 h-4 sm:w-6 sm:h-6 md:w-6 md:h-8 rounded-full object-cover z-10 shadow-lg"
            />
          </div>
        </Link>

        <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white font-light tracking-wider sm:tracking-widest uppercase text-center whitespace-nowrap">
          DISTRIBUTION | BRANDING | STRATEGY
        </p>
      </motion.div>

      {/* Title */}

      <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-8">
        <span className="text-3xl sm:text-5xl md:text-6xl font-bold flex justify-center flex-wrap items-center">
          {/* Static text */}
          <span className="mr-4">WELCOME TO</span>

          {/* Animated letters with proper spacing */}
          <span className="flex mr-4">
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
                className="tracking-widest mx-[1px]"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "2px #f0fdf4",
                }}
              >
                {char}
              </motion.span>
            ))}
          </span>
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
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest"
              style={{
                color: "transparent",
                WebkitTextStroke: "2px #f0fdf4",
              }}
            >
              {" "}
              {char}
            </motion.span>
          ))}{" "}
          <span>WHERE DREAMS SHIFT THE</span>{" "}
        </span>
        <br />
        <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          {" "}
          CULTURE!!{" "}
        </span>
      </h1>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="flex justify-center"
      >
        <Link className="cursor-pointer" to="/news-articles">
          <ReuseButon
            text="Learn More"
            icon={smallLOGO}
            onClick={() => console.log("Learn more")}
          />
        </Link>
      </motion.div>
    </section>
  );
};

// import { motion } from "framer-motion";
// import smallLogoIcon from "@/assets/logo 1.png";
// import smallLOGO from "@/assets/smallLOGO.svg";
// import angle3 from "@/assets/Eff.png";
// import ReuseButon from "./Shared/ReuseButon";
// import { Link } from "react-router-dom";

// interface HeroProps {
//   className?: string;
// }

// export const HeroItems: React.FC<HeroProps> = ({ className = "" }) => {
//   const title1 = "ONEISONE".split("");
//   const title2 = "ENTERTAINMENT".split("");

//   return (
//     <section
//       className={`relative text-white text-center pt-20 md:pt-28 xl:pt-[110px] pb-16 z-10 ${className}`}
//     >
//       {/* Background Accent */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 xl:-mt-72 w-full flex justify-center z-0 pointer-events-none">
//         <img
//           src={angle3}
//           alt="Background Accent"
//           className="w-full max-w-[1600px] opacity-90 select-none"
//         />
//       </div>

//       {/* Top Badge */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 rounded-full sm:rounded-3xl bg-[#09241d] border-t border-[#105C38] px-3 sm:px-4 w-[85%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[418px] h-[38px] sm:h-[42px] md:h-[46px] lg:h-[52px]"
//       >
//         <img
//           src={smallLogoIcon}
//           alt="Small Logo"
//           className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain logo-spin"
//         />

//         <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white font-light tracking-wider sm:tracking-widest uppercase text-center whitespace-nowrap">
//           DISTRIBUTION | BRANDING | STRATEGY
//         </p>
//       </motion.div>

//       {/* Title */}

//       <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-8">
//         <span className="text-3xl sm:text-5xl md:text-6xl font-bold flex justify-center flex-wrap items-center">
//           {/* Static text */}
//           <span className="mr-4">WELCOME TO</span>

//           {/* Animated letters with proper spacing */}
//           <span className="flex mr-4">
//             {title1.map((char, idx) => (
//               <motion.span
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: idx * 0.1,
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 20,
//                 }}
//                 className="tracking-widest mx-[1px]"
//                 style={{
//                   color: "transparent",
//                   WebkitTextStroke: "2px #f0fdf4",
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </span>
//         </span>

//         <br className="block md:hidden" />
//         <br />
//         <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center flex-wrap gap-1">
//           {title2.map((char, idx) => (
//             <motion.span
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: idx * 0.08 + 0.5,
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//               }}
//               className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest"
//               style={{
//                 color: "transparent",
//                 WebkitTextStroke: "2px #f0fdf4",
//               }}
//             >
//               {" "}
//               {char}
//             </motion.span>
//           ))}{" "}
//           <span>WHERE DREAMS SHIFT THE</span>{" "}
//         </span>
//         <br />
//         <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
//           {" "}
//           CULTURE!!{" "}
//         </span>
//       </h1>

//       {/* CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 16 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2, duration: 0.5 }}
//         className="flex justify-center"
//       >
//         <Link className="cursor-pointer" to="/news-articles">
//           <ReuseButon
//             text="Learn More"
//             icon={smallLOGO}
//             onClick={() => console.log("Learn more")}
//           />
//         </Link>
//       </motion.div>
//     </section>
//   );
// };
