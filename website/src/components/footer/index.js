import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [date, setDate] = useState("00/00/00");
  const [hour, setHour] = useState(12);
  const [min, setMin] = useState(0);
  const [sec, SetSec] = useState(0);

  useState(() => {
    setInterval(() => {
      const d = new Date();
      setDate(`${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`);
      setHour(d.getHours());
      setMin(d.getMinutes());
      SetSec(d.getSeconds());
    }, 1000);
  }, [date, hour, min, sec]);

  return (
    <footer>
      <div className="container">
        <p className="made">
          Made by{" "}
          <Link to="https://www.github.com/keroloslotfy" target="_blank">
            <i id="myName">Kerolos</i>
          </Link>{" "}
          in 2024
        </p>

        {/* Date And Time Live */}
        <div className="DAT">
          <span className="date">{date}</span>
          <span className="time">
            <i>{hour === 0 ? 12 : hour <= 12 ? `0${hour}` : hour - 12}</i>
            <i>{min}</i>
            <i>{sec}</i>
            <b>{hour <= 11 ? "AM" : "PM"}</b>
          </span>
        </div>
      </div>
    </footer>
  );
};
