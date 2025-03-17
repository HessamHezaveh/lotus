import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import QuestionForm from "@/components/forms/QuestionForm";
import { formData } from "@/utils/data";

const FormsSection = () => {
  return (
    <div className="w-full md:container mx-auto flex flex-col gap-8">
      <div className="flex flex-col items-center text-mh-darkBlue gap-4">
        <h2 className="text-center text-mh-gold text-lg md:text-5xl  font-bold md:font-black">
          {formData.title}
        </h2>
        <p className="text-center text-sm md:text-lg font-light md:font-medium">
          {formData.description}
        </p>
      </div>
      <div className="px-4">
        <Card className="rounded-2xlborder-none text-white bg-mh-darkBlue  shadow-mh-lightBlue  focus:shadow-md transition-all duration-300 ease-in-out w-full">
          <CardHeader>
            <CardTitle className="flex flex-col items-center">
              <h3 className="text-2xl font-thin">{formData.header}</h3>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <QuestionForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormsSection;
