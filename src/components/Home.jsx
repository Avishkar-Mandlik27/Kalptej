import React from 'react'
import Footer from './Footer'
import HomeCarousel from './HomeCarousel'

import img1 from '../assets/HomeSlider1.jpg'
import img2 from '../assets/HomeSlider2.jpg'
import img3 from '../assets/HomeSlider3.jpg'
import img4 from '../assets/HomeSlider4.jpg'

import greenery1 from '../assets/greenery1.jpg'
import greenery2 from '../assets/greenery2.png'
import greenery3 from '../assets/greenery3.jpg'
import greenery4 from '../assets/greenery4.jpg'

import interior1 from '../assets/interior1.png'
import interior2 from '../assets/interior2.png'
import interior3 from '../assets/interior3.png'
import interior4 from '../assets/interior4.png'
import FooterCarousel from './FooterCarousel'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  let navigate = useNavigate();

  return (
    <div className="pt-32 md:pt-28 bg-white">


      <HomeCarousel />


      <div className='w-full min-h-[40vh] flex flex-col justify-center items-center text-center p-4 bg-white'>
        <h3 className='font-bold mb-6 text-green-700 text-2xl md:text-4xl'>
          Creating spaces that inspire comfort, style, and functionality.
        </h3>
        <p className='font-semibold text-gray-700 max-w-3xl text-center mb-4'>
          At Home Haven, we believe that your living space should be a reflection of your personality and a sanctuary where you can unwind and recharge. Our mission is to provide you with high-quality furniture and decor that not only enhances the aesthetics of your home but also promotes comfort and functionality.
        </p>
        <button onClick={() => {
          navigate("/contact#contact-form");
        }} className="bg-gradient-to-r from-green-600 to-green-500 font-semibold rounded-full text-white px-6 py-2 mt-2 transition transform duration-300 hover:from-green-500 hover:to-green-400 hover:scale-105">
          Grab a Free Estimate
        </button>
      </div>


      <div className='w-full py-16 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-green-700 mb-12'>Nature & Greenery</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-16'>
          {[greenery1, greenery2, greenery3, greenery4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Greenery ${index + 1}`}
              className="rounded-xl object-cover w-full 
                         h-[140px] sm:h-[160px] md:h-[220px] lg:h-[250px]
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto mt-8 px-4">
          Bring the outdoors inside — we specialize in adding natural green aesthetics to your living and working spaces for a refreshing, serene ambiance.
        </p>
      </div>


      <div className='w-full py-16 text-center'>
        <h2 className='text-3xl md:text-4xl font-bold text-amber-200 brightness-75 mb-12'>Interior & Furniture</h2>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-16'>
          {[interior1, interior2, interior3, interior4].map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Interior ${index + 1}`}
              className="rounded-xl object-cover w-full 
                         h-[140px] sm:h-[160px] md:h-[220px] lg:h-[250px]
                         transition-transform duration-300 hover:scale-105 hover:shadow-lg"
            />
          ))}
        </div>
        <p className="text-gray-700 max-w-3xl mx-auto mt-8 px-4">
          Discover our curated collection of interiors and furniture that balance modern design with comfort and timeless elegance.
        </p>
      </div>

      <div className='w-full text-green-800 flex flex-col justify-center items-center pt-8 pb-4'>
        <h1 className='text-2xl md:text-3xl font-semibold'>Join our list of clients</h1>
        <div className='w-full max-w-6xl h-[25vh]'>
          <FooterCarousel />
        </div>
      </div>
    
    </div>
  )
}

export default Home
