import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import { FaQuestionCircle } from "react-icons/fa";
import { HandleQuery } from "../../handleQueries";

export const Header = () => {
  const [arr, setArr] = useState();
  const { nav } = HandleQuery();
  useEffect(() => {
    nav && setArr(nav);
  }, [nav]);

  return (
    <header>
      <div className="container">
        <div id="logo">
          <Link to="/">wiki</Link>
        </div>

        <nav>
          <ul>
            {arr &&
              arr.map((obj) => (
                <li key={obj.id}>
                  <NavLink to={`info/${obj.title}`}>{obj.title}</NavLink>
                </li>
              ))}

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
