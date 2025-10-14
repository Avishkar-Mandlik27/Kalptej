import React from 'react'
import img from "../assets/greenery1.jpg"
import { useNavigate } from 'react-router-dom'

const About = () => {

    let navigate = useNavigate();

  return (
    <div className="w-full">
      
      {/* Hero Section */}
      <div className="w-full h-[55vh] sm:h-[60vh] md:h-[65vh] lg:h-[75vh] relative rounded-b-2xl border-[2px] overflow-hidden">
        {/* Background Image */}
        <img
          src={img}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
          alt="About Us Background"
        />

        {/* Text Section */}
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left 
                        px-6 sm:px-10 md:px-20 lg:px-32 xl:px-40 pt-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold 
                         bg-gradient-to-r from-white to-teal-500 bg-clip-text text-transparent drop-shadow-lg 
                         leading-tight">
            About Us
          </h1>
        </div>
      </div>

      {/* About Content Section */}
      <div className="flex flex-col lg:flex-row justify-center w-full px-6 sm:px-10 md:px-16 lg:px-24 xl:px-40 py-16 gap-10">
        
        {/* Left Side — Highlight Text */}
        <div className="w-full lg:w-1/2 text-green-700 font-bold text-xl sm:text-2xl lg:text-left leading-relaxed">
          We work passionately to design spaces that combine elegance, comfort, and sustainability
          where every detail tells a story.
        </div>

        {/* Right Side — Description Text */}
        <div className="w-full lg:w-1/2 text-gray-700 text-base sm:text-lg leading-relaxed space-y-4">
          <p>
            At <span className="font-semibold text-green-700 cursor-pointer"  onClick={()=>{navigate("/home")}}>Kalptej</span>, we believe that every idea begins with purpose — 
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
    </div>
  )
}

export default About
