import React from "react";
import MainNavigation from "../components/MainNavigation";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <MainNavigation />
      <main>
        <h1>There is an Error</h1>
        <h3>{`Message : ${error.message} , Status: ${error.status}`}</h3>
      </main>
    </>
  );
};

export default ErrorPage;
