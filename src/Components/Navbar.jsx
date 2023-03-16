import React from 'react'
import mjar from '../assets/mjar-logo.svg'
import {GiHamburgerMenu} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'


const Navbar = ({openMenu, setOpenMenu}) => {

  return (
    <nav className='bg-primary fixed z-20 w-full shadow-2xl'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <div className='mx-6 cursor-pointer'><Link to="/"><img className='w-20 h-16' src={mjar} alt="" /></Link></div>
        {/* Primary Nav */}
        <div className='hidden md:flex space-x-6 mx-6'>
          <NavHashLink className='text-light' to="/#about">About</NavHashLink>
          <NavHashLink className='text-light' to="/#faq">FAQ</NavHashLink>
          <Link className='text-light' target="_blank" to="https://mjartrainingwebapp.herokuapp.com">Training App</Link>
        </div>
        {/* Mobile Icon */}
        <button onClick={() => setOpenMenu(!openMenu)} className='text-light text-2xl mx-6 md:hidden'><GiHamburgerMenu /></button>
      </div>
    </nav>
  )
}

export default Navbar