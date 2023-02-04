import React, { useState } from "react";
import "../styles/App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLeft } from "@fortawesome/free-solid-svg-icons";

export default function Swap({ source, destination, setSource, setToSource }) {
  const handleSwap = () => {
    const temp = source;
    setSource(destination);
    // source = destination;
    setToSource(temp);
    // destination = temp;
    console.log(source, destination);
  };

  return (
    <div id="switching">
      <button id="swap-btn" onClick={handleSwap}>
        <FontAwesomeIcon icon={faRightLeft} id="icons" />
      </button>
    </div>
  );
}
