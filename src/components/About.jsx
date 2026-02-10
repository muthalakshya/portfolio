import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex items-center justify-center bg-transparent py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-20">
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-[400px] rounded-3xl shadow-2xl object-cover hover:scale-[1.02] transition-transform duration-300"
            src={
              "https://res.cloudinary.com/dbkecod0k/image/upload/v1770747023/Generated_Image_February_06_2026_-_9_26PM_r6vhx5.png"
            }
            alt="Profile"
          />
        </div>
        <div className="w-full md:w-1/2 text-black text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold italic mb-8">
            Lakshya Mutha
          </h1>
          <div className="space-y-6 text-base sm:text-lg md:text-xl font-medium text-zinc-700">
            <p className="leading-relaxed">
              To leverage my technical proficiency to contribute to the
              development of innovative and high-quality software solutions
              within a dynamic team environment while enhancing my skill-set and
              grow as a developer.
            </p>
            <p className="leading-relaxed">
              Passionate learner in MERN stack development, aspiring &
              practicing to build full-stack web applications.
            </p>
            <p className="leading-relaxed">
              Trained in React, Node.js, Express.js & MongoDB- creating
              responsive interfaces & integrating APIs.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="#connectlink"
              className="inline-block text-base sm:text-xl font-bold text-white px-8 sm:px-10 py-3 bg-black rounded-full shadow-lg hover:bg-brand-yellow hover:text-black transition-all duration-300"
            >
              Let's Connect
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
