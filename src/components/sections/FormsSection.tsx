import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuestionForm from "@/components/forms/QuestionForm";
import { formData } from "@/utils/data";

const FormsSection = () => {
  return (
    <div className="bg-gradient-to-tr from-mh-lightBlue to-mh-mainBlue">
      <div
        id="price-form"
        className="w-full md:container mx-auto flex flex-col gap-4 md:gap-8 py-8 md:py-16"
      >
        <div className="flex flex-col items-center text-white gap-4">
          <h2 className="text-center text-mh-gold text-2xl md:text-5xl  font-bold md:font-black">
            {formData.title}
          </h2>
          <p className="text-center text-sm md:text-lg font-light md:font-medium">
            {formData.description}
          </p>
        </div>
        <div className="px-4 md:px-0 w-full">
          <QuestionForm />
        </div>
      </div>
    </div>
  );
};

export default FormsSection;
