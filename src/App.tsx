import { LandingPage } from "./pages/LandingPage";
import { AccessibilityPage } from "./pages/AccessibilityPage";
import mixpanel from "mixpanel-browser";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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
    <div className="min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/accessibility" element={<AccessibilityPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
