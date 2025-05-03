import { aboutUsData } from '@/utils/data'
import { motion } from 'framer-motion'
import React from 'react'
import TitleCard from '../TitleCard'

const AboutUs2 = () => {
  return (
    <div id='about-us' className="container mx-auto px-10 sm:px-0 flex lg:flex-row  flex-col-reverse gap-3 pt-4 sm:gap-8  ">
        <div className="flex-1">
          <TitleCard 
          title={aboutUsData.title} 
          // description={aboutUsData.description} 
          fullText={aboutUsData.text1} 
          fullText2={aboutUsData.text2} 
          className="justify-start items-start"
          textClassName="text-left"
          />
        </div>
        <div className="flex-1">
          <motion.img
                   initial={{opacity:0, y:100}} 
                   whileInView={{opacity:1, y:0}}
                   viewport={{ once: true }}
                   transition={{
                       type:"spring",
                       stiffness:50,
                       damping:10,
                       delay:0.1
                   }}
           src={aboutUsData.image.src.length > 1 ? aboutUsData.image.src : "/images.jpeg"} 
          alt={aboutUsData.image.alt} 
          className='shadow-lg object-cover w-full rounded-bl-none rounded-tr-none rounded-br-[45px] rounded-tl-[45px]'
          /> 
        </div>
      </div>
  )
}

export default AboutUs2