import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuresData } from "@/utils/data";
import React from "react";

const Features = () => {
  return (
    <div className=" md:-translate-y-[80%] mx-auto w-full container flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4 md:gap-10 px-4 md:px-0">
        {featuresData.features.map((item) => {
          return (
            <Card
              key={item.id}
              className=" bg-zinc-200 border-none rounded-bl-none rounded-tr-none rounded-br-[45px] rounded-tl-[45px] shadow-xl  hover:shadow-mh-lightBlue/50 transition-all duration-300 ease-in-out w-full px-16"
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
