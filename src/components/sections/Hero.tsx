import { Button } from "@/components/ui/button";
import { heroData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-tr md:items-start items-center justify-center from-mh-darkBlue to-mh-lightBlue h-[70vh] md:h-[90vh]">
      <div className=" container mx-auto px-4 md:px-0">
        <div className="flex flex-col items-center md:items-start justify-center">
          <p className="text-white text-xs md:text-xl font-light">
            {heroData.title}
          </p>
          <h1 className="text-3xl md:text-7xl font-extrabold text-mh-gold">
            {heroData.mainTitle}
          </h1>
          <p className="text-white text-xl md:text-2xl font-thin">
            {heroData.description}
          </p>
        </div>
        <Image
          src={heroData.image.src}
          alt={heroData.image.alt}
          objectFit="cover"
          width={100}
          height={100}
        />
        <div className="flex items-center justify-center md:justify-start">
          <Button
            variant={"outline"}
            size="lg"
            className="cursor-pointer md:p-8 md:px-14 text-mh-darkBlue hover:text-mh-darkBlue"
          >
            {heroData.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
