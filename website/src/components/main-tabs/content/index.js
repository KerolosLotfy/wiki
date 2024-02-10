import React from "react";
import { SubTabs } from "./subTabs";
import { useLocation } from "react-router-dom";
import { SubContent } from "./subTabs/subContent";
import { FetchInfo } from "../../../apis/info";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../loading";

const { getOne } = new FetchInfo();

export const Content = ({ navId, navTitle }) => {
  const { pathname } = useLocation();
  const {
    data: tabs,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["getTabsByNav"],
    queryFn: () => getOne.tabs(navId),
  });

  const objTab = tabs && tabs.filter((obj) => pathname.search(obj.title) > 0);

  refetch();
  if (isLoading) return <Loading />;

  return (
    <>
      {objTab?.length ? (
        <div id={objTab[0].id}>
          <h3 className="mainTitle">{objTab[0].maintitle}</h3>
          {objTab && (
            <SubTabs
              tabId={objTab[0].id}
              navTitle={navTitle}
              tabTitle={objTab[0].title}
            />
          )}
          <SubContent tabId={objTab[0].id} />
        </div>
      ) : (
        "NO Content"
      )}
    </>
  );
};
