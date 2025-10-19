import React from "react";
import { Link } from "react-router-dom";
import mixpanel from "mixpanel-browser";
export const Footer: React.FC = () => {
  const handleAccessibilityClick = () => {
    mixpanel.track("Accessibility Page clicked");
    window.location.href = "/accessibility";
  };

  return (
    <footer className="bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Link
            to="/accessibility"
            onClick={handleAccessibilityClick}
            className="text-sm text-gray-600 hover:text-gray-900  underline transition-colors">
            הצהרת נגישות
          </Link>
        </div>
      </div>
    </footer>
  );
};
