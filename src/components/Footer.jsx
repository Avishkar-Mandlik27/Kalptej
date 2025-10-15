import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { FaGoogle, FaLinkedin, FaYelp } from 'react-icons/fa';
import logo from '../assets/KalpTej.png';

const Footer = () => {
  return (
    <div className='w-full bg-white'>
      {/* Top Section */}
      <div className='w-full flex flex-row flex-wrap justify-center items-start gap-x-6 gap-y-6 px-4 md:px-16 py-6'>
        {/* Logo */}
        <div className='flex flex-col items-start basis-[150px] space-y-2'>
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-auto transition-all duration-300"
          />
        </div>

        {/* Terms & Policy */}
        <div className='flex flex-col items-start basis-[150px] space-y-2'>
          <p className='text-green-800 text-sm sm:text-base font-medium cursor-pointer hover:text-green-600'>Terms & Conditions</p>
          <p className='text-green-800 text-sm sm:text-base font-medium cursor-pointer hover:text-green-600'>Privacy Policy</p>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col items-start basis-[200px] space-y-2'>
          <p className='text-green-800 text-sm sm:text-base font-medium'>Phone: <span className='text-blue-900 ml-1'>(310) 936-7337</span></p>
          <p className='text-green-800 text-sm sm:text-base font-medium'>Email: <span className='text-blue-900 ml-1'>info@thegreenerydesign.com</span></p>
        </div>

        {/* Location */}
        <div className='flex flex-col items-start basis-[150px] space-y-2'>
          <p className='text-green-800 text-sm sm:text-base font-medium'>Location: Los Angeles, CA</p>
        </div>

        {/* Social Icons */}
        <div className='flex space-x-3 items-center text-green-800 text-xl basis-[150px]'>
          <BsInstagram className='cursor-pointer hover:text-green-600 transition-colors duration-200' />
          <FaLinkedin className='cursor-pointer hover:text-green-600 transition-colors duration-200' />
          <FaYelp className='cursor-pointer hover:text-green-600 transition-colors duration-200' />
          <FaGoogle className='cursor-pointer hover:text-green-600 transition-colors duration-200' />
        </div>
      </div>

      {/* Bottom Section */}
      <div className='w-full flex flex-col sm:flex-row justify-around items-center px-4 md:px-16 py-3 text-center sm:text-left space-y-2 sm:space-y-0'>
        <p className='text-green-800 text-sm font-medium'>© 2025 Kalptej. All rights reserved.</p>
        <div className='flex items-center space-x-1'>
          <p className='text-sm text-green-800 font-medium'>Designed By:</p>
          <p
            className='text-blue-900 text-sm cursor-pointer hover:text-green-600 transition-colors font-medium'
            onClick={() => window.open("https://zerlak.com/", "_blank", "noopener,noreferrer")}
          >
            🌐 Zerlak
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;