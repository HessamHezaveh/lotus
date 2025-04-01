import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { featuresData } from "@/utils/data";
import React from "react";
import { SearchCheck, Zap, Handshake } from "lucide-react"; // Import actual icon components

const iconMapping: Record<string, React.ElementType> = {
  SearchCheckIcon: SearchCheck,
  HandshakeIcon: Handshake,
  zapIcon: Zap,
};

const Features = () => {
  return (
    <div className="sm:-translate-y-[80%] lg:-translate-y-[80%] -mb-[20px] sm:-mb-[160px] md:-mb-[100px] mx-auto w-full container flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4 md:gap-10 px-4 md:px-0">
        {featuresData.features.map((item) => {
          const IconComponent =
            iconMapping[item.icon as keyof typeof iconMapping];

          return (
            <Card
              key={item.id}
              className="bg-zinc-200 border-none rounded-bl-none rounded-tr-none rounded-br-[45px] rounded-tl-[45px] shadow hover:shadow-xl transition-all duration-300 ease-in-out w-full py-7 text-mh-darkBlue group flex flex-col justify-center items-center gap-3"
            >
              <CardHeader className="flex flex-col  items-center">
                <IconComponent className="w-8 h-8 text-zinc-500 group-hover:text-mh-gold duration-300 ease-in-out transition-all" />
                {/* Render icon */}
                <CardTitle className="text-center text-nowrap">
                  <h3 className="text-xl text-zinc-600 font-bold ">{item.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full ">
                <p className=" font-normal text-zinc-600 text-sm lg:text-lg text-center text-pretty">
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
