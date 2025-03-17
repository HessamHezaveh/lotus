import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/utils/data";

import React from "react";

const Services = () => {
  return (
    <div className="w-full md:container mx-auto flex flex-col gap-8">
      <div className="flex flex-col items-center text-mh-darkBlue gap-4">
        <h2 className="text-center text-mh-gold text-lg md:text-5xl  font-bold md:font-black">
          {servicesData.title}
        </h2>
        <p className="text-center text-sm md:text-lg font-light md:font-medium">
          {servicesData.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-20 lg:gap-24 px-4 w-full">
        {servicesData.services.map((item) => {
          return (
            <Card
              key={item.id}
              className="border-none text-white bg-mh-darkBlue even:rounded-bl-none even:rounded-tr-none even:rounded-br-2xl even:rounded-tl-2xl odd:rounded-bl-2xl odd:rounded-tr-2xl odd:rounded-br-none odd:rounded-tl-none shadow-mh-lightBlue cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out w-full"
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
