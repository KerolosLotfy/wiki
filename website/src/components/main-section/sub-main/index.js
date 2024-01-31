import React from "react";
import './sub-main.css'
import { Footer } from "../../footer";
import { Outlet } from "react-router-dom";

export const SubMain = () => {
    return (
      <section className="sub-main">
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </section>
    );
}