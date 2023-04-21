import React from 'react'

const Footer = () => {

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <div className="fixed bottom-0 w-full grid grid-cols-1 p-10 md:mt-[700px] lg:mt-96 bg-blue-200 text-gray-600">
      <p className='text-4xl font-bold justify-center text-center cursor-pointer' onClick={handleScrollToTop}>Info</p>
      <p className='text-lg font-semibold justify-center text-center'>all rights reserved to @info since 2023</p>
    </div>
  )
}

export default Footer
