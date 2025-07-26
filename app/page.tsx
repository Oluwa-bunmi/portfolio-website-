"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import { LoaderCircle } from "lucide-react";
import { useState } from "react";

export default function Home() {
  // const [isLoading, setLoading] = useState<boolean>(true);
  // if (isLoading) {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 100);
  //   return (
  //     <section className="flex bg-dark justify-center items-center h-screen">
  //       <div className="bg-gradient-orange px-6 font-semibold text-lg py-3 rounded-lg text-white flex items-center gap-2">
  //         <LoaderCircle className="animate-spin" />
  //         Loading...
  //       </div>
  //     </section>
  //   );
  // }
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
