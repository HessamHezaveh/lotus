"use client"

import { motion } from "framer-motion"
import { LogoImages } from "@/utils/data"


const LogoTicker = () => {
  return (
    <motion.div
    initial={{opacity:0}} 
    whileInView={{opacity:1}}
    viewport={{ once: true }}
    transition={{
        type:"spring",
        stiffness:30,
        damping:10,
        delay:0.4
    }} 
    
    className=" -z-30 max-w-screen  flex flex-col gap-10 items-center justify-center ">
        
        {/* <TitleCard title='MUTLU MÜŞTERİLER'  /> */}
        <div className="container  flex items-center">
            <div className="flex overflow-hidden 
            
            [mask-image:linear-gradient(to_right,transparent,black,transparent)]
            ">
            <motion.div 
                className="flex gap-14 flex-none pr-14"
                animate={{
                    translateX: "-50%"
                }}
                transition={{
                    duration: 60,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "linear",
                }}
                >
                {LogoImages.map((logo, i)=>(
                    <h2 className="text-2xl sm:text-3xl pb-6 font-extrabold text-mh-mainBlue" key={i}>
                    {logo.alt}
                    </h2>
                // <img
                //     key={i} 
                //     src={logo.logoSrc} 
                //     alt={logo.alt} 
                //     // width={200} 
                //     // height={200} 
                //     className="
                //         filter grayscale opacity-90
                //         w-40
                //         "
                //     />
                ))}
            </motion.div>
            </div>
        </div>
    </motion.div>
  )
}

export default LogoTicker