import React from 'react'
import CourseItems from './CourseItems'
import { CourseData } from '../../assets/CourseData'

const Courses = () => {
  return (
    <div className='bg-bg2 min-h-screen w-full bg-cover bg-no-repeat p-4 px-10'>
        <div className=' h-28 flex justify-center items-center'>
            <h2 className='text-3xl font-bold'>
                Our Courses
            </h2>
        </div>
        <div className=' flex justify-center items-center'>

        <div className='grid  md:grid-cols-4 gap-10'>
            {
                CourseData.map((items, index)=><CourseItems key={index} items={items}/>)
            }
        </div>
        </div>
      
    </div>
  )
}

export default Courses
