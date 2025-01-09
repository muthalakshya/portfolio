import React from 'react';

const Footer = () => {
  return (
    <div className="pt-10 pb-16  bg-black px-4 sm:px-10 lg:px-20 ">
      {/* Slogan */}
      <h1 className="text-2xl sm:text-3xl text-center font-bold bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text">
        Innovate. Create. Inspire.
      </h1>

      {/* Social Links */}
      <div className="w-full flex ml-2 flex-row justify-center items-center mt-4 gap-4">
        <a
          href="https://www.linkedin.com/in/lakshyamutha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl font-thin text-white hover:border  shadow-lg hover:shadow-indigo-500/50 hover:border-white px-2 sm:px-6 py-2 rounded-2xl transition-all duration-300 ease-in-out"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/muthalakshya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl font-thin text-white hover:border  shadow-lg hover:shadow-indigo-500/50 hover:border-white px-2 sm:px-6 py-2 rounded-2xl transition-all duration-300 ease-in-out"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/lakshya_mutha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg sm:text-xl font-thin text-white hover:border  shadow-lg hover:shadow-indigo-500/50 hover:border-white px-2 sm:px-6 py-2 rounded-2xl transition-all duration-300 ease-in-out"
        >
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
