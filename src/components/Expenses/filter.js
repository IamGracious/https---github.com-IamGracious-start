import React, { useEffect, useState } from "react";

const Filter = ({ items, setSelectedYear }) => {
  const [uniqueYear, setUniqueYear] = useState([]);
  useEffect(() => {
    setUniqueYear([...new Set(items.map((item) => item.date.getFullYear()))]);
  }, [uniqueYear.length]);
  const handleChange = (e) => {
    setSelectedYear(e.target.value);
  };
  return (
    <div className="expenses_filter">
      <label>Filter by Year</label>
      <select name="expenses_date" id="expenses_date" onChange={handleChange}>
        <option defaultValue={"selecte year"}>Select year</option>
        {uniqueYear.length > 0 &&
          uniqueYear.map((year) => (
            <option key={year} value={`${year}`}>
              {year}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Filter;
