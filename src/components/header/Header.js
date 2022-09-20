import React from "react";
import CvAssets from "../CvAssets";
import heroSection from "../../assets/images/xl-hero.png";
import { FaLinkedin, FaGithub, FaDribbble } from "react-icons/fa";

export default function Header() {
  return (
    <section id="header" className="relative pt-20 pb-10 lg:pt-16">
      <div className="container mx-auto">
        <div className="social-media absolute left-24 top-1/2 z-50 hidden translate-y-[90%] flex-col gap-y-6 text-slate-100 md:flex">
          <FaLinkedin className="text-xl" />
          <a href="https://github.com/JfeStudio" rel="noreferrer">
            <FaGithub className="text-xl" />
          </a>
          <div className="relative before:absolute before:right-1/2 before:-bottom-10 before:h-[.10rem] before:w-9 before:translate-x-1/2 before:rotate-90 before:rounded-lg before:bg-slate-300 before:content-['']">
            <FaDribbble className="text-xl" />
          </div>
        </div>
        <a
          href="#contact"
          rel="noreferrer"
          className="absolute right-16 bottom-48 z-50 hidden rotate-90 cursor-pointer text-sm text-slate-300 hover:text-slate-200 md:block lg:right-16 lg:bottom-44"
        >
          Scroll Down
        </a>
        <div className="flex flex-col gap-y-10">
          <div className="text-center">
            <p className="text-lg text-white">Hello, I'm</p>
            <h1 className="my-2 text-3xl font-semibold text-white">
              Maman BBC
            </h1>
            <p className="text-dark text-base">Fullstack Developer</p>
            <CvAssets />
          </div>
          <div className="mt-2">
            <div className="rounded-custom relative pt-7 before:bg-slate-800 before:shadow-3xl after:border after:border-dashed after:border-slate-800">
              <img
                className="mx-auto max-w-[18rem] md:max-w-[21rem] lg:max-w-xs"
                src={heroSection}
                alt="Hero Section Maman BBC"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
