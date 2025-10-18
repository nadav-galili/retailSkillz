import { HeroSection } from "./components/blocks/hero-section-dark";
import { ProblemSolutionSection } from "./components/blocks/problem-solution-section";
import { FeaturesSection } from "./components/blocks/features-section";
import { CTASection } from "./components/blocks/cta-section";
import { Footer } from "./components/blocks/footer";
import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section id="hero" className=" pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <HeroSection />
      </section>

      {/* Problem/Solution Section */}
      <section id="problem-solution" className="py-0">
        <ProblemSolutionSection />
      </section>

      {/* Features Section */}
      <section id="features" className="py-0 bg-gray-50">
        <FeaturesSection />
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-0">
        <CTASection />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
