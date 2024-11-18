import React, { useEffect } from "react";
import "./About.css";

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
            <h3>Авто-электрик</h3>
          </div>
          <div className="about__cart">
            <h3>Авто-механик</h3>
          </div>
          <div className="about__cart">
            <h3>Ремонт Авто на Выезд</h3>
          </div>
          <div className="about__cart">
            <h3>Авто Вулканизация</h3>
          </div>
          <div className="about__cart">
            <h3>Вскрытия Автомобиля</h3>
          </div>
          <div className="about__cart">
            <h3>Выезд Автомастер</h3>
          </div>
          <div className="about__cart">
            <h3>Замена Авто масла</h3>
          </div>
          <div className="about__cart">
            <h3>Замена шин</h3>
          </div>
          <div className="about__cart">
            <h3>Тонировка</h3>
          </div>
          <div className="about__cart">
            <h3>Моторист</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
