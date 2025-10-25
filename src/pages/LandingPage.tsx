import { HeroSection } from "../components/blocks/hero-section-dark";
import { ProblemSolutionSection } from "../components/blocks/problem-solution-section";
import { DashboardsShowcase } from "../components/blocks/dashboards-showcase";
import { FeaturesSection } from "../components/blocks/features-section";
// import { CTASection } from "../components/blocks/cta-section";
import { ContactForm } from "../components/blocks/contact-form";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/blocks/footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function LandingPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section id="hero" className="pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <HeroSection />
      </section>

      {/* Problem/Solution Section */}
      <section id="problem-solution" className="py-16 sm:py-24 bg-white">
        <ProblemSolutionSection />
      </section>

      {/* Dashboards Showcase Section */}
      <section id="dashboards" className="py-16 sm:py-24 bg-white">
        <DashboardsShowcase />
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-24 bg-white">
        <FeaturesSection />
      </section>

      {/* CTA Section */}
      {/* <section id="cta" className="py-0">
        <CTASection />
      </section> */}

      {/* Contact Form Section */}
      <section id="contact" className="py-16 sm:py-24 bg-white">
        <ContactForm />
      </section>

      <Footer />
    </div>
  );
}
