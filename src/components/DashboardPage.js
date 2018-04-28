import React, { Fragment } from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const DashboardPage = () => (
  <Fragment>
    <ExpensesSummary />
    <ExpenseListFilters />
    <ExpenseList />
  </Fragment>
);

export default DashboardPage;
