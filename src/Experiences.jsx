import React from 'react'
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";

const Experiences = () => {
  return (
    <div className='md:mt-16 pt-8 pb-20 bg-black ' id="experience">
      <h1 className='text-center text-5xl mt-8'>Work Experience</h1>
      <div className="max-w-6xl mx-2 sm:mx-auto  p-8 mt-16 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 hover:shadow-lg hover:shadow-indigo-500/50">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-2xl font-bold">Web Developer</h2>
          <div className="flex text-gray-400 mt-1 text-right ">
            <SlCalender className="mt-1"/>
            <p className='ml-2'> May 2024 - July 2024</p>
            <span className="text-sm ml-4 text-green-500 bg-green-900 px-2 py-1 rounded">Remote</span>
          </div>
        </div>
        <div className="flex text-blue-400 mt-2">
          <FaRegBuilding  className="mt-1" />
          <a href={"http://vlab.iitr.ac.in/index.html"}  rel="noreferrer" className="font-medium mr-2 ml-2">Virtual Labs, IIT Roorkee.</a>
          <FaLocationDot  className="mt-1" />
          <p className='ml-2'>Roorkee</p>
        </div>
        <ul className="mt-4 list-disc pl-6 text-gray-300 marker:text-sky-400 ">
          <li>Developed an Electrical Circuit Design Lab, enabling simulations for cross-departmental use</li>
          <li>Built interactive and intuitive simulations using HTML, CSS, JavaScript, jsPlumb, Bootstrap & Sweetalert</li>
          <li>Engineered multiple experiments like motor control circuits, logic gates & relay switching mechanisms</li>
        </ul>
      </div>
      <div className="max-w-6xl mx-2 sm:mx-auto p-8 mt-16 bg-zinc-900 text-white rounded-lg shadow-md hover:bg-zinc-800 hover:shadow-lg hover:shadow-indigo-500/50">
        <div className="sm:flex justify-between items-center">
          <h2 className="text-2xl font-bold">Campus Executive</h2>
          <div className="flex text-gray-400 mt-1 text-right ">
            <SlCalender className="mt-1"/>
            <p className='ml-2'> July 2023 - Jan 2024</p>
            <span className="text-sm ml-4 text-green-500 bg-green-900 px-2 py-1 rounded">Remote</span>
          </div>
        </div>
        <div className="flex text-blue-400 mt-2">
          <FaRegBuilding  className="mt-1" />
          <a href="https://www.ecell.in/mainpage/"  rel="noreferrer" className="font-medium mr-2 ml-2">E-Cell, IIT Bombay.</a>
          <FaLocationDot  className="mt-1" />
          <p className='ml-2'>Mumbai</p>
        </div>
        <ul className="mt-4 list-disc pl-6 marker:text-sky-400 ">
          <li>Spearheaded institute level initiatives in collaboration with IIT Bombay's E-Cell to promote entrepreneurship</li>
          <li>Organized workshops & events to foster innovation among aspiring entrepreneurs</li>
        </ul>
      </div>
    </div>
  )
}

export default Experiences