import React from 'react'

const Contact = () => {
  return (
    <div className='pt-32'>
        <h1 className='text-center text-3xl font-bold'>Contact Us</h1>
        <p className='text-center py-6'>Ask us anything.</p>
        <form name="contact" method="POST" className="flex flex-col md:w-1/2 mx-auto">
            <input type="hidden" name="form-name" value="contact" />
            <div className="flex flex-col m-2">
                <label className="py-2 text-sm font-semibold" htmlFor="name">Name</label>
                <input id="name" name="name" type="text" required />
            </div>
            <div className="flex flex-col m-2">
                <label className="py-2 text-sm font-semibold" htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required />
            </div>
            <div className="flex flex-col m-2">
                <label className="py-2 text-sm font-semibold" htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="20" rows="10" required></textarea>
            </div>
            
            <button className="primary-button w-1/3 py-2 px-4 mx-auto my-12" type="submit">Send</button>
        </form>
    </div>
  )
}

export default Contact