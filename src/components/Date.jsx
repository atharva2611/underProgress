import React from "react";
import "../styles/App.css";

export const Date = (props) => {
  const handleSelect = (e) => {
    props.setSelect(e.target.value);
  };
  return (
    <div id="traveling-date">
      <br />
      <input
        type="date"
        id="date"
        onChange={handleSelect}
        value={props.select}
      />
    </div>
  );
};


