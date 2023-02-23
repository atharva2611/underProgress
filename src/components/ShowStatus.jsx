import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/App.css";

export const ShowStatus = () => {

    const location = useLocation();
    const { state } = location;
    const navigate = useNavigate();
    const [showSeats, setShowSeats] = useState([]);

    useEffect(() => {
        const reserved = JSON.parse(localStorage.getItem("bookedSeats")) || [];
        if (reserved) {
            setShowSeats(reserved);
        }
    }, []);

    const handleClosePopup = () => {
        localStorage.removeItem("bookedSeats");
        navigate("/");
    };

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

