import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import logo from '../assets/KalpTej.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className='w-full mt-[5vh] bg-white'>
      <div className='w-full px-[2vw] md:px-[4vw] lg:px-[6vw] pt-[1vh] pb-[2vh]'>
        {/* Logo */}
        <div className='mb-[2vh] flex justify-center'>
          <img
            src={logo}
            alt="Kalptej Logo"
            className="h-[8vh] md:h-[10vh] w-auto transition-all duration-300 cursor-pointer hover:opacity-80"
            onClick={() => handleNavigation('/')}
          />
        </div>

        {/* Footer Content */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-y-[4vh] gap-x-[4vw] w-full'>
          {/* Company Info */}
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left space-y-[1vh]'>
            <p className='text-green-800 text-sm font-semibold mb-0 leading-tight'>
              Kalptej Interiors & Greenery
            </p>
            <p className='text-green-700 text-xs mt-0 italic leading-snug'>
              ~ Between You and Nature, We Build Bridges
            </p>
            <div className='flex space-x-[1vw] items-center mt-[1vh]'>
              <BsWhatsapp className='cursor-pointer hover:text-green-500 hover:scale-110 transition-all duration-300 text-lg text-gray-600' onClick={() => window.open("https://wa.me/message/TIQND33M5EZTH1", "_blank")} />
              <BsInstagram className='cursor-pointer hover:text-pink-500 hover:scale-110 transition-all duration-300 text-lg text-gray-600' onClick={() => window.open("https://www.instagram.com/kalptej_interiors_greenery", "_blank")} />
              <FaFacebook className='cursor-pointer hover:text-blue-700 hover:scale-110 transition-all duration-300 text-lg text-gray-600' onClick={() => window.open("https://www.facebook.com/kalptej", "_blank")} />
            </div>
            <p className='text-gray-600 text-xs md:text-sm sm:text-center lg:text-start leading-relaxed max-w-[30vw] mt-[1vh]'>
              Transforming spaces with innovative interior design and lush greenery.
              Creating sustainable, beautiful environments for modern living.
            </p>
          </div>

          {/* Our Services */}
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left space-y-[0.5vh]'>
            <h3 className='text-green-800 text-sm sm:text-base font-bold mb-[1vh]'>OUR SERVICES</h3>
            {[
              '🪑 Custom Furniture Design',
              '🛋️ Modular Sofa & Seating Solutions',
              '🛏️ Bedroom & Wardrobe Installations',
              '🧰 Furniture Restoration & Upcycling',
              '🌱 Green Interior Concepts',
              '🪴 Plant Decoration',
            ].map((service, index) => (
              <p
                key={index}
                onClick={() => handleNavigation('/services')}
                className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600'
              >
                {service}
              </p>
            ))}
          </div>

          {/* Quick Links */}
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left space-y-[0.5vh]'>
            <h3 className='text-green-800 text-sm sm:text-base font-bold mb-[1vh]'>QUICK LINKS</h3>
            <p onClick={() => handleNavigation('/about')} className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600'>About Us</p>
            <p onClick={() => handleNavigation('/contact')} className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600'>Contact Us</p>
            <p className='text-gray-700 text-xs sm:text-sm font-medium cursor-pointer hover:text-green-600'>Terms & Conditions</p>
          </div>

          {/* Contact Info */}
          <div className='flex flex-col items-center text-center lg:items-start lg:text-left space-y-[1vh]'>
            <h3 className='text-green-800 text-sm sm:text-base font-bold mb-[1vh]'>GET IN TOUCH</h3>
            <div className='space-y-[0.5vh]'>
              <div className='flex items-center justify-center lg:justify-start space-x-[1vw]'>
                <span className='text-green-600'>📞</span>
                <div>
                  <a href="tel:+918669110791" className='text-gray-700 text-xs hover:text-green-600 block'>(+91) 86691 10791</a>
                  <a href="tel:+918600787934" className='text-gray-700 text-xs hover:text-green-600'>(+91) 86007 87934</a>
                </div>
              </div>
              <div className='flex justify-center space-x-[1vw]'>
                <span className='text-green-600'>✉️</span>
                <div className='flex flex-col lg:items-start items-center sm:items-center text-center'>
                  <a href="mailto:swapnil.pawar@kalptej.com" className='text-gray-700 text-xs hover:text-green-600 block'>swapnil.pawar@kalptej.com</a>
                  <a href="mailto:tejas.m@kalptej.com" className='text-gray-700 text-xs hover:text-green-600'>tejas.m@kalptej.com</a>
                </div>
              </div>
              <div className='flex items-center justify-center lg:justify-start space-x-[1vw]'>
                <span className='text-green-600'>📍</span>
                <p className='text-gray-700 mb-0 text-xs'>Katraj, Pune - 411046</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='w-full border-t border-gray-200 bg-gray-50'>
        <div className='flex flex-col sm:flex-row justify-between items-center px-[2vw] md:px-[4vw] lg:px-[6vw] py-[2vh] text-center sm:text-left space-y-[1vh] sm:space-y-0'>
          <p className='text-green-800 text-xs sm:text-sm font-medium'>© 2025 Kalptej. All rights reserved.</p>
          <div
            className="flex items-center justify-center space-x-2 px-4 py-2 rounded-full bg-white border border-black shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
            onClick={() => window.open("https://zerlak.com/", "_blank")}
          >
            <span className="text-black text-sm font-medium">Designed By:</span>
            <span className="text-black text-sm font-bold underline hover:text-gray-700 transition-colors duration-300">
              Zerlak
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;