import { formData } from "@/utils/data";
import { MultiStepForm1 } from "../forms/MultiStepForm";

const FormsSection = () => {
  return (
    <div className="relative bg-gradient-to-t from-mh-lightBlue to-mh-darkBlue">

      <div
        id="price-form"
        className="w-full z-0 md:container mx-auto flex flex-col gap-4 md:gap-8 py-8 md:py-16"
      >
        <div className="flex flex-col items-center text-white gap-4 ">
          <h2 className="text-center text-mh-gold text-2xl md:text-5xl  font-bold md:font-black">
            {formData.title}
          </h2>
          <p className="text-center text-sm md:text-lg font-light md:font-medium">
            {formData.description}
          </p>
        </div>
        <div className="container mx-auto">
          <div className=" flex items-center justify-center z-10">
            <MultiStepForm1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormsSection;
