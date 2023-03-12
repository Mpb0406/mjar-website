import React from 'react'
import mjar from '../assets/mjar-logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'


const Navbar = ({openMenu, setOpenMenu}) => {
  const appLink = 'https://mjartrainingwebapp.herokuapp.com'
    const appURL = new URL(appLink).href

  return (
    <nav className='bg-primary fixed z-20 w-full shadow-2xl'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='mx-6 cursor-pointer'><img className='w-20 h-16' src={mjar} alt="" /></div>
        {/* Primary Nav */}
        <div className='hidden md:flex space-x-6 mx-6'>
          <a className='text-light' href="#about">About</a><a className='text-light' href="#">Sign Up</a><a target={'_blank'} rel="noopener noreferrer external" href={appURL} className='text-light'>Training App</a>
        </div>
        {/* Mobile Icon */}
        <button onClick={() => setOpenMenu(!openMenu)} className='text-light text-2xl mx-6 md:hidden'><GiHamburgerMenu /></button>
      </div>
    </nav>
  )
}

export default Navbar