import AboutUs from "@/components/sections/AboutUs";
import ContactUs from "@/components/sections/ContactUs";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import FormsSection from "@/components/sections/FormsSection";
import Hero from "@/components/sections/Hero";
import Map from "@/components/sections/Map";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col gap-8 md:gap-20">
      <div className="">
        <Hero />
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
      {/* <div>
        <Map lat={ 40.762572398982364} lng={ 30.367863815035918}/>
      </div> */}
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
