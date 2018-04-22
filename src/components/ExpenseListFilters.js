import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByDate, sortByAmount } from "../actions/filters";

const ExpenseListFilters = props => (
  <Fragment>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />

    <select
      value={props.filters.sortyBy}
      onChange={(e) => {
        if(e.target.value === 'date') {
          props.dispatch(sortByDate())
        } else if (e.target.value === 'amount'){
          props.dispatch(sortByAmount())
        }
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </Fragment>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
