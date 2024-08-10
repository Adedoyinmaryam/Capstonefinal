import React, { useState, useEffect} from "react";
import { iniitializeTimes, updateTimes } from './Main.js'
function Bookingform({ availableTimes, dispatch }) {
    const handleChange = (e) => {
        dispatch({ type: 'UPDATE_TIMES', payload: e.target.value });
    }
    const [availableTimes, setAvailableTimes] = useState([]);

        useEffect(() => {
            const times = iniitializeTimes();
            setAvailableTimes(times);
        }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        props.submitForm(e);
    };

    return (
        <>
        <h1>Booking form</h1>
        <form onSubmit={handleSubmit}>
            <label for="res-date">Date:</label>
            <input
            type="date"
            id="res-date"
            aria-label="On Click"
            placeholder="Date"
            onChange={handleChange}/>
            <label for="res-time">Choose Time:</label>
            <select
            id="res-time"
            onChange={handleChange}>
            {availableTimes.map((time) => (
                        <option key={time} value={time}>
                            {time}
                        </option>
            ))}
            </select>
            <label for="guests">Number of Guests</label>
            <input type="number"
            placeholder="number of guests"
            min="1"
            max="10"
            id="guests"
            onChange={handleChange}
            />
            <label>Occasion:</label>
            <select
            id="occasion"
            onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make your reservation"/>
        </form></>
    )
}

export default Bookingform;