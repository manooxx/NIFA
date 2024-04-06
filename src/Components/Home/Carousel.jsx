import React, { useEffect, useState } from 'react'
import { MdNavigateNext } from "react-icons/md";
import { MdNavigateBefore } from "react-icons/md";
import { data } from "../../assets/data"



const Carousel = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    const handlePreviousClick = ()=>{
        
        setActiveIndex(!activeIndex ? data.length-1: activeIndex-1)
    }
    const handleNextClick = ()=>{
        setActiveIndex((activeIndex+1) % data.length)
    }

    useEffect(()=>{
        const timer = setTimeout(()=>{
            handleNextClick();
        }, 5000)

        return ()=>{
            clearTimeout(timer)
        }
    },[activeIndex])

  return (
    <div className='flex justify-center items-center'>
        <MdNavigateBefore className='cursor-pointer text-5xl absolute top-66 left-0 opacity-[0.7] z-3 bg-slate-950 text-white ' onClick={handlePreviousClick}/>
      {
        data.map((url, index)=><div key={url}>
            <img src={url} className={'' + (activeIndex === index? "block": "hidden")} alt="img" />
        </div>)
      }
        < MdNavigateNext className='cursor-pointer text-5xl absolute top-66 right-0 opacity-[0.7] z-3 bg-slate-950 text-white ' onClick={handleNextClick}/>
    </div>
  )
}

export default Carousel
