import './App.css'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import MobileMenu from './Components/MobileMenu'
import Hero from './Components/Hero'
import About from './Components/About'

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='relative'>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && (<MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />)}
      <Hero />
      <About />
    </div>
  )
}

export default App
