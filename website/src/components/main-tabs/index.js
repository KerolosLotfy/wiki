import { NavLink } from "react-router-dom";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { FetchInfo } from "../../apis/info";

const { getOne } = new FetchInfo();

export const MainTabs = ({ navId ,navTitle}) => {
  const { data: tabs, refetch } = useQuery({
    queryKey: ["getTabsByNav"],
    queryFn: () => getOne.tabs(navId),
  });

  refetch();

  return (
    <div className="mainTabs">
      <ul>
        {tabs?.length
          ? tabs.map((obj) => {
              return (
                <li key={obj.id} id={obj.id}>
                  <NavLink to={`${navTitle}/${obj.title}`}>{obj.title}</NavLink>
                </li>
              );
            })
          : "No Tabs"}
      </ul>
    </div>
  );
};
