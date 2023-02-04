// //Sometimes you might want to configure your code without props but through opening and closing components,
// //the position of building an app with smaller building blocks is called composition.

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import Filter from "./Filter";

const Expenses = (props) => {
  const [yearSelected, setYearSelected] = useState();
  const filterByYear = props.items.filter(
    (item) => item.date.getFullYear() == yearSelected
  );
  return (
    <Card className="expenses">
      <Filter items={props.items} setSelectedYear={setYearSelected} />
      {filterByYear.length > 0
        ? filterByYear.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))
        : props.items.map((item) => (
            <ExpenseItem
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      {/* useState registers some state so some values for the component which it is being called. it registers for a specific component instance 
      Separate states even if we create a component more than onec.
      */}
    </Card>
  );
};
export default Expenses;
