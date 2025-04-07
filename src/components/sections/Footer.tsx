import { footerData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  // MapIcon,
  PhoneIcon,
  MailIcon,
} from "lucide-react";

const iconMapping: Record<string, React.ElementType> = {
  FacebookIcon: Facebook,
  TwitterIcon: Twitter,
  InstagramIcon: Instagram,
};
const Footer = () => {
  return (
    <div
      id="contact-us"
      className="w-full h-full  md:h-[300px] bg-gradient-to-tr from-mh-mainBlue to-mh-lightBlue flex flex-col gap-4 "
    >

      <div className="container py-7 mx-auto flex md:flex-row flex-col items-center md:gap-16 gap-0 ">
        <div className="flex flex-1 flex-col items-center justify-center">
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
        </div>
        
        <div className="flex flex-2 flex-col items-start justify-center md:flex-row">
        <div className="text-white flex flex-1 flex-col items-center md:items-start justify-center  py-4 gap-4">
          <h3 className="text-white text-xl md:text-2xl  font-bold ">
            {footerData.contact.title}
          </h3>


          <div className="w-full flex flex-col items-center  gap-4">
            <a
              className="flex flex-col md:flex-row items-center w-full justify-start   gap-1 md:gap-8 group  text-center sm:text-start"
              href="/"
            >
              {/* <MapIcon className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out w-7 h-7" /> */}
              {footerData.contact.address}
            </a>
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
          </div>
        </div>
        <div className=" text-white  w-full flex flex-1 flex-col items-center justify-center py-4 gap-8">
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
                  <IconComponent className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out" />
                  
                </Link>
              );
            })}
          </div>
        </div>
        </div>
      </div>
      <div className="flex bg-mh-mainBlue justify-center items-center text-white py-3">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <a
            className="hover:text-mh-gold transition-all duration-300 ease-in-out"
            href="/"
          >
            {footerData.copyright.text}
          </a>
          . All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
