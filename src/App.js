import React from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//Arrow function is an alternative to writing functions, not just in react but also in any js syntax or code.
//function is replaced with "const"
const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log("In App.js");
    console.log(expenses);
  };

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Lets get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );

  //create element takes 3 arguement. the first arguement takes the element which you've created eg: the div and if it is a built in element, you will have to pass a string with the name of the arguement like a string.
  //2. the second arguement is the object that configures the first arguement, specifically a object that sets all the attributes of the first element.
  //3.content btw the opening and closing tag
  //side note: what is the difference between a function, element, object,arguement, attribute, and parameter? how can each of them be identified.
  //   return (
  //     <div>
  //       <h2>Let's get started!</h2>
  //       <Expenses items={expenses} />
  //     </div>
  //   );
};
//jsx is a c
export default App;
