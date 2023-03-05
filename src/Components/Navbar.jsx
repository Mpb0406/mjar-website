import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-primary h-12'>
      <div className='text-light ml-16'>MJAR</div>
      <ul className='flex gap-8 mr-16'>
        <li className='text-light'>About</li>
        <li className='text-light'>Sign Up</li>
        <li className='text-light'>Training App</li>
      </ul>
    </div>
  )
}

export default Navbar