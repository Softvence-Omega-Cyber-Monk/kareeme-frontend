import { motion, Variants } from "framer-motion";
import Image1 from "@/assets/icons/Rectangle 7197.png"; 
import Image2 from "@/assets/Rectangle 7197.png"; 
import Image3 from "@/assets/photo/Rectangle 7197.png"; 
import Image4 from "@/assets/photo/New folder/Rectangle 7197.png"; 

// Scroll animation for individual images
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.8, ease: "easeOut" },
  }),
};

export default function ImageCollage() {
  return (
    <div className="flex justify-center items-center p-8">
      <div className="flex gap-4 max-w-7xl mx-auto items-end flex-wrap sm:flex-nowrap">

        {/* 1st Image */}
        <div className="relative overflow-hidden rounded-[20px] shadow-2xl h-[540px] flex-1">
          <motion.img
            src={Image1}
            alt="Man in purple car with ripped jeans"
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="w-[282px] h-[540px] object-cover rounded-[18px] transition-transform duration-500 hover:scale-105 flex-shrink-0"
          />
        </div>

        {/* 2nd Image */}
        <div className="relative overflow-hidden rounded-[20px] shadow-2xl h-[540px] flex-1 mt-24">
          <motion.img
            src={Image2}
            alt="Man with gold chains on red background"
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="w-[282px] h-[540px] object-cover rounded-[18px] transition-transform duration-500 hover:scale-105 flex-shrink-0 mt-24"
          />
        </div>

        {/* 3rd Image */}
        <div className="relative overflow-hidden rounded-[20px] shadow-2xl h-[540px] flex-1">
          <motion.img
            src={Image3}
            alt="Woman in fur coat and denim shorts"
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="w-[282px] h-[540px] object-cover rounded-[18px] transition-transform duration-500 hover:scale-105 flex-shrink-0"
          />
        </div>

        {/* 4th Image */}
        <div className="relative overflow-hidden rounded-[20px] shadow-2xl h-[540px] flex-1 mt-24">
          <motion.img
            src={Image4}
            alt="Man holding money on black background"
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="w-[282px] h-[540px] object-cover rounded-[18px] transition-transform duration-500 hover:scale-105 flex-shrink-0 mt-24"
          />
        </div>

      </div>
    </div>
  );
}
