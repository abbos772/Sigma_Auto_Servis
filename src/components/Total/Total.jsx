import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Total.css";
import { FaCheck, FaUsers, FaUsersCog, FaCar } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Total = () => {
  const { t } = useTranslation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="total" ref={ref}>
      <div className="countainer">
        <div className="total_flex">
          <div className="total_card">
            <FaCheck />
            <h1>{inView && <CountUp start={0} end={15} duration={3.5} />}</h1>
            <h3>{t("yearsOfExperience")}</h3>
          </div>
          <div className="total_card">
            <FaUsersCog />
            <h1>{inView && <CountUp start={0} end={20} duration={3.5} />}</h1>
            <h3>{t("expertTechnicians")}</h3>
          </div>
          <div className="total_card">
            <FaUsers />
            <h1>{inView && <CountUp start={0} end={1000} duration={3.5} />}</h1>
            <h3>{t("satisfiedClients")}</h3>
          </div>
          <div className="total_card">
            <FaCar />
            <h1>{inView && <CountUp start={0} end={500} duration={3.5} />}</h1>
            <h3>{t("completedProjects")}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total;
