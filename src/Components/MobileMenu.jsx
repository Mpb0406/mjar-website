import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import '../App.css'
import { Link } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'

const MobileMenu = ({openMenu, setOpenMenu}) => {

  return (
    <div className='animate-menu sticky bg-primary absolute top-0 right-0 h-screen w-screen animate-menu z-20'>
        <div className='w-full flex justify-end p-6'>
            <button onClick={() => setOpenMenu(!openMenu)} className='text-3xl text-light'><AiOutlineClose /></button>
        </div>
        <div className='text-light'>
          <NavHashLink to="/#about" onClick={() => setOpenMenu(!openMenu)} className='block text-center py-6 transition duration-500'>About</NavHashLink>
          <NavHashLink to="/#faq" onClick={() => setOpenMenu(!openMenu)} className='block text-center py-6'>FAQ</NavHashLink>
          <Link target="_blank" to="https://mjartrainingwebapp.herokuapp.com" onClick={() => setOpenMenu(!openMenu)} className='block text-center py-6'>Training App</Link>
        </div>
    </div>
  )
}

export default MobileMenu