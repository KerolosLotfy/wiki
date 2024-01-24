import React from "react";
import { Link } from "react-router-dom";
import "./side.css"

export const Side = () => {
    return (
      <aside>
        <ul className="tools">
          <li>
            <Link to="#">BSS</Link>
          </li>
          <li>
            <Link to="#">MX</Link>
          </li>
          <li>
            <Link to="#">OM</Link>
          </li>
          <li>
            <Link to="#">360</Link>
          </li>
          <li>
            <Link to="#">CPM</Link>
          </li>
          <li>
            <Link to="#">IR</Link>
          </li>
          <li>
            <Link to="#">TM</Link>
          </li>
        </ul>
      </aside>
    );
}