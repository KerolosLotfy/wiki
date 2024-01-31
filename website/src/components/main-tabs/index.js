import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";

export const MainTabs = ({ maiObj }) => {
  const [arr, setArr] = useState();
  useEffect(() => {
    setArr(maiObj);
  }, [maiObj]);
  return (
    <div className="mainTabs">
      <ul>
        {arr
          ? arr.cont.map((obj, i) => {
              return (
                <li key={i} id={obj.title}>
                  <NavLink to={`${maiObj?.navTitle}/${obj.title}`}>
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
