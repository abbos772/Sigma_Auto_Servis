import React from "react";
import "./Karta.css";
import { HiOutlineMailOpen } from "react-icons/hi";

const Karta = () => {
  return (
    <div className="countainer">
      <div className="karta">
        <div className="karta_title">
          <h4>// Свяжитесь с Нами //</h4>
          <h1>Свяжитесь с Нами по Любым Вопросам</h1>
        </div>
        <div className="real_karta">
          <div className="real_title">
            <div className="realbox">
              <h1>// Бронирование //</h1>
              <div className="email">
                <HiOutlineMailOpen />
                <p>+99893 772 09 30</p>
              </div>
            </div>
            <div className="realbox">
              <h1>// Общие Вопросы //</h1>
              <div className="email">
                <HiOutlineMailOpen />
                <p>+99893 772 09 30</p>
              </div>
            </div>
          </div>

          <div className="karta_uzb">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345091985!2d144.96315791531685!3d-37.81627937975154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577a26d9c243222!2sGoogle!5e0!3m2!1sen!2s!4v1600000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Karta;
