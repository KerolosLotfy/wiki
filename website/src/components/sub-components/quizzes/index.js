import React from "react";
import "./quizzes.css";
import { NavLink } from "react-router-dom";
import { Questions } from "./questions";
import { Add } from "./add";

export const Quizzes = () => {
  return (
    <section id="quizzes">
      <div className="container">
        <Add />
        <Search />
        {/* <Filter /> */}
        <Questions />
      </div>
    </section>
  );
};

const filter = (e) => {
  e.preventDefault();
  let list = document.querySelectorAll(".questions ul li");
  list.forEach((li) => (li.style.display = "none"));
  list.forEach((li) => {
    if (
      li.children[0].children[1].textContent
        .toLowerCase()
        .includes(e.target.value.toLowerCase())
    ) {
      li.style.display = "block";
    }
  });
};
export const Search = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search by any word"
        id="search"
        onInput={(e) => filter(e)}
      />
    </form>
  );
};

export const Filter = () => {
  return (
    <div className="filter">
      <ul>
        <li>
          <NavLink to="/#" className="active" children={"ALL"} />
        </li>
        <li>
          <NavLink to="/#" children={"Fav"} />
        </li>
      </ul>
    </div>
  );
};
