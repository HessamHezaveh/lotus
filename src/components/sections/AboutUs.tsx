import { aboutUsData } from "@/utils/data";
import Image from "next/image";
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
      <div className="px-4 md:px-0 text-mh-darkBlue text-start text-sm md:text-lg font-thin md:font-light">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem tempora eos
        officiis ipsum excepturi rerum ab, quam, perspiciatis animi, quae natus!
        Ex delectus assumenda saepe atque omnis modi corporis aut? Alias nemo
        natus commodi excepturi explicabo tempore adipisci cumque doloribus,
        pariatur saepe. Ut, sit. Iste mollitia sint ad at quas necessitatibus
        quibusdam nihil odit qui tempore. Saepe cum dolorem molestiae?
      </div>
    </div>
  );
};

export default AboutUs;
