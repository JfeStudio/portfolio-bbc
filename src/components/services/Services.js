import React from "react";
import { services } from "../../data";

export default function Services() {
  return (
    <section id="services" className="py-16">
      <div className="container mx-auto">
        <div className="title text-center">
          <p className="text-dark text-base lg:text-sm">What I Offer</p>
          <h3 className="text-2xl font-medium text-white">Services</h3>
        </div>
        <div className="mt-11 flex flex-wrap items-center justify-center gap-4 md:gap-5">
          {services.map(({ vektor, title, description, btn }, index) => {
            return (
              <article
                className="basis-[46.66%] rounded-md bg-slate-800 p-4 text-center md:basis-2/6 lg:basis-1/6"
                key={index}
              >
                <span className="mx-auto inline-block text-2xl text-yellow-600">
                  {vektor}
                </span>
                <h3 className="mt-2 text-base font-medium text-white">
                  {title}
                </h3>
                <p className="text-dark my-3 text-sm">{description}</p>
                <button
                  className="mt-4 block w-full rounded-md bg-slate-700 py-2 px-3 text-sm text-white shadow-sm lg:text-xs"
                  type="submit"
                >
                  {btn}
                </button>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
