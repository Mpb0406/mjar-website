import React from 'react'
import squiggle from '../assets/squiggle.svg'

const FAQ = () => {
    const faq = [
        {
            question: "Is MJAR good?",
            answer: "It's the best. Thank you for asking."
        },
        {
            question: "Where can I sign up?",
            answer: "Send us an email with your information."
        },
        {
            question: "Can I pick what lifts that I do?",
            answer: "Yes, we created MJAR primarily on movement patterns and a few muscle groups, so you are able to pick any exercise you like within that scope."
        },
        {
            question: "How long is the program?",
            answer: "There are '18 training weeks' in the program total. It should take around 5 months to complete."
        },
        {
            question: "Is MJAR for me?",
            answer: "MJAR autoregulates specifically to you, so it's for everyone. The training is completely customizable to your needs, whether you're advanced and targeting a weakness or if you're a beginner."
        },
        {
            question: "Does MJAR work for bodybuilders?",
            answer: "Yes, the volume, rep range, intensity can be scaled to your exact needs as a bodybuilder"
        },
    ]
  return (
    <section id="faq" className='p-12'>
        <h1 className='text-3xl font-semibold my-6'>Frequently Asked Questions</h1>
        {/* Contact link */}
        <div className='my-6'>
            <p className='text-info font-semibold text-sm'>Can't find the answer you're looking for?</p>
            <a className='text-sm text-primary font-bold' href="#">Ask us here</a>
        </div>
        {/* Questions container */}
        <div className='my-16 flex flex-wrap justify-start items-start gap-12'>
            {faq.map(item => (
                <div className='md:w-1/5 relative'>
                    <h3 className='font-bold'>{item.question}</h3>
                    <p className='text-sm text-info my-4'>{item.answer}</p>
                    <svg className='absolute top-4 w-48 squiggle' width="285" height="40" viewBox="0 0 285 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 16.9489C80.8191 9.56932 158.731 4.53279 236.704 3.0209C240.797 2.94154 253.02 3.05593 248.968 3.93421C234.445 7.08231 219.872 8.61486 205.403 12.6106C195.422 15.3671 184.319 19.1464 174.553 23.7987C170.314 25.8183 158.865 32.2293 163.117 34.1876C168.674 36.7474 184.829 36.8734 187.345 36.9275C219.032 37.6095 250.381 33.3051 282 31.3335" stroke="#571923" stroke-opacity="0.25" stroke-width="6" stroke-linecap="round"/>
</svg>
                </div>
            ))}
        </div>
        {/* Inspirational Quote */}
        <blockquote className='text-3xl text-center text-secondary py-6 mx-auto '>“80-90% of your best 100% of the time is better than 100% of your best 50% of the time”</blockquote>
    </section>
  )
}

export default FAQ