import React from 'react'
import heroImg from '../assets/heroImg.png'

const Hero = () => {
  return (
    <div className='h-screen'>
        <div className='relative h-screen w-full overflow-hidden'>
            <img className='h-full w-full object-cover' src={heroImg} alt="" />
            {/* Image Filter */}
            <div className='absolute top-0 left-0 bg-dark h-full w-full opacity-75'></div>
            {/* Hero Text Container */}
            <div className='absolute top-1/2 left-1/2 mt-20 z-10 -translate-x-1/2 -translate-y-2/3'>
                <h1 className='text-light font-bold mx-4 text-7xl md:text-8xl text-center mb-12'>MJAR Training System</h1>
                <p className='my-6 text-center mx-auto w-9/12 text-2xl md:text-3xl text-light'>The ultimate strength-training system that adapts to you</p>
                {/* Button Container */}
                <div className='flex justify-center space-x-12 mt-16'>
                    <button className='primary-button hover:bg-red-900 md:px-8 md:py-4 px-4 py-2 w-2/5'><a href="#about">Learn More</a></button>
                    <button className='secondary-button hover:bg-red-900 md:px-8 md:py-4 px-4 py-2 w-2/5'>Try App</button>
                </div>
                {/* 5 Stripes Container */}\
                <div className='absolute -top-20 sm:left-20 left-16 -z-10 skew-y-[35deg] -rotate-[35deg] flex space-x-5'>
                    <div className='w-7 sm:mt-6 mt-20 opacity-0 animate-stripe-1 bg-gradient-to-b from-secondary'></div>
                    <div className='w-7 sm:mt-6 mt-20 opacity-0 animate-stripe-2 bg-gradient-to-b from-secondary'></div>
                    <div className='w-7 sm:mt-6 mt-20 opacity-0 animate-stripe-3 bg-gradient-to-b from-secondary'></div>
                    <div className='w-7 sm:mt-6 mt-20 opacity-0 animate-stripe-4 bg-gradient-to-b from-secondary'></div>
                    <div className='w-7 sm:mt-6 mt-20 opacity-0 animate-stripe-5 bg-gradient-to-b from-secondary'></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero