import React from 'react'
import Logo from '../assets/tuborg_logo_white.png'

import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
const Footer = () => {
  return (
    <div className='footer w-full bg-slate-900 text-white p-14'>
        <div className="footer_link_container flex ">
            <div className="link_left flex flex-col justify-start w-[40%]">
                <img src={Logo} className="logo" />
                <label className=' poppins-regular my-2'>Enjoy the refreshing taste of Tuborg, the beer that brings people together at over 100 music festivals worldwide!</label>
            </div>
            <div className="link_right w-[60%] flex justify-end">
                <div className="link_container flex flex-col ml-24">
                    <label className='poppins-bold text-green-500 mx-1 my-2'>Company</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Blog</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Carrers</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Pricing</label>
                </div>
                <div className="link_container flex flex-col ml-24">
                    <label className='poppins-bold text-green-500 mx-1 my-2'>Events</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Tuborg Music</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Tuborg Talks</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Reel'n</label>
                </div>
                <div className="link_container flex flex-col ml-24">
                    <label className='poppins-bold text-green-500 mx-1 my-2'>Legal</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Terms of Service</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Privacy policy</label>
                    <label className=' text-slate-400 m-1 poppins-regular hover:text-slate-100 duration-500'>Cookies</label>
                </div>
            </div>
        </div>
        <hr className='footer_hr w-full bg-green-400 text-green-400 opacity-50 h-[2px] border-none mt-20'/>
        <div className='footer_copyright flex justify-between items-center mt-10'>
            <label className='poppins-regular text-slate-400'>© 2024 Tuborg. All rights reserved.</label>
            <div className='socials flex ml-10'>
                <label className='poppins-regular hover:text-slate-100 duration-500'><AiOutlineTwitter className=' size-6 mx-3'  /></label>
                <label className='poppins-regular hover:text-slate-100 duration-500'><AiFillFacebook className=' size-6 mx-3'  /></label>
                <label className='poppins-regular hover:text-slate-100 duration-500'><AiFillInstagram className=' size-6 mx-3'  /></label>
            </div>
        </div>
    </div>
  )
}

export default Footer