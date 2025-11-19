import smallLogoIcon from "@/assets/logo 1.png";
import smallLOGO from "@/assets/smallLOGO.svg";

interface HeroProps {
  className?: string;
}

export const HeroItems: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <section
      className={`text-white text-center py-12 sm:py-16 md:py-24 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 relative z-10 ${className}`}
    >
      {/* Top Tag */}
<div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-3 sm:mb-4 md:mb-6 lg:mb-8 
                text-base sm:text-lg md:text-xl lg:text-base 
                bg-[#3A5CFF0D] rounded-2xl 
                w-[220px] sm:w-[260px] md:w-[320px] lg:w-[396px] 
                h-[40px] sm:h-[44px] md:h-[48px] lg:h-[52px] 
                mx-auto px-3">
  <img
    src={smallLogoIcon}
    alt="Small Logo"
    className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 lg:h-5 lg:w-5 object-contain logo-spin"
  />
  <p className="text-xs sm:text-sm md:text-base lg:text-sm text-gray-400 font-light tracking-widest uppercase">
    DISTRIBUTION | BRANDING | STRATEGY
  </p>
</div>



      {/* Main Title Section */}
      <h1 className="font-extrabold leading-snug sm:leading-tight md:leading-tight tracking-wide mb-6 sm:mb-8 md:mb-8">
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          WELCOME TO{" "}
          <span
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #f0fdf4",
            }}
          >
            ONEISONE
          </span>
        </span>
        <br className="block md:hidden" />
        <br />
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          <span
            className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-widest"
            style={{
              color: "transparent",
              WebkitTextStroke: "2px #f0fdf4",
            }}
          >
            ENTERTAINMENT
          </span>{" "}
          WHERE DREM SHIFT THE
        </span>
        <br />
        <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          CULTURE!!
        </span>
      </h1>

      {/* Learn More Button */}
      <button
        className="bg-[#3a4790] hover:bg-[#4b58a1] bg-gradient-to-b from-[#7B92FF] to-[#2941B5] text-white font-semibold w-[180px] sm:w-[200px] md:w-[234px] h-[48px] sm:h-[50px] md:h-[55px] py-2 sm:py-3 md:py-4 px-4 sm:px-6 md:px-10 rounded-full shadow-lg shadow-[#3a4790]/50 transition duration-300 ease-in-out flex items-center justify-center mx-auto gap-2 text-sm sm:text-base md:text-lg"
      >
        Learn More
        <span className="text-lg sm:text-xl md:text-xl">
          <img src={smallLOGO} alt="Logo" className="w-4 sm:w-5 md:w-6 h-auto" />
        </span>
      </button>
    </section>
  );
};
