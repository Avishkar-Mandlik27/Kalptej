import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaGoogle, FaLinkedin, FaYelp } from 'react-icons/fa';
import logo from '../assets/KalpTej.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    // Small delay to ensure navigation happens first, then scroll
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className='w-full bg-white'>
      {/* Top Section */}
      <div className='w-full px-4 md:px-8 lg:px-16 pt-1 pb-2'>
        
        {/* Logo Section */}
        <div className='mb-1'>
          <img
            src={logo}
            alt="Kalptej Logo"
            className="h-16 md:h-20 w-auto transition-all duration-300 cursor-pointer hover:opacity-80"
            onClick={() => handleNavigation('/')}
          />
        </div>

        {/* Company Name & Footer Sections Row */}
        <div className='flex flex-col lg:flex-row lg:justify-start lg:space-x-12 xl:space-x-16 items-start gap-x-6 gap-y-6'>
          
          {/* Company Info */}
          <div className='flex flex-col items-start lg:flex-shrink-0 lg:basis-[300px] xl:basis-[350px]'>
            <p className='text-green-800 text-sm md:text-base font-semibold'>Kalptej Interiors & Greenery</p>
            <p className='text-green-700 text-xs md:text-xs italic font-small'>
              " Between You and Nature, We Build Bridges "
            </p>
            {/* Social Media Icons */}
            <div className='flex space-x-3 items-center'>
              <BsWhatsapp 
                className='cursor-pointer hover:text-green-500 hover:scale-110 transition-all duration-300 text-lg text-gray-600' 
                onClick={() => window.open("https://wa.me/message/TIQND33M5EZTH1", "_blank", "noopener,noreferrer")}
                title="Message us on WhatsApp"
              />
              <BsInstagram 
                className='cursor-pointer hover:text-pink-500 hover:scale-110 transition-all duration-300 text-lg text-gray-600' 
                onClick={() => window.open("https://www.instagram.com/kalptej_interiors_greenery?igsh=MWdhb2pudmZzaGVldQ==", "_blank", "noopener,noreferrer")}
                title="Follow us on Instagram"
              />
              <FaLinkedin 
                className='cursor-pointer hover:text-blue-600 hover:scale-110 transition-all duration-300 text-lg text-gray-600' 
                onClick={() => window.open("https://www.linkedin.com/in/kalptej-3a689738a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank", "noopener,noreferrer")}
                title="Connect on LinkedIn"
              />
              <FaYelp 
                className='cursor-pointer hover:text-red-500 hover:scale-110 transition-all duration-300 text-lg text-gray-600'
                onClick={() => window.open("https://www.pinterest.com/kalptej/", "_blank", "noopener,noreferrer")}
                title="Follow us on Pinterest"
              />
            </div>
            
            <p className='text-gray-600 text-xs md:text-sm leading-relaxed max-w-xs lg:max-w-none'>
              Transforming spaces with innovative interior design and lush greenery. 
              Creating sustainable, beautiful environments for modern living.
            </p>
            
          </div>

          {/* Services & Quick Links - Combined on smaller screens */}
          <div className='grid grid-cols-1 md:grid-cols-2 lg:flex lg:space-x-12 xl:space-x-16 gap-6 w-full lg:w-auto lg:flex-shrink-0'>
          
          {/* Our Services */}
          <div className='flex flex-col items-start space-y-3 lg:min-w-[200px] xl:min-w-[220px]'>
            <h3 className='text-green-800 text-sm sm:text-base font-bold mb-1'>OUR SERVICES</h3>
            <div className='space-y-2'>
              <p 
                className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-200'
                onClick={() => handleNavigation('/services')}
              >
                🏠 Interior & Balcony Design
              </p>
              <p 
                className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-200'
                onClick={() => handleNavigation('/services')}
              >
                🌱 Green Interior Concepts
              </p>
              <p 
                className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-200'
                onClick={() => handleNavigation('/services')}
              >
                🪴 Plant Decoration
              </p>
              <p 
                className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-200'
                onClick={() => handleNavigation('/services')}
              >
                🔧 AMC Plans & Maintenance
              </p>
              <p 
                className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-200'
                onClick={() => handleNavigation('/services')}
              >
                👨‍🌾 Gardener Booking
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className='flex flex-col items-start space-y-3 lg:min-w-[150px] xl:min-w-[170px]'>
            <h3 className='text-green-800 text-sm sm:text-base font-bold mb-1'>QUICK LINKS</h3>
            <div className='space-y-2'>
              <p 
                className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-200'
                onClick={() => handleNavigation('/about')}
              >
                About Us
              </p>
              <p 
                className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-200'
                onClick={() => handleNavigation('/contact')}
              >
                Contact Us
              </p>
              
              <p className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600 transition-colors duration-200'>
                Terms & Conditions
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info & Social Media - Combined section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:flex lg:space-x-12 xl:space-x-16 gap-6 w-full lg:w-auto lg:flex-shrink-0'>
          
          {/* Contact Info */}
          <div className='flex flex-col items-start space-y-3 lg:min-w-[220px] xl:min-w-[250px]'>
            <h3 className='text-green-800 text-sm sm:text-base font-bold mb-1'>GET IN TOUCH</h3>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <span className='text-green-600'>📞</span>
                <div>
                  <a href="tel:+918669110791" className='text-gray-700 text-xs hover:text-green-600 cursor-pointer transition-colors duration-200 block'>
                    (+91) 86691 10791
                  </a>
                  <a href="tel:+918600787934" className='text-gray-700 text-xs hover:text-green-600 cursor-pointer transition-colors duration-200'>
                    (+91) 86007 87934
                  </a>
                </div>
              </div>
              
              <div className='flex items-center space-x-2'>
                <span className='text-green-600'>✉️</span>
                <div>
                  <a href="mailto:swapnil.pawar@kalptej.com" className='text-gray-700 text-xs hover:text-green-600 cursor-pointer transition-colors duration-200 block'>
                    swapnil.pawar@kalptej.com
                  </a>
                  <a href="mailto:tejas.m@kalptej.com" className='text-gray-700 text-xs hover:text-green-600 cursor-pointer transition-colors duration-200'>
                    tejas.m@kalptej.com
                  </a>
                </div>
              </div>
              
              <div className='flex items-center space-x-2'>
                <span className='text-green-600'>📍</span>
                <p className='text-gray-700 text-xs'>Katraj, Pune - 411046</p>
              </div>
            </div>
          </div>


          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='w-full border-t border-gray-200 bg-gray-50'>
        <div className='flex flex-col sm:flex-row justify-between items-center px-4 md:px-8 lg:px-16 py-2 text-center sm:text-left space-y-1 sm:space-y-0'>
          <p className='text-green-800 text-xs sm:text-sm font-medium'>© 2025 Kalptej. All rights reserved.</p>
          <div className='flex items-center space-x-2'>
            <p className='text-xs sm:text-sm text-green-800 font-medium'>Designed By:</p>
            <p
              className='text-blue-900 text-xs sm:text-sm cursor-pointer hover:text-green-600 transition-colors font-medium underline'
              onClick={() => window.open("https://zerlak.com/", "_blank", "noopener,noreferrer")}
            >
              🌐 Zerlak
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;