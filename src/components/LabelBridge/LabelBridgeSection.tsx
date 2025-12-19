import { motion } from "framer-motion";
import logo from "@/assets/icons/logo.svg";

interface HeroProps {
  className?: string;
}

export const LabelBridgeSection: React.FC<HeroProps> = ({ className = "" }) => {
  const title1 = "LABELBRIDGE".split("");

  return (
    <section
      className={`text-white text-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 ${className}`}
    >
      {/* TOP LOGO */}
      <div className="flex justify-center">
        <motion.div
          className="w-16 h-16 rounded-full  bg-green-800 opacity-40 flex items-center justify-center mb-3"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
        >
          <img src={logo} alt="Logo" className="w-10 h-10 object-contain" />
        </motion.div>
      </div>

      {/* TITLE */}
      <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-10">
        <span className="text-3xl sm:text-5xl md:text-7xl flex justify-center flex-wrap gap-2">
          What is{" "}
          {title1.map((char, idx) => (
            <motion.span
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: idx * 0.07,
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
              {char}
            </motion.span>
          ))}{" "}
          ?
        </span>
      </h1>

      {/* DESCRIPTION (no fixed width) */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="cursor-pointer text-white font-medium max-w-4xl md:max-w-5xl lg:max-w-6xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed px-2 sm:px-4"
      >
        Label Bridge is a dynamic music technology ecosystem aimed at empowering
        independent artists and labels to distribute, monetize, and manage their
        music more efficiently. Specifically crafted for independent musicians,
        producers, and small labels, Label Bridge offers a straightforward
        solution for getting music onto streaming platforms. It also provides
        essential tools for maximizing revenue and tracking royalties. With all
        the resources you need to build and manage your career like a major
        label, you can easily access everything from your mobile device or
        computer.
      </motion.div>
    </section>
  );
};
