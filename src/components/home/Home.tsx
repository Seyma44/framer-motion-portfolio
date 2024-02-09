import React from "react";
import  Contact  from "../../sections/Contact";
import { Hero } from "./Hero";
import About  from "../../sections/About"
import  Blog from "../../sections/Blog"
import  Counter  from "../../sections/Counter"
import { Portfolio}  from "../../sections/Portfolio"
import Services from "../../sections/Services"
import { Testimonials } from "../../sections/Testimonials"
import Motto from "../common/Motto";

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Motto/>
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </>
  );
};
