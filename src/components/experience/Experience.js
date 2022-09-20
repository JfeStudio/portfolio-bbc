import React from "react";
import { backend, frontend } from "../../data";

export default function Experience() {
  return (
    <section id="experience" className="-scroll-mt-4 py-14">
      <div className="container mx-auto">
        <div className="title text-center">
          <p className="text-dark text-base lg:text-sm">What Skill I Have</p>
          <h3 className="text-2xl font-medium text-white">My Experience</h3>
        </div>
        <div className="mt-11 flex flex-wrap justify-center gap-5 md:flex-nowrap">
          <div className="rounded-md bg-slate-800 p-10 lg:basis-2/6">
            <h4 className="text-center text-xl font-medium text-white">
              Frontend Development
            </h4>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-y-8 md:mt-10 lg:justify-around ">
              {frontend.map(({ vektor, language, level }, index) => {
                return (
                  <div className="flex items-start gap-3" key={index}>
                    <span className="block text-lg text-blue-500 lg:text-base">
                      {vektor}
                    </span>
                    <div className="flex flex-col">
                      <h5 className="text-base text-white lg:text-sm">
                        {language}
                      </h5>
                      <p className="text-dark text-sm lg:text-xs">{level}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="rounded-md bg-slate-800 p-10 lg:basis-2/6">
            <h4 className="text-center text-xl font-medium text-white">
              Backend Development
            </h4>
            <div className="mt-12 flex flex-wrap items-center justify-between gap-y-8 md:mt-10 lg:justify-around ">
              {backend.map(({ vektor, language, level }, index) => {
                return (
                  <div className="flex items-start gap-3" key={index}>
                    <span className="block text-lg text-blue-500 lg:text-base">
                      {vektor}
                    </span>
                    <div className="flex flex-col">
                      <h5 className="text-base text-white lg:text-sm">
                        {language}
                      </h5>
                      <p className="text-dark text-sm lg:text-xs">{level}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
