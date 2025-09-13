import AboutSection from "../components/about-section";
import DarkFooter from "../components/dark-footer";
import FinalCTASection from "../components/final-cta-section";
import HeroSection from "../components/hero-section";
import HowItWorksSection from "../components/how-it-works-section";
import ProblemSection from "../components/problem-section";
import ResultsSection from "../components/results-section";
import SolutionSection from "../components/solution-section";

export default function HomePageLayout() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Problem Section */}
      <ProblemSection />
      
      {/* Solution Section */}
      <SolutionSection />
      
      {/* Results Section */}
      <ResultsSection />
      
      {/* How It Works Section */}
      <HowItWorksSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Final CTA Section */}
      <FinalCTASection />
      
      {/* Footer */}
      <DarkFooter />
    </main>
  );
}
