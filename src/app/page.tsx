import AboutUs from "@/sections/AboutUs";
import Header from "@/sections/Header";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="w-full">
        <Header />
      </div>
      <div>
        <AboutUs />
      </div>
    </div>
  );
};

export default Home;
