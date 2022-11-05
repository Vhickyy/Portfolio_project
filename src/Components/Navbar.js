import final from '../images/pix.png'
import { useEffect, useRef, useState } from 'react'
import {FaBars, FaInstagram, FaLinkedinIn, FaYoutube,FaFacebook, FaFacebookF, FaFacebookSquare, FaPhoneAlt, FaHome} from 'react-icons/fa'

const Nav2 = () => {
      const links = [
    {
      id: 1,
      href: '#home',
      name: "Home",
      icon: <FaHome/>
    },
    {
      id: 2,
      href: '#about',
      name: "About",
      icon: <FaHome/>
    },
    {
      id: 3,
      href: '#contact',
      name: "Contact",
      icon: <FaPhoneAlt/>
    },
    {
      id: 4,
      href: '#portfolio',
      name: "Portfolio",
      icon: <FaPhoneAlt/>
    },
    {
      id: 5,
      href: '#reviews',
      name: "Reviews",
      icon: <FaPhoneAlt/>
    },
  ];
  const social = [
    {
      id:1,
      name: <FaFacebook className='text-white '/>,
    },
    {
      id:2,
      name: <FaYoutube className='text-white '/>,
    },
    {
      id:3,
      name: <FaLinkedinIn className='text-white '/>,
    },
    {
      id:4,
      name: <FaInstagram className='text-white '/>,
    },
  ]
  const navRef = useRef()
  const ulRef = useRef()
//   const scroll = ()=>{
//     console.log('hi');
//   }
  const toggle=()=>{
    ulRef.current.classList.toggle('translate-x-full')
  }
  const scroll = (e)=>{
    e.preventDefault();
    toggle()
    const target = e.target.getAttribute('href');
    const position = document.querySelector(target).offsetTop;
    const minus = navRef.current.getBoundingClientRect().height;
    window.scrollTo({
      left:0,
      top:position - minus
    })
 }
 const scroll2 = (e)=>{
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const position = document.querySelector(target).offsetTop;
    const minus = navRef.current.getBoundingClientRect().height;
    window.scrollTo({
      left:0,
      top:position - minus
    })
 }
  return (
    <header className='h-screen  bg-black z-0'>
        <nav >
            <div ref ={navRef}  className=' flex justify-end w-full fixed md:hidden py-6 px-10  z-2  text-mainYellow z-10  top-0 left-0 bg-[rgba(0,0,0,0.2)] backdrop-blur bg-red-500 '>
                <FaBars onClick={toggle} className='h-10 w-10 '/>
            </div>
            
            <ul ref={ulRef} className='fixed right-0 top-0 z-20 bg-yellow-400 h-screen w-1/2 flex flex-col justify-center items-center translate-x-full duration-300 transition-all ease-linear md:hidden'>
              <li onClick={toggle}>close</li>
              <div>
                  {links.map((link)=>
                  <li key={link.id} className='flex items-center h-16  '>
                    <a href={link.href} onClick=   {scroll}>{link.icon}</a>
                    <a href={link.href} onClick={scroll} className='pl-4 '>{link.name}</a>
                  </li>
                  )}
              </div>
            </ul>
            <div className='hidden md:flex md:flex-col md:justify-between md:items-center md:fixed md:h-screen md:w-[30%] md:left-0 md:top-0 md:bg-mainYellow md:z-10 md:py-28'>
              <div>logo</div>
              
              <ul>
                 
            {links.map((link)=>
             <li key={link.id} className='flex items-center justify-center h-16  bg-mainYellow drop-shadow-lg mb-6 w-[15rem] rounded-lg'>
                    <a href={link.href} onClick={scroll2}>{link.icon}</a>
                    
                    <a href={link.href} onClick={scroll2} className='pl-4 '>{link.name}</a>
            </li>
            )}
          </ul>
          <div className='flex justify-between items-center bg-red-500 w-[15rem]'>
             {social.map((link)=>
                  <div key={link.id} className='liststyle-none bg-blue-500 h-10n flex justify-center items-center'>
                    <a href={link.href} >{link.name}</a>
                    
                  </div>
                  )}
          </div>
            </div>
          
        </nav>
        <div className='flex flex-col h-full justify-between items-center  py-14 sm:py- 24 lg:flex-row-reverse lg:pt-0 lg:h-full lg:px-8'>
        <div className='bg-blue-500  flex justify-center items-center    overflow-hidden rounded-full  '>
          <img src={final} className=' w-full h-full object-cover lg-object-contain' alt="" />
        </div>
          
          <div className='text-white lg:bg-blue-500 bg-red-500 mx-8 md:mb-10 lg:mb-6 lg:mx-0 lg:mr-8  '>
            <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight '>Hi, I'm <span className='text-mainYellow'>KELECHI AUSTIN OKORIE</span></h1>
          <h1 className='text-2xl'>Canva Designer and Freelanncer</h1>
          <p >Attractive designs that gets you the right audience and many more.</p>
          </div>
          <button className='bg-mainYellow  px-10 py-2 rounded-lg text-2xl capitalize  md:hidden sm:mb-6'>
          portfolio
        </button>
        </div>
        
        
    </header>
  )
}

export default Nav2