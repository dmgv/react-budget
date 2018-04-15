import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const DashboardPage = () => <Fragment><h1>Dashboard</h1></Fragment>;

const AddExpensePage = () => <Fragment><h1>Add</h1></Fragment>;

const EditExpensePage = () => <Fragment><h1>Edit</h1></Fragment>;

const HelpPage = () => <Fragment><h1>Help</h1></Fragment>;

const routes = (
  <BrowserRouter>
    <Fragment>
      <Route path="/" component={DashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} exact={true} />
      <Route path="/edit" component={EditExpensePage} exact={true} />
      <Route path="/help" component={HelpPage} exact={true} />
    </Fragment>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
