import { aboutUsData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2>{aboutUsData.title}</h2>
      <p>{aboutUsData.description}</p>
      <Image
        src={aboutUsData.image.src}
        alt={aboutUsData.image.alt}
        width={100}
        height={100}
      />
    </div>
  );
};

export default AboutUs;
