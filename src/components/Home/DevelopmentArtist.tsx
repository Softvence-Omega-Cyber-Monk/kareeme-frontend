import React from "react";
// import smallLogoIcon from "@/assets/logo 1.png";

import logo from "@/assets/kareme/icon/logo2.png";
import star from "@/assets/kareme/icon/star1.png";

import CommonWrapper from "../../common/CommonWrapper";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.2 },
  },
};

const textItemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const DevelopmentArtist: React.FC = () => {
  return (
    <CommonWrapper>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
        variants={containerVariants}
        className="text-center w-full"
      >
        {/* Top Tag */}
        <motion.div
          variants={textItemVariants}
          className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 bg-[#3A5CFF0D] rounded-3xl w-[250px] md:w-[330px] h-[52px] mx-auto border-t border-[#075D2F]"
        >
          {/* <img
            src={smallLogoIcon}
            alt="Small Logo"
            className="h-8 w-8 object-contain logo-spin"
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
            Release Strategy
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={textItemVariants}
          className="font-extrabold w-full max-w-5xl mx-auto"
        >
          <motion.h1
            className="
            text-[22px] sm:text-[26px] md:text-3xl lg:text-3xl xl:text-4xl 
            uppercase text-[#F2F2F2] leading-normal
          "
          >
            An effective strategy for launching music requires careful planning
            and implementation, spanning from generating excitement before the
            release to maintaining engagement afterward.
            <br />
            This process involves assembling a capable team to support your
            release, which is where our exceptional marketing professionals come
            into play.
          </motion.h1>
        </motion.div>
      </motion.div>
    </CommonWrapper>
  );
};

export default DevelopmentArtist;
