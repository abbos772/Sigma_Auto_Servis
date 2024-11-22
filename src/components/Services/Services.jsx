import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Services.css";
import Services from "./img/service-2.jpg";
import diagnostics from "./img/service-1.jpg";
import tireChange from "./img/service-3.jpg";
import oilChange from "./img/service-4.jpg";
import { FaCarSide, FaCar, FaCheck, FaOilCan } from "react-icons/fa";
import { PiTireDuotone } from "react-icons/pi";

const YourComponent = () => {
  const { t } = useTranslation();

  const [activeContent, setActiveContent] = useState({
    title: t("diagnostics.title"),
    text: t("diagnostics.text"),
    image: diagnostics,
  });

  const contents = {
    diagnostics: {
      title: t("diagnostics.title"),
      text: t("diagnostics.text"),
      image: diagnostics,
    },
    engineService: {
      title: t("engineService.title"),
      text: t("engineService.text"),
      image: Services,
    },
    tireChange: {
      title: t("tireChange.title"),
      text: t("tireChange.text"),
      image: tireChange,
    },
    oilChange: {
      title: t("oilChange.title"),
      text: t("oilChange.text"),
      image: oilChange,
    },
  };

  return (
    <div className="your-component countainer" id="Servics">
      <div className="button-section">
        <button
          className={`btn1 ${
            activeContent.title === t("diagnostics.title") ? "active" : ""
          }`}
          onClick={() => setActiveContent(contents.diagnostics)}
        >
          <FaCarSide />
          {t("diagnostics.title")}
        </button>
        <button
          className={`btn1 ${
            activeContent.title === t("engineService.title") ? "active" : ""
          }`}
          onClick={() => setActiveContent(contents.engineService)}
        >
          <FaCar />
          {t("engineService.title")}
        </button>
        <button
          className={`btn1 ${
            activeContent.title === t("tireChange.title") ? "active" : ""
          }`}
          onClick={() => setActiveContent(contents.tireChange)}
        >
          <PiTireDuotone />
          {t("tireChange.title")}
        </button>
        <button
          className={`btn1 ${
            activeContent.title === t("oilChange.title") ? "active" : ""
          }`}
          onClick={() => setActiveContent(contents.oilChange)}
        >
          <FaOilCan />
          {t("oilChange.title")}
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
            <p>{t("qualityService")}</p>
          </div>
          <div className="texta">
            <FaCheck />
            <p>{t("experiencedTechnicians")}</p>
          </div>
          <div className="texta">
            <FaCheck />
            <p>{t("modernEquipment")}</p>
          </div>
          <button className="btn0">{t("callNow")}</button>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
