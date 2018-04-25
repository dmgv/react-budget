import React, { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";
const Header = () => (
  <Fragment>
    <header>
      <h1>Expensify</h1>
      <nav>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Add</NavLink>
      </nav>
    </header>
  </Fragment>
);

export default Header;
