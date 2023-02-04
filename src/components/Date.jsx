import React from "react";
import "../styles/App.css";

export const Date = (props) => {
  const handleSelect = (e) => {
    props.setSelect(e.target.value);
    // console.log(e.target.value);
  };
  return (
    <div id="traveling-date">
      <label htmlFor="date">Date</label>
      <br />
      <input
        type="date"
        id="date"
        // onSelect={handleSelect}
        onClick={handleSelect}
        // value={props.select}
      />
    </div>
  );
};
