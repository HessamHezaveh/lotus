import { Button } from "@/components/ui/button";
import { heroData } from "@/utils/data";
import { MoveRightIcon } from "lucide-react";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-tr md:items-start items-center justify-center from-mh-mainBlue to-mh-lightBlue h-screen  md:h-[700px]">
      <div className=" container mx-auto px-4 md:px-0 flex flex-col gap-8">
        <div className="flex flex-col items-center md:items-start justify-center gap-4">
          <p className="text-white text-xl font-extrabold">{heroData.title}</p>
          <h1 className="text-5xl md:text-7xl text-center font-extrabold text-mh-gold">
            {heroData.mainTitle}
          </h1>
          <p className="text-white text-center md:text-start text-xl md:text-2xl font-light max-w-xl">
            {heroData.description}
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
          <a href="#price-form">
            <Button
              
              size="lg"
              className="cursor-pointer md:p-6 md:px-10 bg-transparent border-mh-gold border-2 text-mh-gold hover:bg-mh-gold hover:text-mh-mainBlue text-xl font-bold"
            >
              {heroData.buttonText}
            </Button>
          </a>
          <span className="flex items-center text-mh-gold justify-between gap-2 p-2 md:p-4  hover:translate-x-2 transition-all duration-300 ease-in-out cursor-pointer text-sm md:text-lg font-light">
            <p className="font-semibold">Bizi Takip edin</p>
            <MoveRightIcon className=" flex self-end" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
