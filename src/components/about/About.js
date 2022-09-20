import React from "react";
import heroSM from "../../assets/images/sm-hero.png";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

export default function About() {
  return (
    <section id="about" className="-scroll-mt-4 py-14">
      <div className="container mx-auto">
        <div className="title text-center">
          <p className="text-dark text-base lg:text-sm">Get To Know</p>
          <h3 className="text-2xl font-medium text-white">About Me</h3>
        </div>
        <div className="mt-12 flex flex-wrap justify-center gap-y-12 md:flex-nowrap lg:items-center lg:gap-x-10">
          <div className="mx-auto md:hidden lg:m-0 lg:block lg:basis-2/6">
            <div className="hero-custom mx-auto max-w-max rounded-2xl bg-slate-700 lg:scale-150">
              <img
                className="hero-sm h-48 max-w-max rotate-[8deg] rounded-2xl bg-slate-800 object-cover object-top px-6 pt-2 shadow-3xl transition-all duration-300 ease-in-out"
                src={heroSM}
                alt="Small Hero Maman"
              />
            </div>
          </div>
          <div className="lg:basis-2/5">
            <div className="flex flex-wrap items-center justify-center gap-4 md:flex-nowrap lg:gap-x-2">
              <article className="card flex basis-[46.66%] flex-col gap-y-2 rounded-md bg-slate-800 py-5 text-center lg:scale-95">
                <FaAward className="mx-auto text-[1.35rem] text-white" />
                <h5 className="mt-3 font-medium text-white lg:mt-1 lg:text-sm">
                  Experience
                </h5>
                <p className="text-dark text-sm lg:text-xs">2+ Years Working</p>
              </article>
              <article className="card flex basis-[46.66%] flex-col gap-y-2 rounded-md bg-slate-800 py-5 text-center lg:scale-95">
                <FiUsers className="mx-auto text-[1.35rem] text-white" />
                <h5 className="mt-3 font-medium text-white lg:mt-1 lg:text-sm">
                  Clients
                </h5>
                <p className="text-dark text-sm lg:text-xs">30+ Worldwide</p>
              </article>
              <article className="card flex basis-[46.66%] flex-col gap-y-2 rounded-md bg-slate-800 py-5 text-center lg:scale-95">
                <VscFolderLibrary className="mx-auto text-[1.35rem] text-white" />
                <h5 className="mt-3 font-medium text-white lg:mt-1 lg:text-sm">
                  Project
                </h5>
                <p className="text-dark text-sm lg:text-xs">33+ Completed</p>
              </article>
            </div>
            <p className="text-dark my-6 text-center text-base md:mx-auto md:w-3/4 lg:w-full lg:text-left lg:text-sm">
              I am a 7th semester student from the Informatics Engineering study
              program. As a college student, I am able to communicate well, so
              that I can work independently or in groups with high time
              discipline. My other abilities are able to solve a problem well,
              dare to take risks, skilled in create static and dynamic websites,
              especially in the field of front-end developers and good
              technology mastery.
            </p>
            <a
              className="mx-auto block max-w-max rounded-md border border-slate-800 bg-slate-800 py-3 px-6 text-base font-medium text-white shadow-3xl lg:m-0 lg:text-xs"
              href="#contact"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
