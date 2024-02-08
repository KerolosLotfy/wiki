import React from "react";
import { NavLink } from "react-router-dom";
import { FetchInfo } from "../../../../apis/info";
import { useQuery } from "@tanstack/react-query";
const { getOne } = new FetchInfo();

export const SubTabs = ({ tabId, navTitle, tabTitle }) => {
  const { data: sub, refetch } = useQuery({
    queryKey: ["getByTab"],
    queryFn: () => getOne.sub(tabId),
  });

  refetch();
  return (
    <ul className="subTabs">
      {sub?.length
        ? sub.map((obj) => {
            return (
              <li key={obj.id}>
                <NavLink to={`${navTitle}/${tabTitle}/${obj.title}`}>
                  {obj.title}
                </NavLink>
              </li>
            );
          })
        : ""}
    </ul>
  );
};
