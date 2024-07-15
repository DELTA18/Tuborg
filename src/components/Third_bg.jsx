import React, {useRef} from 'react'
import {motion, useInView, useScroll, useTransform} from 'framer-motion'

import bubble from '../assets/bubble.png'

const Third_bg = () => {
    const target = useRef(null)
    const isInView = useInView(target)
    const { scrollYProgress } = useScroll({
        target: target,
        offset: ["start end", "end start"]
      });
      const translateY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
      const translate2 = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
      const translate3 = useTransform(scrollYProgress, [0, 1], ['-200%', '300%']);
      const translate5 = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
      const translate6 = useTransform(scrollYProgress, [0, 1], ['400%', '100%']);
      const translate7 = useTransform(scrollYProgress, [0, 1], ['100%', '550%']);
      const translate8 = useTransform(scrollYProgress, [0, 1], ['400%', '-100%']);

  return (
    <motion.div ref={target} className='spline_scene'>
        <motion.div className=' bubble' style={{y: translateY}}/>
        <motion.div className=' bubble absolute left-16' style={{y: translate2}}/>
        <motion.div className=' bg-slate-900 bubble absolute right-10' style={{y: translate3}}/>
        <motion.div className=' bubble absolute size-8 right-64' style={{y: translate5}}/>
        <motion.div className=' bubble absolute right-[60%]' style={{y: translate5}}/>
        <motion.div className=' bubble absolute right-36' style={{y: translate6}}/>
        <motion.div className=' bubble absolute left-64' style={{y: translate7}}/>
        <motion.div className=' bubble absolute right-[56%]' style={{y: translate8}}/>
    </motion.div>
  )
}

export default Third_bg