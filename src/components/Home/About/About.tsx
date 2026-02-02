import HeroSection from "./HeroSection";
import MissionSection from "./MissionSection";
import EmpoweringSection from "./EmpoweringSection";
import VisionSection from "./VisionSection";
import TechnologySection from "./TechnologySection";
import SupportSection from "./SupportSection";
import CollaborationSection from "./CollaborationSection";
import FutureSection from "./FutureSection";
import CTASection from "./CTASection";
// import CommonWrapper from "@/common/CommonWrapper";

const About = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection />
      <MissionSection />
      <EmpoweringSection />
      <VisionSection />
      <TechnologySection />
      <SupportSection />
      <CollaborationSection />
      <FutureSection />
      <CTASection />
    </div>
  );
};

export default About;
