import React from "react";

import { motion } from "framer-motion";

interface TitleCardProps {
  title: string;
  description?: string;
  fullText?: string;
  fullText2?: string;
  className?: string;
  titleClassName?: string; // Optional custom class for the title
  textClassName?: string; // Optional custom class for description and fullText
}

const TitleCard: React.FC<TitleCardProps> = ({
  title,
  description,
  fullText,
  fullText2,
  className = "",
  titleClassName = "",
  textClassName = "",
}) => {
  return (
    <div
      className={`flex flex-col py-5 items-center gap-2 md:gap-6 ${className}`}
    >
      {/* Title */}
      <motion.h2
          initial={{opacity:0, y:100}} 
          whileInView={{opacity:1, y:0}}
          viewport={{ once: true }}
          transition={{
              type:"spring",
              stiffness:50,
              damping:10,
              delay:0.2
          }}
        className={`text-center text-mh-gold text-2xl md:text-4xl font-black ${titleClassName}`}
      >
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p
        initial={{opacity:0, y:100}} 
        whileInView={{opacity:1, y:0}}
        viewport={{ once: true }}
        transition={{
            type:"spring",
            stiffness:30,
            damping:10,
            delay:0.3
        }}
          className={`text-center text-base sm:text-lg font-normal text-zinc-800 md:font-medium ${textClassName}`}
        >
          {description}
        </motion.p>
      )}

      {/* Full Text */}
      {fullText && (
        <motion.p
        initial={{opacity:0, y:100}} 
        whileInView={{opacity:1, y:0}}
        viewport={{ once: true }}
        transition={{
            type:"spring",
            stiffness:40,
            damping:10,
            delay:.4
        }}
          className={`text-center text-base sm:text-lg  font-normal text-zinc-800 ${textClassName}`}
        >
          {fullText}
        </motion.p>
      )}

      {fullText2 && (
        <motion.p
        initial={{opacity:0, y:100}} 
        whileInView={{opacity:1, y:0}}
        viewport={{ once: true }}
        transition={{
            type:"spring",
            stiffness:40,
            damping:10,
            delay:.4
        }}
          className={`text-center text-base sm:text-lg md:-mt-[15px] mt-0 font-normal text-zinc-800 ${textClassName}`}
        >
          {fullText2}
        </motion.p>
      )}
    </div>
  );
};

export default TitleCard;