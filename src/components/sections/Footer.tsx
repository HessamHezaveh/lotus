import { footerData } from "@/utils/data";
import Link from "next/link";
import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  MapIcon,
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
      className="w-full h-full md:h-[300px] bg-gradient-to-tr from-mh-mainBlue to-mh-lightBlue flex flex-col gap-4 pb-4"
    >
      <div className="container py-7 mx-auto grid grid-cols-1 md:grid-cols-3 place-items-center gap-8 ">
        <div className="flex flex-col items-center justify-center">
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

        <div className="text-white flex flex-col  justify-center py-4 gap-4">
          <h3 className="text-mh-gold text-xl md:text-3xl  font-bold md:font-black">
            {footerData.contact.title}
          </h3>
          <div className="w-full flex flex-col items-center gap-4">
            <a
              className="flex items-center w-full justify-between gap-2 group"
              href="/"
            >
              <MapIcon className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out" />
              {footerData.contact.address}
            </a>
            <a
              className="flex items-center w-full justify-between gap-2 group"
              href={`tel:${footerData.contact.phone}`}
            >
              <PhoneIcon className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out" />
              {footerData.contact.phone}
            </a>
            <a
              className="flex items-center w-full justify-between gap-2 group"
              href={`mailto:${footerData.contact.email}`}
            >
              <MailIcon className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out" />
              {footerData.contact.email}
            </a>
          </div>
        </div>
        <div className=" text-white flex flex-col items-center justify-center py-4 gap-4">
          <h3 className="text-mh-gold text-xl md:text-3xl  font-bold md:font-black">
            {footerData.socials.title}
          </h3>
          <div className="w-full text-white flex md:flex-col items-center gap-4">
            {footerData.socials.socialLinks.map((item) => {
              const IconComponent =
                iconMapping[item.icon as keyof typeof iconMapping];
              return (
                <Link
                  className="flex items-center w-full justify-between gap-2 group"
                  key={item.id}
                  href={item.href}
                >
                  <IconComponent className=" group-hover:text-mh-gold duration-300 transition-all ease-in-out" />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex bg-mh-darkBlue justify-center items-center text-white py-8">
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
