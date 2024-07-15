import React from 'react'
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//images
import img1 from '../assets/tuborg_classic.png'

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

      <div className='text-6xl text-center relative mt-28 ff font-bold'>Our Products</div>
      <Swiper
      modules={[EffectCoverflow, Navigation, Pagination]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        spaceBetween={30}
        slidesPerView={3}
        pagination={{
          clickable: true,
        }}
        coverflowEffect={{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }}
        loop={true} 
        className='swiper_container'>
        <SwiperSlide className='swiperslide'>
          {({ isActive }) => (
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" className={`swiper_img ${isActive ? 'active' : ' '}`} />
          )}
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} className='swiper_img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='swiper_img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='swiper_img'/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" className='swiper_img'/>
        </SwiperSlide>
        <div className="slider-controller">
          <div className="slider-button-prev slider-arrow"></div>
        </div>
      </Swiper>
      </div>
    </div>

  )
}

export default Third