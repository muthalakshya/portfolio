import React from 'react';
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-10 pb-16  bg-black px-4 sm:px-10 lg:px-20 ">
      {/* Slogan */}
      <h1 className="text-2xl sm:text-3xl text-center font-bold bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 text-transparent bg-clip-text">
        Innovate. Create. Inspire.
      </h1>

      {/* Social Links */}
      <div className="w-full  flex pl-2 py-2 flex-row justify-center items-center mt-4 gap-2 sm:gap-6" id="connectlink">
        <a
          href="https://www.linkedin.com/in/lakshyamutha/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-lg  sm:text-xl font-thin text-white hover:border  shadow-lg hover:shadow-indigo-500/50 hover:border-white px-2 sm:px-6 py-2 rounded-2xl transition-all duration-300 ease-in-out"
        >
          <FaLinkedinIn className='mr-4 mt-1 bg-blue-800' />
          LinkedIn
        </a>
        <a
          href="https://github.com/muthalakshya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg flex   sm:text-xl font-thin text-white hover:border  shadow-lg hover:shadow-indigo-500/50 hover:border-white px-2 sm:px-6 py-2 rounded-2xl transition-all duration-300 ease-in-out"
        >
          <FaGithub className='mr-4 mt-1' />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/lakshya_mutha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg flex   sm:text-xl font-thin text-white hover:border  shadow-lg hover:shadow-indigo-500/50 hover:border-white px-2 sm:px-6 py-2 rounded-2xl transition-all duration-300 ease-in-out"
        >
          <FaSquareInstagram className='mr-4 mt-1 bg-pink-500' />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
