import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton ';

function App() {
  

  return (
   <div>
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div>
  )
}

export default App
