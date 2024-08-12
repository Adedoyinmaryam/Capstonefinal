import React from "react";
import BookingForm from './Bookingform.js';

function BookingPage(props) {
    return (
        <div className="booking-page">
            <div className="booking-form">
                <BookingForm availableTimes={props.availableTimes} dispatch={props.dispatch} submitForm={props.submitForm}/>
            </div>
        </div>
    )
}
export default BookingPage;