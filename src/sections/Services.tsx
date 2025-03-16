import { servicesData } from "@/utils/data";
import Image from "next/image";

import React from "react";

const Services = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h2>{servicesData.title}</h2>
      <p>{servicesData.description}</p>
      <div className="flex flex-col sm:flex-row gap-8">
        {servicesData.services.map((item) => {
          return (
            <div key={item.id}>
              <Image
                src={item.image.src}
                alt={item.image.alt}
                width={100}
                height={100}
              />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
