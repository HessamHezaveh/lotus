import { headerTitleList } from "@/utils/data";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex gap-16 items-center justify-center bg-black h-16 text-white">
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
  );
};

export default Header;
