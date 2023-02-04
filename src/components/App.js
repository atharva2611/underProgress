import React, { useState } from "react";
import "../styles/App.css";
import Swap from "./Swap";
import Source from "./Source";
import Destination from "./Destination";
import { Date } from "./Date";
import SearchBus from "./SearchBus";
import Nav from "./Nav";
import { Image } from "./Image";
import { BusDetails } from "./BusDetails";
import { BusCard } from "./BusCard";
import { Routes, Route } from "react-router-dom";

const App = () => {
  const [message, setMessage] = useState("");
  const [toMessage, setToMessage] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState({});

  return (
    <div id="main">
      <Nav />
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
        />
      </div>
      <Routes>
        <Route path="/" element={<Image />} />
        <Route
          path="BusDetails"
          element={
            <BusDetails
              filter={filter}
              setShow={setShow}
              data={data}
              data2={data2}
            />
          }
        />
        <Route path="BusDetails/BusCard" element={<BusCard show={show} />} />
      </Routes>
    </div>
  );
};

export default App;
