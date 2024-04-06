import React from 'react'
import { testimonialLink } from '../../assets/testimonialLink'
import YoutubeVideo from './YoutubeVideo'

const Testimonial = () => {
  return (
    <div className='hidden md:block bg-bg3 min-h-screen justify-center bg-fixed bg-no-repeat-bg-cover bg-center text-white p-4 px-10'>

<div className=' h-28 flex justify-center items-center'>
            <h2 className='text-3xl font-bold'>
                Our Courses
            </h2>
        </div>
        <div className='py-10 grid grid-cols-3 gap-12 '>
                {
                    testimonialLink.map((url, i)=>
                    <div key={url.url} className="border-4 border-white"><YoutubeVideo   videoUrl = {url.url} width='340' height='200' />
                    </div>)
                }
        </div>
                
              
    </div>
  )
}

export default Testimonial
