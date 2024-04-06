import React from 'react'
import img1 from '../../assets/apple.png'
import img2 from '../../assets/gpay.png'

const Footer = () => {

  return (
    <div className='bg-bg4 min-h-screen  bg-no-repeat bg-cover bg-center flex flex-col p-4 py-16 px-10 gap-20'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-5'>

        <div className='flex flex-col gap-4'>
          <h4 className='text-lg font-bold'>
            Company
          </h4>
          <div className='flex flex-col gap-1 cursor-pointer'>
            <p>
              About
            </p>

            <p>

              Facilities
            </p>
            <p>

              Career
            </p>
            <p>
              Contact Us

            </p>
            <p>
              Terms & Conditions

            </p>
            <p>
              Refund Policy

            </p>
            <p>
              Privacy Policy

            </p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h4 className='text-lg font-bold'>
            Activities
          </h4>
          <div className='flex flex-col gap-1 cursor-pointer'>
            <p>
              Art Gallery

            </p>

            <p>
              Workshops


            </p>
            <p>
              Outdoor Activities


            </p>
            <p>
              Media Coverage


            </p>
            <p>
              Art Events


            </p>
            <p>
              Exhibition


            </p>
            <p>

              Daily Activitie

            </p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>

          <h4 className='text-lg font-bold'>
            Popular Course
          </h4>
          <div className='flex flex-col gap-1 cursor-pointer'>
            <p>
              Diploma In Fine Arts
            </p>
            <p>
              Certificate Hobby Course
            </p>
            <p>
              Entrance Preparation
            </p>
            <p>
              BFA
            </p>
            <p>
              Animation Sketching
            </p>
            <p>
              Kids Diploma
            </p>

          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <div>
            <h4 className='text-lg font-bold'>
              Our Locations
            </h4>

            <div className='flex flex-col gap-1 '>
              <p>

                Gurgaon (Dlf Phase - 4)
              </p>

              <p>
                Mumbai (Andheri West)

              </p>
              <p>
                South Delhi (Kailash Colony)

              </p>
            </div>
          </div>
          <div>
            <h4 className='text-lg font-bold'>
              International Branches
            </h4>
            <div className='flex flex-col gap-1'>
              <p>London</p>
              <p>USA</p>
              <p>Dubai, UAE</p>
            </div>
          </div>
        </div>


      </div>
      <div className='flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col gap-2'>
          <h4 className='text-lg font-bold'>
            NIFA Is A Unit Of Nifaedutech Pvt Ltd.
          </h4>
          <h4 className='text-lg font-bold'>
            Connect With Us
          </h4>
          <p className='text-lg'>
            9555112200,9810130552
          </p>
          <p>
            admission@nifafinearts.com
          </p>
          <div>

          </div>
        </div>
        <div className='flex flex-col justify-end md:items-end gap-4'>

          <h5 className='text-lg font-bold'>
            Download The App
          </h5>

          <div className='flex gap-4 cursor-pointer'>

            <img className='w-36' src={img2} alt="" />
            <img className='w-36' src={img1} alt="" />
          </div>

          <p className='text-sm'>
            © Copyright 2021 NIFA Fine Arts. All Rights Reserved.
          </p>

        </div>
      </div>
    </div>
  )
}

export default Footer
