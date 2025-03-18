import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/utils/data";

import React from "react";

const Services = () => {
  return (
    <div className="w-full container mx-auto flex flex-col gap-8">
      <div className="flex flex-col items-center text-mh-darkBlue gap-4">
        <h2 className="text-center text-mh-gold text-2xl md:text-5xl font-bold md:font-black">
          {servicesData.title}
        </h2>
        <p className="text-center text-sm md:text-lg font-light md:font-medium">
          {servicesData.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 px-4 md:px-0 w-full">
        {servicesData.services.map((item) => {
          return (
            <Card
              key={item.id}
              className={`border-none md:py-12 text-white bg-mh-mainBlue shadow-mh-lightBlue cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out 
                ${
                  (item.id - 1) % 4 < 2
                    ? "rounded-bl-none rounded-tr-none rounded-br-[45px] rounded-tl-[45px] "
                    : "rounded-bl-[45px] rounded-tr-[45px] rounded-br-none rounded-tl-none"
                } // Style B
              `}
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <h3 className="text-2xl font-thin">{item.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-light text-xl text-center">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
