import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

import Menu from "./Menu";
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const MenuHandel = (boolen) => {
    setMenu(boolen);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const nav = document.querySelector("nav");
    if (window.scrollY > 50) {
      nav.style.backgroundColor = "#0000008e";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  };
  return (
    <nav id="nav" className="w-full fixed top-0 z-[100] ease-in duration-200">
      <div className="text-2xl flex items-center justify-between h-[100px] LayoutContainer">
        <Link to="/" smooth={true} duration={300}>
          <img src="/logo.svg" alt="logo" className="cursor-pointer w-[60px]" />
        </Link>
        <ul className="hidden tablet:flex gap-12">
          <Link to="/" smooth={true} duration={300}>
            <li className="flex gap-3 group cursor-pointer hover:scale-110 duration-300 ease-in">
              <span className="text-detailsColor font-Mono">01. </span>
              <p>Home</p>
            </li>
          </Link>
          <Link to="aboutMe" smooth={true} duration={300}>
            <li className="flex gap-3 group cursor-pointer hover:scale-110 duration-300 ease-in">
              <span className="text-detailsColor font-Mono ">02. </span>
              <p>Over mij</p>
            </li>
          </Link>
          <Link to="projects" smooth={true} duration={300}>
            <li className="flex gap-3 group cursor-pointer hover:scale-110 duration-300 ease-in">
              <span className="text-detailsColor font-Mono">03. </span>
              <p>Projecten</p>
            </li>
          </Link>
          <Link to="contact" smooth={true} duration={300}>
            <li className="flex gap-3 group cursor-pointer hover:scale-110 duration-300 ease-in">
              <span className="text-detailsColor font-Mono">04. </span>
              <p>Contact</p>
            </li>
          </Link>
        </ul>
        {!menu && (
          <AiOutlineMenu
            size={35}
            className="text-mainText tablet:hidden"
            onClick={() => MenuHandel(true)}
          />
        )}
        <Menu MenuHandel={MenuHandel} menu={menu} />
      </div>
    </nav>
  );
};

export default Navbar;
