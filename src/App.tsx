import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { DirectorMessage, About } from "./components/About";
import { Classes } from "./components/Classes";
import { Academics } from "./components/Academics";
import { Activities } from "./components/Activities";
import { Facilities } from "./components/Facilities";
import { Gallery } from "./components/Gallery";
import { Events } from "./components/Events";
import { Admissions } from "./components/Admissions";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <Hero />
      <DirectorMessage />
      <About />
      <Classes />
      <Academics />
      <Activities />
      <Facilities />
      <Gallery />
      <Events />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  );
}
