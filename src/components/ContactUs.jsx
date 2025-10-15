import React, { useState } from 'react';
import img from "../assets/contactus.png";
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md';

const ContactUs = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
      {/* Hero Section */}
      <div className="w-full h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] relative rounded-b-2xl border-[2px] overflow-hidden">
        <img
          src={img}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="Contact Us Background"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-6 sm:px-20 md:px-28 lg:px-32 xl:px-40 pt-52">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold 
                         bg-gradient-to-r from-green-300 via-white to-amber-400 
                         bg-clip-text text-transparent drop-shadow-xl leading-tight">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Form Section */}
      <div className='w-full flex flex-col md:flex-row justify-center items-center md:items-start py-10 px-4 sm:px-8 md:px-16 bg-white gap-10 text-left'>
        {/* Info Section */}
        <div className='w-full md:w-[50%] max-w-xl space-y-6'>
          <h2 className='text-2xl font-semibold text-green-800'>Get in Touch</h2>
          <p className='text-gray-600'>
            We would love to hear from you! Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions. Fill out the form and we will get back to you as soon as possible.
          </p>

          {/* Contact Details */}
          <div className='space-y-4'>
            {/* Location */}
            <div className='flex items-center space-x-3'>
              <div className='bg-amber-100 p-2 rounded-full'>
                <MdLocationPin className='text-amber-400 text-2xl sm:text-xl' />
              </div>
              <p className='text-sm text-gray-600'>
                <span className='text-green-800 font-medium'>Our Location:</span> Los Angeles, CA
              </p>
            </div>

            {/* Email */}
            <div className='flex items-center space-x-3'>
              <div className='bg-amber-100 p-2 rounded-full'>
                <MdEmail className='text-amber-400 text-2xl sm:text-xl' />
              </div>
              <p className='text-sm text-gray-600'>
                <span className='text-green-800 font-medium'>Email:</span> info@thegreenerydesign.com
              </p>
            </div>

            {/* Phone */}
            <div className='flex items-center space-x-3'>
              <div className='bg-amber-100 p-2 rounded-full'>
                <MdPhone className='text-amber-400 text-2xl sm:text-xl' />
              </div>
              <p className='text-sm text-gray-600'>
                <span className='text-green-800 font-medium'>Phone:</span> (310) 936-7337
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className='w-full md:w-[50%] max-w-xl bg-white shadow-md rounded-lg p-6 space-y-4'
          onSubmit={handleSubmit}
        >
          <div>
            <label htmlFor="name" className='block text-sm font-medium text-green-800 mb-1'>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
              onChange={handleChange}
              value={state.name}
            />
          </div>

          <div>
            <label htmlFor="email" className='block text-sm font-medium text-green-800 mb-1'>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
              onChange={handleChange}
              value={state.email}
            />
          </div>

          <div>
            <label htmlFor="message" className='block text-sm font-medium text-green-800 mb-1'>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="4"
              className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
              onChange={handleChange}
              value={state.message}
            />
          </div>

          <button
            type="submit"
            className='bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors duration-300'
          >
            Submit
          </button>
        </form>
      </div>

            <span className='h-[1px] w-[75%] bg-black mt-32'></span>
    </div>
  );
};

export default ContactUs;