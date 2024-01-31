import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const SubTabs = ({ subTabs, mainObj, subObj }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    setArr(subTabs);
  }, [subTabs]);

  return (
    <ul className="subTabs">
      {arr?.length
        ? arr.map((obj, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={`${mainObj.navTitle}/${subObj.title}/${obj.subTitle}`}
                >
                  {obj.subTitle}
                </NavLink>
              </li>
            );
          })
        : ""}
    </ul>
  );
};
