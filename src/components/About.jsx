import React from "react";
import profile from "../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className="">
      <div className="flex flex-col md:flex-row w-full mt-8 md:mt-20 p-4 sm:p-16 md:p-2 mb-20 md:mb-32 px-4 sm:px-7 min-h-screen playwritefont items-center justify-center">
        <div className="w-full md:w-[46%] p-4 md:p-8 flex justify-center">
          <img
            className="w-full max-w-[400px] rounded-3xl shadow-lg object-cover"
            src={"https://res.cloudinary.com/dbkecod0k/image/upload/v1770747023/Generated_Image_February_06_2026_-_9_26PM_r6vhx5.png"}
            alt="Profile"
          />
        </div>
        <div className="w-full md:w-[50%] text-black p-4 sm:p-10 playwritefont text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl italic mb-6">
            Lakshya Mutha
          </h1>
          <p className="mt-4 playwritefont text-base sm:text-lg md:text-xl italic leading-relaxed">
            To leverage my technical proficiency to contribute to the
            development of innovative and high-quality software solutions within
            a dynamic team environment while enhancing my skill-set and grow as
            a developer
          </p>
          <p className="mt-4 playwritefont text-base sm:text-lg md:text-xl italic leading-relaxed">
            Passionate learner in MERN stack development, aspiring & practicing
            to build full-stack web applications
          </p>
          <p className="mt-4 playwritefont text-base sm:text-lg md:text-xl italic leading-relaxed mb-8">
            Trained in React, Node.js, Express.js & MongoDB- creating responsive
            interfaces & integrating APIs
          </p>
          <a
            href="#connectlink"
            className="inline-block text-base sm:text-xl italic text-white px-8 sm:px-10 py-3 bg-black rounded-full shadow-lg hover:bg-brand-yellow hover:text-black transition-all duration-300"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
