import React from 'react'

const Hero = () => {
  return (
    <div className='h-screen bg-yellow-900 relative flex items-center'>
        <div className='z-10 w-[80%] ml-[5%]'>
            <h1 className='text-xl text-yellow-400 uppercase'>Kelechi Austin Okorie</h1>
            <h1 className='text-5xl text-white capitalize font-bold'>Creative designer and many more.</h1>
            <p className='text-yellow-200 text-xl'>I build awesome design that attracts the right audience to your business.</p>
        </div>
        <div className='h-1/2 bg-yellow-700 w-full absolute bottom-0 translate-y-50 duration-700 '></div>
    </div>
  )
}

export default Hero