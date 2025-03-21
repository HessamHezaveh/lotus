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
      className={`sticky z-50 flex items-center w-full justify-center px-8 md:px-16 h-fit  transition-all duration-300 ease-in-out top-0 max-md:bg-white ${
        isScrolled ? "md:top-4  md:h-fit" : "bg-white md:top-0 md:h-[10vh]"
      }`}
    >
      {/* LOGO */}
      
      {/* <div className="text-mh-darkBlue col-span-1 md:text-4xl justify-self-start ">
        <img src="/logo 3.png" alt="logo" className="w-16 h-16 p-1" />
      </div> */}

      {/* Desktop Menu */}
      <div
        className={`${
          isScrolled
            ? "md:bg-mh-mainBlue text-white shadow-xl  w-[600px] " 
            : "text-mh-darkBlue bg-wite w-full  "
        } hidden md:flex items-center justify-center transition-all duration-300 ease-in-out py-3 px-6 rounded-full`}
      >
        <nav className="flex justify-between items-center gap-8 w-full ">
          <div className="  ">
            <img src="/logo 3.png" alt="logo" className="w-10 h-10 invert shadow-sms" />
          </div>

          <div className="flex gap-8">
          {headerTitleList.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="hover:text-mh-gold text-lg font-medium transition-all duration-300 ease-in-out cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden h-14 flex items-center justify-between w-full">
      <div className="  ">
            <img src="/logo 3.png" alt="logo" className="w-10 h-10  " />
          </div>
        <Drawer open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
          <DrawerTrigger>
            <MenuIcon className="cursor-pointer text-mh-mainBlue hover:text-mh-gold transition-all duration-300 ease-in-out font-bold" />
          </DrawerTrigger>

          <DrawerContent className="bg-white min-h-[50%] flex items-center justify-start m-0">
            <DrawerHeader>
              <DrawerTitle> <h2  className="text-center text-mh-gold text-xl md:text-2xl pb-3  font-bold md:font-black">Company name</h2></DrawerTitle>
            </DrawerHeader>
            <nav className="flex flex-col gap-4 items-start justify-start w-max ">
              {headerTitleList.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item.href)}
                  className="text-mh-mainBlue text-xl font-medium hover:text-mh-gold transition-all duration-300 ease-in-out cursor-pointer"
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
