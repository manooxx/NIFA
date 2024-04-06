import React from 'react'
import Carousel from './Carousel'
import Section3 from '../Sections/Section3'
import Courses from '../Sections/Courses'
import StudentsWork from '../Sections/StudentsWork'
import Testimonial from '../Sections/Testimonial'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
      {/* section-1 */}
      <Carousel />
      <div className='p-2 mx-8 flex'>
        <h3 className='font-bold text-lg w-60'>Nifa Updates::</h3>
        <div className='text-[#b11e6f] whitespace-nowrap overflow-hidden overflow-ellipsis'>
          <p className='movement'>All NIFA courses are now available worldwide through our Live and Interactive Online Classes. Please&nbsp;download the NIFA app from our online classes page to register for a complimentary trial class.</p>
        </div>
      </div>



      {/* section-2 */}

      <div className='m-5 py-10 p-4'>
        <div className='flex flex-col gap-10 justify-center items-center'>
          <h1 className='font-bold text-4xl'>
            Welcome To National Institute of Fine Arts
          </h1>
          <div className='text-gray-700 flex flex-col gap-3'>

            <p className='text-center'>
              National Institute of Fine Arts (NIFA) is a national center for education in arts, fostering the excellence of emerging and established artists and advancing art to create a more human world. National Institute of Fine Arts  (NIFA) was established by MRS RENU KHERA in Delhi and NCR of Delhi on July 2005. Institute established another unit in Panna (M.P) which is affiliated to Raja Mansingh Music and Arts University (Gwalior). Its aim is to provide education and training to students on a wide spectrum of Fine Arts.
            </p>
            <p className='text-center'>

              National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes. We seek to shape the global future of arts with an emphasis on excellence that allows its members to reach for the highest artistic standards as individuals while recognizing that the Art is one of the foundations of a healthy and creative society. This is a place where national and international leaders in the arts gather, teach, show and perform their work. The institute prides itself on its openness and on creating an environment that is safe, welcoming, and built on mutual respect.
            </p>
            <p className='text-center font-bold'>
              National Institute of Fine Arts is a place where the creative expression of individuals is nurtured and a sense of community flourishes.
            </p>
          </div>

          <button className='border rounded-full text-white w-28 h-10  bg-gradient-to-r from-[#b11e6f] to-[#4a0ec0] hover:scale-95 duration-300'>Read More</button>
        </div>
      </div>

      {/* section-3 */}

      <Section3 />

      {/* section-4 (our courses)  */}

      <Courses />

      {/* section-5 (students Work)*/}

      <StudentsWork/>

      {/* section-6 (Testimonial) */}

      <Testimonial/>

      {/* Footer */}

      <Footer/>


    </div>



  )
}

export default Home
