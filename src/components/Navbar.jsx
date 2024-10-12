import React from 'react'
import logo from "../assets/sajidaLogo.png";
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    // <nav className=' mb-20 flex items-center justify-between py-6'>
    // < div className='flex flex-shrink-0 items-center'>
    //     <img className="mx-4 w-14" src={logo} alt='logo'/>
    // </div>
    // <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    //     <FaLinkedin/>
    //     <FaGithub/>
    //     <FaInstagram/>
    //     </div> 
    // </nav>
    <nav className='mb-20 flex items-center justify-between py-6'>
    <div className='flex flex-shrink-0 items-center'>
      <img className="mx-4 w-14" src={logo} alt='logo'/>
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
      <a href="https://www.linkedin.com/in/sajida-hossain-a6b90b27a/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://github.com/Sajida-18" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      {/* <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a> */}
    </div> 
  </nav>
  )
}

export default Navbar
