import React, { Fragment } from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { addExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  onSubmit = expense => {
    this.props.onSubmit(expense);
    this.props.history.push("/");
  };
  render() {
    return (
      <Fragment>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
