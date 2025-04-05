import { aboutUsData } from "@/utils/data";
import React from "react";

const AboutUs = () => {
  return (
    <div id="about-us" className="w-full container mx-auto flex flex-col gap-8">
      <div className="flex flex-col items-center text-mh-darkBlue gap-4">
        <h2 className="text-center text-mh-gold text-2xl md:text-5xl  font-bold md:font-black">
          {aboutUsData.title}
        </h2>
        <p className="text-center text-sm md:text-lg font-light md:font-medium">
          {aboutUsData.description}
        </p>
      </div>
      <div className="px-4 md:px-0 md:w-2/3 mx-auto text-mh-darkBlue text-start text-sm md:text-lg font-thin md:font-light">
        {aboutUsData.text}
      </div>
    </div>
  );
};

export default AboutUs;
