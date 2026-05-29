import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Close, Menu, NorthEast } from "@mui/icons-material";

import { navLinks, resumeLink } from "../constants";
import { styles } from "../styles";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const goToSection = (id, title) => {
    setActive(title);
    setToggle(false);

    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView(), 60);
      return;
    }

    document.getElementById(id)?.scrollIntoView();
  };

  return (
    <nav
      className={`${styles.paddingX} fixed top-0 z-30 flex w-full items-center py-4 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-slate-950/75 shadow-2xl shadow-black/20 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex min-w-0 items-center gap-3"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white shadow-lg shadow-black/20">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Amit Maddheshiya logo" className="h-full w-full object-contain p-1" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[14px] font-bold leading-tight text-white sm:text-[17px]">
              Amit Maddheshiya
            </p>
            <p className="hidden text-xs font-medium text-slate-400 sm:block">
              Full Stack Engineer
            </p>
          </div>
        </Link>

        <ul className="hidden list-none flex-row items-center gap-7 lg:flex">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`cursor-pointer text-[14px] font-medium transition-colors ${
                active === nav.title ? "text-cyan-200" : "text-slate-300 hover:text-white"
              }`}
              onClick={() => goToSection(nav.id, nav.title)}
            >
              {nav.title}
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-3 lg:ml-0">
          <a
            href={resumeLink}
            download="Amit-Maddheshiya-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-lg border border-amber-200/30 bg-[linear-gradient(135deg,#facc15,#22d3ee,#a78bfa)] px-3 py-2 text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:scale-[1.03] hover:shadow-cyan-500/20 xs:px-4"
          >
            <span className="hidden xs:inline">Resume</span>
            <NorthEast sx={{ fontSize: 16 }} />
          </a>
        </div>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/10 text-white lg:hidden"
          onClick={() => setToggle((value) => !value)}
          aria-label="Toggle menu"
        >
          {toggle ? <Close /> : <Menu />}
        </button>
      </div>

      {toggle && (
        <div className="absolute right-6 top-16 w-[min(320px,calc(100vw-48px))] rounded-xl border border-white/10 bg-slate-950/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden">
          <ul className="flex list-none flex-col gap-2">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="cursor-pointer rounded-lg px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/10"
                onClick={() => goToSection(nav.id, nav.title)}
              >
                {nav.title}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
