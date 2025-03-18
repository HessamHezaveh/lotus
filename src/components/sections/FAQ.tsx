import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqData } from "@/utils/data";
import React from "react";

const FAQ = () => {
  return (
    <div className="md:container mx-auto flex flex-col gap-8 items-center justify-center w-full">
      <div className="flex flex-col items-center text-mh-darkBlue gap-4">
        <h2 className="text-center text-mh-gold text-2xl md:text-5xl  font-bold md:font-black">
          {faqData.title}
        </h2>
        <p className="text-center text-sm md:text-lg font-light md:font-medium">
          {faqData.description}
        </p>
      </div>
      <div className="flex flex-col gap-4 w-full px-4 md:px-0">
        {faqData.faqs.map((item) => {
          return (
            <Accordion
              type="single"
              collapsible
              key={item.id}
              className="w-full md:w-2/3 mx-auto p-2 md:p-4 border-b "
            >
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger className="cursor-pointer hover:text-mh-gold hover:no-underline ">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="w-full rounded-2xl ">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
