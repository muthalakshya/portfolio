import React from "react";
import { FaGithub } from "react-icons/fa6";
import proj1a from '../assets/proj1a.jpg'
import proj1b from '../assets/proj1b.jpg'
import proj1c from '../assets/proj1c.jpg'
import proj1d from '../assets/proj1d.jpg'
import proj2a from '../assets/proj2a.jpg'
import proj2b from '../assets/proj2b.jpg'
import proj3a from '../assets/proj3a.jpg'
import proj3b from '../assets/proj3b.jpg'
import proj4a from '../assets/proj4a.jpg'
import proj4b from '../assets/proj4b.jpg'
import proj5a from '../assets/proj5a.jpg'
import proj5b from '../assets/proj5b.jpg'

const Projects = () => {
  return (
    <div className="bg-black playwritefont px-4 sm:px-10 lg:px-20 py-10" id="projects">
      <h1 className="text-center text-3xl sm:text-5xl text-white mb-8">Projects</h1>

      {/* Project Section */}
      <div className="p-8 flex flex-col lg:flex-row gap-8">
        {/* Project Title */}
        <div className="lg:w-1/4">
          <h1 className="text-3xl sm:text-5xl text-white">Forever e-com</h1>
        </div>

        {/* Project Details */}
        <div className="lg:w-3/4">
          {/* Technologies Used */}
          <div className="flex flex-row justify-between sm:items-center">
            <h2 className="text-xl sm:text-3xl text-white font-bold mt-2">Technologies Used</h2>
            <div className='flex'>
              <a href="https://github.com/muthalakshya/forever" className="text-md text-white mr-2 bg-green-600 px-2 pt-2 sm:px-5 sm:pt-2 rounded mt-2 sm:mt-0">
                <FaGithub />
              </a>
              <a href="https://forever-frontend-kfcd.onrender.com/" className="text-md text-white bg-red-600 px-5 py-1 rounded mt-2 sm:mt-0">
                Live
              </a>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap mt-4">
            {[
              "React",
              "Tailwind",
              "JWT",
              "Node.js",
              "Express",
              "MongoDB",
              "Mongoose",
            ].map((tech) => (
              <h2
                key={tech}
                className="text-sm text-white hover:text-black border border-white hover:bg-white px-4 sm:px-6 py-1 rounded-2xl m-2"
              >
                {tech}
              </h2>
            ))}
          </div>

          {/* Description List */}
          <ul className="mt-8 list-disc pl-6 text-sm sm:text-lg font-mono text-gray-300 marker:text-sky-400">
            <li className="mb-4">
            Developed a responsive eCommerce platform with authentication, dynamic product catalogue and secure payments option
            </li>
            <li className="mb-4">
              Features: cart management, order tracking and admin dashboard
            </li>
          </ul>

          {/* Project Images */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[proj1a,proj1b,proj1c,proj1d].map((image, index) => (
              <img
                key={index}
                className="w-[46%] sm:w-[48%] rounded-2xl "
                src={image}
                alt={`Project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col lg:flex-row gap-8">
        {/* Project Title */}
        <div className="lg:w-1/4">
          <h1 className="text-3xl sm:text-5xl text-white">Banking Website</h1>
        </div>

        {/* Project Details */}
        <div className="lg:w-3/4">
          {/* Technologies Used */}
          <div className="flex flex-row justify-between sm:items-center">
            <h2 className="text-xl sm:text-3xl text-white font-bold mt-2">Technologies Used</h2>
            <div className='flex'>
              <a href="https://github.com/muthalakshya/bank_modern_app" className="text-md text-white mr-2 bg-green-600 px-2 pt-2 sm:px-5 sm:pt-2 rounded mt-2 sm:mt-0">
                <FaGithub />
              </a>
              <a href="https://lakshya-mutha.netlify.app/" className="text-md text-white bg-red-600 px-5 py-1 rounded mt-2 sm:mt-0">
                Live
              </a>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap mt-4">
            {[
              "React",
              "Tailwind"
            ].map((tech) => (
              <h2
                key={tech}
                className="text-sm text-white hover:text-black border border-white hover:bg-white px-4 sm:px-6 py-1 rounded-2xl m-2"
              >
                {tech}
              </h2>
            ))}
          </div>

          {/* Description List */}
          <ul className="mt-8 list-disc pl-6 text-sm sm:text-lg font-mono text-gray-300 marker:text-sky-400">
            <li className="mb-4">
            Single page layout of banking website
            </li>
          </ul>

          {/* Project Images */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[proj2a,proj2b].map((image, index) => (
              <img
                key={index}
                className="w-[46%] sm:w-[48%] rounded-2xl"
                src={image}
                alt={`Project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col lg:flex-row gap-8">
        {/* Project Title */}
        <div className="lg:w-1/4">
          <h1 className="text-3xl sm:text-5xl text-white">Myntra Website</h1>
        </div>

        {/* Project Details */}
        <div className="lg:w-3/4">
          {/* Technologies Used */}
          <div className="flex flex-row justify-between sm:items-center">
            <h2 className="text-xl sm:text-3xl text-white font-bold mt-2">Technologies Used</h2>
            <div className='flex'>
              <a href="https://github.com/muthalakshya/myntra" className="text-md text-white mr-2 bg-green-600 px-2 pt-2 sm:px-5 sm:pt-2 rounded mt-2 sm:mt-0">
                <FaGithub />
              </a>
              <a href="https://timely-torrone-201ad9.netlify.app/" className="text-md text-white bg-red-600 px-5 py-1 rounded mt-2 sm:mt-0">
                Live
              </a>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap mt-4">
            {[
              "React",
              "Tailwind"
            ].map((tech) => (
              <h2
                key={tech}
                className="text-sm text-white hover:text-black border border-white hover:bg-white px-4 sm:px-6 py-1 rounded-2xl m-2"
              >
                {tech}
              </h2>
            ))}
          </div>

          {/* Description List */}
          <ul className="mt-8 list-disc pl-6 text-sm sm:text-lg font-mono text-gray-300 marker:text-sky-400">
            <li className="mb-4">
            Home page of Myntra website
            </li>
          </ul>

          {/* Project Images */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[proj5a,proj5b].map((image, index) => (
              <img
                key={index}
                className="w-[46%] sm:w-[48%] rounded-2xl"
                src={image}
                alt={`Project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col lg:flex-row gap-8">
        {/* Project Title */}
        <div className="lg:w-1/4">
          <h1 className="text-3xl sm:text-5xl text-white">Netfix clone</h1>
        </div>

        {/* Project Details */}
        <div className="lg:w-3/4">
          {/* Technologies Used */}
          <div className="flex flex-row justify-between sm:items-center">
            <h2 className="text-xl sm:text-3xl text-white font-bold mt-2">Technologies Used</h2>
            <div className='flex'>
              <a href="https://github.com/muthalakshya/netflix" className="text-md text-white mr-2 bg-green-600 px-2 pt-2 sm:px-5 sm:pt-2 rounded mt-2 sm:mt-0">
                <FaGithub />
              </a>
              <a href="https://luxury-travesseiro-068786.netlify.app/" className="text-md text-white bg-red-600 px-5 py-1 rounded mt-2 sm:mt-0">
                Live
              </a>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap mt-4">
            {[
              "React",
              "Tailwind"
            ].map((tech) => (
              <h2
                key={tech}
                className="text-sm text-white hover:text-black border border-white hover:bg-white px-4 sm:px-6 py-1 rounded-2xl m-2"
              >
                {tech}
              </h2>
            ))}
          </div>

          {/* Description List */}
          <ul className="mt-8 list-disc pl-6 text-sm sm:text-lg font-mono text-gray-300 marker:text-sky-400">
            <li className="mb-4">
            Single page layout of the Netfix website
            </li>
          </ul>

          {/* Project Images */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[proj3a,proj3b].map((image, index) => (
              <img
                key={index}
                className="w-[46%] sm:w-[48%] rounded-2xl"
                src={image}
                alt={`Project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="p-8 flex flex-col lg:flex-row gap-8">
        {/* Project Title */}
        <div className="lg:w-1/4">
          <h1 className="text-3xl sm:text-5xl text-white">PI Logistic</h1>
        </div>

        {/* Project Details */}
        <div className="lg:w-3/4">
          {/* Technologies Used */}
          <div className="flex flex-row justify-between sm:items-center">
            <h2 className="text-xl sm:text-3xl text-white font-bold mt-2">Technologies Used</h2>
            <div className='flex'>
              <a href="https://github.com/muthalakshya/pilogistics" className="text-md text-white mr-2 bg-green-600 px-2 pt-2 sm:px-5 sm:pt-2 rounded mt-2 sm:mt-0">
                <FaGithub />
              </a>
              <a href="https://adorable-treacle-e876a2.netlify.app/" className="text-md text-white bg-red-600 px-5 py-1 rounded mt-2 sm:mt-0">
                Live
              </a>
            </div>
          </div>

          {/* Technology Tags */}
          <div className="flex flex-wrap mt-4">
            {[
              "HTML",
              "Bootstrap",
              "CSS",
              "JavaScript",
              "Owl Carousel",
              "JQuery"
            ].map((tech) => (
              <h2
                key={tech}
                className="text-sm text-white hover:text-black border border-white hover:bg-white px-4 sm:px-6 py-1 rounded-2xl m-2"
              >
                {tech}
              </h2>
            ))}
          </div>

          {/* Description List */}
          <ul className="mt-8 list-disc pl-6 text-sm sm:text-lg font-mono text-gray-300 marker:text-sky-400">
            <li className="mb-4">
            Single page layout of the PI Logistic website
            </li>
          </ul>

          {/* Project Images */}
          <div className="flex flex-wrap gap-4 mt-8">
            {[proj4a,proj4b].map((image, index) => (
              <img
                key={index}
                className="w-[46%] sm:w-[48%] rounded-2xl"
                src={image}
                alt={`Project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
