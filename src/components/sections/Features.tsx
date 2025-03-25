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
    <div className="md:-translate-y-[80%] mx-auto w-full container flex flex-col">
      <div className="flex flex-col sm:flex-row gap-4 md:gap-10 px-4 md:px-0">
        {featuresData.features.map((item) => {
          const IconComponent =
            iconMapping[item.icon as keyof typeof iconMapping];

          return (
            <Card
              key={item.id}
              className="bg-zinc-200 border-none rounded-bl-none rounded-tr-none rounded-br-[45px] rounded-tl-[45px] shadow-xl hover:shadow-mh-lightBlue/50 transition-all duration-300 ease-in-out w-full px-8 text-mh-darkBlue group"
            >
              <CardHeader className="flex flex-col items-center">
                <IconComponent className="w-10 h-10 group-hover:text-mh-gold duration-300 ease-in-out transition-all" />
                {/* Render icon */}
                <CardTitle className="text-center text-nowrap">
                  <h3 className="text-2xl font-thin">{item.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="w-full ">
                <p className=" font-light text-xl text-start text-pretty">
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
