import React from "react";
import image from "../../../assets/logo.svg";

export const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "#6f0592",
      }}
    >
      <img
        className="react-logo"
        src={image}
        alt="we"
        width={300}
        height={300}
        style={{ maxWidth: "100%" }}
      ></img>
      <h1>Telecom Egypt</h1>
    </div>
  );
};
