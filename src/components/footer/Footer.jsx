import React from "react";
import { useTranslation } from "react-i18next"; // Import the hook for translation
import "./Footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  const { t } = useTranslation(); // Initialize the hook for translations

  return (
    <div className="Footer">
      <div className="countainer">
        <div className="footer_flex">
          <div className="footerBox">
            <h1>{t("address")}</h1> {/* Translated address heading */}
            <div className="loc">
              <p>
                <IoLocationSharp />
                {t("address_detail")}
              </p>{" "}
              {/* Translated address details */}
            </div>
            <div className="tel">
              <FaPhone />
              <h5>{t("phone_number")}</h5> {/* Translated phone number */}
            </div>
            <div className="tel">
              <FaPhone />
              <h5>{t("phone_number")}</h5> {/* Translated phone number */}
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
            <h1>{t("working_hours")}</h1>{" "}
            {/* Translated working hours heading */}
            <div className="loc">
              <p>{t("working_days")}</p> {/* Translated working days */}
            </div>
            <p>{t("hours")}</p> {/* Translated working hours */}
          </div>
          <a href="#contact">
            <div className="footerBox">
              <h1>{t("services")}</h1> {/* Translated services heading */}
              <div className="loc">
                {/* Loop through services and display them */}
                {t("service_list", { returnObjects: true }).map(
                  (service, index) => (
                    <div key={index} className="locsvg">
                      <FaChevronRight />
                      <p>{service}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </a>
          <a href="#contacts">
            <div className="footerBox uf">
              <h1>{t("contact")}</h1> {/* Translated contacts heading */}
              <button className="aa">{t("call_master")}</button>{" "}
              {/* Translated call master button */}
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
