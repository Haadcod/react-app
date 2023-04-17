import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, seTitle] = useState(props.title);

  //let title = props.title

  const clickHandler = () => {
    seTitle("Updated!");
    //title = 'Updated'
    console.log("Clicked....");
  };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={clickHandler}></button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
