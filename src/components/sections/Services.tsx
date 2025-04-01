import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/utils/data";
import { Sprout, Trash, Wrench, Settings, BugOff, Waves } from "lucide-react"; // Import Lucide icons

const iconMapping: Record<string, React.ElementType> = {
  SproutIcon: Sprout,
  TrashIcon: Trash,
  WrenchIcon: Wrench,
  SettingsIcon: Settings,
  BugOffIcon: BugOff,
  WavesIcon: Waves,
};

const Services = () => {
  return (
    <div className="w-full container mx-auto flex flex-col gap-8 ">
      <div className="flex flex-col py-10 px-4 sm:py-16 items-center text-zinc-600 gap-4">
        <h2 className="text-center text-mh-gold text-4xl md:text-5xl font-bold md:font-black">
          {servicesData.title}
        </h2>
        <p className="text-center text-lg md:text-xl font-light md:font-normal text-zinc-600 ">
          {servicesData.description}
        </p>
      </div>
      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0 w-full">
        {servicesData.services.map((item) => {
          const IconComponent =
            iconMapping[item.icon as keyof typeof iconMapping];

          return (
            <Card
              key={item.id}
              className={`border-none md:py-12  px-6 text-white bg-gradient-to-bl from-mh-lightBlue to-mh-mainBlue  shadow hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out 
                ${
                  (item.id - 1) % 4 < 2
                    ? "rounded-bl-none rounded-tr-none rounded-br-[45px] rounded-tl-[45px]"
                    : "rounded-bl-[45px] rounded-tr-[45px] rounded-br-none rounded-tl-none"
                } 
              `}
            >
              <CardHeader className="flex justify-start lg:justify-center lg:flex-col gap-4 items-center">
                <IconComponent className="w-12 h-12 text-mh-gold" />
                <CardTitle>
                  <h3 className="text-2xl ">{item.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="">
                <p className="font-light text-xl text-start lg:text-center">
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
