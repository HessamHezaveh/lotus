import { footerData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import {
  Facebook,
  Instagram,
  // MapIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const iconMapping: Record<string, React.ElementType> = {
  FacebookIcon: Facebook,
  WhatsappIcon: FaWhatsapp,
  InstagramIcon: Instagram,
};
const Footer = () => {
  return (
    <div
      id="contact-us"
      className="w-full h-full  md:h-[400px] bg-gradient-to-tr from-mh-mainBlue to-mh-lightBlue flex flex-col gap-4 justify-center"
    >

      <div className="container py-7 mx-auto flex md:flex-row flex-col items-center md:gap-6 gap-0 ">
        <motion.div
          initial={{opacity:0, x:-100}} 
          whileInView={{opacity:1, x:0}}
          viewport={{ once: true }}
          transition={{
              type:"spring",
              stiffness:30,
              damping:10,
              delay:0.4
          }} 
        className="flex flex-1 flex-col items-center justify-center">
          <img
            className="invert w-24"
            src={footerData.image.src}
            alt={footerData.image.alt}
          />
          <h2 className="text-center text-mh-gold text-xl md:text-3xl font-bold md:font-black">
            {footerData.title}
          </h2>
          <p className="text-white font-light py-6 text-xs">
            {footerData.description}
          </p>
        </motion.div>
        
        <div className="flex flex-2 flex-col items-start justify-center md:flex-row">
        <motion.div 
            initial={{opacity:0, y:100}} 
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{
                type:"spring",
                stiffness:30,
                damping:10,
                delay:0.4
            }} 
        className="text-white flex flex-1 flex-col items-center md:items-start justify-center  py-4 gap-4">
          <h3 className="text-white text-xl md:text-2xl  font-bold ">
            {footerData.contact.title}
          </h3>


          <div className="w-full flex flex-col items-center  gap-4">

            <a
              className="flex flex-col md:flex-row items-center w-full justify-start  gap-1 md:gap-8 group"
              href={`tel:${footerData.contact.phone}`}
            >
              <PhoneIcon className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out w-7 h-7" />
              {footerData.contact.phone}
            </a>
            <a
              className="flex flex-col md:flex-row items-center w-full justify-start gap-1 md:gap-8 group"
              href={`mailto:${footerData.contact.email}`}
            >
              <MailIcon className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out w-8 h-7" />
              {footerData.contact.email}
            </a>
            <a
              className="flex px-6 md:px-0 flex-col md:flex-row items-center w-full justify-start   gap-1 md:gap-8 group  text-center sm:text-start"
              href="/"
            >
              {/* <MapIcon className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out w-7 h-7" /> */}
              {footerData.contact.address}
            </a>
          </div>
        </motion.div>
        <motion.div
             
                initial={{opacity:0, x:100}} 
                whileInView={{opacity:1, x:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:30,
                    damping:10,
                    delay:0.4
                }} 
        
        className=" text-white  w-full flex flex-1 flex-col items-center justify-center py-4 gap-8">
          <h3 className=" text-xl md:text-2xl w-full text-center font-bold ">
            {footerData.socials.title}
          </h3>
          <div className=" text-white flex   items-center gap-10">
            {footerData.socials.socialLinks.map((item) => {
              const IconComponent =
                iconMapping[item.icon as keyof typeof iconMapping];
              return (
                <Link
                  className="flex items-center w-full md:justify-center  gap-2 group"
                  key={item.id}
                  href={item.href}
                >
                  <IconComponent className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out w-7 h-7" />
                  
                </Link>
              );
            })}
          </div>
        </motion.div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
