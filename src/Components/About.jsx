import React, {useEffect} from 'react'
import Aos from 'aos'
import "aos/dist/aos.css";
import {FaCalculator, FaBed, FaPencilAlt, FaStopwatch} from 'react-icons/fa'
import {GiMuscleUp} from 'react-icons/gi'
import {ImShuffle} from 'react-icons/im'

const About = () => {
    const highlights = [
        {
            icon: FaCalculator,
            name: 'Auto Regulation',
            description: "No set weights for each day. Simply show up and work up to your best set at the prescribed RPE level"
        },
        {
            icon: FaBed,
            name: 'Manage Fatigue',
            description: "No set weights for each day. Simply show up and work up to your best set at the prescribed RPE level"
        },
        {
            icon: GiMuscleUp,
            name: 'Powerbuilding',
            description: "Dual-focused on increasing the big 3 lifts as well as high volume accessories to build muscle"
        },
        {
            icon: FaPencilAlt,
            name: 'Full Customization',
            description: "Flexible accessories according to the systematic approach of movements"
        },
        {
            icon: ImShuffle,
            name: 'Variation Training',
            description: "Allows you to pick the weak part of your lift and train it all within your normal cycle"
        },
        {
            icon: FaStopwatch,
            name: 'High Frequency',
            description: "Train each lift twice per week in varying rep ranges to acclimate to all weights"
        },
    ]

    useEffect(() => {
        Aos.init({duration: 800})
    }, [])
  return (
    <section id="about" className='bg-primary pt-6 overflow-hidden'>
        <h1 data-aos="zoom-in-down" data-aos-easing="ease-in-out-back" data-aos-duration="1000" className='text-5xl text-light font-bold text-center p-12'>Why MJAR?</h1>
        <blockquote data-aos="fade-right" data-aos-delay="500" data-aos-easing="ease-in-out-back" className='text-3xl text-center text-light py-6 mx-auto w-4/5'>"It's not just a program. It's a training system you will never leave."</blockquote>
        {/* Highlights Container */}
        <div className='flex items-center justify-around space-x-6 flex-wrap mx-8 mt-6'>
            {highlights.map((highlight, idx) => (
                <div data-aos="fade-up" data-aos-delay="800" className='m-6 p-6 space-y-3 flex flex-col flex-wrap items-start md:w-1/3 w-full' key={idx}>
                    {<div className='bg-[#5f54a635] p-3 rounded-md'><highlight.icon className='text-3xl text-light' /></div>}
                    <h3 className='text-light text-2xl font-semibold'>{highlight.name}</h3>
                    <p className='text-info text-sm font-semibold'>{highlight.description}</p>
                </div>
            ))}
        </div>
        <blockquote data-aos="fade-left" data-aos-delay="500" data-aos-easing="ease-in-out-back" className='text-3xl text-center text-light py-24 mx-auto w-4/5'>"Whether you evolve it on your own or you follow MJAR as it’s written, you will become the system itself."</blockquote>
    </section>
  )
}

export default About