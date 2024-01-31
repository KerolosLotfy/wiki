import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Soon } from "../../../../soon";

export const SubContent = ({ subTabs }) => {
  const [arr, setArr] = useState();
  const { pathname } = useLocation();
  useEffect(() => {
    let obj =
      subTabs &&
      subTabs.filter((obj) =>
        pathname.toLowerCase().includes(obj.subTitle.toLowerCase())
      );
    obj && setArr(obj);
  }, [pathname, subTabs]);

  return (
    <div className="subContent">
      {arr?.length ? (
        arr[0].subContent ? (
          <div dangerouslySetInnerHTML={{ __html: arr[0].subContent }} />
        ) : (
          <Soon />
        )
      ) : (
        ""
      )}
    </div>
  );
};
