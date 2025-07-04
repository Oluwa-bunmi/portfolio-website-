"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import Link from "next/link";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F7F9FC]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Get in Touch
        </h2>
        <p className="text-xl text-slate-600 mb-12">
          Let's discuss how we can bring your ideas to life.
        </p>
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
        <Card className="max-w-2xl mx-auto p-8">
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
export default Contact