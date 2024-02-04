import React, { useEffect, useState } from "react";
import { MainTabs } from "../../main-tabs";
import { useLocation } from "react-router-dom";
import { Content } from "../../main-tabs/content";
import "./subTabs.css";
import { HandleQuery } from "../../../handleQueries";

export const Info = () => {
  const [navId, setNavId] = useState();
  const { pathname } = useLocation();
  const { nav } = HandleQuery();
  const obj = nav && nav.filter((obj) => pathname.search(obj.title) > 0)[0];

  useEffect(() => {
    obj && setNavId(obj.id);
  }, [obj]);

  return (
    <section id="nonTech">
      {obj && <MainTabs navId={navId} />}
      <div className="sub-content">
        <div className="container">{obj && <Content navId={obj.id} />}</div>
      </div>
    </section>
  );
};
