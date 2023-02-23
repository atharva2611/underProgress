import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const BusCard = ({ show }) => {

  const [count, setCount] = useState(0);
  const [selectedItems, setSelectedItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    if (items) {
      setSelectedItems(items);
    }
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    if (items) {
      setSelectedItems(items);
    }
  }, [count]);


  const handleButtonClick = () => {

    setShowPopup(true);
    navigate("ShowStatus", {
      state: {
        selectedItems,
        show: show,
      }
    });
  };

  const handleClick = (e) => {
    if (!selectedItems.includes(e.target.id)) {
      const storeSeatNo = [...selectedItems, e.target.id];
      setSelectedItems(storeSeatNo);
      localStorage.setItem("bookedSeats", JSON.stringify(storeSeatNo));
      setCount(1);
      const reserved = JSON.parse(localStorage.getItem("bookedSeats")) || [];
      console.log("selected", reserved);
      document.getElementById(e.target.id).style.backgroundColor = "grey";
    } else {
      const temp = selectedItems.filter(selectedItems => selectedItems != e.target.id);
      setSelectedItems(temp);
      localStorage.setItem("bookedSeats", JSON.stringify(temp));
      setCount(2);
      const reserved = JSON.parse(localStorage.getItem("bookedSeats")) || [];
      console.log("de-selected", reserved);
      document.getElementById(e.target.id).style.backgroundColor = "rgb(219, 219, 219)"
    }
  };



  return (
    <>
      {show && show.busName ? (
        <div id="bus-cards">
          <div id="bus-card-list">
            <div id="bus-card-layer">
              <div id="bus-list-schedule">
                <h3>{show.busName}</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Arrival Time <br /> {show.arrivalTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Departure Time <br /> {show.departureTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>Bus rating 9/10</h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Price <br /> {show.ticketPrice}
                </h3>
              </div>
            </div>
            <div id="image">
              <img
                src="https://cdn.dribbble.com/users/2272786/screenshots/10965290/stay_home_splash_screen.gif"
                alt=""
              />
            </div>
            <div id="bus-seat-select">
              <h4>Lower Deck</h4>
              <div id="top">
                <div id="mainTop">
                  <div id="1" onClick={handleClick} className="top1">1</div>
                  <div id="2" onClick={handleClick} className="top2">2</div>
                </div>
                <div id="mainTop">
                  <div id="3" onClick={handleClick} className="top1">3</div>
                  <div id="4" onClick={handleClick} className="top2">4</div>
                </div>
                <div id="mainTop">
                  <div id="5" onClick={handleClick} className="top1">5</div>
                  <div id="6" onClick={handleClick} className="top2">6</div>
                </div>
                <div id="mainTop">
                  <div id="7" onClick={handleClick} className="top1">7</div>
                  <div id="8" onClick={handleClick} className="top2">8</div>
                </div>
                <div id="mainTop">
                  <div id="9" onClick={handleClick} className="top1">9</div>
                  <div id="10" onClick={handleClick} className="top2">10</div>
                </div>
              </div>
              <div id="bottom">
                <div id="mainBottom">
                  <div
                    id="11"
                    onClick={handleClick}
                    className="bottom1"
                  >11</div>
                </div>
                <div id="mainBottom">
                  <div
                    id="12"
                    onClick={handleClick}
                    className="bottom1"
                  >12</div>
                </div>
                <div id="mainBottom">
                  <div
                    id="13"
                    onClick={handleClick}
                    className="bottom1"
                  >13</div>
                </div>
                <div id="mainBottom">
                  <div
                    id="14"
                    onClick={handleClick}
                    className="bottom1"
                  >14</div>
                </div>
                <div id="mainBottom">
                  <div
                    id="15"
                    onClick={handleClick}
                    className="bottom1"
                  >15</div>
                </div>
              </div>
            </div>
            <div id="bus-seat-select">
              <h4>Upper Deck</h4>
              <div id="top">
                <div id="mainTop">
                  <div id="16" onClick={handleClick} className="top1">16</div>
                  <div id="17" onClick={handleClick} className="top2">17</div>
                </div>
                <div id="mainTop">
                  <div id="18" onClick={handleClick} className="top1">18</div>
                  <div id="19" onClick={handleClick} className="top2">19</div>
                </div>
                <div id="mainTop">
                  <div id="20" onClick={handleClick} className="top1">20</div>
                  <div id="21" onClick={handleClick} className="top2">21</div>
                </div>
                <div id="mainTop">
                  <div id="22" onClick={handleClick} className="top1">22</div>
                  <div id="23" onClick={handleClick} className="top2">23</div>
                </div>
                <div id="mainTop">
                  <div id="24" onClick={handleClick} className="top1">24</div>
                  <div id="25" onClick={handleClick} className="top2">25</div>
                </div>
              </div>
              <div id="bottom">
                <div id="mainBottom">
                  <div
                    id="26"
                    onClick={handleClick}
                    className="bottom1"
                  >26</div>
                </div>
                <div id="mainBottom">
                  <div
                    id="27"
                    onClick={handleClick}
                    className="bottom1"
                  >27</div>
                </div>
                <div id="mainBottom">
                  <div
                    id="28"
                    onClick={handleClick}
                    className="bottom1"
                  >28</div>
                </div>
                <div id="mainBottom">
                  <div
                    id="29"
                    onClick={handleClick}
                    className="bottom1"
                  >29</div>
                </div>
                <div id="mainBottom">
                  <div
                    id="30"
                    onClick={handleClick}
                    className="bottom1"
                  >30</div>
                </div>
              </div>
            </div>
            <div id="book-ticket">


              <button onClick={handleButtonClick}>Book Ticket </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
