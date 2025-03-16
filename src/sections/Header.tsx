"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { headerTitleList } from "@/utils/data";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="grid grid-cols-3 items-center px-16 bg-slate-800 h-16 text-white ">
      {/* LOGO */}
      <div className="text-white col-span-1">logo</div>
      {/* Desktop Menu */}
      <nav className="hidden md:flex col-span-1 justify-center items-center gap-8">
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
      </nav>
      {/* Mobile Menu */}
      <div className="md:hidden col-span-1 col-start-3 flex justify-end">
        <Drawer>
          <DrawerTrigger>
            <MenuIcon className="cursor-pointer hover:text-white/90" />
          </DrawerTrigger>
          <DrawerContent className="bg-white h-screen flex items-center justify-center">
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col gap-4 items-center justify-center  w-full">
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
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
