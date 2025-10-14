import React from 'react'
import { BsInstagram } from "react-icons/bs";
import { FaGoogle, FaLinkedin, FaYelp } from 'react-icons/fa';
import FooterCarousel from './FooterCarousel';
import logo from '../assets/KalpTej .png'

const Footer = () => {


    return (
        <div className='w-full bg-white'>

            <div className='w-full flex flex-wrap justify-around items-start gap-6 pt-4 pb-8 px-4 md:px-16'>
                {/* Terms & Policy */}

                <div className='flex flex-col items-center md:items-start space-y-2'>
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-16 md:h-20 lg:h-24 w-auto transition-all duration-300"
                    />
                </div>

                <div className='flex flex-col items-center md:items-start space-y-2'>
                    <p className='text-green-800 text-lg font-semibold cursor-pointer hover:text-green-600'>Terms & Conditions</p>
                    <p className='text-green-800 text-lg font-semibold cursor-pointer hover:text-green-600'>Privacy Policy</p>
                </div>


                <div className='flex flex-col items-center md:items-start space-y-2'>
                    <p className='text-green-800 text-lg font-semibold flex'>Phone: <span className='text-blue-900 text-lg font-semibold ml-1'>(310) 936-7337</span></p>
                    <p className='text-green-800 text-lg font-semibold flex'>Email: <span className='text-blue-900 text-lg font-semibold ml-1'>info@thegreenerydesign.com</span></p>
                </div>

                <div className='flex flex-col text-lg font-semibold items-center md:items-start space-y-2'>
                    <p className='text-green-800 text-lg font-semibold'>Location: Los Angeles, CA</p>
                </div>


                <div className='flex space-x-4 justify-center items-center text-green-800 text-xl'>
                    <BsInstagram className='cursor-pointer hover:text-green-600 transition-colors duration-200' />
                    <FaLinkedin className='cursor-pointer hover:text-green-600 transition-colors duration-200' />
                    <FaYelp className='cursor-pointer hover:text-green-600 transition-colors duration-200' />
                    <FaGoogle className='cursor-pointer hover:text-green-600 transition-colors duration-200' />
                </div>
            </div>


            <div className='w-full flex flex-col md:flex-row justify-around items-center py-4 px-4 md:px-16'>
                <p className='text-green-800 text-lg font-semibold'>© 2025 Kalptej. All rights reserved.</p>
                <div className='flex items-center space-x-1 mt-2 md:mt-0'>
                    <p className='text-lg text-green-800 font-semibold'>Designed By:</p>
                    <p
                        className='text-blue-900 text-lg cursor-pointer transform duration-300 hover:from-green-500 hover:to-green-400 hover:text-green-600 transition-colors font-semibold'
                        onClick={() => window.open("https://zerlak.com/", "_blank", "noopener,noreferrer")}
                    >
                        🌐 Zerlak
                    </p>


                </div>
            </div>
        </div>
    )
}

export default Footer
