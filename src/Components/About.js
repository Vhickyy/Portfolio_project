import React from 'react'

const About = () => {
  return (
    <div className='bg-yellow-900 py-[7rem] min-h-[100vh] flex flex-col justify-center'>
        <div className='w-[90%] mx-auto grid gap-[2rem]'>
            <h1 className='text-yellow-400 text-4xl font-bold tracking-wide'>Hello, I'm Kelechi Okorie.</h1>
            <div className='grid gap-[1rem] text-xl text-yellow-200'>
                <p>Kelechi A. Okorie is a Canva Creative Designer with over two years of experience and has taught a lot of people how to create awesome designs and land their dream job.</p>
                <p>As a business owner, whether online or offline, having a google my business profile will help make ypur business.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo odit, ex quia repudiandae optio incidunt iusto quaerat numquam molestiae harum?Lorem ipsum dolor sit amet consectetur</p>
            </div>
            <button className='uppercase text-yellow-200 px-10 mx-auto border py-2 rounded-md border-yellow-200 hover:bg-yellow-400 duration-200 tracking-widest hover:text-yellow-900 '>More About Me</button>
        </div>
    </div>
    
  )
}

export default About
