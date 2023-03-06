import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'
import '../App.css'

const MobileMenu = ({openMenu, setOpenMenu}) => {
  return (
    <div className='animate-menu bg-primary absolute top-0 right-0 h-screen w-screen animate-menu'>
        <div className='w-full flex justify-end p-6'>
            <button onClick={() => setOpenMenu(!openMenu)} className='text-3xl text-light'><AiOutlineClose /></button>
        </div>
        <div className='text-light'>
            <a className='block text-center py-6' href="">About</a>
            <a className='block text-center py-6' href="">SignUp</a>
            <a className='block text-center py-6' href="">Training App</a>
        </div>
    </div>
  )
}

export default MobileMenu