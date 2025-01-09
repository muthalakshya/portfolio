import React, { useState } from 'react'
import NavBar from './Navbar'
import Texttransition from './Texttransition'
import { ReactTyped } from "react-typed";

const Home = () => {
  const [menu,setMenu] = useState(false)

  

  return (
    <div id="home" className=''>
      <NavBar />
    <div  class="sm:place-content-center pt-40 p-4 sm:p-0 backhome  text-center">
      
      <div className=' sm:text-6xl text-3xl md:4xl text-center font-bold italic text-slate-100'>
        <ReactTyped
          strings={["Crafting Code, Breathing Innovation."]}
          typeSpeed={100}
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
      </div>
      <div className=' sm:text-3xl text-base md:2xl mt-5 text-center italic '>
        <ReactTyped
          strings={["Turning ideas into experiences, one line at a time."]}
          typeSpeed={100}
          backSpeed={20}
          cursorChar="|"
          showCursor={true}
        />
      </div>
      <div className=' sm:text-xl text-base md:lg mt-10 text-center italic'>
        <a href="#about" className='bg-transparent   bg-zinc-800 px-5 py-3 rounded-full  shadow-lg hover:shadow-indigo-50/50 '>Know more.</a>
      </div>
  </div>

    </div>
  )
}

export default Home