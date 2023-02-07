import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShowStatus } from "./ShowStatus";


export const BusCard = ({ show }) => {
  // const [ticketPrice, setTicketPrice] = useState(
  //   localStorage.getItem("ticketPrice")
  // );

  let count = 0;
  const [selectedItems, setSelectedItems] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  // const count = selectedItems.length;

  const handleButtonClick = () => {
    
    setShowPopup(true);
    // navigate("ShowStatus");
    navigate("ShowStatus",{
      state:{
        selectedItems,
        show: show,
      }
    });
  };


  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  //let seatArr = [];
  const handleClick = (e) => {
    if (!selectedItems.includes(e.target.id)) {
      // selectedItems.push(e.target.id);
      setSelectedItems([...selectedItems, e.target.id]);
      document.getElementById(e.target.id).style.backgroundColor = "grey";
      //console.log(e.target.id);
    } else {
      const temp = selectedItems.filter(selectedItems >= selectedItems != e.target.id);
      setSelectedItems(temp);
      document.getElementById(e.target.id).style.backgroundColor = "rgb(219, 219, 219)"
        // "rgb(219, 219, 219)";
      //console.log(e.target.id);
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
                  Departure Time <br /> {show.departureTime}
                </h3>
              </div>
              <div id="bus-list-schedule">
                <h3>
                  Arrival Time <br /> {show.arrivalTime}
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
                  <div id="1" onClick={handleClick} className="top1"></div>
                  <div id="2" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="3" onClick={handleClick} className="top1"></div>
                  <div id="4" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="5" onClick={handleClick} className="top1"></div>
                  <div id="6" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="7" onClick={handleClick} className="top1"></div>
                  <div id="8" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="9" onClick={handleClick} className="top1"></div>
                  <div id="10" onClick={handleClick} className="top2"></div>
                </div>
                {/* <div id="mainTop">
                  <div id="top11" onClick={handleClick} className="top1"></div>
                  <div id="top12" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top13" onClick={handleClick} className="top1"></div>
                  <div id="top14" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top15" onClick={handleClick} className="top1"></div>
                  <div id="top16" onClick={handleClick} className="top2"></div>
                </div> */}
              </div>
              <div id="bottom">
                <div id="mainBottom">
                  <div
                    id="11"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="12"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="13"
                    onClick={handleClick}
                    className="bottom1"
                    ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="14"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="15"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                {/* <div id="mainBottom">
                  <div
                    id="bottom6"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom7"
                    onClick={handleClick}
                    className="bottom1"
                    ></div>
                </div>
                <div id="mainBottom">
                  <div
                  id="bottom8"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div> */}
              </div>
            </div>
            <div id="bus-seat-select">
                    <h4>Upper Deck</h4>
              <div id="top">
                <div id="mainTop">
                  <div id="16" onClick={handleClick} className="top1"></div>
                  <div id="17" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="18" onClick={handleClick} className="top1"></div>
                  <div id="19" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="20" onClick={handleClick} className="top1"></div>
                  <div id="21" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="22" onClick={handleClick} className="top1"></div>
                  <div id="23" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="24" onClick={handleClick} className="top1"></div>
                  <div id="25" onClick={handleClick} className="top2"></div>
                </div>
                {/* <div id="mainTop">
                  <div id="top11" onClick={handleClick} className="top1"></div>
                  <div id="top12" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top13" onClick={handleClick} className="top1"></div>
                  <div id="top14" onClick={handleClick} className="top2"></div>
                </div>
                <div id="mainTop">
                  <div id="top15" onClick={handleClick} className="top1"></div>
                  <div id="top16" onClick={handleClick} className="top2"></div>
                </div> */}
              </div>
              <div id="bottom">
                <div id="mainBottom">
                  <div
                    id="26"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="27"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="28"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="29"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="30"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                {/* <div id="mainBottom">
                  <div
                    id="bottom6"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom7"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div>
                <div id="mainBottom">
                  <div
                    id="bottom8"
                    onClick={handleClick}
                    className="bottom1"
                  ></div>
                </div> */}
              </div>
            </div>
            <div id="book-ticket">
             

              <button onClick={handleButtonClick}>Book Ticket </button>
              {/* {showPopup && (
                <div style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  background: "white",
                  padding: "20px",
                  boxShadow: "0 2px 10px #ccc",
                  borderRadius: "10px"}}>

                  <p>Number of Seats Booked: {selectedItems.length}</p>
                  
                  <p>Price : Rs. {selectedItems.length*show.ticketPrice} </p>
                  <div id="payment"><button >Proceed to Payment</button></div>
                  <button onClick={handleClosePopup}>Close</button>
                </div>
               )}  */}
          {/* <div>
            <ShowStatus
                count={selectedItems}
            />

          </div> */}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
