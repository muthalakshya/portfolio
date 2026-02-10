import React from "react";
import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-10 pb-16  bg-transparent px-4 sm:px-10 lg:px-20 text-center">
      {/* Slogan */}
      <h1 className="text-2xl sm:text-3xl text-center font-bold text-black mb-8">
        Innovate. Create. Inspire.
      </h1>

      {/* Social Links */}
      <div
        className="w-full  flex pl-2 py-2 flex-row justify-center items-center mt-4 gap-2 sm:gap-6"
        id="connectlink"
      >
        <a
          href="https://www.linkedin.com/in/lakshyamutha/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex text-lg sm:text-xl font-thin text-black border border-black px-2 sm:px-6 py-2 rounded-2xl hover:bg-brand-yellow hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <FaLinkedinIn className="mr-4 mt-1" />
          LinkedIn
        </a>
        <a
          href="https://github.com/muthalakshya/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg flex sm:text-xl font-thin text-black border border-black px-2 sm:px-6 py-2 rounded-2xl hover:bg-brand-yellow hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <FaGithub className="mr-4 mt-1" />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/lakshya_mutha/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg flex sm:text-xl font-thin text-black border border-black px-2 sm:px-6 py-2 rounded-2xl hover:bg-brand-yellow hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <FaSquareInstagram className="mr-4 mt-1" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
