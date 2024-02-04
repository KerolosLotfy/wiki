import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Soon } from "../../../../soon";

export const SubContent = ({ subTabs }) => {
  const [arr, setArr] = useState();
  const { pathname } = useLocation();
  useEffect(() => {
    let obj =
      subTabs && subTabs.filter((obj) => pathname.search(obj.title) > 0);
    obj && setArr(obj);
  }, [pathname, subTabs]);

  return (
    <div className="subContent">
      {arr?.length ? (
        arr[0].content ? (
          <div dangerouslySetInnerHTML={{ __html: arr[0].content }} />
        ) : (
          <Soon />
        )
      ) : (
        ""
      )}
    </div>
  );
};
