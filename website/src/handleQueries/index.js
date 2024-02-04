import { useQuery } from "@tanstack/react-query";

import { FetchInfo } from "../apis/info";

const { getInfo } = new FetchInfo();

export const HandleQuery = () => {
  const { data: nav } = useQuery({
    queryKey: ["getNav"],
    queryFn: getInfo.nav,
  });

  const { data: tabs } = useQuery({
    queryKey: ["getTabs"],
    queryFn: getInfo.tabs,
  });

  const { data: sub } = useQuery({
    queryKey: ["getSub"],
    queryFn: getInfo.sub,
  });

  return { nav, tabs, sub };
};
