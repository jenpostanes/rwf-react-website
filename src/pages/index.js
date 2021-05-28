import React, { useState } from "react";
import About from "../components/About";
import Donate from "../components/Donate";
import { AmountData } from "../components/Donate/data";
import Events from "../components/Events";
import { EventData } from "../components/Events/data";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Hero />
      <About />
      <Events data={EventData} />
      <Gallery />
      <Donate data={AmountData} />
      <Footer />
    </>
  );
};

export default Home;
