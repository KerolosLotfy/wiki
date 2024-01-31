import React from "react";
const errStyle = {
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "4rem",
  color: "transparent",
  WebkitTextStroke: "4px var(--text)",
  flexDirection: "column",
};

export const Error404 = () => {
  return (
    <h1 style={errStyle}>
      <p>ERROR 404</p>
      <p
        style={{ fontSize: 15, WebkitTextStrokeWidth: 0, color: "var(--text)" }}
      >
        URL Website Wrong Or Not Found
      </p>
    </h1>
  );
};