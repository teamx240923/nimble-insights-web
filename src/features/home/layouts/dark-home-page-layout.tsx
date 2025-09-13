import DarkHeroSection from '../components/dark-hero-section';
import DarkProblemSection from '../components/dark-problem-section';
import SolutionSection from '../components/solution-section'; // We'll use the enhanced light version for now
import ResultsSection from '../components/results-section';
import HowItWorksSection from '../components/how-it-works-section';
import AboutSection from '../components/about-section';
import FinalCTASection from '../components/final-cta-section';
import DarkFooter from '../components/dark-footer';

export default function DarkHomePageLayout() {
  return (
    <main className="min-h-screen bg-gray-900">
      {/* Dark Hero Section */}
      <DarkHeroSection />
      
      {/* Dark Problem Section */}
      <DarkProblemSection />
      
      {/* Solution Section - Enhanced with dark styling */}
      <div className="bg-gray-800">
        <SolutionSection />
      </div>
      
      {/* Results Section - Enhanced with dark styling */}
      <div className="bg-gray-900">
        <ResultsSection />
      </div>
      
      {/* How It Works Section - Enhanced with dark styling */}
      <div className="bg-gray-800">
        <HowItWorksSection />
      </div>
      
      {/* About Section - Enhanced with dark styling */}
      <div className="bg-gray-900">
        <AboutSection />
      </div>
      
      {/* Final CTA Section - Enhanced with dark styling */}
      <div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900">
        <FinalCTASection />
      </div>
      
      {/* Dark Footer */}
      <DarkFooter />
    </main>
  );
}
