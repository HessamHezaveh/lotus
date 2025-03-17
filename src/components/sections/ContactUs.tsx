import { contactUsData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h2>{contactUsData.title}</h2>
      <p>{contactUsData.description}</p>
      <Image
        src={contactUsData.image.src}
        alt={contactUsData.image.alt}
        width={100}
        height={100}
      />
    </div>
  );
};

export default ContactUs;
