"use client";

import { Download, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Oluwabunmi Gbemisoye-Frontend Developer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <nav className="fixed top-0 w-full bg-dark backdrop-blur-md border-b border-gray z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <h1 className="text-3xl font-bold text-transparent bg-logoGradient bg-clip-text">
              JUMMY.
            </h1>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link
              href="#about"
              className="text-lg font-semibold text-[#959595] hover:text-transparent hover:bg-textGradient hover:bg-clip-text"
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-lg font-semibold text-[#959595] hover:text-transparent hover:bg-textGradient hover:bg-clip-text"
            >
              Services
            </Link>
            <Link
              href="#skills"
              className="text-lg font-semibold text-[#959595] hover:text-transparent hover:bg-textGradient hover:bg-clip-text"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-lg font-semibold text-[#959595] hover:text-transparent hover:bg-textGradient hover:bg-clip-text"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-lg font-semibold text-[#959595] hover:font-bold transition-colors"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex">
            <button
              className="flex items-center gap-2 whitespace-nowrap bg-logoGradient py-3 px-[40px] rounded-md text-white text-base font-bold cursor-pointer"
              onClick={handleResumeDownload}
            >
              <Download className="w-5 h-5" /> Resume
            </button>
          </div>

          <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer md:hidden"
          >
            <Menu className="text-white" />
          </div>
          {/* Mobile nav */}
          {nav && (
            <div className="bg-black/80 fixed w-full h-screen left-0 top-0 z-10"></div>
          )}
          <div
            className={
              nav
                ? "fixed top-0 right-0 w-[300px] h-screen bg-dark z-10 duration-300"
                : "fixed top-0 right-[-100%] w-[300px] h-screen bg-dark z-10 duration-300"
            }
          >
            <nav>
              <div className="flex flex-col p-5 gap-5">
                <div className="flex justify-end my-4">
                  <X
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer text-white"
                  />
                </div>
                <Link
                  href="#about"
                  onClick={() => setNav(!nav)}
                  className="text-lg font-semibold text-white"
                >
                  About
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href="#services"
                  className="text-lg font-semibold text-white"
                >
                  Services
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href="#skills"
                  className="text-lg font-semibold text-white"
                >
                  Skills
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href="#projects"
                  className="text-lg font-semibold text-white"
                >
                  Projects
                </Link>
                <Link
                  onClick={() => setNav(!nav)}
                  href="#contact"
                  className="text-lg font-semibold text-white"
                >
                  Contact
                </Link>
                <button
                  className="flex items-center gap-2 whitespace-nowrap w-fit bg-logoGradient py-3 px-[40px] rounded-md text-white text-base font-bold cursor-pointer"
                  onClick={handleResumeDownload}
                >
                  <Download className="w-5 h-5" />
                  Resume
                </button>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
