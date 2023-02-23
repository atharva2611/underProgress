import React from "react";

export default function ResetBus({setMessage, setToMessage, setSelect}) {

    const handleClick = () => {
        setMessage("")
        setToMessage("")
        setSelect("")
    }  

    return (
        <div className="ResetBus">
          <button id="Reset-Buses" onClick={handleClick}>
            Reset
          </button>
        </div>
      );
}