"use client";

import {motion } from "framer-motion";
import { services } from "@/constants";

const About = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 1 }}
            className="text-4xl font-bold text-white mb-4"
          >
           Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
            className="text-xl text-gray max-w-3xl mx-auto"
          >
            Tailored web development services that align with your brand, your
            users, and your goals.
          </motion.p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Web Development</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                I build modern web applications with React, Next.js, and
                TypeScript.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Responsive Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                I create pixel-perfect, mobile-first designs that work on all
                devices.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center p-6 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Clean Code</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                I write maintainable, scalable code following industry best
                practices.
              </p>
            </CardContent>
          </Card> */}
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-cardBg text-center p-[34px] rounded-3xl"
            >
              <div className="flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white pt-6 pb-4">
                {service.heading}
              </h3>
              <p className="text-gray-400">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default About;
