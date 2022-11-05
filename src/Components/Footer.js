import React from 'react'

const Footer = () => {
  return (
    <footer className='mt-[4.5rem] py-4 flex justify-center items-center bg-mainYellow'>
        <p className=''>Copyright &copy; <span>{new Date().getFullYear()}</span></p>
    </footer>
  )
}

export default Footer