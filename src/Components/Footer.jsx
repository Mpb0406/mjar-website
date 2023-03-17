import React from 'react'
import {GrInstagram} from 'react-icons/gr'
import {FiMail} from 'react-icons/fi'
import mjarFooterLogo from '../assets/mjarFooterLogo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    const date = new Date;
    const currentYear = date.getFullYear()
  return (
    <footer className='bg-primary relative h-full py-10'>
        <div className='h-full flex flex-col md:flex-row justify-between items-center'>
            <p className='text-light text-sm p-12 md:text-start text-center'>{`© ${currentYear} MJAR Training System. All Rights Reserved`}</p>
            <ul className='flex space-x-12 p-12'>
                <Link to="https://instagram.com/mjar_training" className='text-light text-3xl'><GrInstagram /></Link>
                <Link to="/contact" className='text-light text-3xl'><FiMail /></Link>
            </ul>
        </div>
        <img className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-50' src={mjarFooterLogo} alt="" />
    </footer>
  )
}

export default Footer