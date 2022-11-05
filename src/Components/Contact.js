import React from 'react'
import Layout from './Layout'

const Contact = () => {
  return (
    <Layout>
      <div className='lg:flex bg-red-500 lg:bg-blue-500 pt-[4.5rem]  lg:justify-between' id='contact'>
          <div className='lg:w-[35%] lg:bg-teal-500'>
            <h3 className=' font-bold'>Contact Me</h3>
            <p>email@gmail.com</p>
            <p>0000000</p>
            <button>Download CV</button>
          </div>
                
          <form action="" className=' flex flex-col justify-between w-full  mx-auto px-10 pt-2 drop-shadow-lg rounded-lg bg-white lg:w-[60%] lg:bg-red-700 lg:mx-0 my-14 lg:my-0'>
            <input type="text" placeholder='Your Name' className='bg-gray-200 rounded-sm p-3 outline-none  mt-14'/>
            <input type="text" placeholder='Your Name' className='bg-gray-200 rounded-sm p-3 outline-none mt-8'/>
            <textarea name="" id="" cols="30" rows="10" className='bg-gray-200  rounded-lg p-3  mt-8' placeholder='Enter Message outline-none'></textarea>
            <button className='bg-teal-500 max-w-[10rem] self-center mt-10 mb-14 rounded-lg p-2 '>send message</button>
          </form>
        {/* </div> */}
      </div>
    </Layout>
  )
}

export default Contact