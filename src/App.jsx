import './App.css'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import MobileMenu from './Components/MobileMenu'
import Contact from './Pages/Contact'
import Home from './Pages/Home'

function App() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className='relative'>
      <Navbar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && (<MobileMenu openMenu={openMenu} setOpenMenu={setOpenMenu} />)}
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
