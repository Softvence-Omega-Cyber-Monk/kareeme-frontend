import { motion } from 'framer-motion';


// Import your platform logos
import apple from "@/assets/icons/AppleMusic.svg";
import utube from "@/assets/icons/youtube.png";
import Spotify from "@/assets/icons/sportity.png";
import SoundCloud from "@/assets/icons/SoundCloud.svg";
import Audiomack from "@/assets/icons/Audiomack.svg";
import Deezer from "@/assets/icons/Deezer.svg";
import TIDAL from "@/assets/icons/TIDAL.svg";
import iHeartRadio from "@/assets/icons/apple.png";

const MusicPlatforms: React.FC = () => {
  const platforms = [
    { name: 'Apple', icon: apple },
    { name: 'YouTube', icon: utube },
    { name: 'Apple Music', icon: Spotify },
    { name: 'SoundCloud', icon: SoundCloud },
    { name: 'Audiomack', icon: Audiomack },
    { name: 'Deezer', icon: Deezer },
    { name: 'TIDAL', icon: TIDAL },
    { name: 'iHeartRadio', icon: iHeartRadio },
  ];

  // Triple for seamless loop
  const duplicatedPlatforms = [...platforms, ...platforms, ...platforms];

  return (
   
      <div className="flex items-center justify-center p-4 relative">
        <div className="w-full max-w-[1400px] relative overflow-hidden">
          {/* Framer Motion scrolling container */}
          <motion.div
            className="flex gap-10"
            animate={{ x: ['0%', '-33.333%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
            whileHover={{ x: '0%' }} // pause on hover
          >
            {duplicatedPlatforms.map((platform, index) => (
              <div key={index} className="flex-shrink-0 relative group">
                {/* Platform Card */}
                <div className="flex flex-col items-center gap-2 ">
                  {/* Icon Container */}
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center shadow-lg relative bg-gray-800 overflow-hidden">
                    <img
                      src={platform.icon}
                      alt={platform.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  {/* Platform Name */}
                  <span className="text-white text-xs md:text-sm font-medium text-center whitespace-nowrap">
                    {platform.name}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute top-0 left-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>
      </div>
    
  );
};

export default MusicPlatforms;
