import React from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import "./Karta.css";
import { HiOutlineMailOpen } from "react-icons/hi";

const Karta = () => {
  const { t } = useTranslation(); // Use the hook to get translations

  return (
    <div className="countainer">
      <div className="karta">
        <div className="karta_title">
          <h4>// {t("contact_title")}</h4> {/* Translated title */}
          <h1>{t("contact_title")}</h1> {/* Translated title */}
        </div>
        <div className="real_karta">
          <div className="real_title">
            <div className="realbox">
              <h1>// {t("booking")}</h1> {/* Translated booking section */}
              <div className="email">
                <HiOutlineMailOpen />
                <p>{t("phone_number")}</p> {/* Translated phone number */}
              </div>
            </div>
            <div className="realbox">
              <h1>// {t("general_inquiries")}</h1>{" "}
              {/* Translated inquiries section */}
              <div className="email">
                <HiOutlineMailOpen />
                <p>{t("phone_number")}</p> {/* Translated phone number */}
              </div>
            </div>
          </div>

          <div className="karta_uzb">
            <iframe
              src="https://www.google.com/maps/embed?pb=..."
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
