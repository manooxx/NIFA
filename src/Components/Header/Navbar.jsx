import React from 'react'

const Navbar = () => {
  return (
    <div className='mx-10 m-2'>
      <div className='flex flex-col md:flex-row justify-center md:justify-between items-center '>
        <div className=''>
          <img className='h-16' src="https://www.nifafinearts.com/images/nifa-new-logo.png" alt="" />
        </div>
        
        <div className='border bg-blue-950 text-white w-80 h-8 flex items-center p-2 px-6 md:hidden cursor-pointer'>
          Home
        </div>
        <div className='hidden md:block'>
          <ul className='flex justify-center items-center gap-6'>

            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Home</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>About</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Courses</li>



            
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Activities</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Admission</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Art Gallery</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Franchise</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Online Classes</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Videos</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Pay Fee</li>
            <li className='hover:text-pink-600 cursor-pointer duration-300 py-2 hover:border-b hover:border-t hover:border-pink-600'>Contact</li>
          </ul>
        </div>

      </div>
      
    </div>
  )
}

export default Navbar
