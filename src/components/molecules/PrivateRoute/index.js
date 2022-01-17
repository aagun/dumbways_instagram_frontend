import React from "react";
import { Outlet } from "react-router-dom";
import { LandingPage } from "../../../pages";

export default function PrivateRoute() {
  const isLogin = true;
  return <div>{isLogin ? <Outlet /> : <LandingPage show={!isLogin} />}</div>;
  // return <div>{isLogin ? <Outlet /> : <Navigate to={"/"} />}</div>;
}
