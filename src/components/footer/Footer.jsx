import React from "react";
import "./Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="countainer">
        <div className="footer_flex">
          <div className="footerBox">
            <h1>Адрес</h1>
            <div className="loc">
              <p>
                <IoLocationSharp />
                ул. Яккасарайская, г. Ташкент, Узбекистан. Ориентир: Напротив
                свадебного ресторана Navruz
              </p>
            </div>
            <div className="tel">
              <FaPhone />
              <h5>+998 93 772 09 30</h5>
            </div>
            <div className="tel">
              <FaPhone />
              <h5>+998 93 772 09 30</h5>
            </div>
            <div className="set">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsInstagram />
              </a>
              <a href="https://t.me" target="_blank" rel="noopener noreferrer">
                <FaTelegram />
              </a>
            </div>
          </div>

          <div className="footerBox">
            <h1>Часы Работы</h1>
            <div className="loc">
              <p>Понедельник - Воскресенье:</p>
            </div>
            <p>24/7</p>
          </div>

          <div className="footerBox">
            <h1>Услуги</h1>
            <div className="loc">
              <div className="locsvg">
                <FaChevronRight />
                <p>Диагностика</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Обслуживание Двигателя</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Замена Шин</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Замена Масла</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Токарная услуга</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Тонировка</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Моторист</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Кастаправ</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Вакуумная Чистка</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Авто-Электрик</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Авто-Механик</p>
              </div>
              <div className="locsvg">
                <FaChevronRight />
                <p>Выезд Автоэлектрик Круглосуточный</p>
              </div>
            </div>
          </div>
          <div className="footerBox uf">
            <h1>Контакты</h1>
            <button>ВЫЗВАТЬ МАСТЕРА</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
