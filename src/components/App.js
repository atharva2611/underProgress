import "../styles/App.css";
import React, { useState } from "react";
import Swap from "./Swap";
import Source from "./Source";
import Destination from "./Destination";
import SearchBus from "./SearchBus";
import Nav from "./Nav";
import ResetBus from "./ResetBus";
import { Date } from "./Date";
import { Image } from "./Image";
import { BusDetails } from "./BusDetails";
import { BusCard } from "./BusCard";
import { ShowStatus } from "./ShowStatus";
import { Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { SignUp } from "./SignUp";


const App = () => {
  const [message, setMessage] = useState("");
  const [toMessage, setToMessage] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState({});
  const [layOver, setLayOver] = useState(1); // id: overlay

  function compareName(a, b) {
    if (a.busName < b.busName) {
      return -1;
    }
    if (a.busName > b.busName) {
      return 1;
    }
    return 0;
  }

  function compareArrivalTime(a, b) {
    if (a.arrivalTime < b.arrivalTime) {
      return -1;
    }
    if (a.arrivalTime > b.arrivalTime) {
      return 1;
    }
    return 0;
  }
  function compareDepartureTime(a, b) {
    if (a.departureTime < b.departureTime) {
      return -1;
    }
    if (a.departureTime > b.departureTime) {
      return 1;
    }
    return 0;
  }
  function compareTicketPrice(a, b) {
    if (a.ticketPrice < b.ticketPrice) {
      return -1;
    }
    if (a.ticketPrice > b.ticketPrice) {
      return 1;
    }
    return 0;
  }

  const sortByName = () => {
    const tempName = [...data];
    tempName.sort(compareName);
    setFilter(tempName);
  }

  const sortByArrival = () => {
    const tempArrival = [...data];
    tempArrival.sort(compareArrivalTime);
    setFilter(tempArrival);
  }

  const sortByDeparture = () => {
    const tempDeparture = [...data];
    tempDeparture.sort(compareDepartureTime);
    setFilter(tempDeparture);
  }

  const sortByPrice = () => {
    const tempPrice = [...data];
    tempPrice.sort(compareTicketPrice);
    setFilter(tempPrice);
  }

  return (
    <div id="main">
      <Nav
        layOver={layOver}
        setLayOver={setLayOver}
      />
      <div id="forBG">

        <div id="main-duplicate">
          <Source message={message} setMessage={setMessage} />
          <Swap
            source={message}
            destination={toMessage}
            setSource={setMessage}
            setToSource={setToMessage}
          />
          <Destination toMessage={toMessage} setToMessage={setToMessage} />
          <Date select={select} setSelect={setSelect} />
          <SearchBus
            from={message}
            to={toMessage}
            date={select}
            data={data}
            data2={data2}
            filter={filter}
            setData={setData}
            setData2={setData2}
            setFilter={setFilter}
            sortByName={sortByName}
          />
          <ResetBus
            setMessage={setMessage}
            setToMessage={setToMessage}
            setSelect={setSelect}
          />
        </div>
        <Routes>
          <Route path="/" element={<Image />} />
          <Route
            path="BusDetails"
            element={
              <BusDetails
                sortByName={sortByName}
                sortByDeparture={sortByDeparture}
                sortByArrival={sortByArrival}
                sortByPrice={sortByPrice}
                filter={filter}
                setShow={setShow}
                data={data}
                data2={data2}
              />
            }
          />
          <Route
            path="Login"
            element={
              <Login
                layOver={layOver}
                setLayOver={setLayOver}
              />}
          />
          <Route
            path="SignUp"
            element={
              <SignUp
                layOver={layOver}
                setLayOver={setLayOver}
              />}
          />
          <Route path="BusDetails/BusCard" element={<BusCard show={show} />} />
          <Route path="BusDetails/BusCard/ShowStatus" element={<ShowStatus />} />
        </Routes>
      </div>
      <div id="overlay"></div>
    </div>
  );
};

export default App;
