import React from "react";
import { SlaData } from "./sla.js";
import { Add } from "./add";
import "./sla.css";

export const SLA = () => {
  return (
    <section id="sla">
      <div className="container">
        <Add />
        <Search />
        <SlaData />
      </div>
    </section>
  );
};

const searching = (e) => {
  e.preventDefault();
  let list = document.querySelectorAll(".sla ul li");
  list.forEach((li) => (li.style.display = "none"));
  list.forEach((li) => {
    if (
      li.children[1].children[1].textContent
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
        placeholder="Search by SLA Case"
        id="search"
        onInput={(e) => searching(e)}
      />
    </form>
  );
};
