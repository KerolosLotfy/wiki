import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Browser } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <Browser>
      <App />
    </Browser>
  </QueryClientProvider>

  // <React.StrictMode>

  // </React.StrictMode>
);