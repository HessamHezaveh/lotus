import { aboutUsData } from "@/utils/data";
import React from "react";
import TitleCard from "../TitleCard";
import Map from "./Map";
import LogoTicker from "../LogoTicker";

const AboutUs = () => {
  return (
    <div id="about-us" className="w-full container mx-auto flex flex-col gap-4 px-10">


      <TitleCard title={aboutUsData.title} description={aboutUsData.description} fullText={aboutUsData.text} />
      <LogoTicker />
      <Map  />
      
    </div>
  );
};

export default AboutUs;
