import React from 'react'
import {FaFacebook, FaHome, FaInstagram, FaLaptop, FaLinkedin, FaPhone, FaPortrait, FaYoutube} from 'react-icons/fa'
const Sections = () => {
  return (
    <div className='flex bg-yellow-600 drop-shadow-lg p-4 rounded-md justify-around items-center fixed top-8 w-[90%] mx-[5%] z-20'>
      <FaYoutube/>
      <FaFacebook/>
      <FaInstagram/>
      <FaLinkedin/>
      <FaHome/>
      <FaPortrait/>
      <FaLaptop/>
      <FaPhone/>
    </div>
  )
}

export default Sections