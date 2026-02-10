import { useState, useEffect } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

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
    <div className="text-black playwritefont scroll-smooth relative min-h-screen">
      {/* Background Grid */}
      <div className="moving-grid"></div>

      <NavBar />

      {/* Content */}
      <div className="relative z-10 bg-transparent">
        <Home />
      </div>
      <div className="relative z-10">
        <About />
        <Skills />
        <Education />
        <Experiences />
        <Projects />
        <Achievements />
        <Footer />
      </div>

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
  );
};

export default App;
