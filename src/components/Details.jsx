import React from "react";
import "../styles/App.css";
import busFace from "../image-folder/symbole-de-bus-rouge.png"

export default function Details() {
  return (
    <div id="details">
      <div id="heading">
        <h1>Book Your Buses With RedBus</h1>
      </div>
      <div id="png">
        <img src={busFace} alt="" />
      </div>
    </div>
  );
}
