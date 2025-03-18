"use client";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { headerTitleList } from "@/utils/data";
import { MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Drawer state

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    setIsScrolled(scrollPosition > windowHeight * 0.5);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    setIsDrawerOpen(false);

    setTimeout(() => {
      if (href === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.replaceState(null, "", "/");
      } else {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.replaceState(null, "", href);
        }
      }
    }, 300);
  };

  return (
    <div
      className={`sticky z-50 grid grid-cols-3 items-center w-full justify-between px-8 md:px-16 h-[8vh] md:h-[10vh] transition-all duration-300 ease-in-out top-0 max-md:bg-white ${
        isScrolled ? "md:top-4" : "bg-white md:top-0"
      }`}
    >
      {/* LOGO */}
      <div className="text-mh-darkBlue col-span-1 md:text-4xl justify-self-start">
        logo
      </div>

      {/* Desktop Menu */}
      <div
        className={`${
          isScrolled
            ? "md:bg-mh-mainBlue text-white"
            : "text-mh-darkBlue bg-white"
        } hidden md:flex items-center justify-center transition-all duration-300 ease-in-out h-full rounded-full`}
      >
        <nav className="flex justify-center items-center gap-8">
          {headerTitleList.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="hover:text-mh-gold transition-all duration-300 ease-in-out cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden col-span-1 col-start-3 justify-self-end">
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger>
            <MenuIcon className="cursor-pointer text-mh-darkBlue hover:text-mh-gold transition-all duration-300 ease-in-out" />
          </DrawerTrigger>
          <DrawerContent className="bg-white h-screen flex items-center justify-center">
            <DrawerHeader>
              <DrawerTitle></DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col gap-4 items-center justify-center w-full">
              {headerTitleList.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-mh-darkBlue text-2xl hover:text-mh-gold transition-all duration-300 ease-in-out cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
};

export default Header;
