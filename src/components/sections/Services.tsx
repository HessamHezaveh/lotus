import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { servicesData } from "@/utils/data";
import { Sprout, Trash, Wrench, Settings, BugOff, Waves } from "lucide-react"; // Import Lucide icons
import TitleCard from "../TitleCard";
import { motion } from "framer-motion";

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
    <div className="w-full container mx-auto flex flex-col gap-8  py-10">

      <TitleCard title={servicesData.title} fullText={servicesData.description} />


      <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4 md:px-0 w-full">
        {servicesData.services.map((item, i) => {
          const IconComponent =
            iconMapping[item.icon as keyof typeof iconMapping];

          return (
            <motion.div 
            className="h-full w-full "  
            key={i}
            initial={{opacity:0, y:100}} 
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{
                type:"spring",
                stiffness:30,
                damping:10,
                delay:0.2+(i/10)
            }} 
            >


            <Card
             
              className={`border-none h-full w-full md:py-7 md:px-7  py-6 px-6 text-white bg-gradient-to-bl from-mh-lightBlue to-mh-mainBlue  shadow hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out gap-4 sm:gap-2
                ${
                  (item.id - 1) % 4 < 2
                    ? "rounded-bl-none rounded-tr-none rounded-br-[45px] rounded-tl-[45px]"
                    : "rounded-bl-[45px] rounded-tr-[45px] rounded-br-none rounded-tl-none"
                } 
              `}
            >
              <CardHeader className="flex justify-center sm:flex-col gap-2 items-center ">
                <IconComponent className="lg:w-10 lg:h-10 h-8 w-8 text-mh-gold" />
                <CardTitle>
                  <h3 className="text-xl sm:text-2xl ">{item.title}</h3>
                </CardTitle>
              </CardHeader>
              <CardContent className="lg:px-0">
                <p className="font-light text-normal  lg:text-lg text-center  ">
                  {item.description}
                </p>
              </CardContent>
            </Card>
            </motion.div>
          );
        })}
      </div>
      
      
    </div>
  );
};

export default Services;
