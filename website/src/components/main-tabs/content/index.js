import React, { useEffect, useState } from "react";
import { SubTabs } from "./subTabs";
import { useLocation } from "react-router-dom";
import { SubContent } from "./subTabs/subContent";

export const Content = ({ mainObj }) => {
  const [arr, setArr] = useState();
  const { pathname } = useLocation();
  useEffect(() => {
    let obj =
      mainObj &&
      mainObj.cont.filter((obj) =>
        pathname.toLowerCase().includes(obj.title.toLowerCase())
      );
    obj && setArr(obj);
  }, [mainObj, pathname]);

  return (
    <>
      {arr?.length ? (
        <div id={arr[0].title}>
          <h3 className="mainTitle">{arr[0].mainTitle}</h3>
          <SubTabs
            subTabs={arr[0].subTabs}
            mainObj={mainObj}
            subObj={arr[0]}
          />
          <div className="subContent">
            <SubContent subTabs={arr[0].subTabs} />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
