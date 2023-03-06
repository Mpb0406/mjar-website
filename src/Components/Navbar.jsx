import React, {useState} from 'react'
import mjar from '../assets/mjar-logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = ({openMenu, setOpenMenu}) => {
  
  console.log(openMenu)
  return (
    <nav className='bg-primary'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='mx-6 cursor-pointer'><img className='w-20 h-16' src={mjar} alt="" /></div>
        {/* Primary Nav */}
        <div className='hidden md:flex space-x-6 mx-6'>
          <a className='text-light' href="#">About</a><a className='text-light' href="#">Sign Up</a><a className='text-light' href="#">Training App</a>
        </div>
        {/* Mobile Icon */}
        <button onClick={() => setOpenMenu(!openMenu)} className='text-light text-2xl mx-6 md:hidden'><GiHamburgerMenu /></button>
      </div>
    </nav>
  )
}

export default Navbar