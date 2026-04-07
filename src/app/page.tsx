"use client";

import dynamic from "next/dynamic";
import Home from "@/sections/home/home";

const About = dynamic(() => import("@/sections/about/about"));
const Services = dynamic(() => import("@/sections/service/services"));
const Technologies = dynamic(() => import("@/sections/technologies/technologies"));
const Testimonials = dynamic(() => import("@/sections/testimonials/testimonials"));
const Milestone = dynamic(() => import("@/sections/milestone"));
const Contact = dynamic(() => import("@/sections/contact"));
const Portfolio = dynamic(() => import("@/sections/porfolio/portfolio"));
const Recruitment = dynamic(() => import("@/sections/recruitment"));

export default function Page() {

  return (
    <div>
      <Home />
      <About />
      <Services />
      <Technologies />
      <Milestone />
      <Portfolio />
      <Recruitment/>
      <Testimonials />
      <Contact />
    </div>
  );
}
