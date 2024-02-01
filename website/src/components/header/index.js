import React from "react";
import { NavLink, Link } from "react-router-dom";
import './header.css'
import { FaQuestionCircle } from "react-icons/fa";
export const Header = () => {
  return (
    <header>
      <div className="container">
        <div id="logo">
          <Link to="/">wiki</Link>
        </div>

        <nav>
          <ul>
            <li>
              <a href="info/nonTech">Non-Tech</a>
            </li>
            <li>
              <NavLink to="info/tech">Tech</NavLink>
            </li>
            <li>
              <NavLink to="info/landline">Landline</NavLink>
            </li>
            <li>
              <NavLink to="info/installations">Installations</NavLink>
            </li>
            <li>
              <NavLink to="info/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="info/ivr">IVR</NavLink>
            </li>
            <li>
              <NavLink to="info/calls">Calls</NavLink>
            </li>
            <li>
              <NavLink to="sr">SR</NavLink>
            </li>
            <li>
              <NavLink to="info/others">Others</NavLink>
            </li>
            <li>
              <NavLink to="quizzes">
                <FaQuestionCircle size={40} />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};