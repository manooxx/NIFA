import React from 'react'
import { StudentsData } from '../../assets/StudentsData'

const StudentsWork = () => {
    return (
        <div className=' p-4 px-10'>

            <div className=' h-28 flex justify-center items-center '>
                <h2 className='text-3xl font-bold'>
                    Students work
                </h2>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-5 gap-4 '>
                {
                    StudentsData.map((url, index)=><div   key={url.url}> 
                      <a href={url.link}>  <img className='h-40 w-60 rounded-md hover:shadow-2xl duration-300' src={url.url} alt="img" /></a>
                    </div>)
                }
            </div>
        </div>
    )
}

export default StudentsWork
