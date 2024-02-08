import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./header.css";
import { FaQuestionCircle } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { FetchInfo } from "../../apis/info";

const { getInfo } = new FetchInfo();

export const Header = () => {
  const { data: nav, refetch } = useQuery({
    queryKey: ["getNav"],
    queryFn: getInfo.nav,
  });

  refetch();

  return (
    <header>
      <div className="container">
        <div id="logo">
          <Link to="/">wiki</Link>
        </div>

        <nav>
          <ul>
            {nav &&
              nav.map((obj) => (
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
