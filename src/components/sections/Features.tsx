import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuresData } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <div className="md:absolute md:-translate-y-5/6 md:left-1/2 md:-translate-x-1/2 flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4 md:gap-24 lg:gap-32 px-4">
        {featuresData.features.map((item) => {
          return (
            <Card
              key={item.id}
              className="border-mh-darkBlue bg-white border-none even:rounded-bl-none even:rounded-tr-none even:rounded-br-2xl even:rounded-tl-2xl odd:rounded-bl-2xl odd:rounded-tr-2xl odd:rounded-br-none odd:rounded-tl-none shadow-mh-lightBlue cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out w-full px-16"
            >
              <CardHeader>
                <CardTitle className="flex flex-col items-center">
                  <h3 className="text-2xl font-thin">{item.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-mh-darkBlue font-light text-xl text-center">
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

export default Features;
