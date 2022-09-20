import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-800 pt-20 pb-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12">
          <h1 className="text-center font-serif text-2xl font-medium text-white">
            JfeStudio
          </h1>
          <ul className="flex flex-col items-center justify-center gap-7 text-slate-300 md:flex-row">
            <a
              href="#header"
              className="text-base hover:text-slate-200"
              rel="noreferrer"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-base hover:text-slate-200"
              rel="noreferrer"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-base hover:text-slate-200"
              rel="noreferrer"
            >
              Experience
            </a>
            <a
              href="#services"
              className="text-base hover:text-slate-200"
              rel="noreferrer"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-base hover:text-slate-200"
              rel="noreferrer"
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-base hover:text-slate-200"
              rel="noreferrer"
            >
              Contact
            </a>
          </ul>
          <div className="flex items-center justify-center gap-x-3">
            <div className="flex h-10 w-10 cursor-pointer rounded-md bg-slate-900 text-white shadow-sm lg:scale-95">
              <RiFacebookFill className="m-auto text-2xl" />
            </div>
            <a
              href="https://instagram.com/nvxxe_?igshid=YmMyMTA2M2Y="
              rel="noreferrer"
              className="flex h-10 w-10 cursor-pointer rounded-md bg-slate-900 text-white shadow-sm lg:scale-95"
            >
              <AiOutlineInstagram className="m-auto text-2xl" />
            </a>
            <div className="flex h-10 w-10 cursor-pointer rounded-md bg-slate-900 text-white shadow-sm lg:scale-95">
              <AiOutlineTwitter className="m-auto text-2xl" />
            </div>
          </div>
        </div>
        <div className="mt-10 text-center text-xs text-slate-500">
          © 2022 Created By{" "}
          <a
            className="font-medium text-slate-400 hover:text-slate-300"
            href="https://github.com/JfeStudio"
            rel="noreferrer"
          >
            JfeStudio
          </a>{" "}
          All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
