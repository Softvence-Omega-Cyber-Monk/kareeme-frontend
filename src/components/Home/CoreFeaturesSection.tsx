
import { motion } from 'framer-motion';
import img1 from "@/assets/Frame 1321317645.svg";
import img2 from "@/assets/Frame 1321317646.svg";
import img3 from "@/assets/layer1.svg";
export  const CoreFeaturesSection: React.FC = () => {
  return (
    <section className="bg-dark-background py-16 md:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Grid layout matching the image positioning */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          {/* Strategic Planning - Top Left */}
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center pt-8  "
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mb-4">
              <img src={img1} alt="Strategic Planning" className="w-full h-full object-contain" />
            </div>
            <p className="text-white text-sm md:text-base font-semibold">Strategic Planning</p>
          </motion.div>

          {/* Compelling Content - Top Center */}
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.15 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center col-span-2 md:col-span-1"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mb-4 border-2 border-dashed border-blue-400/40 rounded-lg p-3">
              <img src={img2} alt="Compelling Content" className="w-full h-full object-contain" />
            </div>
            <p className="text-white text-sm md:text-base font-semibold">Compelling Content</p>
          </motion.div>

          {/* Strong Audience Engagement - Top Right */}
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.3 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center hidden md:flex"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mb-4">
              <img src={img3} alt="Strong Audience" className="w-full h-full object-contain" />
            </div>
            <p className="text-white text-sm md:text-base font-semibold">Strong Audience<br/>Engagement</p>
          </motion.div>

          {/* Effective Promotion - Bottom Center */}
          <motion.div
            variants={{
              hidden: { y: 50, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6, delay: 0.45 } }
            }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col items-center text-center col-span-2 md:col-start-2 pt-8 md:pt-12"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 mb-4">
              <img src={img1} alt="Effective Promotion" className="w-full h-full object-contain" />
            </div>
            <p className="text-white text-sm md:text-base font-semibold">Effective Promotion</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};