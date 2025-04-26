"use client"
import WeAre from "@/components/sections/WeAre";
import AboutUs2 from "@/components/sections/AboutUs2";
import CopyRight from "@/components/sections/CopyRight";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import FormsSection from "@/components/sections/FormsSection";
import Hero from "@/components/sections/Hero";
import Numbers from "@/components/sections/Numbers";

import Services from "@/components/sections/Services";
import React from "react";
import Poster from "@/components/sections/Poster";

const Home = () => {
  return (
    <div className=" flex flex-col gap-8 md:gap-20">
      <div className="">
        <Hero/>
      </div>
      <div className="md:-mb-32">
      <Features />
      </div>
      <div className="">
        <Services />
      </div>
      <div>
        <FormsSection />
      </div>
      <div>
        <WeAre />
        
      </div>
      <div>
        <Poster/>
      </div>

      <div>
        <FAQ />
      </div>

      <div>
      <AboutUs2/>
      </div>
      
      <div>
        <Footer />
        <CopyRight/>
      </div>

    </div>
  );
};

export default Home;
