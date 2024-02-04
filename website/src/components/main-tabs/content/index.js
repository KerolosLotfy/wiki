import React, { useEffect, useState } from "react";
import { SubTabs } from "./subTabs";
import { useLocation } from "react-router-dom";
import { SubContent } from "./subTabs/subContent";
import { HandleQuery } from "../../../handleQueries";
export const Content = ({ navId }) => {
  const [arr, setArr] = useState();
  const [tab, setTab] = useState();
  const { pathname } = useLocation();
  const { tabs, sub } = HandleQuery();

  const objTab =
    tabs &&
    tabs
      .filter((obj) => obj.navId === navId)
      .filter((obj) => pathname.search(obj.title) > 0)[0];

  const filterSub = objTab && sub.filter((obj) => obj.tabId === objTab.id);

  useEffect(() => {
    setTab(objTab);
    setArr(filterSub);
  }, [objTab]);

  return (
    <>
      {arr?.length ? (
        <div id={tab.id}>
          <h3 className="mainTitle">{tab.mainTitle}</h3>
          {objTab && <SubTabs subTabs={arr} objTab={objTab} />}
          <div className="subContent">
            <SubContent subTabs={arr} />
          </div>
        </div>
      ) : (
        "NO Content"
      )}
    </>
  );
};
