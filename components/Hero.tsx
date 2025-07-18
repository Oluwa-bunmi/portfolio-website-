"use client";

import { Button } from "@/components/ui/button";
import { Code, Palette, ArrowRight, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";


const Hero = () => { 
  return (
    <section id="about" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 1.5 }}
              className="inline-flex items-center px-3 py-1 rounded-full bg-white text-dark text-sm font-medium mb-6"
            >
              <Code className="w-4 h-4 mr-2" />
              Frontend Developer
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="text-4xl lg:text-6xl font-bold text-gray mb-6"
            >
              Building Digital
              <span className="text-transparent bg-textGradient bg-clip-text block">
                Experiences
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", duration: 2 }}
              className="text-lg lg:text-xl text-gray mb-8 leading-relaxed"
            >
              I help founders deliver better user experiences by building fast,
              responsive, and intuitive web interfaces.
              {/* I'm a passionate frontend developer who loves creating functional
              and user-friendly web applications. */}
              {/* Every line of code I write is
              aimed at solving real user problems. */}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", duration: 2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="#projects">
                <button className="bg-gradient-orange flex items-center py-3 px-[40px] rounded-md text-white text-base font-bold cursor-pointer">
                  View My Work
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </Link>
              <Link href="#contact">
                <button className="flex items-center py-3 px-[40px] rounded-md text-gray border border-gray text-base font-bold cursor-pointer">
                  <Mail className="w-4 h-4 mr-2" />
                  Get In Touch
                </button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 2.5 }}
          >
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-cardBg flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="font-mono text-sm mb-4 text-green-400">
                  {"> const developer = {"}
                </div>
                <div className="font-mono text-sm mb-2 text-blue-300 ml-4">
                  {'name: "Oluwabunmi",'}
                </div>
                <div className="font-mono text-sm mb-2 text-blue-300 ml-4">
                  {'role: "Frontend Developer",'}
                </div>
                <div className="font-mono text-sm mb-2 text-blue-300 ml-4">
                  {'passion: "Building amazing UIs"'}
                </div>
                <div className="font-mono text-sm text-green-400">{"};"}</div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-logoGradient rounded-full flex items-center justify-center">
              <Palette className="w-8 h-8 text-slate-900" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default Hero;