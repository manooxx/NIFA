import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


const Contect = () => {
    return (
        <div className='px-5 text-lg  bg-gradient-to-r from-[#812868] to-[#f954a4] text-white flex flex-col md:flex-row items-center justify-between'>

            <div className=' p-2 text-center'>
                <p>Welcome to the National Institute of Fine Arts</p>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-6'>
                <div className='flex justify-center items-center gap-2'>
                <FaPhone/>   9555112200
                </div>
                <div className='flex justify-center items-center gap-2'>
                <FaPhone/>   9810130552
                </div>
                <div className='flex justify-center items-center gap-2'>
                 < IoMdMail/>   admission@nifafinearts.com
                </div>
                <div className='flex justify-center items-center gap-2'>
                    <div><FaFacebookF/></div>
                    <div><FaTwitter/></div>
                    <div><FaInstagram/></div>
                    <div><FaYoutube/></div>
                </div>
            </div>

        </div>
    )
}

export default Contect
