import { motion } from "framer-motion";
import smallLOGO from "@/assets/smallLOGO.svg";
import img1 from "@/assets/image 2.png";
import ProductGallery from "./ProductGallery";

interface HeroProps {
  className?: string;
}

export const ShopBanner: React.FC<HeroProps> = ({ className = "" }) => {
  const title1 = "DIVERSE ".split("");
  const title2 = "PRODUCT".split("");

  return (
  
    <div className="w-full max-w-7xl xl:max-w-[1350px] mx-auto"> 
      <div className="flex flex-col md:flex-col lg:flex-row ">
        {/* LEFT SECTION */}
        <section
          // padding রেসপনসিভ করা হয়েছে
          className={`text-white text-center py-12 sm:py-16 md:py-20 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 lg:w-1/2 ${className}`} 
        >
          <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-8">
            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center flex-wrap gap-1">
              EXPLORE OUR{" "}
              {title1.map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.1,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  // text size রেসপনসিভ করা হয়েছে
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest" 
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #f0fdf4",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>

            <br className="block md:hidden" />
            <br />

            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl flex justify-center flex-wrap gap-1">
              {title2.map((char, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: idx * 0.08 + 0.5,
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                  }}
                  // text size রেসপনসিভ করা হয়েছে
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-widest" 
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px #f0fdf4",
                  }}
                >
                  {char}
                </motion.span>
              ))}
              {" "}RANGE AND SHOP
            </span>

            <br />

            <span className="text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              OUR COLLECTION
            </span>
          </h1>
          <p className="mb-2">
            Wear the Vibe. Support the Movement. Exclusive Merch from the OneIsOne Roster.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            // বাটন সাইজ রেসপনসিভ করা হয়েছে
            className="bg-[#3a4790] hover:bg-[#4b58a1] cursor-pointer bg-gradient-to-b from-[#7B92FF] to-[#2941B5] text-white font-semibold w-auto sm:w-[200px] md:w-[234px] h-[48px] sm:h-[50px] md:h-[55px] py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10 rounded-full shadow-lg shadow-[#3a4790]/50 transition duration-300 ease-in-out flex items-center justify-center mx-auto gap-2 text-sm sm:text-base md:text-lg"
          >
            Learn More
            <span className="text-lg sm:text-xl md:text-xl">
              <img src={smallLOGO} alt="Logo" className="w-4 sm:w-5 md:w-6 h-auto" />
            </span>
          </motion.button>
        </section>

        {/* RIGHT IMAGE SECTION */}
        <section className=" flex justify-center lg:justify-end px-4 mt-5 lg:w-1/2">
          {/* স্থির max-w-[442px] h-[577px] সরিয়ে রেসপনসিভ ক্লাস ব্যবহার করা হয়েছে */}
          <img 
            src={img1} 
            alt="banner" 
            className="w-full max-w-md lg:max-w h-auto object-contain" 
          />
        </section>
      </div>
      
      {/* Product Gallery Section and Explore More Button */}
      <div>
        <ProductGallery></ProductGallery>
          <div className="h-24 md:h-32 bg-black/70 flex items-center justify-center"> {/* flex/justify/items সেন্টার করার জন্য */}
                <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#3a4790]  hover:bg-[#4b58a1] cursor-pointer bg-gradient-to-b from-[#7B92FF] to-[#2941B5] text-white font-semibold w-auto sm:w-[200px] md:w-[234px] h-[48px] sm:h-[50px] md:h-[55px] py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10 rounded-full shadow-lg shadow-[#3a4790]/50 transition duration-300 ease-in-out flex items-center justify-center mx-auto gap-2 text-sm sm:text-base md:text-lg"
              >
                Explore More
                <span className="text-lg sm:text-xl md:text-xl">
                  <img src={smallLOGO} alt="Logo" className="w-4 sm:w-5 md:w-6 h-auto" />
                </span>
              </motion.button>
          </div>
        
      </div>

    </div>
  );
};