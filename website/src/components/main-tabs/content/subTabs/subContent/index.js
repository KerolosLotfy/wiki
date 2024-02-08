import React from "react";
import { useLocation } from "react-router-dom";
import { Soon } from "../../../../soon";
import { FetchInfo } from "../../../../../apis/info";
import { useQuery } from "@tanstack/react-query";
const { getOne } = new FetchInfo();

export const SubContent = ({ tabId }) => {
  // const [arr, setArr] = useState();
  const { pathname } = useLocation();
  const { data: sub, refetch } = useQuery({
    queryKey: ["getByTab"],
    queryFn: () => getOne.sub(tabId),
  });

  const arr = sub && sub.filter((obj) => pathname.search(obj.title) > 0);

  refetch();

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
