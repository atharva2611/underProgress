import React, { useEffect, useState } from "react";
import "../styles/App.css";
import { useNavigate } from "react-router-dom";

export default function SearchBus({
  from,
  to,
  filter,
  setData,
  setData2,
  setFilter,
}) {
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault();
    fetchDate(from, to,);
    navigate("BusDetails");
  };
  const fetchDate = async (from, to) => {
    const url1 = `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${from}&destination=${to}`;
    const url2 =
      "https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses";
    await fetch(url1)
      .then((response) => response.json())
      .then((data) => setData(data));

    await fetch(url2)
      .then((response) => response.json())
      .then((data) => {
        setData2(data);
        filter = data.filter(
          (data) => data.source === from && data.destination === to 
        );
        setFilter(filter);
      });
  };
  return (
    <div className="search-bus">
      <button id="search-buses" onClick={handleClick}>
        Search Buses
      </button>
    </div>
  );
}
