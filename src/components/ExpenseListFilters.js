import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setTextFilter } from "../actions/filters";

const ExpenseListFilters = props => (
  <Fragment>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
  </Fragment>
);

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
