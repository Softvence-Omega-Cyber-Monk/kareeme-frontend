import React from "react";
import smallLogoIcon from "@/assets/logo 1.png";
import CommonWrapper from "../../common/CommonWrapper";
import { motion, Variants } from "framer-motion";

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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ReleasesStrategy: React.FC = () => {
  return (
    <CommonWrapper>
      <div className="text-center w-full">

        {/* Top Tag */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 bg-[#3A5CFF0D] rounded-2xl w-[260px] md:w-[396px] h-[52px] mx-auto"
        >
          <img
            src={smallLogoIcon}
            alt="Small Logo"
            className="h-4 w-4 md:h-5 md:w-5 object-contain logo-spin"
          />
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-[0.25em] uppercase">
            Release Strategy
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="font-extrabold w-full max-w-5xl mx-auto"
        >
          <motion.h1
            variants={textItemVariants}
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

        {/* Motion Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="py-16 sm:py-20 px-4 sm:px-8 md:px-16 w-full"
        >
          <div className="max-[1450px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">

            {/* Left Title */}
            <motion.h1
              variants={textItemVariants}
              className="
                text-white 
                text-3xl sm:text-4xl md:text-5xl lg:text-3xl 
                tracking-tight leading-none
                text-center md:text-left mt-8
              "
            >
              KEY COMPONENTS
            </motion.h1>

            {/* Right Box */}
            <motion.div
              variants={textItemVariants}
              className="
                md:col-span-2 p-6 sm:p-8 
                text-gray-300 
                text-base sm:text-lg 
                leading-relaxed 
                rounded-xl
              "
            >
              <p>
                Key components include designing captivating artwork, developing a pre-save initiative, crafting a press release, pitching to playlists, leveraging social media for promotion, refreshing your electronic press kit (EPK), and analyzing performance metrics to enhance future campaigns.
                Prioritizing the creation of anticipation, connecting with fans, and maximizing exposure across diverse platforms is essential for a successful launch.
              </p>
            </motion.div>

          </div>
        </motion.section>
      </div>
    </CommonWrapper>
  );
};

export default ReleasesStrategy;
