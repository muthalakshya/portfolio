import { FaGithub } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-10 pb-16 bg-transparent px-4 sm:px-10 lg:px-20 text-center">
      {/* Slogan */}
      <h1 className="text-2xl sm:text-3xl text-center font-bold text-black mb-8">
        Innovate. Create. Inspire.
      </h1>

      {/* Social Links */}
      <div
        className="w-full flex py-2 flex-col sm:flex-row justify-center items-center mt-4 gap-4 sm:gap-6"
        id="connectlink"
      >
        <a
          href="https://www.linkedin.com/in/lakshyamutha/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex justify-center items-center text-lg sm:text-xl font-thin text-black border border-black px-6 py-2 rounded-2xl hover:bg-brand-yellow hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <FaLinkedinIn className="mr-3" />
          LinkedIn
        </a>
        <a
          href="https://github.com/muthalakshya/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex justify-center items-center text-lg sm:text-xl font-thin text-black border border-black px-6 py-2 rounded-2xl hover:bg-brand-yellow hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <FaGithub className="mr-3" />
          GitHub
        </a>
        <a
          href="https://www.instagram.com/lakshya_mutha/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto flex justify-center items-center text-lg sm:text-xl font-thin text-black border border-black px-6 py-2 rounded-2xl hover:bg-brand-yellow hover:text-black hover:shadow-lg transition-all duration-300 ease-in-out"
        >
          <FaSquareInstagram className="mr-3" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default Footer;
