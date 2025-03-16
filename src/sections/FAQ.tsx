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
    <div className="flex flex-col gap-8 items-center justify-center">
      <h2>FAQ's</h2>
      <div>
        {faqData.map((item) => {
          return (
            <Accordion
              type="single"
              collapsible
              key={item.id}
              className="w-full">
              <AccordionItem value={`item-${item.id}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
