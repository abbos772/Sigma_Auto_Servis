import React from "react";
import servic from "./img/servic.png";
import "./Servis.css";
const Servis = () => {
  return (
    <div className="countainer">
      <div className="servic">
        <div className="servic_img">
          <img src={servic} alt="" />
        </div>
        <div className="servic_text">
          <h5>// О НАС //</h5>
          <h1>Sigma Avtoservis - Лучшее Место Для Ухода За Вашим Авто</h1>
          <p>
            Мы предоставляем высококачественные услуги по ремонту автомобилей с
            многолетним опытом и профессионализмом. Наша команда экспертов
            готова помочь вам в любой ситуации.
          </p>
          <div className="servic__boxes">
            <div className="servic__box">
              <div className="servic_cart">
                <p>01</p>
              </div>
              <div className="cartNo">
                <h3>Профессионалы и Эксперты</h3>
                <p>
                  Наши специалисты обладают высоким уровнем квалификации и
                  профессионализма.
                </p>
              </div>
            </div>
            <div className="servic__box">
              <div className="servic_cart">
                <p>02</p>
              </div>
              <div className="cartNo">
                <h3>Качественный Сервисный Центр</h3>
                <p>
                  Мы гарантируем высокое качество обслуживания каждого клиента.
                </p>
              </div>
            </div>
            <div className="servic__box">
              <div className="servic_cart">
                <p>03</p>
              </div>
              <div className="cartNo">
                <h3>Награжденные Работники</h3>
                <p>
                  Наши сотрудники удостоены многочисленных наград за свою
                  работу.
                </p>
              </div>
            </div>
            <button className="btn_zvonok">ПОЗВОНИТЬ </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servis;
