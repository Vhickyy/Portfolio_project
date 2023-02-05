import React from 'react'
import {FaFacebook, FaHome, FaInstagram, FaLaptop, FaLinkedin, FaPhone, FaPortrait, FaYoutube} from 'react-icons/fa'
const Sections = () => {
  return (
    <div className='flex bg-yellow-900 p-4 justify-around items-center sticky w-full top-0 z-20'>
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