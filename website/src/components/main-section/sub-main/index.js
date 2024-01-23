import React from "react";
import './sub-main.css'
import { Footer } from "../../footer";
import { Home } from "../../sub-components/home";
import { Outlet } from "react-router-dom";

export const SubMain = () => {
    return (
        <section className="sub-main">
            <div className="content">
                <div className="container">
                    {/* <Home /> */}
                    <Outlet />
                </div>
            </div>
            <Footer />
        </section>
    )
}