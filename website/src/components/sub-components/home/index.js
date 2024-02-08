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
        width:'100%'
      }}
    >
      <img
        className="react-logo"
        src={image}
        alt="we"
        width={200}
        height={200}
        style={{ maxWidth: "100%" }}
      ></img>
      <h1>Telecom Egypt</h1>
    </div>
  );
};
