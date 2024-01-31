import React, { useEffect, useState } from "react";
import { MainTabs } from "../../main-tabs";
import { tabs } from "./tabs";
import { useLocation } from "react-router-dom";
import { Content } from "../../main-tabs/content";
import './subTabs.css'

export const NonTech = () => {
  const [obj, setObj] = useState();
  const { pathname } = useLocation();
  useEffect(() => {
    let filterObj = tabs.filter((obj) =>
      pathname.toLowerCase().includes(obj.navTitle.toLowerCase())
    );
    setObj(filterObj[0]);
  }, [pathname]);
  return (
    <section id="nonTech">
      <MainTabs maiObj={obj} />
      <div className="sub-content">
        <div className="container">{obj && <Content mainObj={obj} />}</div>
      </div>
    </section>
  );
};
