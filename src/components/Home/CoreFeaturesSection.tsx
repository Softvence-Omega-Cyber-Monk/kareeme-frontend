import React from "react";
import { motion, Variants } from "framer-motion";

import Icon1 from "@/assets/layer1.svg";
import Icon2 from "@/assets/Frame 1321317645.svg";
import Icon3 from "@/assets/Frame 1321317646.svg";
import Icon4 from "@/assets/photo/Frame 1321317647.png";

// ✅ Properly typed fadeUp variant
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const MarketingProcess: React.FC = () => {
  const items = [
    { icon: Icon1, title: "Strategic Planning", mt: "mt-60" },
    { icon: Icon2, title: "Compelling Content", mt: "mt-10" },
    { icon: Icon3, title: "Effective Promotion", mt: "mt-50" },
    { icon: Icon4, title: "Strong Audience Engagement", mt:  "mt-50" },
  ];

  return (
   <div className="flex justify-center items-center w-full py-10">
  <div className="max-w-7xl w-full px-4 flex justify-center relative">
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 w-full relative items-start">
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * 0.2 }}
          className="
            relative flex flex-col items-center gap-4 
            min-h-[320px] sm:min-h-[380px] md:min-h-[450px] lg:min-h-[550px] xl:min-h-[650px]
          "
        >
          <img
            src={item.icon}
            className={`w-16 h-16 sm:w-20 sm:h-20 object-contain ${item.mt}`}
          />

          <h3 className="text-white text-lg sm:text-xl font-medium text-center">
            {item.title}
          </h3>

          {/* Divider only between items on large screens */}
          {index < 3 && (
            <div
              className="
                hidden lg:block
                absolute top-0 right-0 
                w-[2px]
                bg-gradient-to-b 
                from-gray-400/40 
                via-gray-600/20 
                to-transparent
              "
              style={{ height: "100%" }}
            ></div>
          )}
        </motion.div>
      ))}
    </div>

  </div>
</div>

  );
};

export default MarketingProcess;
