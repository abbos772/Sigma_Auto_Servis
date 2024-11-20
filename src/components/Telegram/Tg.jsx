import React, { useState } from "react";
import "./Tg.css";
import axios from "axios";

export default function Tg() {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    problem: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const setMessage = (event) => {
    event.preventDefault();
    const token = "8067183480:AAFKCrO3LUj1a82nwf0on6R-5OUok77whTc";
    const chat_id = 6068975139;
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
      .then((res) => {
        alert("Сообщение отправлено!");
        setFormData({ name: "", surname: "", phone: "", problem: "" });
      })
      .catch((error) => {
        console.error("Ошибка при отправке сообщения", error);
      });
  };

  return (
    <div className="countainer">
      <div>
        <h1 className="h11">Вопросы? Напишите нам...</h1>
        <form onSubmit={setMessage}>
          <div className="flex_inp">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              name="surname"
              value={formData.surname}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="flex_inp">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <label htmlFor="problem">Problem</label>
            <textarea
              name="problem"
              id="problem"
              value={formData.problem}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
