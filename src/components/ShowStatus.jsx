import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
// import { BusCard } from "./BusCard";
import "../styles/App.css";

export const ShowStatus = ({show}) =>{

    console.log("this is props.", show);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const navigate = useNavigate();

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
        // setShowPopup(false);
        navigate("/");
    };

    // export default function Source(props) {
    //   const handleChange = (e) => {
    //     props.setMessage(e.target.value);
    //   };


    return (
        <div id="cnfBooking">

            <p>Number of Seats Booked: {selectedItems.length}</p>

            <p>Price : Rs. {
            selectedItems.length *
             show.ticketPrice} </p>
            <div id="payment"><button >Proceed to Payment</button></div>
            <button onClick={handleClosePopup}>Close</button>
        </div>
    );
}
