import React from 'react'

const Portfolio = () => {
  return (
    <div className='bg-yellow-700 flex flex-col justify-center py-[7rem] min-h-[100vh]'>
        <div className='w-[90%] mx-auto grid gap-[1rem]'>
            <h1 className='text-yellow-400 text-4xl font-bold tracking-wider'>Projects</h1>
            <p className='text-yellow-200 text-xl '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, doloremque.</p>
            <div className='w-full h-[25vh] bg-[whitesmoke] rounded-md shadow-gray-300 drop-shadow-md'>
                Send me project
            </div>
            <div className='w-full h-[25vh] bg-[whitesmoke] rounded-md shadow-gray-300 drop-shadow-md'>
                Send me project
            </div>
            <div className='w-full h-[25vh] bg-[whitesmoke] rounded-md shadow-gray-400 drop-shadow-md'>
                Send me project
            </div>
            <button className='uppercase text-yellow-200  mx-auto border py-2 px-10 rounded-md border-yellow-200 hover:bg-yellow-400 hover:text-yellow-900 duration-200 tracking-wider'>All Projects</button>
        </div>
    </div>
  )
}

export default Portfolio