import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./Navbar.css";
import logo from "./imgs/logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const changeLanguage = (lang) => {
    console.log("Selected Language:", lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="/" className={`Navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav_flex">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className={`nav_box ${toggle ? "show" : ""}`}>
          <div className="Navbar__nav">
            <a className="nav_title" href="#">
              {t("home")}
            </a>
            <a className="nav_title" href="#About">
              {t("about")}
            </a>
            <a className="nav_title" href="#Servics">
              {t("services")}
            </a>
            <a className="nav_title" href="#contacts">
              {t("contacts")}
            </a>
            <div className="language-switcher">
              <select
                onChange={(e) => changeLanguage(e.target.value)}
                defaultValue={i18n.language}
              >
                <option value="en">EN</option>
                <option value="uz">UZ</option>
                <option value="ru">RU</option>
              </select>
            </div>
            <a href="#contact">
              <button className="Nav__btn">
                {t("callMaster")} <FaArrowRight />
              </button>
            </a>
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
