import React from "react";
import { useNavigate } from "react-router-dom";

export const BusDetails = ({ filter, data, data2, setShow }) => {
  // localStorage.setItem(
  //   "ticketPrice",
  //   filter.map((ticket) => ticket.ticketPrice)
  // );
  // console.log(filter.map((ticket) => ticket.ticketPrice));
  const navigate = useNavigate();
  return (
    <div id="bus-details">
      <div id="sortby">
        <div id="sort-text">
          <h1>SORT BY: </h1>
        </div>
        <div id="details-of-sorting">
          <div id="schedule">
            <h3>Name</h3>
          </div>
          <div id="schedule">
            <h3>Departure</h3>
          </div>
          <div id="schedule">
            <h3>Arrival</h3>
          </div>
          <div id="schedule">
            <h3>Price</h3>
          </div>
        </div>
      </div>

      <div id="bus-layer">
        {filter &&
          filter.map((user, index) => (
            <div
              id="bus-list"
              onClick={() => {
                setShow(user);
                navigate("BusCard");
              }}
              key={index}
            >
              <div id="bus-list-schedule">
                <h3>{user.busName}</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Departure Time <br /> {user.departureTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Arrival Time <br /> {user.arrivalTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>Bus rating 9/10</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>Price {user.ticketPrice}</h3>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
