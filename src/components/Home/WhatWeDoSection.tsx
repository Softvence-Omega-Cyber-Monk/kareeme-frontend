import { motion } from "framer-motion";
// import smallLogoIcon from "@/assets/logo 1.png";

import logo from "@/assets/kareme/icon/logo2.png";
import star from "@/assets/kareme/icon/star1.png";

import CommonWrapper from "../../common/CommonWrapper";
import { Link } from "react-router-dom";

const WhatWeDoSection = () => {
  const lines = [
    "Empowering creators to thrive in the ever-",
    "evolving global music landscape",
    "through cutting-edge technology",
    "and dedicated support.",
  ];

  return (
    <CommonWrapper>
      <div className="text-center title">
        {/* Top Tag */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-4 sm:mb-6 md:mb-8  bg-[#3A5CFF0D] rounded-3xl border-t border-[#075A2F] w-[180px] sm:w-[195px] md:w-[200px] lg:w-[240px]  h-[50px] sm:h-[48px] md:h-[52px] mx-auto"
        >
          {/* <img
            src={smallLogoIcon}
            alt="Small Logo"
            className="h-9 w-9 object-contain logo-spin"
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

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-[0.25em] uppercase">
            WHAT WE DO
          </p>
        </motion.div>

        {/* Main Heading */}
        <div className="font-extrabold mx-auto px-4 sm:px-0">
          {lines.map((line, index) => (
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              className={`text-[28px] sm:text-3xl md:text-4xl lg:text-4xl uppercase text-[#F2F2F2] leading-snug md:leading-tight`}
            >
              {line}
            </motion.h1>
          ))}
        </div>
      </div>
    </CommonWrapper>
  );
};

export default WhatWeDoSection;
