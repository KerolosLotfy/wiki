import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export const DashSide = () => {
  return (
    <aside id="dashSide">
      <ul className="tools">
        <li>
          <p className="head">nav</p>
          <NavLink to={`info/all`}> All</NavLink>
          <NavLink to={`info/add`}> Add</NavLink>
        </li>
        <li>
          <p className="head">tabs</p>
          <NavLink to={`info/all`}> All</NavLink>
          <NavLink to={`info/add`}> Add</NavLink>
        </li>
        <li>
          <p className="head">sub</p>
          <NavLink to={`info/all`}> All</NavLink>
          <NavLink to={`info/add`}> Add</NavLink>
        </li>
      </ul>
    </aside>
  );
};
