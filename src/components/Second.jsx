import React, { useRef, useEffect } from 'react'
import {motion , useAnimation, useScroll, useTransform, useInView} from 'framer-motion'
// import '../styles/second.css'

const Second = () => {
  const targetRef = useRef(null)
  const isInView = useInView(targetRef)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end center"]
  })
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const scaleX = useTransform(scrollYProgress, [0, 1], [0.5, 12])
  const scaleY = useTransform(scrollYProgress, [0, 1], [0.5, 5])
  // const scale = useTransform(
  //   scrollYProgress,
  //   [0,1],
  //   [0.5,10]
  // )
  const translateY = useTransform(
    scrollYProgress,
    [0,1],
    ['0%','100%']
  )
  
  const mainControls = useAnimation()
  useEffect(() => {
    if(isInView){
      mainControls.start('visible')
    }else{
      mainControls.start('hidden')
    }
  })

  return (
    <>
    <div className=' second_wrapper flex justify-center overflow-hidden relative'>
    <motion.div ref={targetRef} style={{opacity, scaleX, scaleY, translateY}} className=' size-52 absolute bg-green-500 rounded-md'/>
    <div className='second_container h-screen flex items-center  flex-col screen_width z-10 my-52 '>
      <motion.div className='z-10 text-9xl ff font-extrabold' animate={mainControls} initial='hidden' variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
          }} transition={{delay:0.6, duration:0.4}}> Since 1873 </motion.div>
      <motion.p className='z-10 text-2xl text-center mx-52 my-20' animate={mainControls} initial='hidden' variants={{
            hidden:{opacity:0, y:75},
            visible:{opacity:1, y:0}
          }} transition={{delay:0.8, duration:0.4}}>Tuborg is a Danish brewing company known for its vibrant and youthful branding, making it a popular choice among beer enthusiasts who enjoy a light, refreshing lager. Our beer has a smooth, easy-drinking profile with a mild bitterness and a clean, crisp finish, making it perfect for social gatherings and celebrations. Our commitment to quality and taste has made it a favorite in numerous countries, with its distinct green bottle becoming a symbol of good times and lively moments.

</motion.p>
    </div>
    </div>
    </>
  )
}

export default Second