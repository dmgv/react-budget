import React, { Fragment } from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";

export const LoginPage = ({ startLogin }) => (
  <Fragment>
    <h1>Login Page</h1>

    <button onClick={startLogin}>Entrar com google</button>
  </Fragment>
);

const mapDispatchToProps = dispatch => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
