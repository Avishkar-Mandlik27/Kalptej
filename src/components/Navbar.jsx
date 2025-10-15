import React, { useState } from 'react'
import logo from '../assets/KalpTej.png'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  let navigate = useNavigate();
  return (
    <div className="w-full fixed top-0 left-0 z-50 bg-white/70 backdrop-blur-md shadow-lg shadow-gray-300/40">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 ">
        
        <div className="flex h-full items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-16 md:h-20 lg:h-24 w-auto transition-all duration-300"
          />
        </div>

        
        <ul className="hidden md:flex space-x-8 text-lg font-medium text-gray-800">
          {["Home", "About Us", "Services", "Contact Us"].map((val, i) => (
            <li
              key={i}
              className="hover:text-green-700 cursor-pointer transition-colors duration-200"
              onClick={()=>{ navigate("/"+val.split(" ")[0].toLowerCase()) }}
            >
              {val}
            </li>
          ))}
        </ul>

        <div
          className="md:hidden text-2xl cursor-pointer text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-white/80 backdrop-blur-md w-full text-center space-y-4 pb-4 shadow-md shadow-gray-200/50">
          {["Home", "About Us", "Services","Contact Us"].map((val, i) => (
            <li
              key={i}
              className="hover:text-green-700 cursor-pointer transition-colors duration-200"
              onClick={()=>{ navigate("/"+val.split(" ")[0].toLowerCase()) }}
            >
              {val}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Navbar
