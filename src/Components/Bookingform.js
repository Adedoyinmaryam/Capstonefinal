import React, { useState, useEffect } from "react";
import { initializeTimes } from './Main.js';
import { useNavigate } from "react-router-dom";

function BookingForm() {
  const [formData, setFormData] = useState({
    date: '',
    guests: '',
    time: '',
    occasion: ''
  });

  const [error, setError] = React.useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.guests || formData.guests < 1 || formData.guests > 10) newErrors.guests = 'Number of guests is invalid';
    if (!formData.time) newErrors.time = 'Time is required';
    if (!formData.occasion) newErrors.occasion = 'Occasion is required';
    setError(newErrors);
    // Form is valid if there are no errors
    setIsFormValid(Object.keys(newErrors).length === 0);
  };

  useEffect(() => {
    validateForm();
  }, [formData]); // Add formData as a dependency

  const handleChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  }

  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    const times = initializeTimes(new Date()); // Pass a date to the initializeTimes function
    setAvailableTimes(times);
  }, []);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData); // You can handle form submission here
    navigate('/confirmedbooking');
  }

  if (isFormValid) {
    console.log('Form Submitted', formData);
  } else {
    console.log('Form is invalid');
  }

  return (
    <div className="booking-form-container">
      <h1 className="booking-form-title">Booking form</h1>
      <form onSubmit={handleSubmit} className="booking-form">
        <div className="form-group">
          <label htmlFor="res-date" className="form-label">Date:</label>
          <input
            required
            type="date"
            id="res-date"
            aria-label="On Click"
            placeholder="Date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="res-time" className="form-label">Choose Time:</label>
          <select
            required
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            aria-label="On Click"
            className="form-select"
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="guests" className="form-label">Number of Guests</label>
          <input
            type="number"
            placeholder="number of guests"
            min="1"
            max="10"
            id="guests"
            name="guests"
            value={formData.guests}
            onChange={handleChange}
            required
            aria-label="On Click"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Occasion:</label>
          <select
            required
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            aria-label="On Click"
            className="form-select"
          >
            <option value="select">Select one</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        {error.occasion && <div className="error-message">{error.occasion}</div>}
        <input className="submit-button" type="submit" value="Reserve a table" aria-label="submit button"/>
      </form>
    </div>
  )
}
export default BookingForm;