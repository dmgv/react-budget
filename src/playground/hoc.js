import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <Fragment>
    <h1>Info</h1>
    <p>
      The info is:<i>{props.info}</i>
    </p>
  </Fragment>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <Fragment>
      {props.isAdmin && <p>Private! Do not share</p>}
      <WrappedComponent {...props} />
    </Fragment>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <Fragment>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Tem que logar primerio</p>
      )}
    </Fragment>
  );
};

const AuthInfo = requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="There are the details" />,
  document.getElementById("app")
);
