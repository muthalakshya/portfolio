import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import About from './components/About'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import NavBar from './components/Navbar'
import Footer from './components/Footer'
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="bg-black text-slate-100 playwritefont">
      <div className="bg-gradient-to-b from-zinc-900 p-6 floating-bg sm:smfloating-bg">
        <Home />
      </div>
      <About />
      <Experiences />
      <Projects />
      <Footer />

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 z-50 rounded-full bg-orange-200 p-4 text-black shadow-lg hover:text-black hover:bg-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;
