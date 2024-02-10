import React from "react";
import './dash.css'
import { DashSide } from "./side";
import { DashCont } from "./content";
import { Outlet } from "react-router-dom";


export const Dashboard = () => {
  return (
    <main id="dashboard">
      <DashSide />
      <Outlet/>
    </main>
  );
};
