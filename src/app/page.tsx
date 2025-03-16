import AboutUs from "@/sections/AboutUs";
import ContactUs from "@/sections/ContactUs";
import FAQ from "@/sections/FAQ";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col gap-16">
      <div className="w-full sticky top-0 z-50">
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Services />
      </div>
      <div>
        <AboutUs />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <FAQ />
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
