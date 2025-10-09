import React, { useState } from 'react'
import emailjs from 'emailjs-com'


import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'



export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: ""});

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
  
    emailjs
    .send(
      "service_n8h3y07",
      "template_fyzd738",
      form,
      "hhl017S8N1cMmULrn"
    )

      setForm({ name: "", email: "", message: ""});
  }
  return (
   <>
   <Navbar />
   <div className='bg-gray-800 mx-5 my-5 rounded-xl md:w-fit md:mx-auto md:mb-10 xl:mb-65'>
    <form onSubmit={sendEmail} className='px-auto mx-2 py-5'>
      <h2 className='text-xl font-bold text-center pt-2'>Get in Touch</h2>
      <p className='mx-2 text-sm text-center pt-2'>Have a project idea, or a question? Feel free to use the contact form.</p>

      <p className='font-medium pt-3'>Your Name</p>
      <input
      type='text'
      name='name'
      placeholder='Enter your name'
      value={form.name}
      onChange={handleChange}
      required
      className='bg-gray-500 rounded-md px-2 py-1 w-full'
      />

      <p className='font-medium pt-3'>Your Email</p>
      <input 
      type='email'
      name='email'
      placeholder='Enter your Email'
      value={form.email}
      onChange={handleChange}
      required
      className='bg-gray-500 rounded-md px-2 py-1 w-full'
      />

      <p className='font-medium pt-3'>Your Message</p>
      <textarea
      name='message'
      placeholder='Tell me about your project or question'
      value={form.message}
      onChange={handleChange}
      required
      rows='5'
      className='bg-gray-500 rounded-md text-sm px-2 py-1 w-full'
       ></textarea>

      
       <button type='submit'  className='mt-3 bg-blue-700 py-1 font-semibold w-full rounded-lg'>
        Send Message
       </button>       
   </form>
   </div>
   <Footer />
   </>
  )
}
