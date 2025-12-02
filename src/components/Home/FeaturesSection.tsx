
import React from 'react';
import { motion, Variants } from 'framer-motion';
import cart from "@/assets/cart1.png";
import Blueangle from "@/assets/Blueangle.png";

const FeaturesSection: React.FC = () => {
  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const textBlockVariants: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="  text-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 relative overflow-hidden">
      {/* Background SVG */}
      <svg xmlns="http://www.w3.org/2000/svg" width="560" height="1000" viewBox="0 0 560 1000" fill="none" className="absolute -top-96 left-0 pointer-events-none opacity-90">
        <g style={{mixBlendMode: 'plus-lighter'}} opacity="0.8" filter="url(#filter0_f_1763_8444)">
          <path d="M-175.654 94L-269.986 178.875L407.417 905.294L465.131 853.366L-175.654 94Z" fill="url(#paint0_linear_1763_8444)"/>
        </g>
        <defs>
          <filter id="filter0_f_1763_8444" x="-363.986" y="0" width="923.117" height="999.294" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="47" result="effect1_foregroundBlur_1763_8444"/>
          </filter>
          <linearGradient id="paint0_linear_1763_8444" x1="-222.82" y1="136.438" x2="441.424" y2="874.697" gradientUnits="userSpaceOnUse">
            <stop stopColor="#3A5CFF"/>
            <stop offset="0.88" stopColor="#010411"/>
          </linearGradient>
        </defs>
      </svg>
      
      {/* Outer Border */}
      <div className="absolute -top-96 left-0 w-full h-full opacity-20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto">
        {/* --- Top Row --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
          {/* ARTIST-CENTRIC PHILOSOPHY */}
          <motion.div
            variants={textBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 border-l-[#2C3E95] border-b-[#2C3E95] shadow-lg w-full md:w-[792px] h-auto md:h-[294px] relative"
          >
            <img src={Blueangle} alt="" className="absolute top-4 left-4 w-8 h-8 sm:w-10 sm:h-10" />
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-200 tracking-wide">
              ARTIST-CENTRIC PHILOSOPHY
            </h2>
            <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
              At OneisOneEnt, our philosophy centers around an Artist-Centric approach. We offer
              bespoke services designed to cultivate an environment that supports you and your team,
              all while ensuring that you retain full ownership of your content. We focus on optimizing
              revenue opportunities across various platforms, granting you access to exclusive
              technology that enables real-time tracking of your earnings. Additionally, we provide top-
              tier label services, all while preserving your ownership and creative freedom.
            </p>
          </motion.div>

          {/* Revenue Overview Chart */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col w-full md:w-[344px] mx-auto"
          >
            <div className="relative rounded-lg flex items-center justify-center h-40 sm:h-48 md:h-52">
              <div className="absolute inset-0"></div>
              <span className="absolute text-gray-500 text-sm sm:text-base md:text-lg font-semibold rounded">
                <img 
                  src={cart} 
                  alt="Cart"
                  className='w-[344px] h-[300px] p-4 mt-20 mr-5 rounded-2xl'
                />
              </span>
            </div>
          </motion.div>
        </div>

        {/* --- Bottom Row --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* LABEL BRIDGE */}
          <motion.div
            variants={textBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-lg border-t-[#2C3E95] w-full"
          >
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-200 tracking-wide">
              LABEL BRIDGE
            </h2>
            <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
              Label Bridge is a dynamic music technology ecosystem created by
              OneisOneEnt aimed at empowering independent artists and labels
              to distribute, monetize, and manage their music more efficiently.
              Specifically crafted for independent musicians, producers, and
              small labels, Label Bridge offers a straightforward solution for
              getting music onto streaming platforms. It also provides essential
              tools for maximizing revenue and tracking royalties. With all the
              resources you need to build and manage your career like a major
              label, you can easily access everything from your mobile device or
              computer.
            </p>
          </motion.div>

          {/* SONGWRITERS & PRODUCER'S */}
          <motion.div
            variants={textBlockVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-lg w-full"
          >
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-200 tracking-wide">
              SONGWRITERS & PRODUCER'S
            </h2>
            <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
              OneisOneEnt is dedicated to providing transformative
              opportunities for songwriters and producers at every stage of their
              career journey. In the music realm, the term "placement" signifies
              the successful licensing or sale of a songwriter's or producer's work
              to various platforms, including artists, films, television shows, and
              other media. For songwriters, this typically means having their
              original compositions recorded and made available by an artist. For
              producers, it could entail having their beats or production featured
              in songs, commercials, or other creative projects. Achieving
              placements can represent a significant milestone, unlocking
              pathways to royalties, increased visibility, and additional
              opportunities. We collaborate closely with our clients to help them
              realize this ambition.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

































// // import cart from "@/assets/cart1.png" 

// // interface MotionDivProps {
// //   variants?: {
// //     hidden: { y?: number; x?: number; opacity: number };
// //     visible: { y?: number; x?: number; opacity: number; transition: { duration: number; ease: string } };
// //   };
// //   initial?: string;
// //   whileInView?: string;
// //   viewport?: { once: boolean; amount: number };
// //   className?: string;
// //   children: React.ReactNode;
// // }

// // // Simulated motion component for demonstration
// // const MotionDiv: React.FC<MotionDivProps> = ({ className, children }) => {
// //   return <div className={className}>{children}</div>;
// // };

// // const FeaturesSection: React.FC = () => {
// //   const itemVariants = {
// //     hidden: { y: 20, opacity: 0 },
// //     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
// //   };

// //   const textBlockVariants = {
// //     hidden: { x: -50, opacity: 0 },
// //     visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
// //   };

// //   return (
// //     <section className="bg-black/30 text-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 relative">
// //       {/* Outer Border */}
// //       <div className="absolute inset-0 pointer-events-none"></div>

// //       <div className="max-w-7xl mx-auto">
// //         {/* --- Top Row --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
// //           {/* ARTIST-CENTRIC PHILOSOPHY */}
// //           <MotionDiv
// //             variants={textBlockVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //             className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-lg w-full md:w-[792px] h-auto md:h-[294px] opacity-0 animate-[fadeInLeft_0.8s_ease-out_forwards]"
// //           >
// //             <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-200 tracking-wide">
// //               ARTIST-CENTRIC PHILOSOPHY
// //             </h2>
// //             <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
// //               At OneisOneEnt, our philosophy centers around an Artist-Centric approach. We offer
// //               bespoke services designed to cultivate an environment that supports you and your team,
// //               all while ensuring that you retain full ownership of your content. We focus on optimizing
// //               revenue opportunities across various platforms, granting you access to exclusive
// //               technology that enables real-time tracking of your earnings. Additionally, we provide top-
// //               tier label services, all while preserving your ownership and creative freedom.
// //             </p>
// //           </MotionDiv>

// //           {/* Revenue Overview Chart */}
// //           <MotionDiv
// //             variants={itemVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //             className="flex flex-col w-full md:w-[344px] mx-auto opacity-0 animate-[fadeInUp_0.6s_ease-out_0.2s_forwards]"
// //           >
// //             <div className="relative rounded-lg flex items-center justify-center h-40 sm:h-48 md:h-52">
// //               <div className="absolute inset-0"></div>
// //               <span className="absolute text-gray-500 text-sm sm:text-base md:text-lg font-semibold rounded">
// //                 <img 
// //                   src={cart} 
// //                   alt="Cart"
// //                   className='w-[344px] h-[300px] p-4 mt-20 mr-5 rounded-2xl'
// //                 />
// //               </span>
// //             </div>
// //           </MotionDiv>
// //         </div>

// //         {/* --- Bottom Row --- */}
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
// //           {/* LABEL BRIDGE */}
// //           <MotionDiv
// //             variants={textBlockVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //             className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-lg w-full opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.4s_forwards]"
// //           >
// //             <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-200 tracking-wide">
// //               LABEL BRIDGE
// //             </h2>
// //             <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
// //               Label Bridge is a dynamic music technology ecosystem created by
// //               OneisOneEnt aimed at empowering independent artists and labels
// //               to distribute, monetize, and manage their music more efficiently.
// //               Specifically crafted for independent musicians, producers, and
// //               small labels, Label Bridge offers a straightforward solution for
// //               getting music onto streaming platforms. It also provides essential
// //               tools for maximizing revenue and tracking royalties. With all the
// //               resources you need to build and manage your career like a major
// //               label, you can easily access everything from your mobile device or
// //               computer.
// //             </p>
// //           </MotionDiv>

// //           {/* SONGWRITERS & PRODUCER'S */}
// //           <MotionDiv
// //             variants={textBlockVariants}
// //             initial="hidden"
// //             whileInView="visible"
// //             viewport={{ once: true, amount: 0.3 }}
// //             className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-lg w-full opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.6s_forwards]"
// //           >
// //             <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-gray-200 tracking-wide">
// //               SONGWRITERS & PRODUCER'S
// //             </h2>
// //             <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
// //               OneisOneEnt is dedicated to providing transformative
// //               opportunities for songwriters and producers at every stage of their
// //               career journey. In the music realm, the term "placement" signifies
// //               the successful licensing or sale of a songwriter's or producer's work
// //               to various platforms, including artists, films, television shows, and
// //               other media. For songwriters, this typically means having their
// //               original compositions recorded and made available by an artist. For
// //               producers, it could entail having their beats or production featured
// //               in songs, commercials, or other creative projects. Achieving
// //               placements can represent a significant milestone, unlocking
// //               pathways to royalties, increased visibility, and additional
// //               opportunities. We collaborate closely with our clients to help them
// //               realize this ambition.
// //             </p>
// //           </MotionDiv>
// //         </div>
// //       </div>

// //       <style>{`
// //         @keyframes fadeInLeft {
// //           from {
// //             opacity: 0;
// //             transform: translateX(-50px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateX(0);
// //           }
// //         }
        
// //         @keyframes fadeInUp {
// //           from {
// //             opacity: 0;
// //             transform: translateY(20px);
// //           }
// //           to {
// //             opacity: 1;
// //             transform: translateY(0);
// //           }
// //         }
// //       `}</style>
// //     </section>
// //   );
// // };

// // export default FeaturesSection;














// // // import React from 'react';
// // // import { motion } from 'framer-motion';
// // // import cart from "@/assets/cart1.png"
// // // const FeaturesSection: React.FC = () => {
// // //   const itemVariants = {
// // //     hidden: { y: 20, opacity: 0 },
// // //     visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
// // //   };

// // //   const textBlockVariants = {
// // //     hidden: { x: -50, opacity: 0 },
// // //     visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
// // //   };

// // //   return (
// // //     <section className="bg-dark-background text-text-light py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-16 relative">
// // //       {/* Outer Border */}
// // //       <div className="absolute inset-0 border-custom-orange pointer-events-none"></div>

// // //       <div className="max-w-7xl mx-auto">
// // //         {/* --- Top Row --- */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
// // //           {/* ARTIST-CENTRIC PHILOSOPHY */}
// // //           <motion.div
// // //             variants={textBlockVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.3 }}
// // //             className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-lg w-full md:w-[792px] h-auto md:h-[294px]"
// // //           >
// // //             <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-text-gray-heading tracking-wide">
// // //               ARTIST-CENTRIC PHILOSOPHY
// // //             </h2>
// // //             <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
// // //               At OneisOneEnt, our philosophy centers around an Artist-Centric approach. We offer
// // //               bespoke services designed to cultivate an environment that supports you and your team,
// // //               all while ensuring that you retain full ownership of your content. We focus on optimizing
// // //               revenue opportunities across various platforms, granting you access to exclusive
// // //               technology that enables real-time tracking of your earnings. Additionally, we provide top-
// // //               tier label services, all while preserving your ownership and creative freedom.
// // //             </p>
// // //           </motion.div>

// // //           {/* Revenue Overview Chart */}
// // //           <motion.div
// // //             variants={itemVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.3 }}
// // //             className="flex flex-col w-full md:w-[344px] mx-auto"
// // //           >
// // //             {/* <div className="flex justify-between items-center mb-2 sm:mb-3 md:mb-4 w-full">
// // //               <div className="flex items-center text-sm sm:text-sm md:text-base text-gray-400">
// // //                 <span>Years</span>
// // //               </div>
// // //             </div> */}
// // //             <div className="relative  rounded-lg flex items-center justify-center h-40 sm:h-48 md:h-52">
// // //               <div className="absolute inset-0 "></div>
// // //               <span className="absolute text-gray-500 text-sm sm:text-base md:text-lg font-semibold rounded">
// // //              <img src={cart} alt=""
// // //              className='w-[344px] h-[300px] p-4 mt-20 mr-5 rounded-2xl'
// // //              />
// // //               </span>
// // //             </div>
// // //           </motion.div>
// // //         </div>

// // //         {/* --- Bottom Row --- */}
// // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
// // //           {/* LABEL BRIDGE */}
// // //           <motion.div
// // //             variants={textBlockVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.3 }}
// // //             className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-lg w-full"
// // //           >
// // //             <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-text-gray-heading tracking-wide">
// // //               LABEL BRIDGE
// // //             </h2>
// // //             <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
// // //               Label Bridge is a dynamic music technology ecosystem created by
// // //               OneisOneEnt aimed at empowering independent artists and labels
// // //               to distribute, monetize, and manage their music more efficiently.
// // //               Specifically crafted for independent musicians, producers, and
// // //               small labels, Label Bridge offers a straightforward solution for
// // //               getting music onto streaming platforms. It also provides essential
// // //               tools for maximizing revenue and tracking royalties. With all the
// // //               resources you need to build and manage your career like a major
// // //               label, you can easily access everything from your mobile device or
// // //               computer.
// // //             </p>
// // //           </motion.div>

// // //           {/* SONGWRITERS & PRODUCER'S */}
// // //           <motion.div
// // //             variants={textBlockVariants}
// // //             initial="hidden"
// // //             whileInView="visible"
// // //             viewport={{ once: true, amount: 0.3 }}
// // //             className="flex flex-col p-4 sm:p-6 md:p-6 bg-gray-900/40 rounded-lg border border-gray-700/50 shadow-lg w-full"
// // //           >
// // //             <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 text-text-gray-heading tracking-wide">
// // //               SONGWRITERS & PRODUCER'S
// // //             </h2>
// // //             <p className="text-sm sm:text-base md:text-base leading-relaxed sm:leading-relaxed md:leading-relaxed text-gray-300">
// // //               OneisOneEnt is dedicated to providing transformative
// // //               opportunities for songwriters and producers at every stage of their
// // //               career journey. In the music realm, the term "placement" signifies
// // //               the successful licensing or sale of a songwriter's or producer's work
// // //               to various platforms, including artists, films, television shows, and
// // //               other media. For songwriters, this typically means having their
// // //               original compositions recorded and made available by an artist. For
// // //               producers, it could entail having their beats or production featured
// // //               in songs, commercials, or other creative projects. Achieving
// // //               placements can represent a significant milestone, unlocking
// // //               pathways to royalties, increased visibility, and additional
// // //               opportunities. We collaborate closely with our clients to help them
// // //               realize this ambition.
// // //             </p>
// // //           </motion.div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default FeaturesSection;
