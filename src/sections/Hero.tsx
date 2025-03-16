import { Button } from "@/components/ui/button";
import { heroData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="">{heroData.title}</h1>
      <p>{heroData.description}</p>
      <Image
        src={heroData.image.src}
        alt={heroData.image.alt}
        objectFit="cover"
        width={100}
        height={100}
      />
      <Button variant={"outline"} className="cursor-pointer">
        {heroData.buttonText}
      </Button>
    </div>
  );
};

export default Hero;
