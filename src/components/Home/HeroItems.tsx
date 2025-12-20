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
           Angle Background Image  
          =========================== */}
      <div className="absolute  top-0 left-1/2 -translate-x-1/2 -mt-64 w-full flex justify-center z-0 pointer-events-none">
        <img
          src={angle3}
          alt="angle-bg"
          className="w-[80%] max-w-[800px] opacity-100 select-none "
        />
      </div>
      {/* Top Tag */}{" "}
      {/* <motion.div
        initial={{ opacity: 10, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex items-center justify-center gap-1.5 sm:gap-3 mb-3 sm:mb-4 md:mb-6 lg:mb-8 text-base sm:text-lg md:text-xl lg:text-base bg-[#14332C] rounded-3xl w-[220px] sm:w-[260px] md:w-[320px] lg:w-[396px] h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] mx-auto px-3 border-t border-[#105C38]"
      >
        {" "}
        <img
          src={smallLogoIcon}
          alt="Small Logo"
          className="w-8 h-8 object-contain logo-spin"
        />
        <p className="text-xs sm:text-sm md:text-base lg:text-sm  text-white font-light tracking-widest uppercase">
          DISTRIBUTION | BRANDING | STRATEGY{" "}
        </p>
      </motion.div> */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex items-center justify-center gap-2 mx-auto mb-4 sm:mb-5 md:mb-6 rounded-3xl bg-[#14332C] border-t border-[#105C38] px-4 w-[90%] sm:w-[320px] md:w-[360px] lg:w-[418px] h-[42px] sm:h-[46px] md:h-[50px]"
      >
        <img
          src={smallLogoIcon}
          alt="Small Logo"
          className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 object-contain logo-spin"
        />

        <p className="text-[10px] sm:text-xs md:text-sm text-white font-light tracking-widest uppercase text-center">
          DISTRIBUTION | BRANDING | STRATEGY
        </p>
      </motion.div>
      {/* Main Title Section */}
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
              className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-widest"
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
      <ReuseButon
        text="Learn More"
        icon={smallLOGO}
        onClick={() => console.log("Button clicked")}
      />
    </section>
  );
};
