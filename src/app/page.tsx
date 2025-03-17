import AboutUs from "@/components/sections/AboutUs";
import ContactUs from "@/components/sections/ContactUs";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import FormsSection from "@/components/sections/FormsSection";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div className=" flex flex-col gap-8 md:gap-24">
      <div>
        <Hero />
      </div>
      <div className="">
        <Features />
      </div>
      <div className="">
        <Services />
      </div>
      <div>
        <FormsSection />
      </div>
      <div>
        <FAQ />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Testimonials />
      </div>

      <div>
        <ContactUs />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
