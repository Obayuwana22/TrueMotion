import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops! An error occurred.</h1>
      <p>{error.message || "Something went wrong."}</p>
    </div>
  );
};

export default ErrorPage;
