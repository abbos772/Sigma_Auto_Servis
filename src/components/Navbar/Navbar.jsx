import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "./imgs/logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`Navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav_flex">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav_box ${toggle ? "show" : ""}`}>
          <div className="Navbar__nav">
            <a className="nav_title" href="#home">
              Главная
            </a>
            <a className="nav_title" href="#About">
              О Нас
            </a>
            <a className="nav_title" href="#services">
              Услуги
            </a>
            <a className="nav_title" href="#contacts">
              Контакты
            </a>
            <a className="nav_title" href="#">
              +998 93 772 09 30
            </a>
            <button className="Nav__btn">
              ВЫЗВАТЬ МАСТЕРА <FaArrowRight />
            </button>
          </div>
        </div>
        <button className="menu" onClick={() => setToggle(!toggle)}>
          <IoMenuOutline fontSize={30} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
