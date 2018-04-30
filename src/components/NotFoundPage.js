import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => (
  <Fragment>
    <h1>Opsss! 404</h1>
    404 - <Link to="/">Go home</Link>
  </Fragment>
);

export default NotFoundPage;
