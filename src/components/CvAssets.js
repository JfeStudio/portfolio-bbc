import React from "react";
import fileCV from "../assets/images/cv.pdf";

export default function CvAssets() {
  return (
    <div className="mt-9 flex items-center justify-center gap-3 lg:mt-8">
      <a
        className="border-dark text-dark block rounded-md bg-transparent py-3 px-6 text-sm font-medium lg:text-xs"
        download
        href={fileCV}
      >
        Download CV
      </a>
      <a
        className="block rounded-md border border-slate-800 bg-slate-800 py-3 px-6 text-sm font-medium text-white shadow-3xl lg:text-xs"
        href="#contact"
      >
        Let's Talk
      </a>
    </div>
  );
}
