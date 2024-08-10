import React, { useReducer } from "react";
import BookingPage from './BookingPage.js';
import { useNavigate } from "react-router-dom";

function initializeTimes() {
    return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']
}
function Main() {
    const submitAPI = function(formData) {
        return true;
    }
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    const navigate = useNavigate();
    function submitForm( formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed")
        }
        }
    return (
    <div>
    <BookingPage
        availableTimes={availableTimes}
        dispatch={dispatch}
    />
    </div>
)
    function updateTimes(state, action) {
        switch(action.type) {
            case 'UPDATE_TIMES':
                return state;
            default:
                return state;
        }
}
}
export default Main
