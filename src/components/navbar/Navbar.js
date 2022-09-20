import { useState } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { VscCode } from "react-icons/vsc";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#header");

  return (
    <nav className="navigation bg-fixed-backdrop fixed bottom-5 right-1/2 z-[999] flex w-[80%] translate-x-1/2 scale-95 flex-wrap items-center justify-between bg-slate-300 px-6 md:w-2/5 lg:bottom-3 lg:w-3/12 lg:scale-90">
      <a
        href="#header"
        onClick={() => setActiveNav("#header")}
        className={`flex ${activeNav === "#header" ? "active" : ""}`}
      >
        <AiOutlineHome className="nav-icon relative m-auto text-lg text-slate-300" />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={`flex ${activeNav === "#about" ? "active" : ""}`}
      >
        <AiOutlineUser className="nav-icon relative m-auto text-lg text-slate-300" />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={`flex ${activeNav === "#experience" ? "active" : ""}`}
      >
        <BiBook className="nav-icon relative m-auto text-lg text-slate-300" />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={`flex ${activeNav === "#portfolio" ? "active" : ""}`}
      >
        <VscCode className="nav-icon relative m-auto text-lg text-slate-300" />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={`flex ${activeNav === "#contact" ? "active" : ""}`}
      >
        <BiMessageSquareDetail className="nav-icon relative m-auto text-lg text-slate-300" />
      </a>
    </nav>
  );
}
