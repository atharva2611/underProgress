import React, {useEffect, useState} from "react";
import { useLocation, useNavigate } from "react-router-dom";
// import { BusCard } from "./BusCard";
import "../styles/App.css";

export const ShowStatus = ({route}) =>{

    const location = useLocation();
    const {state} = location;
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();
    const [showSeats, setShowSeats] = useState([]);

    // const reserved = JSON.parse(localStorage.getItem("bookedSeats")) || [];
    // setShowSeats(reserved);

    useEffect(() => {
        const reserved = JSON.parse(localStorage.getItem("bookedSeats")) || [];
        if (reserved) {
          setShowSeats(reserved);
        }
      }, []);

    // console.log("this is props.", show);
    // const [selectedItems, setSelectedItems] = useState([]);

    // const count =  selectedItems;
    // setSelectedItems(count);

    const handleButtonClick = () => {
        setShowPopup(true);
    };

    // const handleClick = (e) => {
    //     if (!selectedItems.includes(e.target.id)) {
    //       selectedItems.push(e.target.id);
    //     //   document.getElementById(e.target.id).style.backgroundColor = "grey";
    //       //console.log(e.target.id);
    //     } else {
    //       selectedItems.pop(e.target.id);
    //     //   document.getElementById(e.target.id).style.backgroundColor = "white"
    //         // "rgb(219, 219, 219)";
    //       //console.log(e.target.id);
    //     }
    //     // console.log(selectedItems);
    //     // console.log(selectedItems.length);
    //     // console.log(show.ticketPrice);
    //   };

    
    const handleClosePopup = () => {
        localStorage.removeItem("bookedSeats");
        navigate("/");
    };

    // export default function Source(props) {
    //   const handleChange = (e) => {
    //     props.setMessage(e.target.value);
    //   };


    return (
        <div id="cnfBooking">

            <p>Bus Name: {state.show?.busName}</p>
            <p>Number of Seats Booked: {state.selectedItems?.length}</p>
            <p>The seats books are: {showSeats.map((seat) => (
    <span className="seatNumber"> {seat} </span>
  ))}</p>
            <p>Price: Rs. {
            state.selectedItems?.length *
             state.show?.ticketPrice} </p>
            <div id="payment"><button >Proceed to Payment</button></div>
            <button onClick={handleClosePopup}>Close</button>
        </div>
    );
}

