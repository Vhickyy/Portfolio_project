import React from 'react'

const Contact = () => {
  return (
    <div className='bg-yellow-700 flex flex-col justify-center py-[7rem] min-h-[100vh]'>
      <div className='grid gap-2 w-[90%] mx-auto '>
        <h1 className='text-yellow-400 text-4xl font-bold tracking-wide'>Contact Me</h1>
        <form className='grid gap-2'>
            <div className='grid'>
              <label htmlFor="name">Name</label>
              <input type="text" id='name' name='name' autoComplete='off' className='bg-transparent border rounded-md p-2'/>
            </div>
            <div className='grid'>
              <label htmlFor="email">Email</label>
              <input type="email" id='email' name='email' autoComplete='off' className='bg-transparent border rounded-md p-2'/>
            </div>
            <div className='grid'>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="30" rows="10" className='bg-transparent border rounded-md p-2'></textarea>
            </div>
            <button className='uppercase border '>Send</button>
        </form>
      </div>
        
    </div>
  )
}

export default Contact