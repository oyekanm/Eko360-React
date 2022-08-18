import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="Error container">
      <h1 className="Error__title"> Error!!! </h1>
      <p className="Error__text">404, Page not Found</p>
      <Link to="/" className="Error__link">
        Back to Home-Page
      </Link>
    </div>
  );
};

export default Error;
