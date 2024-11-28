import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Tg.css";
import axios from "axios";

export default function Tg() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    problem: "",
  });

  const { t } = useTranslation();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const setMessage = (event) => {
    event.preventDefault();

    const token = "8067183480:AAFKCrO3LUj1a82nwf0on6R-5OUok77whTc";
    const chat_id = "6068975139";

    if (!token || !chat_id) {
      console.error("Telegram Bot Token or Chat ID is missing.");
      return;
    }

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    const message = `
      📌 *New Inquiry from Website*:
      - 👤 Name: ${formData.name}
      - 🧑 Surname: ${formData.surname}
      - 📞 Phone: ${formData.phone}
      - 📝 Problem: ${formData.problem}
    `;

    axios
      .post(url, {
        chat_id: chat_id,
        text: message,
        parse_mode: "Markdown",
      })
      .then(() => {
        toast.success(t("success"));
        setFormData({ name: "", surname: "", phone: "", problem: "" });
      })
      .catch((error) => {
        console.error("Error sending message", error);
        toast.error(t("error"));
      });
  };

  return (
    <div className="countainer">
      <div id="contact">
        <h1 className="h11">{t("questions")}</h1>
        <form onSubmit={setMessage}>
          <div className="flex_inp">
            <label htmlFor="name">{t("name")}</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="surname">{t("surname")}</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex_inp">
            <label htmlFor="phone">{t("phone")}</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="problem">{t("problem")}</label>
            <textarea
              name="problem"
              id="problem"
              value={formData.problem}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">{t("send")}</button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
