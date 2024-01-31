import React from "react";
import { Link } from "react-router-dom";
import "./side.css"

export const Side = () => {
    return (
      <aside>
        <ul className="tools">
          <li>
            <Link to="#" title="BSS Tool">
              BSS
            </Link>
          </li>
          <li>
            <Link to="#" title="Matrix Tool">
              MX
            </Link>
          </li>
          <li>
            <Link to="#" title="OM Tool">
              OM
            </Link>
          </li>
          <li>
            <Link to="#" title="Customer360 Tool">
              360
            </Link>
          </li>
          <li>
            <Link to="#" title="CST Profile Management">
              CPM
            </Link>
          </li>
          <li>
            <Link to="#" title="I-Report Tool">
              IR
            </Link>
          </li>
          <li>
            <Link to="#" title="Ticket Maker">
              TM
            </Link>
          </li>
          <li>
            <Link to="#" title="Ticket Ticket System">
              TTS
            </Link>
          </li>
        </ul>
      </aside>
    );
}