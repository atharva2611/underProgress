import React, { useState } from "react";
import "../styles/App.css";

export default function Source(props) {
  const handleChange = (e) => {
    props.setMessage(e.target.value);
  };
  return (
    <div id="from">
      <br />
      <input
        type="text"
        id="source"
        onChange={handleChange}
        value={props.message}
        placeholder="From"
      />
    </div>
  );
}
