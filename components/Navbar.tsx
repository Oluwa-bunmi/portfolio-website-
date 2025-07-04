"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  //   const handleResumeDownload = () => {
  //     // Create a link element and trigger download
  //     const link = document.createElement("a");
  //     link.href = "/resume.pdf";
  //     link.download = "Oluwabunmi_Resume.pdf";
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //   };

  return (
    <nav className="fixed top-0 w-full bg-slate-900 backdrop-blur-md border-b border-slate-200 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-white">Oluwabunmi</div>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-white hover:font-bold transition-colors"
            >
              About
            </Link>
            <Link
              href="#projects"
              className="text-white hover:font-bold transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#skills"
              className="text-white hover:font-bold transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#contact"
              className="text-white hover:font-bold transition-colors"
            >
              Contact
            </Link>
          </div>
          <Button variant="outline" size="sm">
            {/* onClick={handleResumeDownload} */}
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
