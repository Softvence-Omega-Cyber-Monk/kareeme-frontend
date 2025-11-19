// src/components/DistributionSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import distributionIllustration from '@/assets/photo/Editorial.jpg';

const DistributionSection: React.FC = () => {
  return (
    <div>
      {/* --- Distribution Section --- */}
      <div className="bg-dark-background py-12 sm:py-16 md:py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-16 shadow-lg border border-gray-800 bg-[#081E19] justify-center items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg flex justify-center items-center"
            >
              <img 
                src={distributionIllustration} 
                alt="Music Distribution" 
                className="w-full h-auto max-w-full md:max-w-lg" 
              />
            </motion.div>

            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-2 sm:px-4 md:px-6"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-tight mb-4 sm:mb-5 md:mb-6">
                DISTRIBUTION
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                Music distribution involves making music accessible across multiple platforms, including streaming services and digital stores. OneisOneEnt connects artists and labels with these platforms, managing uploads, formatting, delivery, and royalty distribution.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* --- Publishing Section --- */}
      <div className="bg-dark-background py-8 sm:py-12 md:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 md:gap-16 shadow-lg border border-gray-800 bg-[#081E19] justify-center items-center">
            {/* Right Column - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="px-2 sm:px-4 md:px-6 order-2 lg:order-1"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white uppercase leading-tight mb-4 sm:mb-5 md:mb-6">
                PUBLISHING
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-300">
                Music publishing manages the administration of compositions, including licensing, royalties, and placements across multiple platforms. OneisOneEnt ensures your works are efficiently distributed and monetized, giving creators control and visibility.
              </p>
            </motion.div>

            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg flex justify-center items-center order-1 lg:order-2"
            >
              <img 
                src={distributionIllustration} 
                alt="Publishing Illustration" 
                className="w-full h-auto max-w-full md:max-w-lg" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DistributionSection;
