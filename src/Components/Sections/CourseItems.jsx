import React from 'react'

const CourseItems = ({items}) => {
  return (
    <div className='border w-[260px] h-80 flex flex-col gap-4 rounded-md items-center shadow-md duration-300 hover:shadow-2xl bg-white hover:scale-110'>
     <img className='rounded-t-md' src={items.url} alt="" />
     <h4 className='text-center px-3 min-h-10'>{items.title}</h4>
     <button className='border rounded-full text-white w-28 h-10  bg-gradient-to-r from-[#b11e6f] to-[#4a0ec0] hover:scale-95 duration-300'><a href={items.buttonUrl}>Read More</a></button>
    </div>
  )
}

export default CourseItems
