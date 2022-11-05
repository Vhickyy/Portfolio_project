import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='px-4 sm:px-[2rem] md:px-6 lg:px-10 bg-black'>{children}</div>
  )
}

export default Layout