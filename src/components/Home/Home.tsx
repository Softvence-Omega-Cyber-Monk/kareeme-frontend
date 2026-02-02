import CollageImage from "@/components/Home/CollageImage";

import CommonWrapper from "@/common/CommonWrapper";
import { HeroItems } from "@/components/Home/HeroItems";
import Overview from "@/components/Home/Overview";
import MusicPlatforms from "@/components/Home/MusicPlatforms";
import WhatWeDoSection from "@/components/Home/WhatWeDoSection";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroBanner from "@/components/Home/HeroBanner";
import ReleasesStrategy from "@/components/Home/ReleaseStrategy";
import MarketingProcess from "@/components/Home/CoreFeaturesSection";
import FeaturedArticlesSection from "@/components/Home/FeaturedArticlesSection";
import DevelopmentArtist from "@/components/Home/DevelopmentArtist";
import DistributionSection from "@/components/Home/DistributionSection";
import WorkWithUsSection from "@/components/Home/WorkWithUsSection";

const customStyles = `
  /* Tailwind requires a base for custom layers */
  // @layer base {
  //   body {
  //     overflow-x: hidden;
  //     /* Using a dark font color fallback for text that doesn't have a color class */
  //     color: #c0c0c0; 
  //   }
  // }

  // /* --- 1. Background Keyframes (Moving Light Spots) --- */
  // @keyframes light-spot-move {
  //   0% {
  //     background-position: 0% 0%;
  //   }
  //   25% {
  //     background-position: 100% 0%;
  //   }
  //   50% {
  //     background-position: 0% 100%;
  //   }
  //   75% {
  //     background-position: 100% 100%;
  //   }
  //   100% {
  //     background-position: 0% 0%;
  //   }
  // }

  // /* --- 2. Background Keyframes (Scanline/Texture) --- */
  // @keyframes scanline-move {
  //   0% {
  //     background-position: 0% 0%;
  //   }
  //   100% {
  //     background-position: 0% 100%;
  //   }
  // }
  
  // /* --- 3. Logo Spin Keyframes (Used by Navbar and HeroItems) --- */
  // @keyframes spin {
  //   from {
  //     transform: rotate(0deg);
  //   }
  //   to {
  //     transform: rotate(360deg);
  //   }
  // }

  // /* --- 4. Custom Background Element using CSS for pseudo-element --- */
  // .animated-background {
  //   background-color: #000; 
  //   background-image: 
  //     radial-gradient(circle at 10% 10%, rgba(0, 255, 0, 0.1), rgba(0, 0, 0, 0) 70%),
  //     radial-gradient(circle at 90% 90%, rgba(0, 255, 0, 0.1), rgba(0, 0, 0, 0) 70%),
  //     radial-gradient(circle at 50% 0%, rgba(0, 255, 0, 0.15), rgba(0, 0, 0, 0) 70%);
    
  //   background-size: 200% 200%;
  //   background-repeat: no-repeat;
  //   animation: light-spot-move 35s ease-in-out infinite alternate;
  // }

  // /* --- 5. Scanline/Stripe Effect Layer --- */
  // .animated-background::before {
  //   content: "";
  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 100%;
  //   height: 100%;
    
  //   background-image: repeating-linear-gradient(
  //     0deg, 
  //     rgba(142, 255, 142, 0.01),
  //     rgba(0, 0, 0, 0.2) 1px,  
  //     rgba(0, 0, 0, 0.2) 40px
  //   );
    
  //   background-size: 100% 80px;
  //   animation: scanline-move 20s linear infinite;
    
  //   opacity: 0.05;
  //   pointer-events: none; 
  // }

  /* --- 6. Logo Spin Classes (Used by Navbar and Hero) --- */
  .navbar-logo, .logo-spin {
    animation: spin 8s linear infinite;
  }
`;

export default function Home() {
  return (
    <>
      <style>{customStyles}</style>
      <div className="relative z-10 min-h-screen">
        {/* <div className="animated-background fixed top-0 left-0 w-screen h-screen -z-10"></div> */}

        <HeroItems />
        <CommonWrapper>
          <Overview></Overview>
          <MusicPlatforms></MusicPlatforms>
          <WhatWeDoSection></WhatWeDoSection>
        </CommonWrapper>

        <FeaturesSection></FeaturesSection>

        {/* note */}
        <HeroBanner></HeroBanner>
        <CommonWrapper>
          <ReleasesStrategy></ReleasesStrategy>
          <MarketingProcess></MarketingProcess>
          <FeaturedArticlesSection></FeaturedArticlesSection>
          <DevelopmentArtist></DevelopmentArtist>
          <DistributionSection></DistributionSection>
        </CommonWrapper>

        {/*  */}
        <CollageImage></CollageImage>
        <WorkWithUsSection></WorkWithUsSection>
      </div>
    </>
  );
}
