
import React from "react";
import TitleCard from "../TitleCard";
import Map from "./Map";
import LogoTicker from "../LogoTicker";
import Numbers from "./Numbers";



const WeAre = () => {
  return (
    <div id="weare" className="w-full container mx-auto flex flex-col gap-4 px-5">
        <TitleCard 
          title="Referanslarımızdan Bazıları"
          
          // description={aboutUsData.description} 
          // fullText='Mutlu Projelerimiz '
 
          className="justify-center items-center"
          textClassName="text-center"
          />

      
      <div className=" ">
        <LogoTicker />
      </div>
      <div>
      <div className="max-w-screen px-0 sm:px-10">
        <Map/>
      </div>
      </div>
      <div className="pt-10 md:pt-20 pb-5 ">
          <Numbers/>
      </div>
      

    </div>
  );
};

export default WeAre;
