import { headerTitleList } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="grid grid-cols-3 items-center px-16 bg-black h-16 text-white ">
      {/* LOGO */}
      <div className="text-white col-span-1">logo</div>
      {/* Header items */}
      <div className="col-span-1 flex justify-center items-center gap-8">
        {headerTitleList.map((item) => {
          return (
            <Link
              href={item.href}
              key={item.id}
              className="hover:text-white/90 transition-all duration-300 ease-in-out">
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
