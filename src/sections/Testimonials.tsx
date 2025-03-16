import { testimonialsData } from "@/utils/data";
import Image from "next/image";

import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
      {testimonialsData.map((item) => {
        return (
          <div key={item.id} className="flex flex-col ">
            <Image
              src={item.image.src}
              alt={item.image.alt}
              width={100}
              height={100}
            />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
