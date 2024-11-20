import React, { useState } from "react";
import "./Services.css";
import Services from "./img/service-2.jpg";
import diagnostics from "./img/service-1.jpg";
import tireChange from "./img/service-3.jpg";
import oilChange from "./img/service-4.jpg";
import { FaCarSide } from "react-icons/fa";
import { FaCar } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { PiTireDuotone } from "react-icons/pi";
import { FaOilCan } from "react-icons/fa";
const YourComponent = () => {
  const [activeContent, setActiveContent] = useState({
    title: "Диагностика",
    text: "Наши специалисты готовы предложить вам диагностику автомобиля, чтобы убедиться в его исправности.",
    image: diagnostics,
  });

  const contents = {
    diagnostics: {
      title: "Диагностика",
      text: "Мы предоставляем высококачественные услуги по диагностике вашего автомобиля, используя самые современные технологии и оборудование.",
      image: diagnostics,
    },
    engineService: {
      title: "Обслуживание Двигателя",
      text: "Мы предлагаем полное обслуживание двигателя для максимальной производительности вашего автомобиля.",
      image: Services,
    },
    tireChange: {
      title: "Замена Шин",
      text: "Быстрая и качественная замена шин для вашей безопасности на дороге.",
      image: tireChange,
    },
    oilChange: {
      title: "Замена Масла",
      text: "Регулярная замена масла для надежной работы вашего автомобиля.",
      image: oilChange,
    },
  };

  return (
    <div className="your-component countainer">
      <div className="button-section">
        <button
          className={`btn1 ${
            activeContent.title === "Диагностика" ? "active" : ""
          }`}
          onClick={() => setActiveContent(contents.diagnostics)}
        >
          <FaCarSide />
          Диагностика
        </button>
        <button
          className={`btn1 ${
            activeContent.title === "Обслуживание Двигателя" ? "active" : ""
          }`}
          onClick={() => setActiveContent(contents.engineService)}
        >
          <FaCar />
          Обслуживание Двигателя
        </button>
        <button
          className={`btn1 ${
            activeContent.title === "Замена Шин" ? "active" : ""
          }`}
          onClick={() => setActiveContent(contents.tireChange)}
        >
          <PiTireDuotone />
          Замена Шин
        </button>
        <button
          className={`btn1 ${
            activeContent.title === "Замена Масла" ? "active" : ""
          }`}
          onClick={() => setActiveContent(contents.oilChange)}
        >
          <FaOilCan />
          Замена Масла
        </button>
      </div>

      <div className="content-section">
        <div className="image">
          <img src={activeContent.image} alt={activeContent.title} />
        </div>
        <div className="text">
          <h1>{activeContent.title}</h1>
          <p>{activeContent.text}</p>
          <div className="texta">
            <FaCheck />
            <p>Качественное Обслуживание</p>
          </div>
          <div className="texta">
            <FaCheck />
            <p>Опытные Специалисты</p>
          </div>
          <div className="texta">
            <FaCheck />
            <p>Современное Оборудование</p>
          </div>
          <button className="btn0">ПОЗВОНИТЬ</button>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
