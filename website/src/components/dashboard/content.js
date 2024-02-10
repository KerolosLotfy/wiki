import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import { FetchInfo } from "../../apis/info";
import { useQuery } from "@tanstack/react-query";
const { getInfo } = new FetchInfo();

export const DashCont = () => {
  const { data: nav, refetch } = useQuery({
    queryKey: ["getNav"],
    queryFn: getInfo.nav,
  });

  refetch();
  const editable = (e) => {
    const title = e.target.parentElement.parentElement;
    console.log(title);
    // e.target.focus();
  };
  return (
    <section id="dashCont">
      <Outlet />
    </section>
  );
};
