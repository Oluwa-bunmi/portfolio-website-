"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-dark">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 1 }}
          className="text-4xl font-bold text-white mb-4"
        >
          Get in Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ type: "spring", duration: 0.5, delay: 0.3 }}
          className="text-xl text-gray mb-12"
        >
          Let's discuss how we can bring your ideas to life.
        </motion.p>
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <Button variant="outline" size="lg" asChild>
            <Link href="mailto:gbemisoyeadejumoke@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/oluwabunmi-gbemisoye/"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link target="_blank" href="https://github.com/Oluwa-bunmi">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link target="_blank" href="https://twitter.com/dev_jummy">
              <Twitter className="w-5 h-5 mr-2" />
              Twitter
            </Link>
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 2 }}
        >
          <Card className="max-w-2xl mx-auto p-8">
            <CardContent className="space-y-6">
              <form
                action="https://formsubmit.co/gbemisoyeadejumoke@gmail.com"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 mb-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="text-left block text-sm font-medium text-white mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 text-white focus:ring-[#FD6400] focus:border-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="text-left block text-sm font-medium text-white mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 text-white focus:ring-[#FD6400] focus:border-none"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-left block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    name="message"
                    className="w-full resize-none px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 text-white focus:ring-[#FD6400] focus:border-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-gradient-orange py-3 w-full rounded-md text-white text-base font-bold cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
export default Contact;
