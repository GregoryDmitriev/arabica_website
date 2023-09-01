"use client";

import { useEffect } from "react";

import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ScrollSection from "@/components/ScrollSection";
import TextReveal from "@/components/TextReveal";
import Cursor from "@/components/Cursor";

const Home = () => {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <>
      <Cursor/>
      <Hero />
      <ScrollSection />
      <TextReveal />
      <Footer />
    </>
  );
};

export default Home;
