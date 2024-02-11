import React from "react";
import { Link } from "react-router-dom";
import "./side.css";

export const Side = () => {
  return (
    <aside>
      <ul className="tools">
        <li>
          <Link
            to="http://customer360/Account/LogOn?ReturnUrl=%2fCustomers%2f0"
            target="_blank"
            title="Customer360 Tool"
          >
            360
          </Link>
        </li>

        <li>
          <Link
            to="http://matrix/index.php"
            target="_blank"
            title="Matrix Tool"
          >
            MX
          </Link>
        </li>

        <li>
          <Link
            to="bss.te.eg:12900/oc/bes/sm/login/login-egypt.html "
            target="_blank"
            title="BSS Tool"
          >
            BSS
          </Link>
        </li>

        <li>
          <Link
            to="http://tts/index.php"
            target="_blank"
            title="Ticket Ticket System"
          >
            TTS
          </Link>
        </li>

        <li>
          <Link
            to="http://10.42.187.100:8080/expresse/login/login.jsf?sessionExpired=true"
            target="_blank"
            title="ASSIA Tool"
          >
            ASSIA
          </Link>
        </li>

        <li>
          <Link to="http://10.99.105.177:8080" target="_blank" title="HDM Tool">
            HDM
          </Link>
        </li>

        <li>
          <Link
            to="http://10.19.44.2/ireport/cases/login.php"
            target="_blank"
            title="I-Report Tool"
          >
            IR
          </Link>
        </li>

        <li>
          <Link to="#" target="_blank" title="oss Tool">
            oss
          </Link>
        </li>

        <li>
          <Link to="oss.te.eg/cas/login" target="_blank" title="OM Tool">
            OM
          </Link>
        </li>

        <li>
          <Link
            to="http://wiki/SiteAssets/ADSL-New-Process/index.html"
            target="_blank"
            title="Ticket Maker"
          >
            TM
          </Link>
        </li>

        <li>
          <Link to="#" target="_blank" title="CST Profile Management">
            CPM
          </Link>
        </li>
      </ul>
    </aside>
  );
};
