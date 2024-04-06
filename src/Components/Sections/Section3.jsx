import React from 'react'
import img1 from "../../assets/apple.png"
import img2 from "../../assets/gpay.png"
import YoutubeVideo from './YoutubeVideo'


const videoUrl = "https://www.youtube.com/embed/-9cJjaLXKqE?si=KGVCWxiNz0DB8k6y"


const Section3 = () => {
    return (
        <div className='min-h-screen flex justify-center bg-bg1 bg-fixed bg-no-repeat bg-cover bg-center text-white'>

            <div className='min-h-screen w-full bg-slate-950 opacity-[0.9] flex flex-col md:flex-row'>

                <div className='flex flex-col gap-8 md:w-[500px] py-10 p-4 md:py-20 md:px-10'>
                    <div className='flex flex-col gap-4  '>
                        <h3 className='text-3xl font-bold'>Online Classes</h3>
                        <p>

                            Dear Students/Parents, Nifa presents its Learning App for your regular art practice in which we have added many amazing features Like: Step-by-step recorded demo videos prepared by your faculty members. Regular assessment of your practise through assignment section. Live class section from same app. Attendance, payment invoice, art news, announcements, important information and direct connect with the management team are some more features. So hurry up n join now to experience personalised coaching by experts sitting at your home.

                            We wish u Happy Learning. Stay Safe n Healthy.
                        </p>

                        <button className='border rounded-full text-white w-28 h-10  bg-gradient-to-r from-[#b11e6f] to-[#4a0ec0] hover:scale-95 duration-300'>Read More</button>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <p>Download The App</p>

                        <div className='flex gap-3' >
                            <img className='w-24 md:w-40 cursor-pointer' src={img1} alt="" />
                            <img className='w-24 md:w-40 cursor-pointer' src={img2} alt="" />
                        </div>
                    </div>
                </div>

                <div className=' flex justify-center items-center p-10 '>
                    <div className='border-8 border-white hidden md:block'>

                    <YoutubeVideo width='650' height ='415' videoUrl = {videoUrl}/>
                    </div>
                    <div className='border-8 border-white  md:hidden'>

                    <YoutubeVideo width='260' height ='170' videoUrl = {videoUrl}/>
                    </div>

                </div>

            </div>


        </div>
    )
}

export default Section3
