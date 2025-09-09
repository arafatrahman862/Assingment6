import HeroSection from "@/components/modules/HomePage/HeroSection";
import HomeFeature from "./HomeFeature";
import FeedbackSection from "./FeedbackSection";
import HowItWorksSection from "./HowItWorksSection";
import ReadySection from "./ReadySection";

export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <HomeFeature />
      <FeedbackSection></FeedbackSection>
      <HowItWorksSection />
      <ReadySection />
    </div>
  );
}