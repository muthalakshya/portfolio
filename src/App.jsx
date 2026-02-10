import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import LandingPage from "./pages/LandingPage";
import MoreProjects from "./pages/MoreProjects";
import { FaArrowUp } from "react-icons/fa";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Listen for scroll events to show/hide the button
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <div className="text-black playwritefont scroll-smooth relative min-h-screen">
        {/* Background Grid */}
        <div className="moving-grid"></div>
        <Analytics />

        <NavBar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/more-projects" element={<MoreProjects />} />
        </Routes>

        <Footer />

        {/* Back to Top Button */}
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-50 rounded-full bg-brand-yellow p-4 text-black shadow-lg hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-all duration-300"
            aria-label="Back to Top"
          >
            <FaArrowUp />
          </button>
        )}
      </div>
    </BrowserRouter>
  );
};

export default App;
