import { featuresData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8">
      <h2>Features</h2>
      <div className="flex flex-col sm:flex-row gap-8">
        {featuresData.map((item) => {
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

export default Features;
