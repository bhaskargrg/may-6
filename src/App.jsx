import React from 'react'
import Navbar from './component/Navbar'
import Landing from './component/Landing'
import Marquee from './component/Marquee'
import About from './component/About'
import Eyes from './component/Eyes'
import Fetaured from './component/Fetaured'

function App() {
  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <Navbar/>
      <Landing/>
      <Marquee/>
      <About/>
      <Eyes/>
      <Fetaured/>
    </div>

  )
}

export default App