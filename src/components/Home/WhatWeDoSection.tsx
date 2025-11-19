import smallLogoIcon from "@/assets/logo 1.png";
import CommonWrapper from './../../common/CommonWrapper';

const WhatWeDoSection = () => {
    return (
        <CommonWrapper>
            <div className="text-center">

                {/* Top Tag */}
                <div className="flex items-center justify-center gap-2 mb-4 sm:mb-6 md:mb-8 
                                bg-[#3A5CFF0D] rounded-2xl 
                                w-[220px] sm:w-[260px] md:w-[320px] lg:w-[396px] 
                                h-[44px] sm:h-[48px] md:h-[52px] mx-auto">
                    <img
                        src={smallLogoIcon}
                        alt="Small Logo"
                        className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5 object-contain logo-spin"
                    />
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 font-light tracking-[0.25em] uppercase">
                        WHAT WE DO
                    </p>
                </div>

                {/* Main Heading */}
                <div className="font-extrabold mx-auto px-4 sm:px-0">
                    <h1 className="text-[28px] sm:text-3xl md:text-4xl lg:text-4xl uppercase text-[#F2F2F2] leading-snug md:leading-tight">
                        Empowering creators to thrive in the ever-<br className="hidden sm:block" />
                        evolving global music landscape<br className="hidden sm:block" />
                        through cutting-edge technology<br className="hidden md:block" />
                        and dedicated support.
                    </h1>
                </div>

            </div>
        </CommonWrapper>
    );
};

export default WhatWeDoSection;
