import React from "react";
import Bookingform from './Bookingform.js';

function BookingPage({ availableTimes, dispatch}) {
    return (
        <main>
        <h1>Booking Form</h1>
        <Bookingform
        availableTimes={availableTimes}
        dispatch={dispatch}
        />
        </main>
    )
}
export default BookingPage