import React from "react";

import Menu from "../../components/Menu";
import Hero from "../Hero";
import AboutMe from "../AboutMe";
import Interests from "../Interests";
import Work from "../Work";
import FreeTime from "../FreeTime";
import SayHi from "../SayHi";
import Footer from "../../components/Footer";

export default function App() {
  return (
    <>
      <Menu />
      <Hero />
      <AboutMe />
      <Interests />
      <Work />
      <FreeTime />
      <SayHi />
      <Footer />
    </>
  );
}
