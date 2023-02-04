import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

<div className="expenses_filter">
  <label>Filter by Year</label>
  <select name="expenses_date" id="expenses_date">
    <option value="none" selected disabled hidden>
      Select year
    </option>
    {props.items.map((item) => (
      <option key={item.id} value={`${item.date.getFullYear()}`}>
        {item.date.getFullYear()}
      </option>
    ))}
  </select>
</div>;
export default filter;
