import React, { useEffect } from "react";
import "./About.css";
import bir from "./img/bir.png";
import ikki from "./img/ikki.png";
import uch from "./img/uch.png";
import besh from "./img/besh.png";
import olti from "./img/olti.png";
import sokkis from "./img/sekkis.png";
import toqqis from "./img/toqqis.png";
const About = () => {
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
          <p>Наши Услуги</p>
          <h1>Ознакомьтесь С Нашими Услугами</h1>
        </div>
        <div className="about_carts">
          <div className="about__cart">
            <img src={bir} alt="" />
            <h3>Авто-электрик</h3>
          </div>
          <div className="about__cart">
            <img src={ikki} alt="" />
            <h3>Авто-механик</h3>
          </div>
          <div className="about__cart">
            <img src={uch} alt="" />
            <h3>Ремонт Авто на Выезд</h3>
          </div>
          <div className="about__cart">
            <img src={ikki} alt="" />
            <h3>Авто Вулканизация</h3>
          </div>
          <div className="about__cart">
            <img src={besh} alt="" />
            <h3>Вскрытия Автомобиля</h3>
          </div>
          <div className="about__cart">
            <img src={olti} alt="" />
            <h3>Выезд Автомастер</h3>
          </div>
          <div className="about__cart">
            <img src={bir} alt="" />
            <h3>Замена Авто масла</h3>
          </div>
          <div className="about__cart">
            <img src={sokkis} alt="" />
            <h3>Замена шин</h3>
          </div>
          <div className="about__cart">
            <img src={toqqis} alt="" />
            <h3>Тонировка</h3>
          </div>
          <div className="about__cart">
            <img src={toqqis} alt="" />
            <h3>Моторист</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
