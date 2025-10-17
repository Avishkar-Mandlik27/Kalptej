import React from 'react';
import Footer from './Footer';
import HomeCarousel from './HomeCarousel';
import FooterCarousel from './FooterCarousel';
import WelcomePopup from './WelcomePopup';
import { useNavigate } from 'react-router-dom';

import img1 from '../assets/HomeSlider1.jpg';
import img2 from '../assets/HomeSlider2.jpg';
import img3 from '../assets/HomeSlider3.jpg';
import img4 from '../assets/HomeSlider4.jpg';

import greenery1 from '../assets/greenery1.jpg';
import greenery2 from '../assets/greenery2.png';
import greenery3 from '../assets/greenery3.jpg';
import greenery4 from '../assets/greenery4.jpg';

import interior1 from '../assets/interior1.png';
import interior2 from '../assets/interior2.png';
import interior3 from '../assets/interior3.png';
import interior4 from '../assets/interior4.png';
import TestimonialCarousel from './TestimonialCarousel';

const whyChooseUsFeatures = [
  {
    title: "Eco-Friendly Design",
    desc: "Sustainable interiors that reduce pollution and reconnect you with nature — from vertical gardens to biophilic layouts.",
  },
  {
    title: "Turnkey Execution",
    desc: "From concept to completion, we handle everything — design, materials, labor, and supervision — with transparent pricing.",
  },
  {
    title: "Local Pune Team",
    desc: "Faster site visits, better communication, and trusted partnerships with Pune-based artisans and nurseries.",
  },
  {
    title: "Civil Engineering Expertise",
    desc: "Led by qualified engineers Swapnil & Tejas, our team blends technical precision with creative interior planning.",
  },
  {
    title: "Custom Green Packages",
    desc: "Tailored greenery plans for homes, offices, and resorts — with AMC options and smart irrigation systems.",
  },
  {
    title: "Client-Centric Approach",
    desc: "We prioritize your vision, budget, and wellbeing — delivering interiors that feel personal, functional, and inspiring.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
     <div className="pt-20 sm:pt-20 md:pt-28 bg-white">
      <WelcomePopup />
      <HomeCarousel />

      {/* Intro Section */}
      <div className='w-full min-h-[40vh] flex flex-col justify-center items-center text-center p-4 bg-white'>
        <h3 className='font-bold mb-6 text-green-700 text-2xl md:text-4xl'>
          Creating spaces that inspire comfort, style, and functionality.
        </h3>
        <p className='font-semibold text-gray-700 max-w-3xl text-center mb-4'>
          At Home Haven, we believe that your living space should be a reflection of your personality and a sanctuary where you can unwind and recharge. Our mission is to provide you with high-quality furniture and decor that not only enhances the aesthetics of your home but also promotes comfort and functionality.
        </p>
        <button
          onClick={() => navigate("/contact#contact-form")}
          className="bg-gradient-to-r from-green-600 to-green-500 font-semibold rounded-full text-white px-6 py-2 mt-2 transition transform duration-300 hover:from-green-500 hover:to-green-400 hover:scale-105"
        >
          Grab a Free Estimate
        </button>
      </div>

      {/* Nature & Greenery Section */}
      <div className='w-full py-16 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-green-700 mb-12'>Nature & Greenery</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-16'>
          {[greenery1, greenery2, greenery3, greenery4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Greenery ${index + 1}`}
              className="rounded-xl object-cover w-full h-[140px] sm:h-[160px] md:h-[220px] lg:h-[250px] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto mt-8 px-4">
          Bring the outdoors inside — we specialize in adding natural green aesthetics to your living and working spaces for a refreshing, serene ambiance.
        </p>
      </div>

      {/* Interior & Furniture Section */}
      <div className='w-full py-16 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-amber-200 brightness-75 mb-12'>Interior & Furniture</h2>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-16'>
          {[interior1, interior2, interior3, interior4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Interior ${index + 1}`}
              className="rounded-xl object-cover w-full h-[140px] sm:h-[160px] md:h-[220px] lg:h-[250px] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto mt-8 px-4">
          Discover our curated collection of interiors and furniture that balance modern design with comfort and timeless elegance.
        </p>
      </div>

      <div className="w-full py-20 bg-[#F0F8F4] text-center px-6 md:px-16">
        <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">Why Choose Us</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-12 text-base sm:text-lg">
          KalpTej blends nature, design, and engineering to create interiors that breathe. Here’s why Pune trusts us.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {whyChooseUsFeatures.map((item, i) => (
            <div
              key={i}
              className="group bg-white border border-gray-200 rounded-3xl shadow-md p-6 text-left hover:shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-green-600 group-hover:text-white transition duration-300">
                  {String.fromCharCode(65 + i)}
                </div>
                <h3 className="text-lg font-semibold text-[#2B2B2B] group-hover:text-green-700 transition duration-300">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-800 transition duration-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Client Carousel Section */}
      <div className='w-full text-green-800 flex flex-col justify-center items-center pt-8 pb-4'>
        <h1 className='text-2xl md:text-3xl font-semibold'>Join our list of clients</h1>
        <div className='w-full max-w-6xl h-[25vh]'>
          <FooterCarousel />
        </div>
      </div>

      {/* Testimonial Carousel Section */}
      <div className="w-full text-green-800 flex flex-col justify-center items-center bg-white">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">What Our Clients Say</h2>
        <div className="w-full max-w-6xl px-4 md:px-8 mb-12">
          <TestimonialCarousel />
        </div>
      </div>

    </div>
  );
};

export default Home;