"use client"
import AboutUs from "@/components/sections/AboutUs";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import FormsSection from "@/components/sections/FormsSection";
import Hero from "@/components/sections/Hero";

import Services from "@/components/sections/Services";
import React from "react";

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
        <AboutUs />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
