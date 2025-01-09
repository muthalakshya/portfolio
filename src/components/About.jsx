import React from 'react'
import profile  from "../assets/profile.jpg";

const About = () => {
  return (
    <div id="about" className=' sm:pt-20 pt-8'>
      <div  className='  sm:flex w-full sm:mt-8 sm:p-16 md:p-2 md:mb-24 px-7 sm:h-[700px] md:h-[500px] playwritefont mb-32 '>
      <div className=" sm:w-[46%] sm:p-16 md:p-4 content-center place-items-end "><img className="h-full rounded-3xl" src={profile} alt="" /></div>
      <div className=" sm:w-[50%]  text-zinc-300  text-gradient-to-l from-slate-900 p-3  sm:p-10 playwritefont  "> 
        <h1 className='sm:text-6xl md:text-4xl text-4xl  italic'>Lakshya Mutha</h1>
        <p className='mt-6 playwritefont text-lg md:text-md italic justify-center sm:leading-10 md:leading-8    '>To leverage my technical proficiency to contribute to the development of innovative and
          high-quality software solutions within a dynamic team environment while enhancing my skill-set and
          grow as a developer
        </p>
        <p className='mt-6 playwritefont text-lg italic justify-center sm:leading-10 md:leading-8   '>Passionate learner in MERN stack development, aspiring & practicing to build full-stack web
          applications</p>
        <p className='mt-6 playwritefont text-lg italic justify-center sm:leading-10 mb-6 md:leading-8  '>Trained in React, Node.js, Express.js & MongoDB- creating responsive interfaces & integrating APIs</p>
        <a href='#connectlink' className=' sm:text-xl text-base md:lg sm:mt-10 md:mt-2 lg:mt-2 text-center italic text-white px-10   bg-zinc-700  p-3 rounded-full'>Let's Connect</a>
      </div>
    </div>
    </div>
  )
}

export default About