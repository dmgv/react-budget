import React, { Fragment } from "react";

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <Fragment>
      <h1>Edit Expense</h1>
      <p>Editin the expense with id of {props.match.params.id}</p>
    </Fragment>
  )
};


export default EditExpensePage;
