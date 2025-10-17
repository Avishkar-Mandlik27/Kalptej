import React from 'react';
import img from "../assets/greenery1.jpg";
import founder1 from "../assets/Swapnil.jpg";
import founder2 from "../assets/Tejas.jpg";
import { useNavigate } from 'react-router-dom';
import WelcomePopup from './WelcomePopup';

const About = () => {
  const navigate = useNavigate();

  return (
      <div className="pt-20 sm:pt-20 md:pt-28 bg-white">

      {/* Promotional Banner Popup */}
      <WelcomePopup />

      {/* Hero Section */}
      <div className="w-full h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] relative border-2 overflow-hidden">
        <img
          src={img}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="About Us Background"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start px-6 sm:px-10 md:px-16 lg:px-24 xl:px-32 pt-10">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold 
                         bg-gradient-to-r from-white to-teal-500 bg-clip-text text-transparent drop-shadow-lg 
                         leading-tight">
            About Us
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <div className="flex flex-col lg:flex-row justify-center w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-16 gap-10">
        <div className="w-full lg:w-1/2 text-green-700 font-bold text-xl sm:text-2xl leading-relaxed">
          We work passionately to design spaces that combine elegance, comfort, and sustainability
          where every detail tells a story.
        </div>

        <div className="w-full lg:w-1/2 text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            At <span className="font-semibold text-green-700 cursor-pointer" onClick={() => navigate("/home")}>Kalptej</span>, we believe that every idea begins with purpose —
            and our clients’ values and vision are always at the heart of what we create.
          </p>
          <p>
            We are a forward-thinking Interior Plantscaping and Design Company dedicated to crafting environments
            that inspire productivity, creativity, and calm. By blending lush greenery with elegant design elements,
            we help businesses and spaces reflect a sense of balance, sophistication, and life.
          </p>
          <p>
            Rooted in trust, collaboration, and a commitment to continuous growth, we take full ownership of every project —
            ensuring that each detail reflects excellence and authenticity.
          </p>
          <p>
            Our end-to-end services cover design, installation, and regular plant care, including watering, cleaning, pruning,
            and fertilizing — so your interiors remain vibrant and refreshing year-round.
          </p>
        </div>
      </div>

      {/* Founders Section */}
      <div className='w-full bg-teal-700 text-white flex flex-col items-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-12 gap-6'>
        <h2 className='text-xl sm:text-2xl font-semibold cursor-pointer relative group'>
          <span className="relative z-10">About Us</span>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
        </h2>

        {/* Founder Images */}
        <div className="flex flex-col sm:flex-row gap-6 mt-4">
          {[{ img: founder1, name: "Swapnil Pawar" }, { img: founder2, name: "Tejas Marwadi" }].map((founder, i) => (
            <div
              key={i}
              className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
            >
              <img
                src={founder.img}
                alt={founder.name}
                className="w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full object-contain  shadow-xl transition duration-300"
              />
              <p className="mt-2 text-sm font-medium transition duration-300">
                {founder.name}
              </p>
            </div>
          ))}
        </div>

        {/* Founders Description */}
        <div className="max-w-4xl text-center text-sm sm:text-base space-y-4 mt-6">
          <p>
            KalpTej was founded in Pune by two passionate civil engineers — Swapnil Pawar and Tejas Marwadi — with a shared vision to create interior spaces that feel alive, connected to nature, and deeply personal.
          </p>
          <p>
            In today’s rapidly urbanizing world, homes and offices often lose touch with greenery. KalpTej bridges this gap by integrating modern interior design with natural elements, offering unique solutions like vertical gardens, indoor planters, and biophilic interiors.
          </p>
          <p>
            As a sustainable design studio, KalpTej delivers turnkey projects that include concept development, execution, and ongoing maintenance. Every space we craft is rooted in comfort, elegance, and environmental harmony.
          </p>
        </div>
      </div>

      <span className='h-[1px] w-[75%] bg-black my-16'></span>
    </div>
  );
};

export default About;