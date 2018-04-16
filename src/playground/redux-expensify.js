import { createStore, combineReducers } from "redux";

const demoState = {
  expenses: [
    {
      id: "aksjda",
      description: "Aluguel",
      note: "ultima parcela",
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date ot amount
    startDate: undefined,
    endDate: undefined
  }
};
