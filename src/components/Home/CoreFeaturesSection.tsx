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
    { icon: Icon4, title: "Strong Audience Engagement", mt: "" },
  ];

  return (
    <div className="flex justify-center items-center w-full py-10">
      <div className="max-w-7xl w-full px-4 flex justify-center relative" style={{ height: "772px" }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 w-full relative items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"      // Scroll-triggered animation
              viewport={{ once: true, amount: 0.5 }} // Trigger when 50% visible
              transition={{ delay: index * 0.2 }}    // Stagger for smoother effect
              className="relative flex flex-col items-center gap-4 h-full"
            >
              <img src={item.icon} className={`w-20 h-20 object-contain ${item.mt}`} />
              <h3 className="text-white text-xl font-medium">{item.title}</h3>

              {/* Divider for first 3 items */}
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
                  style={{ height: "772px" }}
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
