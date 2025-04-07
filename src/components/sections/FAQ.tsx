import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { faqData } from "@/utils/data";
import React from "react";
import TitleCard from "../TitleCard";

const FAQ = () => {
  return (
    <div className="container px-10 sm:px-5 mx-auto flex flex-col  items-center justify-center w-full">

      <TitleCard className="items-start w-full  gap-1 md:gap-1" title={faqData.title}  />

      <div className="flex flex-col  w-full  ">
        {faqData.faqs.map((item) => {
          return (
            <Accordion
              type="single"
              collapsible
              key={item.id}
              className="w-full  mx-auto  "
            >
              <AccordionItem  value={`item-${item.id}`}>

                <AccordionTrigger className="cursor-pointer text-zinc-600 hover:text-zinc-900 hover:no-underline flex items-center justify-between w-full  rounded-2xl">
                  <p className="text-sm sm:text-lg ">
                    {item.question}
                    </p>
                </AccordionTrigger>

                <AccordionContent className="w-full  ">
                  <p className="text-sm sm:text-lg px-7 pb-4">

                  {item.answer}
                  </p>
                </AccordionContent>
              <div className="bg-zinc-300 w-full h-[1px]"/>
              </AccordionItem>
           
            </Accordion>
            
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
