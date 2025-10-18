import { HeroSection } from "./components/blocks/hero-section-dark";
import { ProblemSolutionSection } from "./components/blocks/problem-solution-section";
import { DashboardsShowcase } from "./components/blocks/dashboards-showcase";
import { FeaturesSection } from "./components/blocks/features-section";
import { CTASection } from "./components/blocks/cta-section";
import { ContactForm } from "./components/blocks/contact-form";
import { Navbar } from "./components/ui/Navbar";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const token = import.meta.env.VITE_MIXPANEL_TOKEN;
    if (!token) {
      console.error("VITE_MIXPANEL_TOKEN is not set in .env file");
      return;
    }

    mixpanel.init(token, {
      track_pageview: true,
      persistence: "localStorage",
      autocapture: true,
      record_sessions_percent: 100,
      ignore_dnt: true,
      api_host: "https://api-eu.mixpanel.com",
    });

    const userId = `user_${Math.random().toString(36).substr(2, 9)}`;
    mixpanel.identify(userId);

    mixpanel.register({
      page_type: "landing_page",
      app_name: "retailSkillz",
      environment: "production",
    });
  }, []);

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

      {/* Dashboards Showcase Section */}
      <section id="dashboards" className="py-0 bg-white">
        <DashboardsShowcase />
      </section>

      {/* Features Section */}
      <section id="features" className="py-0 bg-gray-50">
        <FeaturesSection />
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-0">
        <CTASection />
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-0 bg-white">
        <ContactForm />
      </section>

      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
