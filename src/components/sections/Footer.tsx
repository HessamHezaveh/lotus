import { footerData } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      id="contact-us"
      className="w-full h-[300px] bg-gradient-to-tr from-mh-mainBlue to-mh-lightBlue flex flex-col gap-8 pb-8"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 place-items-stretch ">
        <div className="flex flex-col items-center md:items-start text-white gap-4">
          <h2 className="text-center text-mh-gold text-2xl md:text-5xl  font-bold md:font-black">
            LOGO
          </h2>
          <p className="text-center text-sm md:text-lg font-light md:font-medium">
            {footerData.description}
          </p>
        </div>
        <div className="text-white place-self-center place-items-center">
          <h3 className="text-mh-gold text-2xl md:text-5xl  font-bold md:font-black">
            {footerData.title}
          </h3>
          <p>{footerData.address}</p>
          <p>{footerData.phone}</p>
          <p>{footerData.email}</p>
        </div>
        <div className=" w-full text-white flex flex-col items-center">
          {footerData.socialLinks.map((item) => {
            return (
              <Link key={item.id} href={item.href}>
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
