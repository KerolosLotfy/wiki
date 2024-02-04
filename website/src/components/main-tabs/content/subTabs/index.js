import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const SubTabs = ({ subTabs, objTab }) => {
  const [arr, setArr] = useState([]);
  const { pathname } = useLocation();
  const p = pathname.split("/")[2];

  useEffect(() => {
    setArr(subTabs);
  }, [subTabs]);

  return (
    <ul className="subTabs">
      {arr?.length
        ? arr.map((obj) => {
            return (
              <li key={obj.id}>
                <NavLink to={`${p}/${objTab.title}/${obj.title}`}>
                  {obj.title}
                </NavLink>
              </li>
            );
          })
        : ""}
    </ul>
  );
};
