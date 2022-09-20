import React from "react";
import { portfolio } from "../../data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="-scroll-mt-4 py-14">
      <div className="container mx-auto">
        <div className="title text-center">
          <p className="text-dark text-base lg:text-sm">My Recent Work</p>
          <h3 className="text-2xl font-medium text-white">Portfolio</h3>
        </div>
        <div className="mt-11 flex flex-wrap justify-center gap-4 md:gap-5">
          {portfolio.map(({ image, category, title, link, repo }, index) => {
            return (
              <article
                className="basis-10/12 rounded-md bg-slate-800 p-4 shadow-3xl md:basis-2/5 lg:basis-1/4"
                key={index}
              >
                <div className="overflow-hidden rounded-md shadow-sm">
                  <img
                    className="images-portfolio mx-auto h-40 w-full grayscale"
                    src={image}
                    alt={title}
                  />
                </div>
                <p className="text-dark mt-5 mb-1 text-center text-base lg:text-sm">
                  {category}
                </p>
                <h2 className="text-center text-lg font-medium text-white lg:text-base">
                  {title}
                </h2>
                <div className="mt-6 mb-2 flex items-center justify-center gap-3">
                  <a
                    className="border-dark text-dark block rounded-md bg-transparent py-3 px-6 text-sm font-medium lg:text-xs"
                    href={repo}
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    className="block rounded-md border border-slate-700 bg-slate-700 py-3 px-6 text-sm font-medium text-white shadow-3xl lg:text-xs"
                    href={link}
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
