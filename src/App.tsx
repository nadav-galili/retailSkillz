import { Navbar } from "./components/ui/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Spacer for fixed navbar */}
      <div className="h-16"></div>

      {/* Hero Section */}
      <section id="hero" className="pt-16 pb-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Elevate Your Retail Skills
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Comprehensive training and resources to excel in the retail industry
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our Key Skills Training
          </h2>
          {/* Placeholder for skills content */}
        </div>
      </section>

      {/* Training Section */}
      <section id="training" className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Training Programs
          </h2>
          {/* Placeholder for training content */}
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Retail Career Opportunities
          </h2>
          {/* Placeholder for careers content */}
        </div>
      </section>
    </div>
  );
}

export default App;
