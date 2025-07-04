"use client";

import { Button } from "@/components/ui/button";
import { Code, Palette, ArrowRight, Mail } from "lucide-react";

const Hero = () => { 
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6">
              <Code className="w-4 h-4 mr-2" />
              Frontend Developer
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6">
              Building Digital
              <span className="text-blue-600 block">Experiences</span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-600 mb-8 leading-relaxed">
              I'm a passionate frontend developer who loves creating functional
              and user-friendly web applications. Every line of code I write is
              aimed at solving real user problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View My Work
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" size="lg">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="relative w-full h-96 rounded-2xl overflow-hidden bg-slate-900 flex items-center justify-center">
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
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center">
              <Palette className="w-8 h-8 text-yellow-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;