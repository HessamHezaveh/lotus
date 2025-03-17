"use client";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { headerTitleList } from "@/utils/data";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition > windowHeight * 0.5) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed z-50 grid grid-cols-3 items-center w-full justify-between px-16 h-16 transition-all duration-300 ease-in-out max-sm:bg-white ${
        isScrolled ? "md:top-4" : "bg-white top-0"
      }`}
    >
      {/* LOGO */}
      <div className="text-mh-darkBlue col-span-1 md:text-4xl">logo</div>
      <div
        className={`${
          isScrolled
            ? "md:bg-mh-darkBlue text-white"
            : "text-mh-darkBlue bg-white"
        } flex items-center justify-center transition-all duration-300 ease-in-out h-full rounded-xl`}
      >
        {/* Desktop Menu */}
        <nav className="hidden md:flex justify-center items-center gap-8">
          {headerTitleList.map((item) => {
            return (
              <Link
                href={item.href}
                key={item.id}
                className="hover:text-mh-gold transition-all duration-300 ease-in-out"
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden col-span-1 col-start-3 justify-self-end">
        <Drawer>
          <DrawerTrigger>
            <MenuIcon className="cursor-pointer text-mh-darkBlue hover:text-mh-gold transition-all duration-300 ease-in-out" />
          </DrawerTrigger>
          <DrawerContent className="bg-white  h-screen flex items-center justify-center">
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col gap-4 items-center justify-center w-full">
              {headerTitleList.map((item) => {
                return (
                  <Link
                    href={item.href}
                    key={item.id}
                    className="text-mh-darkBlue hover:text-mh-gold transition-all duration-300 ease-in-out"
                  >
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
