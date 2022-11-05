import React from 'react'
import Layout from './Layout'
// import pix from '../images/picture.png'
import Skills from './Skills'
import Experience from './Experience'

const About = () => {
     const birth = [
    {
      id:1,
      name: "Birthday",
      desc: "22nd October 1960"
    },
    {
      id:2,
      name: "Birthday",
      desc: "22nd October 1960"
    },
    {
      id:3,
      name: "Birthday",
      desc: "22nd October 1960"
    },
    {
      id:4,
      name: "Birthday",
      desc: "22nd October 1960"
    },
    {
      id:5,
      name: "Birthday",
      desc: "22nd October 1960"
    },
  ]


  return (
    <Layout>
        <div id='about' className=' pt-4' >
          
            <h2 className='font-bold pt-8 text-3xl text-white'>
                About
             </h2>
            <div className='h-1 bg-red-400 my-1'></div>
        </div>
        <div className='mt-6  lg-bg-teal-500'>
          {/* <div className='bg-black h-[75vh] rounded-lg md:h-[360px] md:w-[40%] lg:bg-blue-300'>
            
            <img src={pix} alt="" className='h-full w-full object-cover' />
          </div>  */}
          
          <div className='md:w-[75%] py-4 md:py-0 text-darktext text-xl leading-8'>
            <p >I am a Business Management graduate, a Business Assistant and a <span>Canva Expert with 2years experience.</span></p>
            <p>I take my client's work very seriously and deliver on time.My works are always eceptional and extraordinary, reason why my clients always stick with me.</p>
             <p>I create attractive and scroll-slopping designs for business owners taht help them grab the attention of their target/potential customers.</p>
             <p>I also tutor people on how to make better use of Canva. I have trained over a thousand people.</p>
          </div>
        </div>
        <div className='mt-6 text-darktext sm:flex sm:flex-wrap  justify-between  lg:bg-teal-500'>
        {birth.map((b)=>(
          <div key={b.id} className=' mt-2 sm:w-[48%]'>
            <p>{b.name}</p>
            <p>{b.desc}</p>
          </div>
        ))}
      </div>
      <button className='bg-mainYellow mt-4 p-2 rounded-md'>Download CV</button>
      <Skills/>
      <Experience/> 
    </Layout>
  )
}

export default About