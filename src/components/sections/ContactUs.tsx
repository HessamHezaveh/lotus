import { contactUsData } from "@/utils/data";
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <h2>{contactUsData.title}</h2>
      <p>{contactUsData.description}</p>
    </div>
  );
};

export default ContactUs;
