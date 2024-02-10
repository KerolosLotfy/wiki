import React from "react";
import { MainTabs } from "../../main-tabs";
import { useLocation } from "react-router-dom";
import { Content } from "../../main-tabs/content";
import "./subTabs.css";
import { FetchInfo } from "../../../apis/info";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../../../loading";

const { getInfo } = new FetchInfo();
export const Info = () => {
  const { pathname } = useLocation();
  const { data: nav, refetch } = useQuery({
    queryKey: ["getNav"],
    queryFn: getInfo.nav,
  });

  const obj = nav && nav.filter((obj) => pathname.search(obj.title) > 0)[0];

  refetch();

  return (
    <section id="nonTech">
      {obj && <MainTabs navId={obj.id} navTitle={obj.title} />}
      <div className="sub-content">
        <div className="container">
          {obj && <Content navId={obj.id} navTitle={obj.title} />}
        </div>
      </div>
    </section>
  );
};
