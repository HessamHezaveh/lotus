import { formData } from "@/utils/data";
import { MultiStepForm1 } from "../forms/MultiStepForm";
import {motion} from 'framer-motion'
const FormsSection = () => {
  return (
    <div className="relative bg-gradient-to-t from-mh-lightBlue to-mh-darkBlue">
      
      <div
        id="price-form"
        className="w-full z-0 md:container mx-auto flex flex-col gap-4 md:gap-8 py-8 md:py-16"
      >

        <motion.div 
                initial={{opacity:0, y:100}} 
                whileInView={{opacity:1, y:0}}
                viewport={{ once: true }}
                transition={{
                    type:"spring",
                    stiffness:30,
                    damping:10,
                    delay:0.4
                }} 
        className="flex flex-col items-center text-white gap-4 ">
          <h2 className="text-center text-mh-gold text-2xl md:text-5xl  font-bold md:font-black">
            {formData.title}
          </h2>
          <p className="text-center text-sm md:text-lg font-light md:font-medium">
            {formData.description}
          </p>
        </motion.div>

        <div className="container mx-auto">
          <motion.div 
            initial={{opacity:0, y:100}} 
            whileInView={{opacity:1, y:0}}
            viewport={{ once: true }}
            transition={{
                type:"spring",
                stiffness:30,
                damping:10,
                delay:0.6
            }} 
          className=" flex items-center justify-center z-10">
            <MultiStepForm1 />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FormsSection;
