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
import { ShowStatus } from "./ShowStatus";
import { Routes, Route } from "react-router-dom";
import ResetBus from "./ResetBus";
import { Login} from "./Login";
import { Signin } from "./Signin";


const App = () => {
  const [message, setMessage] = useState("");
  const [toMessage, setToMessage] = useState("");
  const [select, setSelect] = useState("");
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [filter, setFilter] = useState([]);
  const [show, setShow] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentForm, setCurrentForm] = useState('login');
  const [tempConst, setTempConst] = useState([]);

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }

  let subMenu = document.getElementById("subMenu");
  
  const toggleMenu = function(){
    subMenu.classList.toggle("open-menu");
    console.log("Working");
  }

  function compareName(a, b) {
    if (a.busName < b.busName) {
      return -1;
    }
    if (a.busName > b.busName) {
      return 1;
    }
    if(a.busName === b.busName)
      alert("Bus name is same... Cannot be sorted further.");
    return 0;
  }

  function compareArrivalTime(a, b) {
    if (a.arrivalTime < b.arrivalTime) {
      return -1;
    }
    if (a.arrivalTime > b.arrivalTime) {
      return 1;
    }
    if(a.arrivalTime === b.arrivalTime)
      alert("Same Arrival Time... Cannot be sorted further.");
    return 0;
  }
  function compareDepartureTime(a, b) {
    if (a.departureTime < b.departureTime) {
      return -1;
    }
    if (a.departureTime > b.departureTime) {
      return 1;
    }
    if(a.departureTime === b.departureTime)
      alert("Same Departure time... Cannot be sorted further.");
    return 0;
  }
  function compareTicketPrice(a, b) {
    if (a.ticketPrice < b.ticketPrice) {
      return -1;
    }
    if (a.ticketPrice > b.ticketPrice) {
      return 1;
    }
    if(a.ticketPrice === b.ticketPrice)
      alert("Ticket Price is same... Cannot be sorted further.");
    return 0;
  }
    
  const sortByName = () => {
    // 1. iterate over filter statevar tempArr = [...data];
    // 2. Sort based on name
    // 3. Store the result in some constant
    // 4. transfer result into filter state 

      var tempName = [...data];
      tempName.sort(compareName);
      console.log(tempName)
      setFilter(tempName);

    console.log("The button is clicked")
    }
    
    const sortByArrival = () => {
      var tempArrival = [...data];
      tempArrival.sort(compareArrivalTime);
      console.log(tempArrival)
      setFilter(tempArrival);
    }

    const sortByDeparture = () => {
      var tempDeparture = [...data];
      tempDeparture.sort(compareDepartureTime);
      console.log(tempDeparture)
      setFilter(tempDeparture);
    }

    const sortByPrice = () => {
      var tempPrice = [...data];
      tempPrice.sort(compareTicketPrice);
      console.log(tempPrice)
      setFilter(tempPrice);

    // console.log("The button is clicked")
    }

  return (
    <div id="main">
      <Nav />
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
          sortByName = {sortByName}
        />
        <ResetBus
          setMessage={setMessage}
          setToMessage={setToMessage}
          setSelect={setSelect}
        />
        {/* <ShowStatus
          count={selectedItems}
          // selectedItems={setSelectedItems}
        /> */}
      </div>
      {/* <div className="user-account">
        {
          currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signin onFormSwitch={toggleForm} />
        }
      </div> */}

      
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
           element={<Login/>}
        />
        <Route path="BusDetails/BusCard" element={<BusCard show={show} />} />
        <Route path="BusDetails/BusCard/ShowStatus" element={<ShowStatus/>} />
      </Routes>
    </div>
      </div>
  );
};

export default App;
