// //Sometimes you might want to configure your code without props but through opening and closing components,
// //the position of building an app with smaller building blocks is called composition.

import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      <div className="expenses_filter">
        <label>Filter by Year</label>
        <select name="expenses_date" id="expenses_date">
          <option value="none" selected disabled hidden>
            Select year
          </option>
          {props.items.map((item) => (
            <option key={item.id} value={"${item.date.getFullYear()}"}>
              {item.date.getFullYear()}
            </option>
          ))}
        </select>
      </div>
      <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      />
      {/* useState registers some state so some values for the component which it is being called. it registers for a specific component instance 
      Separate states even if we create a component more than onec.
      */}
    </Card>
  );
};
export default Expenses;
