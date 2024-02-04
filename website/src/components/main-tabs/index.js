import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { HandleQuery } from "../../handleQueries";

export const MainTabs = ({ navId }) => {
  const [arr, setArr] = useState();
  const { tabs } = HandleQuery();
  const navObj = HandleQuery().nav.filter((obj) => obj.id === navId)[0];

  useEffect(() => {
    const arr = tabs && tabs.filter((obj) => obj.navId === navId);
    tabs && setArr(arr);
  }, [tabs, navId]);

  return (
    <div className="mainTabs">
      <ul>
        {arr?.length
          ? arr.map((obj) => {
              return (
                <li key={obj.id} id={obj.id}>
                  <NavLink to={`${navObj.title}/${obj.title}`}>
                    {obj.title}
                  </NavLink>
                </li>
              );
            })
          : "No Tabs"}
      </ul>
    </div>
  );
};
