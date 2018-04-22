import React, { Fragment } from "react";
import { connect } from "react-redux";

const ExpenseList = props => (
  <Fragment>
    <h1>Expense List</h1>
    {props.expenses.length}
    {props.filters.text}
  </Fragment>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
