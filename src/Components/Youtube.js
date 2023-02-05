import React from 'react'

const Youtube = () => {
  return (
    <div className='bg-yellow-900 py-[7rem] min-h-[100vh] flex flex-col justify-center'>
        <div className='w-[90%] mx-auto grid gap-[1rem]'>
            <h1 className='text-yellow-400 text-4xl font-bold tracking-wider'>Tutorials</h1>
            <p className='text-yellow-200'>I have created lot of design content on Youtube.</p>
            <div className='w-full h-[25vh] bg-[whitesmoke] rounded-md shadow-gray-300 drop-shadow-md'>
                Youtube video image and link to that video
            </div>
            <div className='w-full h-[25vh] bg-[whitesmoke] rounded-md shadow-gray-300 drop-shadow-md'>
                Youtube video image and link to that video
            </div>
            <div className='w-full h-[25vh] bg-[whitesmoke] rounded-md shadow-gray-400 drop-shadow-md'>
                Youtube video image and link to that video
            </div>
            <button className='uppercase text-yellow-200  mx-auto border py-2 px-10 rounded-md border-yellow-200 hover:bg-yellow-400 hover:text-yellow-900 duration-200 tracking-wider'>More Video</button>
        </div>
    </div>
  )
}

export default Youtube