import { aboutUsData } from "@/utils/data";
import React from "react";
import TitleCard from "../TitleCard";
import Map from "./Map";
import LogoTicker from "../LogoTicker";
import Numbers from "./Numbers";
import Image from "next/image";


const WeAre = () => {
  return (
    <div id="about-us" className="w-full container mx-auto flex flex-col gap-4 px-10">
                <TitleCard 
          title={aboutUsData.title} 
          // description={aboutUsData.description} 
          fullText='hjdbjjksjd kjsd '
 
          className="justify-center items-center"
          textClassName="text-center"
          />

      
      <div className=" ">
        <LogoTicker />
      </div>
      <Map  />
      <div className="pt-20 pb-5 ">
          <Numbers/>
      </div>
      

    </div>
  );
};

export default WeAre;
