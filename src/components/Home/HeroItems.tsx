import { motion } from "framer-motion";
import smallLogoIcon from "@/assets/logo 1.png";
import smallLOGO from "@/assets/smallLOGO.svg";
import angle3 from "@/assets/Eff.png";
import ReuseButon from "./Shared/ReuseButon";

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
        <img
          src={smallLogoIcon}
          alt="Small Logo"
          className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain logo-spin"
        />

        <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white font-light tracking-wider sm:tracking-widest uppercase text-center whitespace-nowrap">
          DISTRIBUTION | BRANDING | STRATEGY
        </p>
      </motion.div>

      {/* Title */}
   
         <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-8">
        <span className="text-3xl sm:text-5xl md:text-6xl font-bold flex justify-center flex-wrap gap-1">
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
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest "
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
          WHERE DREM SHIFT THE{" "}
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
          <ReuseButon
            text="Learn More"
            icon={smallLOGO}
            onClick={() => console.log("Learn more")}
          />
        </motion.div>
     
    </section>
  );
};



// import { motion } from "framer-motion";
// import smallLogoIcon from "@/assets/logo 1.png";
// import smallLOGO from "@/assets/smallLOGO.svg";
// import angle3 from "@/assets/Eff.png";
// import ReuseButon from "./Shared/ReuseButon";

// interface HeroProps {
//   className?: string;
// }

// export const HeroItems: React.FC<HeroProps> = ({ className = "" }) => {
//   const title1 = "ONEISONE".split("");
//   const title2 = "ENTERTAINMENT".split("");

//   return (
//     <section
//       className={`relative text-white text-center pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-[100px] pb-12 sm:pb-16 md:pb-20 z-10 ${className}`}
//     >
//       {/* ===========================
//            Angle Background Image  
//           =========================== */}
//       <div className="absolute top-0 left-1/2 -translate-x-1/2 
//     xl:-mt-80 
//   w-full flex justify-center z-0 pointer-events-none">
//   <img
//     src={angle3}
//     alt="angle-bg"
//     className="w-full max-w-[1200px] lg:max-w-[1400px] xl:max-w-[1900px] opacity-100 select-none"
//   />
// </div>


//       {/* Top Tag */}
      // <motion.div
      //   initial={{ opacity: 0, y: 20 }}
      //   animate={{ opacity: 1, y: 0 }}
      //   transition={{ duration: 0.8, ease: "easeOut" }}
      //   className="flex items-center justify-center gap-2 sm:gap-2.5 md:gap-3 mx-auto mb-4 sm:mb-5 md:mb-6 lg:mb-8 rounded-full sm:rounded-3xl bg-[#14332C] border-t border-[#105C38] px-3 sm:px-4 w-[85%] max-w-[280px] sm:max-w-[320px] md:max-w-[360px] lg:max-w-[418px] h-[38px] sm:h-[42px] md:h-[46px] lg:h-[52px]"
      // >
      //   <img
      //     src={smallLogoIcon}
      //     alt="Small Logo"
      //     className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 object-contain logo-spin"
      //   />

      //   <p className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-white font-light tracking-wider sm:tracking-widest uppercase text-center whitespace-nowrap">
      //     DISTRIBUTION | BRANDING | STRATEGY
      //   </p>
      // </motion.div>

//       {/* Main Title Section */}
//       <div className="px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
//         <h1 className="font-extrabold leading-tight tracking-wide mb-6 sm:mb-7 md:mb-8 lg:mb-10">
//           {/* "WELCOME TO" Line */}
//           <div className="flex justify-center items-center flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4">
//             <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide text-white">
//               WELCOME TO
//             </span>
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
//                 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider inline-block"
//                 style={{ 
//                   color: "transparent", 
//                   WebkitTextStroke: "1.5px #f0fdf4",
//                   WebkitTextStrokeWidth: "1.5px",
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//           </div>

//           {/* "ENTERTAINMENT WHERE DREAMS SHIFT THE" Line */}
//           <div className="flex justify-center items-center flex-wrap gap-1 sm:gap-1.5 md:gap-2 mb-2 sm:mb-3 md:mb-4">
//             {title2.map((char, idx) => (
//               <motion.span
//                 key={idx}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{
//                   delay: idx * 0.08 + 0.5,
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 20,
//                 }}
//                 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider inline-block"
//                 style={{
//                   color: "transparent",
//                   WebkitTextStroke: "1.5px #f0fdf4",
//                   WebkitTextStrokeWidth: "1.5px",
//                 }}
//               >
//                 {char}
//               </motion.span>
//             ))}
//             <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wide text-white ml-1 sm:ml-2">
//               WHERE DREAMS SHIFT THE
//             </span>
//           </div>

//           {/* "CULTURE!!" Line */}
//           <div className="flex justify-center items-center">
//             <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-wide text-white">
//               CULTURE!!
//             </span>
//           </div>
//         </h1>

//         {/* Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 0.6 }}
//           className="flex justify-center"
//         >
//           <ReuseButon
//             text="Learn More"
//             icon={smallLOGO}
//             onClick={() => console.log("Button clicked")}
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };








// import { motion } from "framer-motion";
// import smallLogoIcon from "@/assets/logo 1.png";
// import smallLOGO from "@/assets/smallLOGO.svg";
// import angle3 from "@/assets/angle3.png";
// import ReuseButon from "./Shared/ReuseButon";

// interface HeroProps {
//   className?: string;
// }

// export const HeroItems: React.FC<HeroProps> = ({ className = "" }) => {
//   const title1 = "ONEISONE".split("");
//   const title2 = "ENTERTAINMENT".split("");

//   return (
//     <section
//       className={`relative text-white text-center pt-[100px]
//  z-10 ${className}`}
//     >
//       {/* ===========================
//            Angle Background Image  
//           =========================== */}
//       <div className="absolute  top-0 left-1/2 -translate-x-1/2 -mt-64 w-full flex justify-center z-0 pointer-events-none">
//         <img
//           src={angle3}
//           alt="angle-bg"
//           className="w-[80%] max-w-[800px] opacity-100 select-none "
//         />
//       </div>
//       {/* Top Tag */}{" "}
//       {/* <motion.div
//         initial={{ opacity: 10, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="flex items-center justify-center gap-1.5 sm:gap-3 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-base sm:text-lg md:text-xl lg:text-base bg-[#14332C] rounded-3xl w-[220px] sm:w-[260px] md:w-[320px] lg:w-[396px] h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] mx-auto px-3 border-t border-[#105C38]"
//       >
//         {" "}
//         <img
//           src={smallLogoIcon}
//           alt="Small Logo"
//           className="w-8 h-8 object-contain logo-spin"
//         />
//         <p className="text-xs sm:text-sm md:text-base lg:text-sm  text-white font-light tracking-widest uppercase">
//           DISTRIBUTION | BRANDING | STRATEGY{" "}
//         </p>
//       </motion.div> */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, ease: "easeOut" }}
//         className="flex items-center justify-center gap-2 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-3xl bg-[#14332C] border-t border-[#105C38] px-4 w-[90%] sm:w-[320px] md:w-[360px] lg:w-[418px] h-[42px] sm:h-[46px] md:h-[50px]"
//       >
//         <img
//           src={smallLogoIcon}
//           alt="Small Logo"
//           className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain logo-spin"
//         />

//         <p className="text-[10px] sm:text-xs md:text-sm text-white font-light tracking-widest uppercase text-center">
//           DISTRIBUTION | BRANDING | STRATEGY
//         </p>
//       </motion.div>
//       {/* Main Title Section */}
//       <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-8">
//         <span className="text-3xl sm:text-5xl md:text-6xl font-bold flex justify-center flex-wrap gap-1">
//           WELCOME TO{" "}
//           {title1.map((char, idx) => (
//             <motion.span
//               key={idx}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{
//                 delay: idx * 0.1,
//                 type: "spring",
//                 stiffness: 300,
//                 damping: 20,
//               }}
//               className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest "
//               style={{ color: "transparent", WebkitTextStroke: "2px #f0fdf4" }}
//             >
//               {" "}
//               {char}{" "}
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
//           WHERE DREM SHIFT THE{" "}
//         </span>
//         <br />
//         <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
//           {" "}
//           CULTURE!!{" "}
//         </span>
//       </h1>
//       <ReuseButon
//         text="Learn More"
//         icon={smallLOGO}
//         onClick={() => console.log("Button clicked")}
//       />
//     </section>
//   );
// };
