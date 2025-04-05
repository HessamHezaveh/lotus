import { testimonialsData } from "@/utils/data";

import React from "react";

const Testimonials = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-8 items-center justify-center">
      <h2>{testimonialsData.title}</h2>
      <p>{testimonialsData.description}</p>
      {testimonialsData.testimonials.map((item) => {
        return (
          <div key={item.id} className="flex flex-col ">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Testimonials;
