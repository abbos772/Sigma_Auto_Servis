import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "animate.css";
import "./Hero.css";
import carousel from "./imgs/carousel-1.png";
import carousel2 from "./imgs/carousel-2.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { Autoplay, Navigation } from "swiper/modules";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div style={{ marginTop: "-1.52px" }}>
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        observe={true}
        observeParents={true}
        autoplay={true}
        modules={[Navigation, Autoplay]}
      >
        <SwiperSlide>
          <div className="swip_img" style={{ height: "100vh" }}>
            <div className="countainer">
              <div className="carousel">
                <div className="carousel__text">
                  <p>{t("repairCars")}</p>
                  <h1 className="custom-fadeInDown">
                    {t("repairInstallment")}
                  </h1>
                  <button className="custom-fadeInDown">
                    <h4>{t("learnMore")}</h4> <FaArrowRightLong />
                  </button>
                </div>
                <div className="carousel__img animate__animated animate__zoomIn">
                  <img src={carousel} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swip_img2" style={{ height: "100vh" }}>
            <div className="countainer__carousel">
              <div className="carousel">
                <div className="carousel__text">
                  <p>{t("repairCars")}</p>
                  <h1 className="custom-fadeInDown">{t("bestQualityParts")}</h1>
                  <button>
                    <h4>{t("learnMore")}</h4> <FaArrowRightLong />
                  </button>
                </div>
                <div className="carousel__img animate__animated animate__zoomIn">
                  <img src={carousel2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swip_img3" style={{ height: "100vh" }}>
            <div className="countainer__carousel">
              <div className="carousel">
                <div className="carousel__text">
                  <p>{t("repairCars")}</p>
                  <h1 className="custom-fadeInDown">
                    {t("roadsideAssistance")}
                  </h1>
                  <button>
                    <h4>{t("learnMore")}</h4> <FaArrowRightLong />
                  </button>
                </div>
                <div className="carousel__img animate__animated animate__zoomIn">
                  <img src={carousel2} alt="" />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Hero;
