// src/components/HeroBanner.tsx
import React from "react";
import { motion, Variants } from "framer-motion";
import musicImage from "@/assets/music image.png";

const HeroBanner: React.FC = () => {
  // Properly typed variants
  const textVariants: Variants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full h-screen flex flex-col justify-center items-center bg-hero-dark overflow-hidden">
      <div className="absolute inset-0 border-hero-blue pointer-events-none"></div>

      <div className="text-center p-4 max-w-5xl mx-auto">
        {/* Main Title */}
        <motion.h1
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="text-white text-5xl md:text-[10rem]  lg:text-[10rem] font-extrabold leading-none tracking-tighter"
        >
          ONE IS ONE
        </motion.h1>

        <motion.h2
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2 }}
          className="text-white text-4xl md:text-8xl lg:text-9xl font-extrabold leading-none tracking-tight -mt-4 md:-mt-8"
        >
          ENTERTAINMENT
        </motion.h2>

        {/* Hero Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5 }}
          className="relative w-full max-w-lg mx-auto mt-[-10rem] md:mt-[-20rem] z-10"
        >
          <div
            className="w-full h-[500px] bg-cover bg-center mt-44 relative"
            style={{ backgroundImage: `url(${musicImage})` }}
          >
            <div className="absolute top-1/2 left-1/2 w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-orange-500/50 via-cyan-400/50 to-pink-500/50 rounded-full filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroBanner;
