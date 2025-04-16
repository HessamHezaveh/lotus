import { aboutUsData } from "@/utils/data";
import React from "react";
import TitleCard from "../TitleCard";
import Map from "./Map";
import LogoTicker from "../LogoTicker";
import Numbers from "./Numbers";


const AboutUs = () => {
  return (
    <div id="about-us" className="w-full container mx-auto flex flex-col gap-4 px-10">


      <div className="flex lg:flex-row flex-col gap-4 ">
        <div className="flex-1">
          <TitleCard 
          title={aboutUsData.title} 
          // description={aboutUsData.description} 
          fullText={aboutUsData.text1} 
          fullText2={aboutUsData.text2} 
          className="justify-start items-start"
          textClassName="text-left"
          />
        </div>
        <div className="flex-1">
          {/* <Image src={aboutUsData.image.src} alt={aboutUsData.image.alt} width={500} height={500} /> */}
        </div>
      </div>
      <div className="py-5">

          <Numbers/>
      </div>
      
      <Map  />
      <div className="pt-10">

      <LogoTicker />
      </div>
    </div>
  );
};

export default AboutUs;
