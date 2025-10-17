import React, { useState } from 'react';
import img from "../assets/contactUs.png";
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md';
import WelcomePopup from './WelcomePopup';

const ContactUs = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const GOOGLE_SCRIPT_URL =
    'https://script.google.com/macros/s/AKfycbwkjZtf8_tR6JjssLY3G5n_q1Se3w5jHx8h67B8Wpxuxf65K7AITbyJha8Iq25_JfApcQ/exec';

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone") {
      let digits = value.replace(/\D/g, "");
      if (digits.length > 10) digits = digits.slice(0, 10);

      if (digits.length > 0 && !/^[5-9]/.test(digits)) {
        setErrors((prev) => ({
          ...prev,
          phone: "Phone number must start with digits 5–9.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, phone: "" }));
      }

      setState((prev) => ({ ...prev, phone: "+91" + digits }));
    } else {
      setState({ ...state, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!state.name.trim()) newErrors.name = "Name is required.";
    if (!state.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!state.phone.trim() || state.phone.length !== 13) {
      newErrors.phone = "Please enter a valid 10-digit phone number with +91.";
    } else if (!/^\+91[5-9]\d{9}$/.test(state.phone)) {
      newErrors.phone = "Phone number must start with digits 5–9.";
    }

    if (!state.subject.trim()) newErrors.subject = "Subject is required.";
    if (!state.message.trim()) newErrors.message = "Message cannot be empty.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus(null);

    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('name', state.name);
      formData.append('email', state.email);
      formData.append('phone', state.phone);
      formData.append('subject', state.subject);
      formData.append('message', state.message);

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.result === 'success') {
        setSubmitStatus('success');
        setState({ name: "", email: "", phone: "", subject: "", message: "" });
        setErrors({});
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20 sm:pt-20 md:pt-28 bg-white">
      <WelcomePopup />

      {/* Hero Section */}
      <div className="w-full h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] relative border-[2px] overflow-hidden">
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
            We would love to hear from you! Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.
          </p>

          <div className='space-y-4'>
            {/* Location */}
            <div className='flex items-start space-x-4 p-4 h-24 bg-gradient-to-r from-green-50 to-amber-50 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300 group'>
              <div className='bg-gradient-to-br from-green-400 to-green-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300'>
                <MdLocationPin className='text-white text-2xl' />
              </div>
              <div className='flex-1 flex flex-col justify-center'>
                <h4 className='text-green-800 font-semibold text-lg mb-1'>Our Location</h4>
                <p className='text-gray-700 font-medium'>Katraj, Pune - 411046</p>
              </div>
            </div>

            {/* Email */}
            <div className='flex items-center space-x-4 p-3 h-24 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-100 hover:shadow-lg transition-all duration-300 group cursor-pointer'>
              <div className='bg-gradient-to-br from-amber-400 to-orange-500 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                <MdEmail className='text-white text-xl' />
              </div>
              <div className='flex-1 flex flex-col min-w-0'>
                <h4 className='text-green-800 font-semibold text-base mb-1'>Email Us</h4>
                <a href="mailto:swapnil.pawar@kalptej.com" className="text-blue-600 font-medium hover:underline text-xs">
                  swapnil.pawar@kalptej.com
                </a>
                <a href="mailto:tejas.m@kalptej.com" className="text-blue-600 font-medium hover:underline text-xs">
                  tejas.m@kalptej.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className='flex items-center space-x-4 p-3 h-24 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300 group cursor-pointer'>
              <div className='bg-gradient-to-br from-blue-500 to-indigo-600 p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0'>
                <MdPhone className='text-white text-xl' />
              </div>
              <div className='flex flex-col min-w-0'>
                <h4 className='text-green-800 font-semibold text-base mb-1'>Call Us</h4>
                <a href="tel:+918669110791" className="text-blue-600 font-medium hover:underline text-xs block">
                  (+91) 86691 10791
                </a>
                <a href="tel:+918600787934" className="text-blue-600 font-medium hover:underline text-xs block">
                  (+91) 86007 87934
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form */}
        <form
          className='w-full md:w-[50%] max-w-xl bg-white shadow-md rounded-lg p-6 space-y-4'
          onSubmit={handleSubmit}
        >
          {submitStatus === 'success' && (
            <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'>
              ✅ Thank You! Your request was submitted successfully. We will get back to you soon!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
              ❌ Sorry, there was an error. Please try again.
            </div>
          )}

          {/* Name */}
          <div>
            <label htmlFor="name" className='block text-sm font-medium text-green-800 mb-1'>Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              maxLength={50}
              className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.name ? "border-red-400" : "border-gray-300"}`}
              onChange={handleChange}
              value={state.name}
              disabled={isSubmitting}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className='block text-sm font-medium text-green-800 mb-1'>Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              maxLength={100}
              className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.email ? "border-red-400" : "border-gray-300"}`}
              onChange={handleChange}
              value={state.email}
              disabled={isSubmitting}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-green-800 mb-1">Phone *</label>
            <div
              className={`flex items-center rounded-lg overflow-hidden shadow-sm border transition-all duration-300 focus-within:ring-2 ${
                errors.phone
                  ? "border-red-400 focus-within:ring-red-300"
                  : "border-gray-300 focus-within:ring-green-400"
              }`}
            >
              <span className="px-4 py-2 bg-gradient-to-r from-green-50 to-amber-50 text-green-700 font-semibold text-sm border-r border-gray-200 select-none tracking-wide">
                +91
              </span>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Enter 10-digit number"
                maxLength={10}
                className="w-full px-3 py-2 text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
                onChange={handleChange}
                value={state.phone.replace("+91", "")}
                disabled={isSubmitting}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className='block text-sm font-medium text-green-800 mb-1'>Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              maxLength={100}
              className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.subject ? "border-red-400" : "border-gray-300"}`}
              onChange={handleChange}
              value={state.subject}
              disabled={isSubmitting}
            />
            {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className='block text-sm font-medium text-green-800 mb-1'>Message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message (max 500 characters)"
              rows="4"
              maxLength={500}
              className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500 ${errors.message ? "border-red-400" : "border-gray-300"}`}
              onChange={handleChange}
              value={state.message}
              disabled={isSubmitting}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            className={`w-full px-6 py-2 rounded-md transition-colors duration-300 ${
              isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500 hover:bg-green-600'
            } text-white`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>

      <span className='h-[1px] w-[75%] bg-black mt-32'></span>
    </div>
  );
};

export default ContactUs;
