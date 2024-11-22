import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./About.css";
import bir from "./img/bir.png";
import ikki from "./img/ikki.png";
import uch from "./img/uch.png";
import besh from "./img/besh.png";
import olti from "./img/olti.png";
import sokkis from "./img/sekkis.png";
import toqqis from "./img/toqqis.png";

const About = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll(".about__cart");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="countainer">
      <div className="about">
        <div className="about_text">
          <p>{t("ourServices")}</p>
          <h1>{t("exploreOurServices")}</h1>
        </div>
        <div className="about_carts">
          <div className="about__cart">
            <img src={bir} alt="" />
            <h3>{t("autoElectrician")}</h3>
          </div>
          <div className="about__cart">
            <img src={ikki} alt="" />
            <h3>{t("autoMechanic")}</h3>
          </div>
          <div className="about__cart">
            <img src={uch} alt="" />
            <h3>{t("mobileCarRepair")}</h3>
          </div>
          <div className="about__cart">
            <img src={ikki} alt="" />
            <h3>{t("autoVulcanization")}</h3>
          </div>
          <div className="about__cart">
            <img src={besh} alt="" />
            <h3>{t("carUnlocking")}</h3>
          </div>
          <div className="about__cart">
            <img src={olti} alt="" />
            <h3>{t("mobileCarMaster")}</h3>
          </div>
          <div className="about__cart">
            <img src={bir} alt="" />
            <h3>{t("oilChange")}</h3>
          </div>
          <div className="about__cart">
            <img src={sokkis} alt="" />
            <h3>{t("tireChange")}</h3>
          </div>
          <div className="about__cart">
            <img src={toqqis} alt="" />
            <h3>{t("tinting")}</h3>
          </div>
          <div className="about__cart">
            <img src={toqqis} alt="" />
            <h3>{t("engineSpecialist")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
