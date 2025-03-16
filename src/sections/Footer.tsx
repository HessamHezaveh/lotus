import { footerData } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-8 items-center justify-center">
      <div>
        <h2>{footerData.title}</h2>
        <p>{footerData.description}</p>
      </div>
      <div>
        {footerData.socialLinks.map((item) => {
          return (
            <Link key={item.id} href={item.href}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
