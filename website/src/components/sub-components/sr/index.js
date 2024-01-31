import React from "react";
import { Questions } from "./questions";
import { Add } from "./add";
import { Soon } from "../../soon";
import './sr.css'

export const SR = () => {
  return (
    <section id="sr">
      <div className="container">
        {/* <Add /> */}
        {/* <Search /> */}
        <Soon />
      </div>
    </section>
  );
};

const searching = (e) => {
  e.preventDefault();
  let list = document.querySelectorAll(".questions ul li");
  list.forEach((li) => (li.style.display = "none"));
  list.forEach((li) => {
    if (
      li.children[1].children[1].textContent
        .toLowerCase()
        .includes(e.target.value.toLowerCase()) ||
      li.children[2].children[1].textContent
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
        placeholder="Search by Level 3"
        id="search"
        onInput={(e) => searching(e)}
      />
    </form>
  );
};
