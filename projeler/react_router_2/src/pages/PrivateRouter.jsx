import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Login from "./Login";

const PrivateRouter = () => {
  let isAuth = true;
  return <div> {isAuth ? <Outlet /> : <Navigate to="/login" />}</div>;
};
export default PrivateRouter;
