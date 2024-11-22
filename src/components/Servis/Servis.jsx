import React from "react";
import { useTranslation } from "react-i18next";
import servic from "./img/servic.png";
import "./Servis.css";

const Servis = () => {
  const { t } = useTranslation();

  return (
    <div className="countainer">
      <div className="servic">
        <div className="servic_img">
          <img src={servic} alt="" />
        </div>
        <div className="servic_text">
          <h5>{t("aboutUs")}</h5>
          <h1>{t("sigmaService")}</h1>
          <p>{t("serviceDescription")}</p>
          <div className="servic__boxes">
            <div className="servic__box">
              <div className="servic_cart">
                <p>01</p>
              </div>
              <div className="cartNo">
                <h3>{t("professionalExperts")}</h3>
                <p>{t("professionalDescription")}</p>
              </div>
            </div>
            <div className="servic__box">
              <div className="servic_cart">
                <p>02</p>
              </div>
              <div className="cartNo">
                <h3>{t("qualityServiceCenter")}</h3>
                <p>{t("qualityDescription")}</p>
              </div>
            </div>
            <div className="servic__box">
              <div className="servic_cart">
                <p>03</p>
              </div>
              <div className="cartNo">
                <h3>{t("awardedEmployees")}</h3>
                <p>{t("awardDescription")}</p>
              </div>
            </div>
            <button className="btn_zvonok">{t("callUs")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servis;
