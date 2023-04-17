import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [amountEneterd, setAmount] = useState("");
  const [dateCurrent, setDate] = useState("");
  //const [userInput, setUserInput] = useState({
  //enteredTitle: "",
  //amountEntered: "",
  //dateCurrent: "",
  //});
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    //setUserInput({...userInput, enteredTitle: event.target.value});
    //setUserInput((prevState) => {
    //return { ...prevState, enteredTitle: event.target.value}
    //});
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
    //setUserInput({...userInput, amountEntered: event.target.value});
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
    //setUserInput({...userInput, dateCurrent: event.target.value});
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +amountEneterd,
      date: new Date(dateCurrent),
    };
    props.onSaveExpense(expenseData);
    //console.log(expenseData);
    setEnteredTitle("");
    setAmount("");
    setDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={amountEneterd}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-10 "
            max="2022-12-31"
            value={dateCurrent}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="button" onClick={props.onCancle}>
            Cancel
          </button>
          <button type="submit"> Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
