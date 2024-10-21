import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } fixed top-0 z-20 flex w-full items-center py-5 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className=" mx-auto flex w-full max-w-7xl items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="./logo.png" alt="logo" className="h-9 w-9 object-contain"  />
          <p className="flex cursor-pointer text-[18px] font-bold text-white ">
            AMIT{""} &nbsp;{""}
            <span className="hidden sm:block"> | MERN Stack Developer</span>
          </p>
        </Link>

        <ul className="hidden list-none flex-row gap-10 sm:flex">
          {navLinks.map((nav) => (
            <li
            key={nav.id}
            className={`font-poppins cursor-pointer text-[16px] font-medium ${
              active === nav.title ? "text-white" : "text-secondary"
            }`}
            onClick={() => {
              setToggle(!toggle);
              setActive(nav.title);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setToggle(!toggle);
                setActive(nav.title);
              }
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
          
          
          ))}
        </ul>

        <button
  className="sm:hidden"
  onClick={() => setToggle(!toggle)}
  aria-label="Toggle Menu"
>
  <img
    src={
      toggle
        ? "./close.svg"
        : "./menu.svg"
    }
    alt="menu"
    className="h-[28px] w-[28px] object-contain"
  />
</button>

      </div>
    </nav>
  );
};

export default Navbar;
