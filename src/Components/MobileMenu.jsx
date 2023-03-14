import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import '../App.css'

const MobileMenu = ({openMenu, setOpenMenu}) => {
  const appLink = 'https://mjartrainingwebapp.herokuapp.com'
    const appURL = new URL(appLink).href

  return (
    <div className='animate-menu sticky bg-primary absolute top-0 right-0 h-screen w-screen animate-menu z-20'>
        <div className='w-full flex justify-end p-6'>
            <button onClick={() => setOpenMenu(!openMenu)} className='text-3xl text-light'><AiOutlineClose /></button>
        </div>
        <div className='text-light'>
            <a onClick={() => setOpenMenu(!openMenu)} className='block text-center py-6 transition duration-500' href="#about">About</a>
            <a onClick={() => setOpenMenu(!openMenu)} className='block text-center py-6' href="#faq">FAQ</a>
            <a onClick={() => setOpenMenu(!openMenu)} target={'_blank'} rel="noopener noreferrer external" href={appURL} className='block text-center py-6'>Training App</a>
        </div>
    </div>
  )
}

export default MobileMenu