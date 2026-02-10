import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Education from "../components/Education";
import Experiences from "../components/Experiences";
import Projects from "../components/Projects";
import Achievements from "../components/Achievements";

const LandingPage = () => {
  return (
    <div className="relative z-10 bg-transparent">
      <Home />
      <About />
      <Education />
      <Experiences />
      <Skills />
      <Projects />
      <Achievements />
    </div>
  );
};

export default LandingPage;
