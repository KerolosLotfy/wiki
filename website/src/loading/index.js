import React, { useEffect } from "react";
import image from "../assets/logo.svg";

export const Loading = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(".react-logo").style.display = "none";
    }, 2000);
  });
  return (
    <img
      className="react-logo"
      src={image}
      alt="we"
      width={100}
      height={100}
      style={{ maxWidth: "100%" }}
    ></img>
  );
};
