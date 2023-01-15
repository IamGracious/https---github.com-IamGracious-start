// //components are similiar, they are functions which returns html code.

import React, { useState } from "react";
//useState is a function provided by react libray which allows us to define values as states, where changes to this values reflects in the component function being called again.
//useState must be called inside our component function.
//useState is also a react hook
//hooks are recognized because they start with 'use' in their name.
//All hooks must be called directly under react function, they can't be called under nested function.
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  //function clickHandler() {}
  const [title, setTitle] = useState(props.title);

  // let title = props.title;
  const clickHandler = () => {
    //useState always returns an array with two elements, the first element is current state value and the second element is a function for updating the first state.
    setTitle("Updated!");
    console.log(title);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
