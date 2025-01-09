import React from 'react'
import Home from './Home'
import About from './About'
import Experiences from './Experiences'
import Projects from './Projects'
import NavBar from './Navbar'
import Footer from './Footer'

const App = () => {
  return (
    <div className=' bg-black text-slate-100 playwritefont '>
      <div className='bg-gradient-to-b from-zinc-900 p-6 floating-bg sm:smfloating-bg'>
        {/* <NavBar /> */}
        <Home />
      </div>
      <About />
      <Experiences />
      <Projects />
      <Footer />
    </div>
  )
}

export default App