import { Button } from "@/components/ui/button";
import { heroData } from "@/utils/data";
import { MoveRightIcon } from "lucide-react";
import React from "react";
import {motion} from 'framer-motion'


const Hero = () => {
  return (
    <div className="flex flex-col gap-4  relative md:items-start items-center justify-center  h-[600px] md:h-[700px]">

      <video src="/ternanew.mp4" autoPlay loop muted 
      className="w-full h-full object-cover absolute top-0 left-0 -z-10 filter saturate-[0.5] brightness-[1.1]"></video>
            {/* Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-r from-mh-mainBlue to-mh-mainBlue/30 -z-5"></div>
      
      {/* <div className="absolute inset-0 bg-gradient-to-t from-mh-darkBlue to-mh-lightBlue -z-5"></div> */}

      <div className=" container mx-auto px-4 md:px-0 flex flex-col gap-8  h-full justify-center">
        <motion.div 
          initial={{opacity:0, y:-100}} 
          animate={{opacity:1, y:0}} 
          transition={{
              type:"spring",
              stiffness:70,
              damping:10,
              delay:0.4
          }}
        className="flex flex-col items-center XXXmd:items-start justify-center gap-4">
          {/* <p className="text-white text-center md:text-xl text-sm sm:text-lg md:font-extrabold font-bold">{heroData.title}</p> */}
          <h1 className=" text-4xl  md:text-6xl text-center font-extrabold text-mh-gold">
            {/* {heroData.mainTitle} */}
            <span>Lotus</span> 
            
            <span className=""> Yönetim & Danışmanlık </span>
          </h1>
          <p className="text-white text-center XXXmd:text-start text-lg sm:text-2xl font-light max-w-xl">
          <q>{heroData.description}</q>
          </p>
        </motion.div>

        <motion.div 
          initial={{opacity:0, y:-100}} 
          animate={{opacity:1, y:0}} 
          transition={{
              type:"spring",
              stiffness:70,
              damping:10,
              delay:0.9
          }}
        className="flex flex-col md:flex-row items-center justify-center XXXmd:justify-start">
          <a href="#price-form">
            <Button
              size="lg"
              className="cursor-pointer md:p-6 md:px-10 bg-transparent border-mh-gold border-2 text-mh-gold hover:bg-mh-gold hover:text-mh-mainBlue text-md sm:text-xl  font-bold"
            >
              {heroData.buttonText}
            </Button>
          </a>
          <span className="flex items-center text-mh-gold justify-between gap-2 p-2 md:p-4  hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer text-sm md:text-lg font-light">
            <p className="sm:font-semibold font-normal ">Bizi Takip edin</p>
            <MoveRightIcon className=" flex self-end" />
          </span>
        </motion.div>
        
      </div>
      
    </div>
  );
};

export default Hero;
