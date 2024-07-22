import React from 'react'
import bgimg from '../assets/tuborg_bg.jpg'
import { FaArrowRightLong } from "react-icons/fa6";

const Ask = () => {
  return (
    <div className='screen_width h-screen overflow-hidden relative'>
        {/* <div className="bg_gradient_white absolute z-10"></div>  */}
        <div className="bg_gradient_white absolute z-10"></div>
        <img src={bgimg} className="ask_img w-full absolute"/>

        <div className='screen_width h-screen overflow-hidden relative z-20 flex justify-start items-center' >
            <div className='w-[50%] flex flex-col justify-center items-center '>
                <lable className='text-white mx-10 text-center text-6xl poppins-bold'>EXPLORE TUBORG MUSIC. THE PLATFORM FOR MAKING MUSIC ACROSS BORDERS.</lable>
                <div className=' bg-slate-900 flex items-center px-10 py-4 my-5 text-white poppins-regular'>Join Now
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ask