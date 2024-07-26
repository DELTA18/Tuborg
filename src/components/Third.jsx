import React from 'react'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//images
import img1 from '../assets/tuborg_classic.png'
import tuborg_2 from '../assets/tuborg_2.jpg'
import tuborg_3 from '../assets/tuborg_3.png'
import tuborg_4 from '../assets/tuborg_4.jpg' 
import tuborg_5 from '../assets/tuborg_5.jpg'
import tuborg_6 from '../assets/tuborg_6.png'
import tuborg_7 from '../assets/tuborg_7.webp'

import {motion} from 'framer-motion'
import Third_bg from './Third_bg';

const Third = () => {
  const swiper = useSwiperSlide();
  return (
    <div className='third containerr'>
      {/* <div className='relative screen_width h-[110vh] overflow-hidden bg-orange-600'>
        <Spline className=' h-80 ' scene="https://prod.spline.design/IRpGvHSLwbkdswBs/scene.splinecode" />
      </div> */}
      {/* <Third_bg/> */}
      <div className="third_content">

      <div className='text-6xl text-center relative mt-28 ff font-bold poppins-bold'>Our Products</div>
      <Swiper
      modules={[EffectCoverflow, Navigation, Pagination, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        loop={true} 
        className='swiper_container'>
        <SwiperSlide>
            <img src={img1} className='swiper_img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tuborg_7} className='swiper_img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tuborg_2} className='swiper_img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tuborg_3} className='swiper_img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src={tuborg_4} className='swiper_img'/>
        </SwiperSlide>
        <div className="slider-controller top-10">
          <div className="slider-button-prev slider-arrow"></div>
        </div>
      </Swiper>
      </div>
    </div>

  )
}

export default Third