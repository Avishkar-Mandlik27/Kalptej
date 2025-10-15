import React, { useState } from 'react';
import img from "../assets/contactUs.png";
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md';

const ContactUs = () => {
    const [state, setState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [errors, setErrors] = useState({}); // ✅ Track validation errors

    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyDg3sGZUgAxRCKDgImeDofvCQhlSg9o2dVlKmu30iCysbK9WTF8030pY8ZC5yUSq10/exec';

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
        setErrors({ ...errors, [e.target.name]: "" }); // Clear error as user types
    };

    const validate = () => {
        const newErrors = {};

        // Email validation
        if (state.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Phone validation (if entered)
        if (state.phone && !/^\d{10}$/.test(state.phone)) {
            newErrors.phone = "Phone number must be 10 digits.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus(null);

        // ✅ Validate before submission
        if (!validate()) return;

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
                        We would love to hear from you! Whether you have a question about our services, pricing, need a demo, or anything else, our team is ready to answer all your questions.
                    </p>

                    <div className='space-y-4'>
                        <div className='flex items-center space-x-3'>
                            <div className='bg-amber-100 p-2 rounded-full'>
                                <MdLocationPin className='text-amber-400 text-2xl sm:text-xl' />
                            </div>
                            <p className='text-sm text-gray-600'>
                                <span className='text-green-800 font-medium'>Our Location:</span> Los Angeles, CA
                            </p>
                        </div>

                        <div className='flex items-center space-x-3'>
                            <div className='bg-amber-100 p-2 rounded-full'>
                                <MdEmail className='text-amber-400 text-2xl sm:text-xl' />
                            </div>
                            <p className='text-sm text-gray-600'>
                                <span className='text-green-800 font-medium'>Email:</span> info@thegreenerydesign.com
                            </p>
                        </div>

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
                    {submitStatus === 'success' && (
                        <div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4'>
                            ✅ Thank you! Your message has been sent successfully.
                        </div>
                    )}
                    {submitStatus === 'error' && (
                        <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4'>
                            ❌ Sorry, there was an error. Please try again.
                        </div>
                    )}

                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-green-800 mb-1'>Name *</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Your Name"
                            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                            onChange={handleChange}
                            value={state.name}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-green-800 mb-1'>Email *</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Your Email"
                            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
                            onChange={handleChange}
                            value={state.email}
                            required
                            disabled={isSubmitting}
                        />
                        {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div>
                        <label htmlFor="phone" className='block text-sm font-medium text-green-800 mb-1'>Phone</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Your Phone Number"
                            className={`w-full border rounded-md p-2 focus:outline-none focus:ring-2 ${errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'}`}
                            onChange={handleChange}
                            value={state.phone}
                            disabled={isSubmitting}
                        />
                        {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone}</p>}
                    </div>

                    <div>
                        <label htmlFor="subject" className='block text-sm font-medium text-green-800 mb-1'>Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="Subject"
                            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                            onChange={handleChange}
                            value={state.subject}
                            disabled={isSubmitting}
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className='block text-sm font-medium text-green-800 mb-1'>Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Your Message"
                            rows="4"
                            className='w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-500'
                            onChange={handleChange}
                            value={state.message}
                            required
                            disabled={isSubmitting}
                        />
                    </div>

                    <button
                        type="submit"
                        className={`w-full px-6 py-2 rounded-md transition-colors duration-300 ${isSubmitting
                            ? 'bg-gray-400 cursor-not-allowed'
                            : 'bg-green-500 hover:bg-green-600'
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
 