import { RocketIcon } from "lucide-react";
import BrandLogo from "@/assets/icons/logo.svg";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function WorkWithUsSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#03170F] text-white p-8 overflow-hidden">
      {/* Subtle green glow effect at the bottom */}
      <div
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/2 rounded-full filter blur-3xl opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,0,0.3) 0%, rgba(0,0,0,0) 70%)",
        }}
      ></div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
        {/* Top Tag */}
        <motion.div
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8 bg-[#3A5CFF0D] rounded-3xl w-[260px] md:w-[396px] h-[52px] mx-auto  border-t border-[#0A5235]"
        >
          <img
            src={BrandLogo}
            alt="Small Logo"
            className="h-4 w-4 md:h-5 md:w-5 object-contain logo-spin"
          />

          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-[0.25em] uppercase">
            Work with us
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          custom={1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight px-4"
        >
          ONEISONEENT CONNECTS CLIENTS WORLDWIDE, EMPOWERING INDEPENDENT ARTISTS
          AND BRANDS.
        </motion.h1>

        {/* "Launch Your Music" Button */}
        <motion.button
          custom={2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="flex items-center cursor-pointer space-x-3 px-8 py-4 bg-gradient-to-r from-green-500 to-green-700 hover:from-green-600 hover:to-green-800 text-white font-semibold text-lg rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          <span>Launch Your Music</span>
          <RocketIcon className="h-6 w-6" />
        </motion.button>
      </div>
    </section>
  );
}
